interface NoticeListProps {
  text: string;
}

export default function NoticeList({ text }: NoticeListProps) {
  return (
    <div className="relative w-full">
      <div className="w-[3px] h-[3px] bg-black absolute top-2.5 left-0"></div>
      <div className="pl-3">{text}</div>
    </div>
  );
}
