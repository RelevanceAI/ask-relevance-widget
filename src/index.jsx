/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const el = document.createElement("div");
document.body.appendChild(el);

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(() => <App />, el);
