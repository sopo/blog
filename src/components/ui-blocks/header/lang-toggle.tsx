import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { useTranslation } from "react-i18next";
  import { NavLink } from "react-router-dom";
  import { Earth } from "lucide-react";
const LangToggle:React.FC=()=> {
    const { i18n } = useTranslation();
    const handleLanguageChange = (language: string) => {
      i18n.changeLanguage(language);
    };
    return(
        <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="p-2 rounded-full cursor-pointer">
            <Earth className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <NavLink to={"/en"}>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("en")}
            >
              English
            </DropdownMenuItem>
          </NavLink>
          <NavLink to={"/ka"}>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("ka")}
            >
              ქართული
            </DropdownMenuItem>
          </NavLink>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
export default LangToggle