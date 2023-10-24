
import { NavigationMenu} from "../ui/navigation-menu";
import NavList from "./NavList";

const Navbar = () => {
  return (
  <NavigationMenu className="hidden md:grid ml-auto place-content-center  p-5">
     <NavList/>
    </NavigationMenu>
  );
};

export default Navbar;


