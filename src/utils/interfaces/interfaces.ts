
export interface AuthProps {
  email: string;
  password: string;
}
export interface WriteArticleProps{
  title: string;
  description: string;
  image?: File | null;
}