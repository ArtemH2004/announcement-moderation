import type { ImageComponentsTypes } from "@/common/components/svg-helper";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";

interface IButtonWithTextAndIconProps {
  title: string;
  iconName: ImageComponentsTypes;
  color?: "blue" | "red" | "green" | "yellow" | "gray" | "transparent";
  type?: "button" | "submit" | "reset";
  onClick?: (e: any) => void;
  iconSecond?: boolean;
}

export const ButtonWithTextAndIcon = ({
  title,
  iconName,
  color = "transparent",
  type = "button",
  onClick,
  iconSecond = false,
}: IButtonWithTextAndIconProps) => {
  const colorClassName =
    color === "red"
      ? "bg-red-200 hover:bg-red-300 active:bg-red-400"
      : color === "blue"
      ? "bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600"
      : color === "green"
      ? "bg-green-200 hover:bg-green-300 active:bg-green-400"
      : color === "yellow"
      ? "bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400"
      : color === "gray"
      ? "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
      : "bg-transparent";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex-center gap-x-1 ${
        iconSecond ? "flex-row-reverse" : "flex-row"
      } px-4 py-1 select-none rounded-lg ${colorClassName}`}
    >
      <SvgHelper iconName={iconName} size="20" />
      <span className="font-medium text-lg">{title}</span>
    </button>
  );
};
