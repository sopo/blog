import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LabeledInputContainer from "../components/containers/form-element-containers/labeled-input-container";
import FormContainer from "../components/containers/form-element-containers/form-container";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../supabase/auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";

export default function SignUp() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.email && registerData.password) {
      handleRegister(registerData);
    }
  };
  return (
    <AuthSection>
      <Card>
        <CardHeader>
        <TextCenterSmallBlock title={`${t("signUp.title")}`} description={`${t("logIn.description")}`}/>
        </CardHeader>
        <CardContent>
        <FormContainer onSubmit={handelSubmit}>
          <LabeledInputContainer>
            <Label>{t("signUp.name")}</Label>
            <Input type="text" id="email" placeholder="John Doe" />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("signUp.email")}</Label>
            <Input
              value={registerData.email}
              onChange={(e) => {
                setRegisterData({
                  email: e.target.value,
                  password: registerData.password,
                });
              }}
              type="email"
              id="email"
              placeholder="john@example.com"
            />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("signUp.password")}</Label>
            <Input
              value={registerData.password}
              onChange={(e) => {
                setRegisterData({
                  email: registerData.email,
                  password: e.target.value,
                });
              }}
              type="password"
              id="password"
            />
          </LabeledInputContainer>
          <Button
            variant={"default"}
            className="inline-flex items-center justify-center w-full"
          >
            {t("signUp.title")}
          </Button>
        </FormContainer>
        </CardContent>
        <CardFooter>
        <p className="paragraph-small-secondary">
            {t("signUp.accountQuestion")}
            <Link
              to={`/${lang}/sign-in`}
              className="text-primary hover:underline"
            >
              {t("signUp.signIn")}
            </Link>
          </p>
        </CardFooter>
      </Card>
      </AuthSection>

  );
}
