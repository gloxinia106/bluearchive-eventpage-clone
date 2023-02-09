import { ReactNode } from "react";

interface FrameProps {
  children?: ReactNode;
  width: string;
  height: string;
  url: string;
  charWidth: string;
  charHeight: string;
  charUrl: string;
  charPos: string;
}

export default function Frame({
  children,
  width,
  height,
  charHeight,
  charWidth,
  url,
  charUrl,
  charPos,
}: FrameProps) {
  return (
    <div className="z-30 w-full h-full absolute top-0 overflow-hidden flex items-center">
      <div
        className={`mx-auto shrink-0 relative`}
        style={{
          backgroundImage: `url(${url})`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div
          className={`absolute -top-[120px] -right-[${charPos}px] -z-10 `}
          style={{
            backgroundImage: `url(${charUrl})`,
            width: `${charWidth}px`,
            height: `${charHeight}px`,
            right: `${charPos}px`,
          }}
        ></div>
        {children}
      </div>
    </div>
  );
}
