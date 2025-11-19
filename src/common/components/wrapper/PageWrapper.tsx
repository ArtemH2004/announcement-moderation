import { Header } from "@/common/components/header/Header";
import { Outlet } from "react-router-dom";

export const PageWrapper = () => {
  return (
    <div className="container min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full p-4 flex flex-col gap-y-4">
        <Outlet />
      </div>
    </div>
  );
};
