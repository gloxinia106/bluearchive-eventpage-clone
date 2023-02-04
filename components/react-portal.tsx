import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortal {
  children: ReactNode;
  wrapperId: string;
}

const createWrapperElement = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default function ReactPortal({ wrapperId, children }: ReactPortal) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperElement(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
}
