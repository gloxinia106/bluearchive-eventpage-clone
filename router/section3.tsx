import Modal from "@/components/modal";
import { fullpageApi } from "@fullpage/react-fullpage";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Section3Props {
  fullpageApi: fullpageApi;
}

export default function Section3({ fullpageApi }: Section3Props) {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="section">
        <div>
          <AnimatePresence initial={false}>
            {show && (
              <motion.video
                key={"video"}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                id="sushinoVideo"
                playsInline
                muted
                onEnded={() => {
                  fullpageApi.setAllowScrolling(true);
                  fullpageApi.setMouseWheelScrolling(true);
                  setShow(false);
                }}
                onPlay={() => {
                  fullpageApi.setAllowScrolling(false);
                  fullpageApi.setMouseWheelScrolling(false);
                }}
                className="absolute top-0 object-cover w-full h-full z-50"
              >
                <source src="/current/videos/bg_event.mp4"></source>
              </motion.video>
            )}
          </AnimatePresence>
          <div className="bg-[url('/current/section3/bg.jpg')] bg-cover bg-center absolute top-0 w-full h-screen"></div>
          <button
            className="absolute bottom-0 left-1/2 ml-[23%] w-44"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <div className="relative ">
              <motion.img
                initial={{ x: 0, y: 0, rotateZ: 0 }}
                animate={{ x: 10, y: 10, rotateZ: 5 }}
                transition={{
                  x: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                src="/current/section3/bottle.png"
              />
              <motion.img
                animate={{ y: [0, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: "reverse",
                  ease: "easeOut",
                }}
                className="absolute top-0"
                src="/current/section3/txt_click.png"
              />
            </div>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="w-[1456px] h-[838px] relative">
          <img
            src="/current/popup/img1.png"
            className="absolute top-[317px] left-0"
          />
          <img
            src="/current/popup/img2.png"
            className="absolute top-[76px] left-[257px]"
          />
          <img
            src="/current/popup/img3.png"
            className="absolute top-0 left-[778px]"
          />
          <img
            src="/current/popup/img4_ko.png"
            className="absolute top-[63px] left-[856px]"
          />
          <img
            src="/current/popup/deco1.png"
            className="absolute top-[570px] left-[1150px]"
          />
          <img
            src="/current/popup/img5.png"
            className="absolute top-[583px] left-[204px]"
          />
          <img
            src="/current/popup/img6.png"
            className="absolute top-[593px] left-[941px]"
          />
          <img
            src="/current/popup/img7.png"
            className="absolute top-[493px] left-[579px]"
          />
          <img
            src="/current/popup/deco2.png"
            className="absolute top-[27px] left-[230px]"
          />
        </div>
      </Modal>
    </>
  );
}
