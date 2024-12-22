import { Button } from "@/components/ui/button";
import { logout } from "@/supabase/auth";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useMutation } from "react-query";
const Logout: React.FC = () => {
  const user = useAtomValue(UserAtom);
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
  useEffect(() => {
    console.log("user", user);
  }, [user]);

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
