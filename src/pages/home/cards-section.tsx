import { badgeVariants } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Trans } from "react-i18next"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const CardsSection:React.FC = () => {
    const { t } = useTranslation();
    return(
        <section className="col-span-2 sm:col-span-3 lg:col-span-2">
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
   
            <Card>
              <CardHeader>
                <img
                  src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
                  className="mb-2 rounded-xl object-cover w-full h-[200px]"
                />
                <CardTitle>
                  <Trans>homePage.cards.firstCard.title</Trans>
                  {t("homePage.cards.firstCard.title")}</CardTitle>
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
    
        </section>
    )
}
export default CardsSection