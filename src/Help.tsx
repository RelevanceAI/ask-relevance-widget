import ky from "ky";
import { FiFileText } from "solid-icons/fi";
import { createMemo, createSignal, onMount, Show } from "solid-js";
import RelevanceGlyph from "./relevance.svg?component-solid";

interface Configuration {
  /** URL to query for answers */
  url: string;
  /** Field in dataset to search on */
  field: string;
  /** Vector field in dataset to search on */
  vector_field: string;
  /** Field in dataset containing reference URLs */
  reference_url_field: string;
  /** Field in dataset containing reference titles */
  reference_title_field: string;
  /** Authentication header for API requests */
  auth_header: string;
  /** GPT model to use */
  model?: string;
  /** Whether to show documents first while waiting for AI answer to load */
  showDocuments?: string;
  /** The number of documents to show */
  documentsPageSize?: number;
  /** Hides trigger. Allows users to control modal progrwamatically (etc. custom trigger) */
  headless?: boolean;
  /** Searches the selected field only instead of all fields with keyword mode. */
  /**
   * For docs, searches the selected field only instead of all fields.
   * Known as '(Docs) Keyword mode' in the dashboard.
   */
  keywordMode?: boolean;
  /** Whether to store queries being sent */
  storeQueries?: boolean;
}

interface Reference {
  title: string;
  url?: string;
}

interface HelpProps {
  config: Configuration;
  demo?: boolean;
  ref: any;
}

