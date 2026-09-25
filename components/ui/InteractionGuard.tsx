"use client";

import { useEffect } from "react";

export function InteractionGuard() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "IMG" ||
        target?.tagName === "A" ||
        target?.closest("a")
      ) {
        event.preventDefault();
      }
    };

    const handleSelectStart = (event: Event) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName !== "INPUT" &&
        target?.tagName !== "TEXTAREA" &&
        target?.isContentEditable
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return null;
}