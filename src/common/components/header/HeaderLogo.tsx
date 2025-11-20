import { ERoutes } from "@/router/routes"
import { Link } from "react-router-dom"
import SvgHelper from "@/common/components/svg-helper/SvgHelper"

export const HeaderLogo = () => {
  return (
    <Link to={ERoutes.LIST} className="flex-center gap-x-1">
      <SvgHelper iconName="logo" size="30" />
        <h1 className="text-2xl md:text-3xl leading-7.5">Moderation</h1>
    </Link>
  )
}
