import Section0 from "@/router/section0";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={"YOURE Key"}
      loopBottom={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section0 />
            <div className="section">
              <div>Sectton2</div>
            </div>
            <div className="section">
              <div>Sectton3</div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
