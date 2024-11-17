import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("blog")}
        </h2>
        <NavigationMenu className="hidden md:flex space-x-4">
          <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
            <NavigationMenuItem className=" text-gray-900 dark:text-white">
              <Link to="/">{t("home")}</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=" text-gray-900 dark:text-white">
              <Link to="write">{t("write")}</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=" text-gray-900 dark:text-white">
              <Link to="about">{t("about")}</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link to="sign-up">
            <Button variant={"default"}>{t("signIn")}</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className=" text-gray-900 dark:text-white">
              Language
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white dark:bg-gray-800">
              <DropdownMenuSeparator />
              <NavLink to={"/en"}>
                <DropdownMenuItem
                  className=" text-gray-900 dark:text-white"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </DropdownMenuItem>
              </NavLink>
              <NavLink to={"/ka"}>
                <DropdownMenuItem
                  className=" text-gray-900 dark:text-white"
                  onClick={() => handleLanguageChange("ka")}
                >
                  ქართული
                </DropdownMenuItem>
              </NavLink>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
