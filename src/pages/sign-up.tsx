import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LabeledInputContainer from "../components/containers/labeled-input-container";
import FormContainer from "../components/containers/form-container";
import CardTitleContainer from "../components/containers/card-containers/elevated-card-containers/card-title-container";
import CardContainer from "../components/containers/card-containers/elevated-card-containers/card-container";
import SingleColumnPageContainer from "../components/containers/single-column-page-container";
import CardFooterContainer from "../components/containers/card-containers/elevated-card-containers/card-footer-container";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../supabase/auth"
export default function SignUp() {
    const {lang} = useParams()
  const { t } = useTranslation();

  const [registerData, setRegisterData] = useState({email: "", password: ""})
  const {mutate: handleRegister} = useMutation({
    mutationKey: ["register"],
    mutationFn: register
  })
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(registerData.email && registerData.password){
      handleRegister(registerData)

    }
  
  }
  return (
    <SingleColumnPageContainer>
      <CardContainer>
        <CardTitleContainer>
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-200 text-center">
            {t("signUp.title")}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {t("logIn.description")}
          </p>
        </CardTitleContainer>

        <FormContainer onSubmit={handelSubmit}>
        <LabeledInputContainer>
            <Label>{t("signUp.name")}</Label>
            <Input type="text" id="email" placeholder="John Doe" />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("signUp.email")}</Label>
            <Input value={registerData.email} onChange={(e) => {
              setRegisterData({
                email: e.target.value,
                password: registerData.password
              })
            }} type="email" id="email" placeholder="john@example.com" />
          </LabeledInputContainer>
          <LabeledInputContainer>
            <Label>{t("signUp.password")}</Label>
            <Input value={registerData.password} onChange={(e) => {
              setRegisterData({
                email: registerData.email, 
                password: e.target.value
              })
            }} type="password" id="password" />
          </LabeledInputContainer>
          <Button
           
            variant={"default"}
            className="inline-flex items-center justify-center w-full">
            {t("signUp.title")}
          </Button>
        </FormContainer>

        <CardFooterContainer>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("signUp.accountQuestion")}
            <Link to={`/${lang}/sign-in`} className="text-primary hover:underline">
              {t("signUp.signIn")}
            </Link>
          </p>
        </CardFooterContainer>

      </CardContainer>
    </SingleColumnPageContainer>
  );
}
