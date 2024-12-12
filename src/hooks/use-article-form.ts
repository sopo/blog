import { useForm } from "react-hook-form";
import { Article } from "@/utils/interfaces/interfaces";
import { supabase } from "@/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useArticleForm = (user: any) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const navigate = useNavigate();
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setUploadedImage(file);
  };

  const onSubmit = async (data: Article) => {
    const { title_en, description_en, title_ka, description_ka } = data;
    if (uploadedImage) {
      try {
        const file = uploadedImage;
        const fileName = file.name + new Date().toTimeString();
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from("blog_images")
          .upload(fileName, file);
        if (uploadError) {
          console.error("Error uploading file:", uploadError.message);
          return;
        }
        const { error: insertError } = await supabase.from("blogs").insert([
          {
            title_en,
            description_en,
            title_ka,
            description_ka,
            image_url: uploadData.fullPath,
            user_id: user?.id,
            author_ka: user?.full_name_ka,
            author_en: user?.full_name_en,
          },
        ]);
        if (insertError) {
          console.error("Error inserting article:", insertError.message);
          return;
        }
        navigate("/");
      } catch (err) {
        console.error("Error submitting article:", err);
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleImageChange,
    onSubmit,
  };
};
