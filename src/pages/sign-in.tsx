import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import FormContainer from "@/components/containers/form-element-containers/form-container";
import { useMutation } from "@tanstack/react-query";
import { login } from "../supabase/auth";
import { useState } from "react";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function SignIn() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("")
  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error("Login failed", error);
      setErrorMessage(error.message)
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      handleLogin(loginData);
    }
  };
  return (
    <AuthSection>
      <Card>
        <CardHeader>
          <CardTitle>
            <TextCenterSmallBlock title={`${t("logIn.title")}`} description={`${t("logIn.description")}`}/>
          </CardTitle>
        </CardHeader>
        <CardContent>
        <FormContainer onSubmit={handleSubmit}>
          <LabeledInputContainer>
            <Label>{t("logIn.email")}</Label>
            <Input
              value={loginData.email}
              onChange={(e) => {
                setLoginData({
                  email: e.target.value,
                  password: loginData.password,
                });
              }}
              type="email"
              id="email"
              placeholder="john@example.com"
            />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("logIn.password")}</Label>
            <Input
              value={loginData.password}
              onChange={(e) => {
                setLoginData({
                  password: e.target.value,
                  email: loginData.email,
                });
              }}
              type="password"
              id="password"
            />
          </LabeledInputContainer>
          {errorMessage && <p className="paragraph-small-error">{errorMessage}</p> }
          <Button
            variant={"default"}
            className="inline-flex items-center justify-center w-full"
          >
            {t("logIn.title")}
          </Button>
        </FormContainer>
        </CardContent>
        <CardFooter className="justify-between">
        <Link
            to="forgot-password"
            className="text-sm text-primary hover:underline"
          >
            {t("logIn.forgotPassword")}
          </Link>
          <p className="paragraph-small-secondary">
           {`${t("logIn.accountQuestion")} `}
            <Link
              to={`/${lang}/sign-up`}
              className="text-primary hover:underline"
            >
              <Trans>logIn.signUp</Trans>
            </Link>
          </p>
        </CardFooter>
      </Card>
      </AuthSection>


  );
}
