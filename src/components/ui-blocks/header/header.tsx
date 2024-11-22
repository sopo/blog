import { ModeToggle } from "../../mode-toggle";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import Searchbar from "./search";
import SignIn from "./sign-in";
import LangToggle from "./lang-toggle";
import Screen2Xl from "@/components/containers/page-containers/screen-2xl";

import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import User from "./user"
export default function Header() {
  const user = useAtomValue(UserAtom)
  return (
    <div className="border-b border-border-soft">
      <Screen2Xl>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <NavMenu />
          <div className="flex items-center space-x-4">
            <Searchbar />
            {user ? <User />: <SignIn />}
            <LangToggle />
            <ModeToggle />
           
          </div>
        </div>
      </Screen2Xl>
    </div>
  );
}
