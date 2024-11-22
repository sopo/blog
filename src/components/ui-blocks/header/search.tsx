import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";
const Searchbar: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="p-2 rounded-full cursor-pointer">
          <Search className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Searchbar;
