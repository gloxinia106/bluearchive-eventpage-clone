import { useSwiper } from "swiper/react";
import { useRef, useState } from "react";

interface Section0Props {
  handleOpen: () => void;
}

export default function Section0({ handleOpen }: Section0Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicBtn, setMusicBtn] = useState(false);
  const swiper = useSwiper();

  return (
    <>
      <video
        id="bgVideo"
        data-autoplay
        playsInline
        loop
        muted
        className="absolute top-0 object-cover w-full h-full"
      >
        <source src="/current/videos/bg_video_ko.mp4"></source>
      </video>
      <div
        className="absolute top-[20px] right-[25px] z-30 flex"
        data-swiper-parallax-y="-200"
        data-swiper-parallax-duration="500"
      >
        <div className="hover:cursor-pointer snsLink">
          <div className="bg-[url('/current/img_sprite.png')] w-[95px] h-[80px] bg-[-236px_-286px]"></div>
          <ul className="bg-[url('/current/img_sprite.png')] w-[95px] h-[270px] bg-[-435px_-286px] hidden">
            <li className="w-[82px] h-[71px]"></li>
            <li className="w-[82px] h-[64px]">
              <a
                className="block w-full h-full"
                href="https://www.facebook.com/"
              ></a>
            </li>
            <li className="w-[82px] h-[64px]">
              <a
                className="block w-full h-full"
                href="https://twitter.com/KR_BlueArchive?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              ></a>
            </li>
            <li className="w-[82px] h-[64px]">
              <a
                className="block w-full h-full"
                href="https://bluearchive.nexon.com/events/2023/01/reg"
              ></a>
            </li>
          </ul>
        </div>
        <audio ref={audioRef} src="/bgm.mp3" hidden />
        <button
          className={`bg-[url('/current/img_sprite.png')] w-[77px] h-[80px] ${
            musicBtn ? "bg-[-331px_-286px]" : "bg-[-530px_-286px]"
          }`}
          onClick={() => {
            setMusicBtn(!musicBtn);
            musicBtn ? audioRef.current?.pause() : audioRef.current?.play();
          }}
        ></button>
      </div>
      <div className="bg-black w-full h-full absolute top-0 opacity-70 z-10"></div>
      <div className="w-full h-full absolute top-0 z-20 flex flex-col justify-center items-center">
        <div className="bg-[url('/current/section0/title_ko.png')] w-[940px] h-[355px] bg-[-255px_0px]"></div>
        <button
          className="bg-[url('/current/section0/btn_play.png')] w-[121px] h-[138px] up-animation"
          onClick={handleOpen}
        />
        <div className="bg-[url('/current/section0/desc_ko.png')] w-[475px] h-[65px] bg-[-491px_-500px]"></div>
        <button
          className="bg-[url('/current/section0/btn_goReg.png')] w-[450px] h-[105px] up-animation"
          onClick={() => {
            swiper.slideNext();
          }}
        ></button>
        <div className="absolute bottom-0 bg-[url('/current/bul_scroll.png')] w-[45px] h-[60px] animate-bounce"></div>
      </div>
    </>
  );
}
