import type { ReactNode } from "react";

interface IDropdownProps {
  isOpen: boolean;
  children: ReactNode;
  position?: "left" | "right" | "top";
}

export default function Dropdown({
  isOpen,
  children,
  position = "left",
}: IDropdownProps) {
  const positionClassName =
    position === "left"
      ? "left-0"
      : position === "right"
      ? "right-0"
      : "bottom-full left-1/2 -translate-x-1/2";
  return (
    <>
      <div
        className={`absolute z-1000 my-1 transition-sm ${
          isOpen
            ? "scale-100 opacity-100 "
            : "pointer-events-none scale-75 opacity-0 "
        } ${positionClassName}`}
      >
        {children}
      </div>
    </>
  );
}
