import { Motion } from "@motionone/solid";
import { Repeat } from "@solid-primitives/range";
import ky from "ky";
import { FiFileText } from "solid-icons/fi";
import { createMemo, createSignal, onMount, Show } from "solid-js";
import RelevanceGlyph from "./relevance.svg";

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

function Help(props: Record<"config", Configuration>) {
  let input: undefined | HTMLInputElement = undefined;

  onMount(() => {
    input?.focus();
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

    return references;
  });

  const referencesExist = createMemo(() => {
    return Array.isArray(references()) && references().length > 0;
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
      role="dialog"
      aria-modal="true"
      class="w-full max-w-2xl z-[999] bg-white rounded-xl shadow-lg border border-gray-300/30 fixed top-24 left-1/2 transform -translate-x-1/2 transition-all"
    >
      <div class="px-5 py-5">
        <input
          ref={input}
          autocomplete="off"
          autocapitalize="off"
          spellcheck={false}
          placeholder="Ask a question..."
          class="w-full outline-none caret-gray-500 text-gray-900 placeholder:text-gray-400"
          onInput={(e) => {
            setQuestion(e.currentTarget.value);
          }}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>

      <Show when={answerState() === "loading"}>
        <div class="border-t border-gray-200/75 w-full px-5 py-5">
          <div class="flex items-center gap-1">
            <Repeat times={3}>
              {(i) => (
                <Motion.div
                  class="flex items-center gap-1"
                  animate={{ opacity: [0.8, 1, 0.8], scale: [0.8, 1, 0.8] }}
                  transition={{
                    offset: [0, 0.2, 1],
                    duration: 0.2 * 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <div class="w-2 h-2 rounded-full bg-gray-400" />
                </Motion.div>
              )}
            </Repeat>
          </div>
        </div>
      </Show>

      <Show when={answer()}>
        <div class="border-t border-gray-200/75 w-full px-5 py-5">
          <p class="text-gray-800 leading-[1.775]">{answer()}</p>

          <Show when={referencesExist()}>
            <div role="group" class="pt-3 flex flex-wrap gap-2.5">
              {references()?.map((ref: any) => (
                <a role="option" href={ref.url} target="_blank">
                  <button class="py-0.5 px-2 rounded-md bg-indigo-100 group text-indigo-800 text-sm flex items-center gap-1.5">
                    <FiFileText size={12} class="!text-indigo-800 opacity-80" />
                    <span class="group-hover:underline">{ref.title}</span>
                  </button>
                </a>
              ))}
            </div>
          </Show>
        </div>
      </Show>

      <Show when={answerState() === "error"}>
        <div class="border-t border-gray-200/75 w-full px-5 py-5">
          <p class="text-gray-800 leading-[1.775]">
            I'm sorry, I'm having trouble generating your answer. Please try
            asking your question again.
          </p>
        </div>
      </Show>

      <div class="border-t border-gray-200/75 w-full px-5 py-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <RelevanceGlyph class="h-3 opacity-60" />
          <span class="text-xs text-gray-400 leading-none">
            Powered by Relevance AI
          </span>
        </div>

        <div class="flex items-center gap-2">
          <div class="px-1 py-0.5 rounded bg-gray-50 w-fit text-xs border border-gray-300/25 text-gray-600">
            ⏎
          </div>
          <span class="text-xs text-gray-600">Submit question</span>
        </div>
      </div>
    </div>
  );
}

export default Help;
