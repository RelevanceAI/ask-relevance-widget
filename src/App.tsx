import { createShortcut } from "@solid-primitives/keyboard";
import { FiHelpCircle } from "solid-icons/fi";
import { createSignal, createEffect, Show } from "solid-js";
import Help from "./Help";

function App() {
  const [helpVisible, setHelpVisible] = createSignal(false);

  const closeHelp = () => {
    setHelpVisible(false);
  };

  createEffect(() => {
    // Only listen for Esc when help visible.
    if (helpVisible()) {
      createShortcut(["Escape"], closeHelp);
    }
  });

  // Decode config
  const encodedConfig = document.currentScript?.getAttribute("config");
  const decodedConfig = encodedConfig ? atob(encodedConfig) : undefined;
  let config;

  try {
    const isDevEnvironment = process.env.NODE_ENV === "development";

    config = isDevEnvironment
      ? {
          url: "https://api-bcbe5a.stack.tryrelevance.com/latest/datasets/redis-docs/simple_search",
          field: "content",
          vector_field: "content_vector_",
          reference_url_field: "url",
          reference_title_field: "title",
          auth_header:
            "1b4c9fb5-b838-4cc9-b875-d6d29573cb3c:OWM5NWQ1NGEtZDk3MC00ZjgzLWFiNGEtNjBjODI0MjdjNzY5",
        }
      : JSON.parse(decodedConfig ?? "");

    return (
      <>
        <button
          aria-label="Open help prompt"
          class="fixed bottom-6 right-6 bg-white rounded-full border border-gray-200/50 hover:bg-gray-50 shadow p-2 w-fit h-fit"
          onClick={() => setHelpVisible(!helpVisible())}
        >
          <FiHelpCircle size={24} class="!text-gray-800" />
        </button>

        <Show when={helpVisible()}>
          <Help config={config} />
        </Show>
      </>
    );
  } catch (err) {
    // Don't show help button if configuration invalid.
    console.error(
      "[Ask Relevance] Invalid configuration. Ensure that your configuration is encoded correctly."
    );
  }
}

export default App;
