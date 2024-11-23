import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "./logout";
import { Link } from "react-router-dom";
const User: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>SOFO</DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-80">
        <DropdownMenuSeparator />
        <Link to="profile">
        <DropdownMenuItem>
            My profile
            </DropdownMenuItem>
            </Link>
        <Logout/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default User;
