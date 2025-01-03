export interface AuthProps {
  email: string;
  password: string;
}
export interface Article {
  id: number;
  title_en: string | null;
  description_en: string | null;
  title_ka: string | null;
  description_ka: string | null;
  author_en: string | null;
  author_ka: string | null;
  image_url: string | null;
  user_id: string | null;
  created_at: string;
}

export interface SearchFormValues {
  search: string;
}
