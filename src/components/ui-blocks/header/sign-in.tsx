import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { AUTH_PATHS } from "@/pages/auth-layout/auth.enums";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Link to={`${AUTH_PATHS.AUTH}/${AUTH_PATHS.SIGN_IN}`}>
      <Button variant={"default"}>{t("signIn")}</Button>
    </Link>
  );
};
export default SignIn;
