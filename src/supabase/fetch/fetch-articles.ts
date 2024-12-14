import { supabase } from "@/supabase";
import { Articles } from "@/utils/interfaces/types";  

interface SearchDataProps {
  searchData?: string;
}

export const fetchArticles = async ({ searchData }: SearchDataProps): Promise<Articles> => {
  try {

    let request = supabase.from("blogs").select("*");

    if (searchData) {
      request = request.or(`title_en.ilike.%${searchData}%,title_ka.ilike.%${searchData}%`);
     
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
