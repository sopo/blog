import PersonList from "@/components/lists/person-list";
import PersonListItem from "@/components/lists/person-list-item";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TagBlock from "@/components/ui-blocks/tag-block";
import { getPopularTags } from "@/utils/static data/popular-tags";
import { ROOT_PATHS } from "@/pages/root-layout/root.enums";

const CardsAside: React.FC = () => {
  const { t } = useTranslation();
  const popularTags = getPopularTags(t);
  return (
    <aside className="hidden lg:block col-span-1">
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-md">
            {t("homePage.cards.popularTags.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TagBlock content={popularTags} variant="default" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-md">
            {t("homePage.cards.featuredAuthors.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <PersonList>
            <Link to={`${ROOT_PATHS.AUTHOR}/1`}>
              <PersonListItem
                name={t("homePage.cards.featuredAuthors.aliceJohnson.name")}
                proffesion={t(
                  "homePage.cards.featuredAuthors.aliceJohnson.proffesion",
                )}
                imgSrc=""
              />
            </Link>
            <Link to={`${ROOT_PATHS.AUTHOR}/1`}>
              <PersonListItem
                name={t("homePage.cards.featuredAuthors.bobSmith.name")}
                proffesion={t(
                  "homePage.cards.featuredAuthors.bobSmith.proffesion",
                )}
                imgSrc=""
              />
            </Link>
            <Link to={`${ROOT_PATHS.AUTHOR}/1`}>
              <PersonListItem
                name={t("homePage.cards.featuredAuthors.carolWilliams.name")}
                proffesion={t(
                  "homePage.cards.featuredAuthors.carolWilliams.proffesion",
                )}
                imgSrc=""
              />
            </Link>
          </PersonList>
        </CardContent>
      </Card>
    </aside>
  );
};
export default CardsAside;
