import { FiHelpCircle } from "solid-icons/fi";
import { createSignal } from "solid-js";
import Help from "./Help";

function App() {
  const [modalVisible, setModalVisible] = createSignal(false);

  return (
    <>
      <button
        aria-label="Open help prompt"
        class="fixed bottom-6 right-6 bg-white rounded-full border border-gray-200/50 hover:bg-gray-50 shadow p-2 w-fit h-fit"
        onClick={() => setModalVisible(!modalVisible())}
      >
        <FiHelpCircle size={24} class="!text-gray-800" />
      </button>

      <Help />
    </>
  );
}

export default App;
