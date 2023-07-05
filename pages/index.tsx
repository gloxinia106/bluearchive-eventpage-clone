import Modal from "@/components/modal";
import Nav from "@/components/nav";
import Section0 from "@/router/section0";
import Section1 from "@/router/section1";
import Section2 from "@/router/section2";
import Section3 from "@/router/section3";
import Section4 from "@/router/section4";
import Section5 from "@/router/section5";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import { useState } from "react";
import { Pagination, Mousewheel, Keyboard, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [youtubeModal, setYoutubeModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        keyboard={true}
        parallax={true}
        speed={800}
        onInit={() => {
          const videoElement = document.getElementById(
            "bgVideo"
          ) as HTMLVideoElement | null;
          videoElement ? videoElement.play() : null;
        }}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 3) {
            const videoElement = document.getElementById(
              "sushinoVideo"
            ) as HTMLVideoElement | null;
            videoElement ? videoElement.play() : null;
          }
          setCurrentPage(swiper.activeIndex + 1);
          if (swiper.activeIndex === 5) {
            setCurrentPage(5);
          }
        }}
        modules={[Pagination, Mousewheel, Keyboard, Parallax]}
        className="h-screen"
      >
        <SwiperSlide>
          <Section0
            handleOpen={() => {
              setYoutubeModal(true);
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Section1 />
        </SwiperSlide>
        <SwiperSlide>
          <Section2 />
        </SwiperSlide>
        <SwiperSlide>
          <Section3 setCurrentPage={setCurrentPage} />
        </SwiperSlide>
        <SwiperSlide>
          <Section4 />
        </SwiperSlide>
        <SwiperSlide>
          <Section5 />
        </SwiperSlide>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Modal
          isOpen={youtubeModal}
          handleClose={() => {
            setYoutubeModal(false);
          }}
        >
          <div className="bg-[url('/current/popup/pop_youtube.png')] w-[1745px] h-[827px] -ml-[200px] relative">
            <div className="absolute top-[9px] left-[430px] w-[1078px] h-[606px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NdcVyW9IGfs?autoplay=1"
                allow="autoplay; encrypted-video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Modal>
      </Swiper>
    </>
  );
}
