import { supabase } from "@/supabase";
import { Articles } from "@/utils/interfaces/types";
export const fetchArticles = async (): Promise<Articles> => {
    try{
      const {data, error} = await supabase.from("blogs").select("*").order("id", {ascending: false}).throwOnError();
      if(error){
        console.log("error fetching articles", error)
        return []
      }
      return data;
    }catch(err){
      console.error("error fetching articles", err)
      return []
    }
  }