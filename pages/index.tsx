import Modal from "@/components/modal";
import Section0 from "@/router/section0";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { useState } from "react";

declare global {
  interface Window {
    fullpageApi: fullpageApi;
  }
}

export default function Home() {
  const [youtubeModal, setYoutubeModal] = useState(false);
  return (
    <ReactFullpage
      licenseKey={"YOURE Key"}
      loopBottom={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section0
              fullpageApi={fullpageApi}
              handleOpen={() => {
                setYoutubeModal(true);
              }}
            />
            <div className="section">
              <div>Sectton2</div>
            </div>
            <div className="section">
              <div>Sectton3</div>
            </div>
            {youtubeModal && (
              <Modal
                isOpen={youtubeModal}
                handleClose={() => {
                  setYoutubeModal(false);
                }}
                fullpageApi={fullpageApi}
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
            )}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
