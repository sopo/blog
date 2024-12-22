import { QUERY_KEYS } from "./enums";
import { getUserProfile } from "@/api/get-profile";
import { Profile } from "@/interfaces/types";
import { useQuery } from "react-query";

const useGetProfile =({
  id,
  onSuccess,
}: {
  id: string;
  onSuccess: (data: Profile) => void;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_PROFILE, id],
    queryFn: () => getUserProfile(id),
    onSuccess,
  });
};

export default useGetProfile;
