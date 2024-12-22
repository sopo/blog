import { QUERY_KEYS } from "./enums";
import { ArticleProps } from "@/interfaces/types";
import { fetchArticles } from "@/api/fetch-articles";
import { UseQueryResult, useQuery } from "react-query";

const useGetArticles = <T = ArticleProps[]>({
  searchQuery,
}: {
  searchQuery: string;
}): UseQueryResult<T, Error> => {
  return useQuery<ArticleProps[], Error, T>({
    queryKey: [QUERY_KEYS.ARTICLES, searchQuery],
    queryFn: async () => {
      const result = await fetchArticles({ search: searchQuery });
      return result ?? [];
    },
  });
};
export default useGetArticles;
