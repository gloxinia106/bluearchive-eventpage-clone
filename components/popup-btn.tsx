interface PopupBtnProps {
  text: string;
}

export default function PopupBtn({ text }: PopupBtnProps) {
  return (
    <button className="text-gray-500 text-sm bg-white border rounded-full border-gray-500 px-5 py-1 font-thin">
      {text}
    </button>
  );
}
