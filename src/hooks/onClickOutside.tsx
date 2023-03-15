import { makeEventListener } from "@solid-primitives/event-listener";
import { Ref } from "solid-js";

export default function onClickOutside(
  target: Ref<HTMLElement> | null,
  callback: () => void
) {
  if (!target) return;

  const trigger = document.getElementById("ask_relevance__trigger");

  makeEventListener(window, "pointerdown", (e) => {
    const isOutside =
      !e.composedPath().includes(target as HTMLElement) &&
      !e.composedPath().includes(trigger as HTMLElement);

    if (target && isOutside) {
      callback();
    }
  });
}
