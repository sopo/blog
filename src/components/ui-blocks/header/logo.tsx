import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Logo = () => {
    const { lang } = useParams();
    const { t} = useTranslation();
    return(
        <Link to={`/${lang}`}>
        <h2 className="text-2xl font-bold text-onSurface">
          {t("blog")}
        </h2>
      </Link>
    )
}
export default Logo