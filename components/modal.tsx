import { fullpageApi } from "@fullpage/react-fullpage";
import { ReactNode, useEffect } from "react";
import ReactPortal from "./react-portal";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  fullpageApi: fullpageApi;
}

export default function Modal({
  children,
  isOpen,
  handleClose,
  fullpageApi,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    fullpageApi.setAllowScrolling(false);
    fullpageApi.setMouseWheelScrolling(false);
    return () => {
      document.body.style.overflow = "unset";
      fullpageApi.setAllowScrolling(true);
      fullpageApi.setMouseWheelScrolling(true);
    };
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
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
      </>
    </ReactPortal>
  );
}
