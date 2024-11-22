import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "./logout";
const User: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>SOFO</DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-80">
        <DropdownMenuSeparator />
        <DropdownMenuItem>My profile</DropdownMenuItem>
        <Logout/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default User;
