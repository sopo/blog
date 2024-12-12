import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Articles } from "@/utils/interfaces/types";
import { format } from "date-fns";
const CardsSection: React.FC<{ articles: Articles }> = ({ articles }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <section className="col-span-2 sm:col-span-3 lg:col-span-2">
      {articles.length > 0 &&
        articles.map((article) => {
          const formattedDate = format(
            new Date(article.created_at),
            "dd MMM yyyy",
          );
          const articleImageUrl = article.image_url
            ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGE_STORAGE_URL}${article.image_url}`
            : "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400";
          return (
            <Card key={article.id}>
              <CardHeader>
                <img
                  src={articleImageUrl}
                  className="mb-2 rounded-xl object-cover w-full h-[200px]"
                />
                <CardTitle>
                  {lang === "en" ? article.title_en : article.title_ka}{" "}
                </CardTitle>
                <CardDescription>
                  <p>
                    <Link to="" className="hover:underline">
                      {lang === "en" ? article.author_en : article.author_ka}
                    </Link>{" "}
                    • {formattedDate} •{" "}
                    {t("homePage.cards.firstCard.timeToRead")}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {lang === "en"
                    ? article.description_en
                    : article.description_ka}{" "}
                </p>
              </CardContent>
            </Card>
          );
        })}
    </section>
  );
};
export default CardsSection;
