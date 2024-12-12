import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Link to="sign-in">
      <Button variant={"default"}>{t("signIn")}</Button>
    </Link>
  );
};
export default SignIn;
