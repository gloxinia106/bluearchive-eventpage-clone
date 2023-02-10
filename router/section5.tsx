import Frame from "@/components/frame";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Section5() {
  const [imgNum, setImgNum] = useState(1);
  const onClickBtn = (value: number) => {
    setImgNum(value);
  };
  return (
    <div className="section">
      <div className="bg-[url('/current/section5/bg.jpg')] bg-cover bg-center absolute top-0 w-full h-screen"></div>
      <Frame
        charFront={true}
        charUrl="/current/section5/char.png"
        charHeight="1555"
        charWidth="900"
        charPos="-710"
        url="/current/section5/bg_cont.png"
        width="1322"
        height="1099"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={imgNum}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            src={`/current/section5/cont${imgNum}_ko.png`}
            className="absolute top-[205px] left-[-2px] scale-110"
          />
        </AnimatePresence>
        <div className="absolute top-[220px] left-[120px] grid grid-cols-4 gap-4">
          {["0", "-273", "-546", "-819"].map((value, index) => {
            return (
              <button
                className="bg-[url('/current/section5/btn_cont_ko.png')] w-[254px] h-[76px]"
                style={{
                  backgroundPosition: `${value}px ${
                    index + 1 === imgNum ? "-100" : "0"
                  }px`,
                }}
                onClick={() => {
                  onClickBtn(index + 1);
                }}
              ></button>
            );
          })}
        </div>
      </Frame>
    </div>
  );
}
