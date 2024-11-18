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
import { Link, NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Earth, Search } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const { lang } = useParams();
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* logo */}
        <Link to={`/${lang}`}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("blog")}
          </h2>
        </Link>

        {/* links */}
        <NavigationMenu className="hidden lg:flex space-x-4">
          <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
            <NavigationMenuItem className=" text-gray-600 dark:text-gray-200">
              <Link to="/">{t("home")}</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=" text-gray-600 dark:text-gray-200">
              <Link to="write">{t("write")}</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=" text-gray-600 dark:text-gray-200">
              <Link to="about">{t("about")}</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* left side */}
        {/* search */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className=" text-gray-900 dark:text-white">
              <Button variant="outline" size="icon">
                <Search className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-gray-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white dark:bg-gray-800"></DropdownMenuContent>
          </DropdownMenu>

          {/* sign in button */}
          <Link to="sign-in">
            <Button variant={"default"}>{t("signIn")}</Button>
          </Link>

          {/* language icon & dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className=" text-gray-900 dark:text-white ">
              <Button variant="outline" size="icon">
                <Earth className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-gray-50" />
              </Button>
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
          {/* theme */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
