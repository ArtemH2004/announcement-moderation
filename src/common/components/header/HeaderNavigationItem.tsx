import type { ERoutes } from "@/router/routes"
import { Link } from "react-router-dom"

interface IHeaderNavigationItem {
    linkTo: ERoutes;
    title: string;
}

export const HeaderNavigationItem = ({linkTo, title}: IHeaderNavigationItem) => {
  return (
    <li>
        <Link to={linkTo} className="">{title}</Link>
    </li>
  )
}
