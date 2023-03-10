import { Motion } from "@motionone/solid";
import { Repeat } from "@solid-primitives/range";
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

      if (props.ref) {
        // Append widget to preview container
        previewContainer?.appendChild(props.ref);
      }
    }
  });

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" && question()) {
      submitQuestion();
    }
  };

  const [question, setQuestion] = createSignal("");
  const [loadingAnswer, setLoadingAnswer] = createSignal(false);
  const [answerState, setAnswerState] = createSignal<
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

  const submitQuestion = async () => {
    setAnswerObj(null);
    setLoadingAnswer(true);
    setAnswerState("loading");

    try {
      const res: Record<string, any> = await ky
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
            pageSize: 3,
            instantAnswerQuery: {
              field: props.config.field,
              query: question(),
              preset: "support3",
              urlField: props.config.reference_url_field,
              titleField: props.config.reference_title_field,
            },
          },
        })
        .json();

      if (res.instantAnswerResults?.status === "failed") {
        throw new Error();
      }

      setAnswerObj(res);
      setAnswerState("success");
      setLoadingAnswer(false);
    } catch (error) {
      setAnswerState("error");
    }
  };

  return (
    <div
      ref={props.ref}
      id="ask-relevance__root"
      role="dialog"
      aria-modal="true"
      class="ar-w-full ar-max-w-2xl ar-z-[999999999999] ar-bg-white ar-rounded-xl ar-shadow-lg ar-border ar-border-gray-300/30 ar-transition-all"
      classList={{
        "ar-fixed ar-top-24 ar-left-1/2 ar-transform ar--translate-x-1/2":
          !props?.demo,
      }}
    >
      <div class="ar-px-5 ar-py-5" id="ask-relevance__input">
        <input
          ref={input}
          autocomplete="off"
          autocapitalize="off"
          spellcheck={false}
          placeholder="Ask a question..."
          class="ar-w-full ar-outline-none ar-caret-gray-500 ar-text-gray-900 ar-placeholder:text-gray-400"
          onInput={(e) => {
            setQuestion(e.currentTarget.value);
          }}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>

      <Show when={answerState() === "loading"}>
        <div class="ar-border-t ar-border-gray-200/75 ar-w-full ar-p-5">
          <div class="ar-flex ar-items-center ar-gap-1">
            <Repeat times={3}>
              {(i) => (
                <Motion.div
                  class="ar-flex ar-items-center ar-gap-1"
                  animate={{ opacity: [0.8, 1, 0.8], scale: [0.8, 1, 0.8] }}
                  transition={{
                    offset: [0, 0.2, 1],
                    duration: 0.2 * 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <div class="ar-w-2 ar-h-2 ar-rounded-full ar-bg-gray-400" />
                </Motion.div>
              )}
            </Repeat>
          </div>
        </div>
      </Show>

      <Show when={answer()}>
        <div class="ar-border-t ar-border-gray-200/75 ar-w-full ar-p-5">
          <p class="ar-text-gray-800 ar-leading-[1.775]">{answer()}</p>

          <Show when={referencesExist()}>
            <div role="group" class="ar-pt-3 ar-flex ar-flex-wrap ar-gap-2.5">
              {references()?.map((ref: any) => (
                <a role="option" href={ref.url} target="_blank">
                  <button class="ar-py-0.5 ar-px-2 ar-rounded-md ar-bg-indigo-100 ar-group ar-text-indigo-800 ar-text-sm ar-flex ar-items-center ar-gap-1.5">
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

      <div class="ar-border-t ar-border-gray-200/75 ar-w-full ar-px-5 ar-py-2 ar-flex ar-items-center ar-justify-between">
        <div class="ar-flex ar-items-center ar-gap-2">
          <RelevanceGlyph class="ar-h-3 ar-opacity-70" />
          <span class="ar-text-xs ar-text-gray-400 ar-leading-none ar-whitespace-nowrap">
            Powered by Relevance AI
          </span>
        </div>

        <div class="ar-flex ar-items-center ar-gap-2">
          <div class="ar-px-1 ar-py-0.5 ar-rounded ar-bg-gray-50 ar-w-fit ar-text-xs ar-border ar-border-gray-300/25 ar-text-gray-600">
            ???
          </div>
          <span class="ar-text-xs ar-text-gray-600">Submit question</span>
        </div>
      </div>
    </div>
  );
}

export default Help;
