import { Button } from "@/components/ui/button";
import { logout } from "@/supabase/auth";
import { useMutation } from "react-query";
const Logout: React.FC = () => {
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

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
