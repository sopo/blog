import { registerUser } from "@/supabase/auth";
import { useMutation } from "react-query";

const useRegister = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess,
  });

  return mutation;
};
export default useRegister;
