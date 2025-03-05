export const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-emerald-700 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-emerald-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
