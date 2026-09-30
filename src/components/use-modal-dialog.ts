"use client";

import { useEffect, useRef } from "react";

// The menu can hand over to booking in the same render. Keep scrolling locked
// until every open dialog has released its lock.
let scrollLocks = 0;
let previousOverflow = { html: "", body: "" };

export default function useModalDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;

    if (scrollLocks++ === 0) {
      previousOverflow = {
        html: document.documentElement.style.overflow,
        body: document.body.style.overflow,
      };
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    // The visual viewport also shrinks when a phone's keyboard opens.
    const viewport = window.visualViewport;
    const resize = () => {
      dialog.style.setProperty("--dialog-height", `${viewport?.height ?? window.innerHeight}px`);
      dialog.style.setProperty("--dialog-top", `${viewport?.offsetTop ?? 0}px`);
    };
    resize();
    dialog.showModal();
    dialog.addEventListener("close", onClose);
    viewport?.addEventListener("resize", resize);
    viewport?.addEventListener("scroll", resize);
    window.addEventListener("resize", resize);

    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.close();
      viewport?.removeEventListener("resize", resize);
      viewport?.removeEventListener("scroll", resize);
      window.removeEventListener("resize", resize);
      if (--scrollLocks === 0) {
        document.documentElement.style.overflow = previousOverflow.html;
        document.body.style.overflow = previousOverflow.body;
      }
    };
  }, [open, onClose]);

  return ref;
}
