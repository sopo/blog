import { supabase } from "@/supabase";

export const getUserProfile = async (id: string) => {
  return (await supabase.from("profiles").select().eq("id", id).single()).data;
};
