import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROOT_PATHS } from "@/routes/root-layout/root.enums";
const NavMenu: React.FC = () => {
  const { t } = useTranslation();
  const handleActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return `${isActive && "text-primary font-medium"} hover:font-medium hover:cursor-pointer`;
  };
  return (
    <NavigationMenu className="hidden lg:flex space-x-4">
      <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
        <NavigationMenuItem>
          <Link to={ROOT_PATHS.HOME}>{t("home")}</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            className={handleActiveLink}
            to={`${ROOT_PATHS.USER}/${ROOT_PATHS.WRITE}`}
          >
            {t("write")}
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink className={handleActiveLink} to={ROOT_PATHS.ABOUT}>
            {t("about")}
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavMenu;
