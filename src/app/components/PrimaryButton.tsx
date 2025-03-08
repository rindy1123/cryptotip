export const PrimaryButton = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-indigo-700 text-lg font-semibold p-1.5 rounded-full cursor-pointer hover:bg-indigo-800"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
