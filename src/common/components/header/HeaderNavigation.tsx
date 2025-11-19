import { HeaderNavigationItem } from '@/common/components/header/HeaderNavigationItem'
import { ERoutes } from '@/router/routes'

export const HeaderNavigation = () => {
  return (
    <nav>
        <ul className='flex-center gap-x-2'>
            <HeaderNavigationItem linkTo={ERoutes.LIST} title='Объявления'  />
            <HeaderNavigationItem linkTo={ERoutes.STATS} title='Статистика'  />
        </ul>
    </nav>
  )
}
