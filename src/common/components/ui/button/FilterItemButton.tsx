interface IFilterItemButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterItemButton = ({
  title,
  isActive,
  onClick,
}: IFilterItemButtonProps) => {
  return (
    <li>
      <button
        className={`h-10 flex-center px-4 rounded-xl  ${
          isActive
            ? "text-white bg-black"
            : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
        }`}
        onClick={onClick}
      >
        <span className="text-nowrap">{title}</span>
      </button>
    </li>
  );
};
