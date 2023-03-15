import { createShortcut } from "@solid-primitives/keyboard";
import { FiHelpCircle } from "solid-icons/fi";
import { createSignal, createEffect, Show, Ref } from "solid-js";
import Help from "./Help";
import onClickOutside from "./hooks/onClickOutside";

function App() {
  const [helpVisible, setHelpVisible] = createSignal(false);

  const closeHelp = () => {
    setHelpVisible(false);
  };

  let widget: null | Ref<HTMLElement> = null;

  createEffect(() => {
    // Only listen for Esc when help visible and not demo mode.
    if (helpVisible() && !isDemoMode) {
      createShortcut(["Escape"], closeHelp);
      onClickOutside(widget, closeHelp);
    }
  });

  // Decode config
  const encodedConfig = document.currentScript?.getAttribute("config");
  const decodedConfig = encodedConfig ? atob(encodedConfig) : undefined;
  let config;

  // Check if widget is in demo mode
  const isDemoMode = document.currentScript?.getAttribute("demo") === "true";

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
        <Show when={!isDemoMode}>
          <button
            aria-label="Open help prompt"
            class="ar-fixed ar-bottom-6 ar-right-6 ar-bg-white ar-rounded-full ar-border ar-border-gray-300/75 ar-hover:bg-gray-100 ar-shadow ar-p-2 ar-w-fit ar-h-fit !ar-z-[999999]"
            onClick={() => setHelpVisible(!helpVisible())}
          >
            <FiHelpCircle size={24} class="!ar-text-gray-800" />
          </button>
        </Show>

        <Show when={isDemoMode || helpVisible()}>
          <Help ref={widget} config={config} demo={isDemoMode} />
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
