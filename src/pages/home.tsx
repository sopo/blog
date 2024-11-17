import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge"
import { Link } from "react-router-dom";
export default function Home() {
    const { t } = useTranslation();
  return (
  <div className="px-4 flex-grow">
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
    <section className="md:w-2/3 space-y-8 flex flex-col">
    <Link to="">
    <Card>
      <CardHeader>
      <img src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400" className="rounded-xl object-cover w-full h-[200px]"/>
        <CardTitle>{t("homePage.cards.firstCard.title")}</CardTitle>
        <CardDescription>
            <p><Link to="" className="hover:underline">{t("homePage.cards.firstCard.author")}</Link> • {t("homePage.cards.firstCard.date")} • {t("homePage.cards.firstCard.timeToRead")}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{t("homePage.cards.firstCard.content")}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
      <Link to="" className={badgeVariants({ variant: "secondary" })}>{t("homePage.cards.firstCard.badges.blockchain")}</Link>
      <Link to="" className={badgeVariants({ variant: "secondary" })}>{t("homePage.cards.firstCard.badges.technology")}</Link>
      <Link to="" className={badgeVariants({ variant: "secondary" })}>{t("homePage.cards.firstCard.badges.future")}</Link>
      </CardFooter>
    </Card>
    </Link>
    <Card>
      <CardHeader>
      <img src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400" className="rounded-xl object-cover w-full h-[200px]"/>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    </section>
  
    <aside className="md:w-1/3 space-y-8">
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-md">Popular Tags</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
      <Link to="" className={badgeVariants({ variant: "default" })}>Badge</Link>
      <Link to="" className={badgeVariants({ variant: "default" })}>Badge</Link>
      <Link to="" className={badgeVariants({ variant: "default" })}>Badge</Link>
      <Link to="" className={badgeVariants({ variant: "default" })}>Badjhkhkjhkhkhkhge</Link>
      <Link to="" className={badgeVariants({ variant: "default" })}>Badge</Link>
      <Link to="" className={badgeVariants({ variant: "default" })}>Badge</Link>
      </CardContent>
    </Card>
    </aside>
    </div>
  </div>


  );
}
