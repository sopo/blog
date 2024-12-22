import { Session } from "@supabase/supabase-js";
import { QUERY_KEYS } from "./enums";
import { getSession } from "@/api/get-session";
import { useQuery } from "react-query";
const useGetUserSession = (onSuccess: (data: Session | null) => void) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_SESSION],
    queryFn: async () => {
      return await getSession();
    },
    onSuccess: onSuccess,
  });
};
export default useGetUserSession;
