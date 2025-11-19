import type { ImageComponentsTypes } from "@/common/components/svg-helper";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";

interface IPaginationButtonProps {
  title: string;
  iconName?: ImageComponentsTypes;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export const PaginationButton = ({
  title,
  iconName,
  onClick,
  isActive = false,
  disabled = false,
}: IPaginationButtonProps) => {
  return (
    <button
      className={`${
        isActive ? "bg-black" : "bg-transparent hover:bg-gray-200"
      } relative rounded-xl size-9 ${disabled && "opacity-50"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {!!iconName ? (
        <SvgHelper iconName={iconName} className="abs-center" />
      ) : (
        <span
          className={`${
            isActive ? "text-white" : "text-back"
          } abs-center text-sm leading-3.5`}
        >
          {title}
        </span>
      )}
    </button>
  );
};
