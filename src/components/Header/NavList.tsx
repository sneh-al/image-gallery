import {  NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import ThemeToggler from "./ThemeToggler";


const NavList = () => {
  return (
    <NavigationMenuList className="flex flex-col md:flex-row gap-2   md:static  right-0  justify-evenly  w-full  ">
        {NavbarLinks.map((nav,i) => (
          
          //all links have href to index page, React router dom is needed for future 
          <NavigationMenuItem key={i} className=" w-full ">
            <NavigationMenuLink href={nav.link} className={navigationMenuTriggerStyle()} >
              {nav.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
         <NavigationMenuItem className="w-full">
           <ThemeToggler/>
          </NavigationMenuItem>
      </NavigationMenuList>
  )
}

export default NavList

const NavbarLinks = [
    {
      id: 1,
      name: "Explore",
      link: "/",
    },
    {
      id: 2,
      name: "Collection",
      link: "/",
    },
    {
      id: 3,
      name: "Community",
      link: "/",
    },
  ];