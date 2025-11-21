import type { ReactNode } from "react";

interface IAdsWrapperProps {
  title: string;
  children: ReactNode;
}

export const AdsWrapper = ({ title, children }: IAdsWrapperProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h3 className="text-2xl">{title}</h3>
      {children}
    </div>
  );
};
