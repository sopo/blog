import { supabase } from "@/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Trans, useTranslation } from "react-i18next";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import FormContainer from "@/components/containers/form-element-containers/form-container";

import { Textarea } from "@/components/ui/textarea"


import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import AuthSection from "@/components/containers/section-containers/auth-section";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WriteArticleProps } from "@/utils/interfaces/interfaces";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";

const Write:React.FC = () => {
    const user = useAtomValue(ProfileAtom)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<WriteArticleProps>({
        defaultValues: {
          title: "",
          description: ""
        }
      })
      const { t } = useTranslation();
      
      const title = register("title", { required: t("logIn.errors.emptyEmailError") });
      const description = register("description", {
        required: t("writeArticle.fields.descrptionError"),
      });
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setValue("image", file); 
      };
      const image=register("image")
      const onSubmit = async (data: WriteArticleProps) => {
        const { title, description, image } = data;
        if (image) {
          try {
            const file = image;
            const fileName = `${Date.now()}_${file.name}`;
      
            
            const { error: uploadError } = await supabase.storage
              .from("blog_images")
              .upload(fileName, file);
      
            if (uploadError) {
              console.error("Error uploading file:", uploadError.message);
              return; 
            }
      
           
            const { data: insertedData, error: insertError } = await supabase
              .from("blogs")
              .insert([
                {
                  title: title,
                  description: description,
                  image_url: fileName, 
                  user_id: user?.id, 
                },
              ]);
      
            if (insertError) {
              console.error("Error inserting article:", insertError.message);
              return;
            }
      
            console.log("Article inserted successfully:", insertedData);
            // რედაირექთი ჩავსვა
          } catch (err) {
            console.error("Error submitting article:", err);
          }
        } 
      
        console.log("Article submitted:", data);
      };
      
    return(
        <AuthSection>
      <Card>
        <CardHeader>
          <CardTitle>
            <TextCenterSmallBlock title={`${t("writeArticle.formTitle")}`} description={""} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormContainer onSubmit={handleSubmit((data) => {
            onSubmit(data)
            console.log("data", data)
          })}>
            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.title")}</Label>
              <Input
                {...title}
                type="text"
                id="title"
                placeholder=""
              />
              <p className="paragraph-small-error">{errors.title?.message}</p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.description")}</Label>
              <Textarea
                {...description}
                id="description"
              />
              <p className="paragraph-small-error">{errors.description?.message}</p>
            </LabeledInputContainer>


            <LabeledInputContainer>
              <Label>{t("writeArticle.fields.description")}</Label>
              <Input
                {...image}
                onChange={handleImageChange}
                id="image"
                type="file"
              />
              <p className="paragraph-small-error">{errors.description?.message}</p>
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
    )
}

export default Write;