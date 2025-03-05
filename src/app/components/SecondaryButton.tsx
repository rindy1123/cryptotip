export const SecondaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-slate-700 p-2 rounded-full font-semibold cursor-pointer hover:bg-slate-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
