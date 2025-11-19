import { HeaderLink } from '@/common/components/ui/link/HeaderLink'
import { ERoutes } from '@/router/routes'

export const HeaderNavigation = () => {
  return (
    <nav>
        <ul className='flex-center gap-x-4 xl:gap-x-6'>
            <HeaderLink linkTo={ERoutes.LIST} title='Объявления' iconName='list'  />
            <HeaderLink linkTo={ERoutes.STATS} title='Статистика' iconName='statistic'  />
        </ul>
    </nav>
  )
}
