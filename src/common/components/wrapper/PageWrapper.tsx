import { Header } from "@/common/components/header/Header";

interface IPageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  return (
    <div className="container min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full p-4 flex flex-col gap-y-4">
        <>{children}</>
      </div>
    </div>
  );
};
