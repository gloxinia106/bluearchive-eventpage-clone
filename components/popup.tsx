import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const popupVariants = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
  exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
};

export default function Popup({ isOpen, children, handleClose }: PopupProps) {
  const [htmlElement, setHtmlElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setHtmlElement(document.getElementById("notice-popup"));
  });
  return htmlElement
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 flex items-center justify-center"
              onClick={handleClose}
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                variants={popupVariants}
                initial="start"
                animate="end"
                exit="exit"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        htmlElement!
      )
    : null;
}
