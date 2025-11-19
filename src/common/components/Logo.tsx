import { ERoutes } from "@/router/routes"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to={ERoutes.LIST}>
        <h1 className="">Moderation</h1>
    </Link>
  )
}
