import type { ReactNode } from "react";

interface IDropdownProps {
  isOpen: boolean;
  children: ReactNode;
  position?: "left" | "right";
}

export default function Dropdown({
  isOpen,
  children,
  position = "left",
}: IDropdownProps) {
  return (
    <>
      <div
        className={`absolute z-1000 mt-1 transition-sm ${
          isOpen
            ? "scale-100 opacity-100 "
            : "pointer-events-none scale-75 opacity-0 "
        } ${position === "left" ? "left-0" : "right-0"}`}
      >
        {children}
      </div>
    </>
  );
}
