import type { ReactNode } from "react";

interface IDropdownProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function Dropdown({ isOpen, children }: IDropdownProps) {
  return (
    <>
      <div
        className={`absolute z-1000 mt-1 transition-sm ${
          isOpen
            ? "scale-100 opacity-100 "
            : "pointer-events-none scale-75 opacity-0 "
        }`}
      >
        {children}
      </div>
    </>
  );
}
