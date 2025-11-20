import type { ERoutes } from "@/router/routes";
import { Link, useLocation } from "react-router-dom";
import type { ImageComponentsTypes } from "@/common/components/svg-helper";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";

interface IHeaderLinkProps {
  linkTo: ERoutes;
  title: string;
  iconName: ImageComponentsTypes;
}

export const HeaderLink = ({ title, iconName, linkTo }: IHeaderLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === linkTo;
  return (
    <li>
      <Link
        to={linkTo}
        className={`relative flex-center leading-7.5  ${
          isActive
            ? "text-blue-400"
            : "text-black hover:text-red-400 active:opacity-65"
        }`}
      >
        <div className="block md:hidden">
          <ButtonWithIcon title={title} iconName={iconName} />
        </div>
        <span className="font-medium hidden md:block">{title}</span>

        <div
          className={`hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 ${
            isActive ? "w-full" : "w-0"
          } h-0.5 bg-blue-400 rounded transition-sm`}
        />
      </Link>
    </li>
  );
};
