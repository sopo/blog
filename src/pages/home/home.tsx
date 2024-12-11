import CardsSection from "./cards-section";
import CardsAside from "./cards-aside";
import Screen2Xl from "@/components/containers/page-containers/screen-2xl";
import ContainerGridCol3 from "@/components/containers/grid/container-grid-c-3";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { Articles } from "@/utils/interfaces/types";
export default function Home() {
  const [articles, setArticles] = useState<Articles | undefined>(undefined)

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const {data, error} = await supabase.from("blogs").select("*").order("id", {ascending: false}).throwOnError();
        if(error){
          console.log("error fetching articles", error)
          return
        }
        setArticles(data);
        console.log("fetched articles", data)
      }catch(err){
        console.error("error fetching articles", err)
      }
     
    }
    fetchArticles()
  }, [])
  return (
    <Screen2Xl>
      <ContainerGridCol3>
        <CardsSection articles={articles || []}/>
        <CardsAside />
      </ContainerGridCol3>
    </Screen2Xl>
  );
}
