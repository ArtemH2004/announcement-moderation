interface IFilterItemButtonProps {
  title: string;
  isActive: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const FilterItemButton = ({
  title,
  isActive,
  onClick,
  disabled = false,
}: IFilterItemButtonProps) => {
  return (
    <li>
      <button
        className={`h-10 flex-center px-4 rounded-xl  ${
          isActive
            ? "text-white bg-blue-400"
            : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
        } ${disabled && "pointer-events-none"}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-nowrap">{title}</span>
      </button>
    </li>
  );
};
