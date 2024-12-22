import { Button } from "@/components/ui/button";
import { useLogOut } from "@/hooks/use-logout";
const Logout: React.FC = () => {
  const { mutate: handleLogout } = useLogOut()
  return (
    <Button
      variant={"secondary"}
      className="inline-flex flex-grow m-4"
      onClick={() => handleLogout()}
    >
      Log out
    </Button>
  );
};
export default Logout;
