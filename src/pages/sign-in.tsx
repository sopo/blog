import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LabeledInputContainer from "@/components/containers/labeled-input-container";
import FormContainer from "@/components/containers/form-container";
import CardTitleContainer from "@/components/containers/card-title-container";
import CardContainer from "@/components/containers/card-container";
import SingleColumnPageContainer from "@/components/containers/single-column-page-container";
import CardFooterContainer from "@/components/containers/card-footer-container";
export default function SignIn() {
  const { t } = useTranslation();
  const {lang} = useParams()
  return (
    <SingleColumnPageContainer>
      <CardContainer>
        <CardTitleContainer>
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-200 text-center">
            {t("logIn.title")}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {t("logIn.description")}
          </p>
        </CardTitleContainer>

        <FormContainer>
          <LabeledInputContainer>
            <Label>{t("logIn.email")}</Label>
            <Input type="email" id="email" placeholder="john@example.com" />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("logIn.password")}</Label>
            <Input type="password" id="password" />
          </LabeledInputContainer>
          <Button
            variant={"default"}
            className="inline-flex items-center justify-center w-full">
            {t("logIn.title")}
          </Button>
        </FormContainer>

        <CardFooterContainer>
          <Link
            to="forgot-password"
            className="text-sm text-primary hover:underline"
          >
            {t("logIn.forgotPassword")}
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("logIn.accountQuestion")}
            <Link to={`/${lang}/sign-up`}  className="text-primary hover:underline">
              {t("logIn.signUp")}
            </Link>
          </p>
        </CardFooterContainer>

      </CardContainer>
    </SingleColumnPageContainer>
  );
}
