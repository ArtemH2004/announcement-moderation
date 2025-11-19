import { Logo } from "@/common/components/Logo";
import { HeaderNavigation } from "@/common/components/header/HeaderNavigation";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-x-4 px-4">
      <Logo />
      <HeaderNavigation />
    </header>
  );
};
