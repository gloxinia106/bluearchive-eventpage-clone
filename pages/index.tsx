import Modal from "@/components/modal";
import Section0 from "@/router/section0";
import Section1 from "@/router/section1";
import Section2 from "@/router/section2";
import Section3 from "@/router/section3";
import Section4 from "@/router/section4";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Head from "next/head";
import { useState } from "react";

declare global {
  interface Window {
    fullpage_api: fullpageApi;
  }
}

export default function Home() {
  const [youtubeModal, setYoutubeModal] = useState(false);
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
      <ReactFullpage
        licenseKey={"YOURE Key"}
        loopBottom={true}
        afterLoad={(origin, destination) => {
          if (destination.index === 3) {
            const videoElement = document.getElementById(
              "sushinoVideo"
            ) as HTMLVideoElement | null;
            videoElement ? videoElement.play() : null;
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Section0
                fullpageApi={fullpageApi}
                handleOpen={() => {
                  setYoutubeModal(true);
                }}
              />
              <Section1 />
              <Section2 />
              <Section3 fullpageApi={fullpageApi} />
              <Section4 />
              <div className="section">
                <div>Sectton5</div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
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
    </>
  );
}
