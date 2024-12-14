import CardsSection from "./cards-section";
import CardsAside from "./cards-aside";
import Screen2Xl from "@/components/containers/page-containers/screen-2xl";
import ContainerGridCol3 from "@/components/containers/grid/container-grid-c-3";
import { fetchArticles } from "@/supabase/fetch/fetch-articles";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || ""; 
  const {
    data: articles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles", searchQuery],
    queryFn: () => fetchArticles({ search: searchQuery }),
    
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  console.log("search", searchParams)

  return (
    <Screen2Xl>
      <ContainerGridCol3>
        <CardsSection articles={articles || []} />
        <CardsAside />
      </ContainerGridCol3>
    </Screen2Xl>
  );
}
