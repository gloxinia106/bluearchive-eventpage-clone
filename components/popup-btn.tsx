interface PopupBtnProps {
  text: string;
  handleOpen: () => void;
}

export default function PopupBtn({ text, handleOpen }: PopupBtnProps) {
  return (
    <button
      className="text-gray-500 text-sm border rounded-full border-gray-500 px-5 py-1 font-thin"
      onClick={handleOpen}
    >
      {text}
    </button>
  );
}
