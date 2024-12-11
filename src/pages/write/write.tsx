import FormContainer from "@/components/containers/form-element-containers/form-container";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import AuthSection from "@/components/containers/section-containers/auth-section";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useArticleForm } from "@/hooks/use-article-form";
import { ProfileAtom } from "@/store/auth";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useAtomValue } from "jotai";
import { useTranslation, Trans } from "react-i18next";

; 
const Write: React.FC = () => {
    const user = useAtomValue(ProfileAtom);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    handleImageChange,
    onSubmit,
  } = useArticleForm(user);

  return (
    <AuthSection>
      <Card>
        <CardHeader>
          <CardTitle>
            <TextCenterSmallBlock
              title={`${t("writeArticle.formTitle")}`}
              description={""}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormContainer
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              console.log("data", data);
            })}
          >
            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.titleEn")}</Label>
              <Input {...register("title_en", { required: t("writeArticle.fields.mandatoryError") })} type="text" id="title_en" placeholder="" />
              <p className="paragraph-small-error">
                {errors.title_en?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.titleKa")}</Label>
              <Input {...register("title_ka", { required: t("writeArticle.fields.mandatoryError") })} type="text" id="title_ka" placeholder="" />
              <p className="paragraph-small-error">
                {errors.title_ka?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.descriptionEn")}</Label>
              <Textarea {...register("description_en", { required: t("writeArticle.fields.mandatoryError") })} id="description_en" />
              <p className="paragraph-small-error">
                {errors.description_en?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.descriptionKa")}</Label>
              <Textarea {...register("description_ka", { required: t("writeArticle.fields.mandatoryError") })} id="description_ka" />
              <p className="paragraph-small-error">
                {errors.description_ka?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.imageUrl")}</Label>
              <Input onChange={handleImageChange} id="image" type="file" />
            </LabeledInputContainer>

            <Button
              variant={"default"}
              className="inline-flex items-center justify-center w-full"
            >
              <Trans>writeArticle.button</Trans>
            </Button>
          </FormContainer>
        </CardContent>
      </Card>
    </AuthSection>
  );
};

export default Write;
