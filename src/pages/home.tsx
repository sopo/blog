import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import PersonList from "@/components/lists/person-list";
import PersonListItem from "@/components/lists/person-list-item";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="px-4 flex-grow">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3 space-y-8 flex flex-col">
          <Link to="">
            <Card>
              <CardHeader>
                <img
                  src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
                  className="mb-2 rounded-xl object-cover w-full h-[200px]"
                />
                <CardTitle>{t("homePage.cards.firstCard.title")}</CardTitle>
                <CardDescription>
                  <p>
                    <Link to="" className="hover:underline">
                      {t("homePage.cards.firstCard.author")}
                    </Link>{" "}
                    • {t("homePage.cards.firstCard.date")} •{" "}
                    {t("homePage.cards.firstCard.timeToRead")}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("homePage.cards.firstCard.content")}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.blockchain")}
                </Link>
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.technology")}
                </Link>
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.future")}
                </Link>
              </CardFooter>
            </Card>
          </Link>

          <Link to="">
            <Card>
              <CardHeader>
                <img
                  src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
                  className="mb-2 rounded-xl object-cover w-full h-[200px]"
                />
                <CardTitle>{t("homePage.cards.firstCard.title")}</CardTitle>
                <CardDescription>
                  <p>
                    <Link to="" className="hover:underline">
                      {t("homePage.cards.firstCard.author")}
                    </Link>{" "}
                    • {t("homePage.cards.firstCard.date")} •{" "}
                    {t("homePage.cards.firstCard.timeToRead")}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("homePage.cards.firstCard.content")}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.blockchain")}
                </Link>
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.technology")}
                </Link>
                <Link to="" className={badgeVariants({ variant: "secondary" })}>
                  {t("homePage.cards.firstCard.badges.future")}
                </Link>
              </CardFooter>
            </Card>
          </Link>
        </section>

        <aside className="md:w-1/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-semibold text-md">
                {t("homePage.cards.popularTags.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.blockchain")}
              </Link>
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.cryptocurrency")}
              </Link>
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.technology")}
              </Link>
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.programming")}
              </Link>
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.ai")}
              </Link>
              <Link to="" className={badgeVariants({ variant: "default" })}>
                {t("homePage.cards.popularTags.machineLearning")}
              </Link>
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
                <PersonListItem
                  name={t("homePage.cards.featuredAuthors.aliceJohnson.name")}
                  proffesion={t(
                    "homePage.cards.featuredAuthors.aliceJohnson.proffesion"
                  )}
                  imgSrc=""
                />
                <PersonListItem
                  name={t("homePage.cards.featuredAuthors.bobSmith.name")}
                  proffesion={t(
                    "homePage.cards.featuredAuthors.bobSmith.proffesion"
                  )}
                  imgSrc=""
                />
                <PersonListItem
                  name={t("homePage.cards.featuredAuthors.carolWilliams.name")}
                  proffesion={t(
                    "homePage.cards.featuredAuthors.carolWilliams.proffesion"
                  )}
                  imgSrc=""
                />
              </PersonList>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
