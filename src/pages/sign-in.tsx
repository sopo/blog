import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import FormContainer from "@/components/containers/form-element-containers/form-container";
import { useMutation } from "@tanstack/react-query";
import { login } from "../supabase/auth";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AUTH_PATHS } from "@/routes/auth-layout/auth.enums";
type FormFields = {
  email: string;
  password: string;
};
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate(`/${lang}`);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = register("email", {
    required: true,
    pattern: {
      value: emailPattern,
      message: t("logIn.errors.invalidEmailError"),
    },
  });
  const password = register("password", {
    required: true,
    minLength: {
      value: 4,
      message: t("logIn.errors.insufficientPasswordError"),
    },
  });
  return (
    <AuthSection>
      <Card>
        <CardHeader>
          <CardTitle>
            <TextCenterSmallBlock
              title={`${t("logIn.title")}`}
              description={`${t("logIn.description")}`}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormContainer
            onSubmit={handleSubmit((data) => {
              handleLogin(data);
            })}
          >
            <LabeledInputContainer>
              <Label>{t("logIn.email")}</Label>
              <Input
                {...email}
                type="email"
                id="email"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="paragraph-small-error">
                  {" "}
                  {t("logIn.errors.emptyEmailError")}
                </p>
              )}
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("logIn.password")}</Label>
              <Input {...password} type="password" id="password" />
              {errors.password && (
                <p className="paragraph-small-error">
                  {t("logIn.errors.emptyPasswordError")}
                </p>
              )}
            </LabeledInputContainer>

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
              to={`/${lang}/${AUTH_PATHS.AUTH}/${AUTH_PATHS.SIGN_UP}`}
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
