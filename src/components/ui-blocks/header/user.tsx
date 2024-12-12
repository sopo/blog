import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "@/pages/profile/avatar";
import Logout from "./logout";
import { Link } from "react-router-dom";
interface UserProps {
  avatar_url?: string | null;
}
const User: React.FC<UserProps> = ({ avatar_url }) => {
  const avatarUrl = avatar_url ?? undefined;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar avatar_url={avatarUrl} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-80">
        <DropdownMenuSeparator />
        <Link to="profile">
          <DropdownMenuItem>My profile</DropdownMenuItem>
        </Link>
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default User;
