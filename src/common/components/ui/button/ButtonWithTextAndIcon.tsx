import type { ImageComponentsTypes } from "@/common/components/svg-helper";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";

interface IButtonWithTextAndIconProps {
  title: string;
  iconName: ImageComponentsTypes;
  color?: "red" | "green" | "gray" | "transparent";
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
      ? "bg-red-200"
      : color === "green"
      ? "bg-green-200"
      : color === "gray"
      ? "bg-gray-200"
      : "bg-transparent";
  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      className={`flex-center gap-x-1 ${
        iconSecond ? "flex-row-reverse" : "flex-row"
      } px-2 py-1 select-none rounded-md ${colorClassName} hover:opacity-85 active:opacity-65`}
    >
      <SvgHelper iconName={iconName} size="20" className="text-black" />
      <span className="font-medium text-lg">{title}</span>
    </button>
  );
};
