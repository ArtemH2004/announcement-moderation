interface IStatsToggleButtonProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

export const StatsToggleButton = ({
  title,
  onClick,
  isActive,
}: IStatsToggleButtonProps) => {
  return (
    <li>
      <button
        className={`px-2 lg:px-6 py-2 bg-blue-400 rounded-xl ${
          isActive
            ? "text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
            : "bg-transparent hover:bg-blue-200 active:bg-blue-300"
        }`}
        onClick={onClick}
      >
        <span className="">{title}</span>
      </button>
    </li>
  );
};
