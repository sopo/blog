import { Outlet } from "react-router-dom";
import Header from "@/components/ui-blocks/header/header";
import Footer from "@/components/ui-blocks/footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Root() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className="bg-color-surface">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
