import { ModeToggle } from "../../mode-toggle";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import Searchbar from "./search";
import User from "./user";
import LangToggle from "./lang-toggle";
import Screen2Xl from "@/components/containers/page-containers/screen-2xl";
import Logout from './logout'
export default function Header() {
  
  return (
    <div className="border-b border-border-soft">
      <Screen2Xl>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <NavMenu />
          <div className="flex items-center space-x-4">
            <Searchbar />
            <User />
            <LangToggle />
            <ModeToggle />
            <Logout />
          </div>
        </div>
      </Screen2Xl>
    </div>
  );
}
