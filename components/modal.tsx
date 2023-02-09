import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.fullpage_api.setAllowScrolling(false);
      window.fullpage_api.setMouseWheelScrolling(false);
    } else {
      document.body.style.overflow = "unset";
      window.fullpage_api.setAllowScrolling(true);
      window.fullpage_api.setMouseWheelScrolling(true);
    }
  }, [isOpen]);
  return isOpen
    ? createPortal(
        <>
          <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-70"></div>
          <div className="fixed top-0 w-full h-screen flex flex-col items-center justify-center">
            <button onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </>,
        document.getElementById("modal")!
      )
    : null;
}
