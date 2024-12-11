import { supabase } from "@/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Trans, useTranslation } from "react-i18next";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import FormContainer from "@/components/containers/form-element-containers/form-container";

import { Textarea } from "@/components/ui/textarea";

import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/utils/interfaces/interfaces";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Write: React.FC = () => {
    const [uploadedImage, setUploadedImage] =useState<File | null>(null)
  const user = useAtomValue(ProfileAtom);
  setTimeout(() => {console.log("user", user)}, 1000)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Article>({
    defaultValues: {
      title_en: "",
      description_en: "",
      title_ka: "",
      description_ka: "",
    },
  });
  const { t } = useTranslation();
  const navigate = useNavigate()
  const title_en = register("title_en", {
    required: t("logIn.errors.emptyEmailError"),
  });
  const title_ka = register("title_ka", {
    required: t("logIn.errors.emptyEmailError"),
  });
  const description_en = register("description_en", {
    required: t("writeArticle.fields.descrptionError"),
  });
  const description_ka = register("description_ka", {
    required: t("writeArticle.fields.descrptionError"),
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setUploadedImage(file)
  };
  const onSubmit = async (data: Article) => {
    const { title_en, description_en, title_ka, description_ka } = data;
    if (uploadedImage) {
      try {
        const file = uploadedImage;
        const fileName = file.name+new Date().toTimeString();
        const { error: uploadError, data } = await supabase.storage
          .from("blog_images")
          .upload(fileName, file)
        if (uploadError) {
          console.error("Error uploading file:", uploadError.message);
          return;
        }
        const { error: insertError } = await supabase
          .from("blogs")
          .insert([
            {
              title_en: title_en,
              description_en: description_en,
              title_ka: title_ka,
              description_ka: description_ka,
              image_url: data.fullPath,
              user_id: user?.id,
              author: user?.full_name_ka
            },
          ]);
        if (insertError) {
          console.error("Error inserting article:", insertError.message);
          return;
        }
        navigate("/")
      } catch (err) {
        console.error("Error submitting article:", err);
      }
    }
  };

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
              <Input {...title_en} type="text" id="title_en" placeholder="" />
              <p className="paragraph-small-error">
                {errors.title_en?.message}
              </p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.titleKa")}</Label>
              <Input {...title_ka} type="text" id="title_ka" placeholder="" />
              <p className="paragraph-small-error">
                {errors.title_en?.message}
              </p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.descriptionEn")}</Label>
              <Textarea {...description_en} id="description_en" />
              <p className="paragraph-small-error">
                {errors.description_en?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.descriptionKa")}</Label>
              <Textarea {...description_ka} id="description_ka" />
              <p className="paragraph-small-error">
                {errors.description_ka?.message}
              </p>
            </LabeledInputContainer>

            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.imageUrl")}</Label>
              <Input onChange={handleImageChange} id="image" type="file" />
              <p className="paragraph-small-error">
                {errors.description_en?.message}
              </p>
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
