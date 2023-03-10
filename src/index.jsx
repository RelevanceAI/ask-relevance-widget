/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const el = document.createElement("div");
document.body.appendChild(el);

render(() => <App />, el);
