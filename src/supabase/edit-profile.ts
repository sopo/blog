import { supabase } from "."; 

export const editProfile = async (data: { id: string, full_name_ka: string, full_name_en: string, avatar_url: string, phone_number: string }) => {
  const { data: response, error } = await supabase
    .from('profiles')
    .upsert(data)
    .throwOnError();
  
  if (error) {
    throw new Error(error.message);
  }

  return response;
};