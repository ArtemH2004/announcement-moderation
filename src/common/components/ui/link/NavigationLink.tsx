import { useAppSelector } from "@/common/hooks/useAppSelector";
import { ERoutes } from "@/router/routes";
import { Link, useParams } from "react-router-dom";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";

interface INavigationLinkProps {
  type: "prev" | "next";
}

export const NavigationLink = ({ type }: INavigationLinkProps) => {
  const maxId = useAppSelector((state) => state.paginationReducer.totalItems);
  const { id } = useParams();
  const numberId = Number(id);
  const linkTo =
    type === "prev" && numberId !== 1
      ? `/${numberId - 1}`
      : type === "next" && numberId !== maxId
      ? `/${numberId + 1}`
      : "";
  return (
    <Link
      to={`${ERoutes.ITEM}${linkTo}`}
      className={`${
        ((type === "prev" && numberId === 1) ||
          (type === "next" && numberId === maxId)) &&
        "pointer-events-none select-none opacity-40"
      } flex-center gap-x-0.5 ${
        type === "prev" ? "flex-row" : "flex-row-reverse"
      } text-gray-500 hover:text-red-400`}
    >
      <SvgHelper iconName={type === "prev" ? "arrow_back" : "arrow_forward"} />
      <span>{type === "prev" ? "Предыдущее" : "Следущее"}</span>
    </Link>
  );
};
