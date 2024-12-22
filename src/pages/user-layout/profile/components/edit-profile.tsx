import FormContainer from "@/components/containers/form-element-containers/form-container";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import AuthSection from "@/components/containers/section-containers/auth-section";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { ProfileAtom, UserAtom } from "@/store/auth";
import { editProfile } from "@/supabase/edit-profile";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import useGetProfile from "@/hooks/use-get-profile";
type FormFields = {
  id: string;
  full_name_ka: string;
  full_name_en: string;
  avatar_url: string;
  phone_number: string;
};
const EditProfile: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      full_name_ka: "",
      full_name_en: "",
      avatar_url: "",
      phone_number: "",
    },
  });
  const user = useAtomValue(UserAtom);
  const setProfile = useSetAtom(ProfileAtom);
  const [data, setData] = useState({
    full_name_ka: "",
    full_name_en: "",
    avatar_url: "",
    phone_number: "",
  });
  const userId = user ? user.user.id : "";

useGetProfile({
  id: userId,
  onSuccess: (data) => {
    setData({
              full_name_ka: data.full_name_ka || "Georgian name",
              full_name_en: data.full_name_en || "english name",
              avatar_url: data.avatar_url || "www.example.com",
              phone_number: data.phone_number || "+00 00 00 00",
            });
            setProfile({
              ...data,
            });
  }
})
  const { mutate: handleChangeData } = useMutation({
    mutationFn: editProfile,
  });

  const full_name_ka = register("full_name_ka", {
    maxLength: {
      value: 10,
      message: t("editProfile.errors.nameError"),
    },
  });
  const full_name_en = register("full_name_en", {
    maxLength: {
      value: 10,
      message: t("editProfile.errors.nameError"),
    },
  });
  const avatar_url = register("avatar_url");
  const phone_number = register("phone_number", {
    maxLength: {
      value: 10,
      message: t("editProfile.errors.phoneError"),
    },
  });

  return (
    <AuthSection>
      <Card>
        <CardHeader>
          <TextCenterSmallBlock title="Edit profile" description="" />
        </CardHeader>
        <CardContent>
          <FormContainer
            onSubmit={handleSubmit((data) => {
              if (user?.user.id) {
                const formData = { ...data, id: user.user.id };
                handleChangeData(formData);
              }
            })}
          >
            <LabeledInputContainer>
              <Label>Georgian name</Label>
              <Input
                {...full_name_ka}
                type="text"
                id="fullNameKa"
                placeholder={data.full_name_ka}
              />
              <p className="paragraph-small-error">
                {errors.full_name_ka?.message}
              </p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>English name</Label>
              <Input
                {...full_name_en}
                type="text"
                id="fullNameEn"
                placeholder={data.full_name_en}
              />
              <p className="paragraph-small-error">
                {errors.full_name_en?.message}
              </p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>Phone number</Label>
              <Input
                {...phone_number}
                type="text"
                id="phoneNumber"
                placeholder={data.phone_number}
              />
              <p className="paragraph-small-error">
                {errors.phone_number?.message}
              </p>
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>Profile picture link</Label>
              <Input
                {...avatar_url}
                type="text"
                id="avatarUrl"
                placeholder={data.avatar_url}
              />
            </LabeledInputContainer>
            <Button
              variant={"default"}
              className="inline-flex items-center justify-center w-full"
            >
              save
            </Button>
          </FormContainer>
        </CardContent>
      </Card>
    </AuthSection>
  );
};
export default EditProfile;
