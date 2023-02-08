import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PopupProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Popup({ isOpen, children, handleClose }: PopupProps) {
  return isOpen
    ? createPortal(
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 flex items-center justify-center"
            onClick={handleClose}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </>,
        document.getElementById("notice-popup")!
      )
    : null;
}
