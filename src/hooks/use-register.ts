import { registerUser } from "@/api/auth";
import { useMutation } from "react-query";

const useRegister = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess,
  });

  return mutation;
};
export default useRegister;
