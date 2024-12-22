import { Database } from "../supabase/database.types";

export type ArticlesListProps =
  Database["public"]["Tables"]["blogs"]["Insert"][];
export type ArticleProps = Database["public"]["Tables"]["blogs"]["Insert"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
