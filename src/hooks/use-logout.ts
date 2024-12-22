import { logout } from "@/api/auth";
import { useMutation } from "react-query";

export const useLogOut = () => {
  return useMutation({
    mutationFn: logout,
  });
};
