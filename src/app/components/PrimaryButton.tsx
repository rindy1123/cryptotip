export const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-indigo-700 p-2 rounded-full cursor-pointer hover:bg-indigo-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
