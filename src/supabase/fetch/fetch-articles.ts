import { supabase } from "@/supabase";
import { SearchFormValues } from "@/utils/interfaces/interfaces";
import { Articles } from "@/utils/interfaces/types";  



export const fetchArticles = async ({ search }: SearchFormValues): Promise<Articles> => {
  try {

    let request = supabase.from("blogs").select("*");

    if (search) {
      request = request.or(`title_en.ilike.%${search}%,title_ka.ilike.%${search}%`);
     
    }

    const { data, error } = await request
      .order("id", { ascending: false })
      .throwOnError();

   
    if (error) {
      console.log("Error fetching articles", error);
      return [];  
    }

    
    return data;
  } catch (err) {
    console.error("Error fetching articles", err);  
    return [];  
  }
};
