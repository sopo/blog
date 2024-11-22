import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "./logout";
const User: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>SOFO</DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-60">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <Logout/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default User;
