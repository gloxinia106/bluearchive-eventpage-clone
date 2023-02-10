import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Section4() {
  const [imgNum, setImgNum] = useState(1);
  const [youtubeSrc] = useState([
    "https://www.youtube.com/embed/q9665Ow15hk",
    "https://www.youtube.com/embed/6zD9luZ083E",
    "https://www.youtube.com/embed/OEslrON2fNo",
    "https://www.youtube.com/embed/trcYKjq-EYU",
  ]);
  const onClickNext = () => {
    setImgNum((prev) => (prev === 7 ? 1 : prev + 1));
  };
  const onClickPrev = () => {
    setImgNum((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <div className="section">
      <div className="w-full h-screen absolute top-0 overflow-hidden flex items-center justify-center bg-[url('/current/section4/bg.jpg')] bg-cover bg-center">
        <div className="bg-[url('/current/section4/bg_cont.png')] w-[1300px] h-[766px] relative shrink-0">
          <button
            onClick={() => {
              onClickNext();
            }}
            className="bg-[url('/current/section4/btn_next.png')] w-[95px] h-[92px] bg-right absolute top-[330px] -right-[75px]"
          ></button>
          <button
            onClick={() => {
              onClickPrev();
            }}
            className="bg-[url('/current/section4/btn_prev.png')] w-[95px] h-[92px] absolute top-[330px] -left-[70px]"
          ></button>
          <AnimatePresence initial={false}>
            <motion.div
              key={imgNum}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <>
                <motion.img
                  src={`/current/section4/page${imgNum}_ko.png`}
                  className="absolute -top-[65px] left-[5px] obje"
                />
                {youtubeSrc.map((src, index) => {
                  if (imgNum - 3 === index) {
                    return (
                      <iframe
                        width="490"
                        height="240"
                        src={src}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute bottom-[109px] right-[67px]"
                      ></iframe>
                    );
                  }
                })}
              </>
            </motion.div>
          </AnimatePresence>
          <div className="bg-[url('/current/section4/bg_pagination.png')] absolute w-[56px] h-[55px] right-2 top-5">
            <div className="relative">
              <span className="absolute top-2.5 right-2.5 text-sm font-bold">
                {imgNum} / 7
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
