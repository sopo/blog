import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NavMenu: React.FC = () => {
  const { t } = useTranslation();
  const handleActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return `${isActive && "text-primary font-medium"} hover:font-medium hover:cursor-pointer`;
  };
  return (
    <NavigationMenu className="hidden lg:flex space-x-4">
      <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
        <NavigationMenuItem>
          <NavLink className={handleActiveLink} to="/">
            {t("home")}
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink className={handleActiveLink} to="write">
            {t("write")}
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink className={handleActiveLink} to="about">
            {t("about")}
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavMenu;
