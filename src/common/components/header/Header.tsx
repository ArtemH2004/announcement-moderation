import { HeaderLogo } from "@/common/components/header/HeaderLogo";
import { HeaderNavigation } from "@/common/components/header/HeaderNavigation";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-x-4 px-4 py-1">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
};
