import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NavMenu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <NavigationMenu className="hidden lg:flex space-x-4">
      <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
        <NavigationMenuItem>
          <Link to="/">{t("home")}</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="write">{t("write")}</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="about">{t("about")}</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavMenu;
