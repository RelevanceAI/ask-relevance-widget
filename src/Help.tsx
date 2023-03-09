import { createSignal, onMount } from "solid-js";
import RelevanceGlyph from "./relevance.svg";

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

  const [question, setQuestion] = createSignal("");

  return (
    <div
      role="dialog"
      aria-modal="true"
      class="w-full max-w-2xl rounded-xl shadow-lg border border-gray-300/10 fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="px-6 py-5">
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
        />
      </div>

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
