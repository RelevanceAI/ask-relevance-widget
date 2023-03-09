import { createMemo, createSignal, onMount, Show } from "solid-js";
import RelevanceGlyph from "./relevance.svg";
import ky from "ky";
import { Motion } from "@motionone/solid";
import { spring } from "motion";
import { Repeat } from "@solid-primitives/range";

// config.field
// config.exampleQuestions: [' ']
// config.vector_field
// reference_url_field
// reference_title_field
// auth_header
// config.url

const exampleConfig = {
  url: "https://api-bcbe5a.stack.tryrelevance.com/latest/datasets/model3-manual/simple_search",
  field: "content",
  vector_field: "content_vector_",
  reference_url_field: "page-href",
  reference_title_field: "title",
  auth_header:
    "1b4c9fb5-b838-4cc9-b875-d6d29573cb3c:OWM5NWQ1NGEtZDk3MC00ZjgzLWFiNGEtNjBjODI0MjdjNzY5",
};

function Help() {
  let input: undefined | HTMLInputElement = undefined;

  onMount(() => {
    // Focus element when command bar appears
    input?.focus();
  });

  // store string somewhere
  // only allow submit if there's been a string entered
  // on submit, query api
  // then animate modal and display result

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(question());
      submitQuestion();
    }
  };

  const [question, setQuestion] = createSignal("");
  const [loadingAnswer, setLoadingAnswer] = createSignal(false);
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

  const submitQuestion = async () => {
    setAnswerObj(null);
    setLoadingAnswer(true);

    const json = await ky
      .post(exampleConfig.url, {
        headers: {
          Authorization: `${exampleConfig.auth_header}`,
        },
        json: {
          vectorSearchQuery: [
            {
              field: exampleConfig.vector_field,
              model: exampleConfig?.model ?? "all-mpnet-base-v2",
              query: question(),
            },
          ],
          minimumRelevance: 0.1,
          instantAnswerQuery: {
            field: exampleConfig.field,
            query: `Given the context information above and not prior knowledge, answer the question: ${question()}`,
          },
          preset: "support3",
          urlField: exampleConfig.reference_url_field,
          titleField: exampleConfig.reference_title_field,
        },
      })
      .json();

    console.log(json);

    setAnswerObj(json);
    setLoadingAnswer(false);

    return json;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      class="w-full max-w-2xl rounded-xl shadow-lg border border-gray-300/10 fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all"
    >
      {/** Input */}
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

      {/** Answer */}

      <Show when={loadingAnswer()}>
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
          <div class="px-1 py-0.5 rounded bg-gray-50 w-fit text-xs text-gray-600">
            ⏎
          </div>
          <span class="text-xs text-gray-600">Submit question</span>
        </div>
      </div>
    </div>
  );
}

export default Help;
