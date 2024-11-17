import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800">
        <h2 className="text-xl text-gray-900 dark:text-white">BitBlogs</h2>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center px-4 py-2 space-x-4">
          <NavigationMenuItem className=" text-gray-900 dark:text-white">
            <Link to="/">
            Home
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
      <ModeToggle />
      </div>
    </div>
  );
}
