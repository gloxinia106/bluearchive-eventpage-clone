import Frame from "@/components/frame";

export default function Section2() {
  return (
    <div className="section">
      <div className="bg-[url('/current/section2/bg.jpg')] bg-cover bg-center absolute top-0 w-full h-screen"></div>
      <Frame
        url="/current/section2/bg_cont_ko.png"
        width="1159"
        height="859"
        charUrl="/current/section2/char.png"
        charWidth="1097"
        charHeight="1414"
        charPos="-760"
      ></Frame>
    </div>
  );
}
