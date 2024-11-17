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
  } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { Link, NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Header() {
    const { lang } = useParams();
    const to = lang === 'en' ? '/ka' : '/en';
    const {t, i18n} = useTranslation()
    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
      };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800">
        <h2 className="text-xl text-gray-900 dark:text-white"> {t("blog")}</h2>
       
      <NavigationMenu>
        <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
          <NavigationMenuItem className=" text-gray-900 dark:text-white">
            <Link to="/">
            home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className=" text-gray-900 dark:text-white">
            <Link to="write">
            Write
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className=" text-gray-900 dark:text-white">
            <Link to="about">
            About
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    <div className="flex items-center px-4 py-2 space-x-4">
      <Link to="sign-up">
        <Button className="bg-purple-500 hover:bg-purple-700 text-purple-50 rounded">
          Sign up
        </Button>
      </Link>
      <DropdownMenu >
  <DropdownMenuTrigger className=" text-gray-900 dark:text-white">Language</DropdownMenuTrigger>
  <DropdownMenuContent className=" bg-white dark:bg-gray-800">
    <DropdownMenuSeparator />
    <NavLink to={to}>
    <DropdownMenuItem className=" text-gray-900 dark:text-white"
    onClick={() => handleLanguageChange("en")}
    >English</DropdownMenuItem>
    </NavLink>
    <NavLink to={to}>
    <DropdownMenuItem className=" text-gray-900 dark:text-white"
    onClick={() => handleLanguageChange("ka")}
    >ქართული</DropdownMenuItem>
    </NavLink>
  </DropdownMenuContent>
</DropdownMenu>
      <ModeToggle />
      </div>
    </div>
  );
}
