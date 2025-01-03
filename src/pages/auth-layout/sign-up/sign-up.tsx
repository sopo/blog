import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";
import FormContainer from "@/components/containers/form-element-containers/form-container";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AUTH_PATHS } from "../auth.enums";
import useRegister from "@/hooks/use-register";

type FormFields = {
  email: string;
  password: string;
};
export default function SignUp() {
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
  const { lang } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate: handleRegister } = useRegister(() => {
    navigate(`/${lang}`);
  });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = register("email", {
    required: t("signUp.errors.emptyEmailError"),
    pattern: {
      value: emailPattern,
      message: t("signUp.errors.invalidEmailError"),
    },
  });
  const password = register("password", {
    required: t("signUp.errors.emptyPasswordError"),
    minLength: {
      value: 4,
      message: t("signUp.errors.insufficientPasswordError"),
    },
  });

  return (
    <AuthSection>
      <Card>
        <CardHeader>
          <TextCenterSmallBlock
            title={`${t("signUp.title")}`}
            description={`${t("signUp.description")}`}
          />
        </CardHeader>
        <CardContent>
          <FormContainer
            onSubmit={handleSubmit((data) => {
              handleRegister(data);
            })}
          >
            <LabeledInputContainer>
              <Label>{t("signUp.name")}</Label>
              <Input type="text" id="name" placeholder="John Doe" />
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("signUp.email")}</Label>
              <Input
                {...email}
                type="email"
                id="email"
                placeholder="john@example.com"
              />
              <p className="paragraph-small-error">{errors.email?.message}</p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("signUp.password")}</Label>
              <Input {...password} type="password" id="password" />
              <p className="paragraph-small-error">
                {errors.password?.message}
              </p>
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
              to={`/${lang}/${AUTH_PATHS.AUTH}/${AUTH_PATHS.SIGN_IN}`}
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
