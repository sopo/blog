import { supabase } from "@/supabase";
export const fetchArticles = async () => {
    try{
      const {data, error} = await supabase.from("blogs").select("*").order("id", {ascending: false}).throwOnError();
      if(error){
        console.log("error fetching articles", error)
        return
      }
      return data;
    }catch(err){
      console.error("error fetching articles", err)
    }
  }