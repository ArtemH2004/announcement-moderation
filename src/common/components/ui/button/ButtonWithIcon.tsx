import type { ImageComponentsTypes } from "@/common/components/svg-helper";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";

interface IButtonWithIconProps {
  size?: string;
  title: string;
  iconName: ImageComponentsTypes;
  type?: "button" | "submit" | "reset";
  onClick?: (e: any) => void;
}

export const ButtonWithIcon = ({
  size = "24",
  title,
  iconName,
  type = "button",
  onClick,
}: IButtonWithIconProps) => {
  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      className={`flex-center select-none rounded-full p-1.5 hover:bg-gray-100 active:bg-gray-200`}
    >
      <SvgHelper
        size={size}
        iconName={iconName}
        className="text-black"
      />
      <span className="visually-hidden">{title}</span>
    </button>
  );
};
