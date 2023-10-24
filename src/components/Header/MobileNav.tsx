import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import NavList from './NavList'

const MobileNav = () => {
  return (
    <NavigationMenu className="flex md:hidden ml-auto    p-5">
    <NavList/>
   </NavigationMenu>
  )
}

export default MobileNav