function Help(props: HelpProps) {
  let input: undefined | HTMLInputElement = undefined;
  const isDemoMode = props?.demo;

  onMount(() => {
    input?.focus();

    if (isDemoMode) {
      const previewContainer = document.getElementById("widget-preview");
      const widget = document.getElementById("ask-relevance__root");

      // Append widget to preview container
      previewContainer?.appendChild(widget);
    }
  });

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" && question()) {
      submitQuestion();
    }
  };

  const [question, setQuestion] = createSignal("");
  const [answerState, setAnswerState] = createSignal<
    "none" | "loading" | "success" | "error"
  >("none");

  const [resultsState, setResultsState] = createSignal<
    "none" | "loading" | "success" | "error"
  >("none");
  const [answerObj, setAnswerObj] = createSignal<null | Record<string, any>>(
    null
  );

  const answer = createMemo(() => {
    if (!answerObj()) return null;

    const {
      instantAnswerResults: { answer },
    } = answerObj() as Record<string, any>;

    return answer;
  });

  const references = createMemo(() => {
    if (!answerObj()) return null;

    const {
      instantAnswerResults: { references },
    } = answerObj() as Record<string, any>;

    return references as Reference[];
  });

  const referencesExist = createMemo(() => {
    return (
      Array.isArray(references()) &&
      references()!.length > 0 &&
      // Only show references if they contain a URL.
      references()!.every((ref) => ref.title && ref.url)
    );
  });

  const [resultsObj, setResultsObj] = createSignal<null | Record<string, any>>(
    null
  );

  const results = createMemo(() => {
    if (!resultsObj()) return null;

    const { results } = resultsObj() as Record<string, any>;

    return results;
  });

  const showDocuments = props.config?.showDocuments ?? false;

  const submitQuestion = async () => {
    setAnswerObj(null);
    setResultsObj(null);
    setResultsState("loading");

    try {
      // We treat a query as a potential keyword search if:
      // - keyword mode is enabled
      // - query is under 3 words
      // Example: 'redis macOS'
      const possibleKeywordSearch =
        props.config?.keywordMode && question()?.split(" ")?.length <= 3;

      const promises = [];

      // always unless if we're in showDocuments mode and use a keyword search
      if (
        question()[question()?.length - 1] === "?" ||
        !showDocuments ||
        !possibleKeywordSearch
      ) {
        setAnswerState("loading");

        const fetchAIAnswer: Record<string, any> = ky
          .post(props.config.url, {
            headers: {
              Authorization: `${props.config.auth_header}`,
            },
            json: {
              vectorSearchQuery: [
                {
                  field: props.config.vector_field,
                  model: props.config?.model ?? "all-mpnet-base-v2",
                  query: question(),
                },
              ],
              minimumRelevance: 0.1,
              pageSize: props.config.documentsPageSize || 3,
              instantAnswerQuery: {
                field: props.config.field,
                query: question(),
                preset: "support3",
                urlField: props.config.reference_url_field,
                titleField: props.config.reference_title_field,
                storeQueries: props.config.storeQueries || false,
              },
            },
            timeout: false,
          })
          .json();

        promises.push(
          fetchAIAnswer.then((res) => {
            setAnswerObj(res);
            setAnswerState("success");
          })
        );
      } else {
        setAnswerState("none");
      }

      if (showDocuments) {
        const payload = possibleKeywordSearch
          ? {
              query: question(),
              fieldsToSearch: [
                props.config.field,
                props.config.reference_title_field,
              ],
              includeFields: [
                props.config.reference_url_field,
                props.config.reference_title_field,
              ],
            }
          : {
              vectorSearchQuery: [
                {
                  field: props.config.vector_field,
                  model: props.config?.model ?? "all-mpnet-base-v2",
                  query: question(),
                },
              ],
              minimumRelevance: 0.1,
              includeFields: [
                props.config.reference_url_field,
                props.config.reference_title_field,
              ],
            };

        const fetchResults: Record<string, any> = ky
          .post(props.config.url, {
            headers: {
              Authorization: `${props.config.auth_header}`,
            },
            json: {
              ...payload,
              pageSize: props.config.documentsPageSize || 5,
            },
            timeout: false,
          })
          .json();

        promises.push(
          fetchResults.then((res) => {
            // Remove duplicate results
            const uniqueResults = res.results.reduce((acc, current) => {
              const x = acc.find(
                (item) =>
                  item[props.config.reference_url_field] ===
                  current[props.config.reference_url_field]
              );
              if (!x) {
                return acc.concat([current]);
              } else {
                return acc;
              }
            }, []);

            setResultsObj(uniqueResults);
            setResultsState("success");
          })
        );
      }

      await Promise.all(promises);
    } catch (error) {
      console.log(error);
      setAnswerState("error");
    }
  };

  return (
    <div
      ref={props.ref}
      id="ask-relevance__root"
      role="dialog"
      aria-modal="true"
      class="ask_relevance__container ar-w-full ar-max-w-2xl ar-z-[999999999999] ar-bg-white ar-rounded-xl ar-shadow-lg ar-border ar-border-gray-300/30 ar-transition-all ar-overflow-hidden"
      classList={{
        "ar-fixed ar-top-24 ar-left-1/2": !props?.demo,
      }}
      style={{
        transform: !props?.demo ? "translateX(-50%)" : "",
      }}
    >
      <div
        class="ar-px-5 ar-py-5"
        classList={{
          "ar-border-b ar-border-gray-200/75": answerState() !== "none",
        }}
        id="ask-relevance__input"
      >
        <input
          ref={input}
          autocomplete="off"
          autocapitalize="off"
          spellcheck={false}
          placeholder="Ask a question..."
          class="ar-w-full ar-outline-none ar-caret-gray-500 ar-text-gray-900 ar-placeholder:text-gray-400 ar-bg-white ar-focus:outline-none"
          onInput={(e) => {
            setQuestion(e.currentTarget.value);
          }}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>

      <Show when={answerState() !== "none"}>
        <div
          class="ar-w-full ar-p-5 ar-border-l-4 ar-border-indigo-500"
          aria-busy={answerState() === "loading"}
        >
          <div class="ar-flex ar-items-center ar-gap-1.5">
            <div class="ar-bg-indigo-500 ar-rounded ar-flex ar-items-center ar-justify-center ar-w-fit ar-text-xs ar-px-1 ar-h-fit ar-font-bold ar-text-white">
              AI
            </div>
            <p class="ar-text-indigo-700 ar-font-medium ar-text-sm">Answer</p>
          </div>

          <Show when={answerState() === "loading"}>
            <div
              role="status"
              aria-label="Loading answers"
              class="ar-mt-5 ar-flex ar-flex-col ar-gap-3"
            >
              <div class="ar-h-4 ar-w-10/12 ar-rounded ar-bg-gradient-to-r ar-from-gray-200 ar-to-gray-100 ar-animate-pulse" />
              <div class="ar-h-4 ar-w-6/12 ar-rounded ar-bg-gradient-to-r ar-from-gray-200 ar-to-gray-100 ar-animate-pulse" />
            </div>
          </Show>

          <Show when={answer()}>
            <p class="ar-text-gray-800 ar-leading-[1.775] ar-pt-4">
              {answer()}
            </p>
          </Show>

          <Show when={referencesExist()}>
            <div role="group" class="ar-pt-3 ar-flex ar-flex-wrap ar-gap-2.5">
              {references()?.map((ref: any) => (
                <a role="option" href={ref.url} target="_blank">
                  <button class="ar-py-0.5 ar-px-2 ar-rounded-md ar-bg-indigo-100 hover:ar-bg-indigo-200 ar-group ar-text-indigo-800 ar-text-sm ar-flex ar-items-center ar-gap-1.5">
                    <FiFileText
                      size={12}
                      class="!ar-text-indigo-800 ar-opacity-80"
                    />
                    <span class="ar-group-hover:underline">{ref.title}</span>
                  </button>
                </a>
              ))}
            </div>
          </Show>
        </div>
      </Show>

      <Show when={answerState() === "error"}>
        <div class="ar-border-t ar-border-gray-200/75 ar-w-full ar-p-5">
          <p class="ar-text-gray-800 ar-leading-[1.775]">
            I'm sorry, I'm having trouble generating your answer. Please try
            asking your question again.
          </p>
        </div>
      </Show>

      <Show
        when={
          showDocuments &&
          resultsState() !== "none" &&
          resultsState() !== "error"
        }
      >
        <div
          class="ar-border-t ar-border-gray-200/75 ar-w-full ar-py-5 ar-flex ar-flex-col ar-gap-2"
          aria-busy={resultsState() === "loading"}
        >
          <p class="ar-text-gray-900 ar-font-medium ar-text-sm ar-px-6">Docs</p>

          <Show when={resultsState() === "loading"}>
            <div
              role="status"
              aria-label="Loading results"
              class="ar-mt-2.5 ar-px-6 ar-flex ar-flex-col ar-gap-4"
            >
              <div class="ar-h-4 ar-w-full ar-rounded ar-bg-gradient-to-r ar-from-gray-100 ar-to-gray-100/75 ar-animate-pulse" />
              <div class="ar-h-4 ar-w-full ar-rounded ar-bg-gradient-to-r ar-from-gray-100 ar-to-gray-100/75 ar-animate-pulse" />
            </div>
          </Show>

          <Show when={results()}>
            <div class="ar-flex ar-flex-col ar-px-2.5">
              {results().map((result) => (
                <a
                  id="ask-relevance__doc-result"
                  tabIndex={-1}
                  target="_blank"
                  href={result[props.config.reference_url_field]}
                  type="button"
                  class="ar-text-gray-900 ar-py-2 ar-px-3.5 ar-text-sm ar-rounded-md hover:ar-bg-gray-100 ar-flex ar-items-center ar-gap-2 ar-w-full"
                >
                  <FiFileText size={12} class="!ar-text-gray-500" />
                  {result[props.config.reference_title_field]}
                </a>
              ))}
            </div>
          </Show>
        </div>
      </Show>

      <div class="ar-border-t ar-border-gray-200/75 ar-w-full ar-px-5 ar-py-2 ar-flex ar-items-center ar-justify-between">
        <div class="ar-flex ar-items-center ar-gap-2">
          <RelevanceGlyph class="ar-h-3 ar-opacity-70" />
          <a
            href={`https://relevanceai.com/ask-relevance?utm_source=${window?.location?.hostname}`}
            class="ar-text-xs ar-text-gray-400 ar-leading-none ar-whitespace-nowrap"
          >
            Powered by Relevance AI
          </a>
        </div>

        <div class="ar-flex ar-items-center ar-gap-2">
          <div class="ar-px-0.5 ar-rounded ar-bg-gray-50 ar-w-fit ar-text-xs ar-border ar-border-gray-300/25 ar-text-gray-600">
            ⏎
          </div>
          <span class="ar-text-xs ar-text-gray-600">Submit question</span>
        </div>
      </div>
    </div>
  );
}

export default Help;
