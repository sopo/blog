import { AuthProps } from "@/utils/interfaces/auth";
import { supabase } from "../index";

export const register = ({ email, password }: AuthProps) => {
  return supabase.auth.signUp({ email, password });
};

export const login = async ({ email, password }: AuthProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    if (error.message.includes("invalid login credentials")) {
      throw new Error("User is not registered");
    }
    throw new Error(error.message);
  }
  return data;
};

export const logout = () => {
  return supabase.auth.signOut();
};
