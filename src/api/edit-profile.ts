import { supabase } from "../supabase";
import { Database } from "../supabase/database.types";
export const editProfile = async (
  data: Database["public"]["Tables"]["profiles"]["Insert"],
) => {
  const { data: response, error } = await supabase
    .from("profiles")
    .upsert(data)
    .throwOnError();

  if (error) {
    throw new Error(error.message);
  }

  return response;
};
