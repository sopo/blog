import FormContainer from "@/components/containers/form-element-containers/form-container";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import AuthSection from "@/components/containers/section-containers/auth-section";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent,  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { ProfileAtom, UserAtom } from "@/store/auth";
import { editProfile } from "@/supabase/edit-profile";
import { supabase } from "@/supabase";

const EditProfile:React.FC = () => {
    const user = useAtomValue(UserAtom)
    const setProfile = useSetAtom(ProfileAtom)
    const [data, setData] = useState({
        full_name_ka: "",
        full_name_en: "",
        avatar_url: "",
        phone_number: ""
    })
    useEffect(() => {
      const userId = user? user.user.id : "";
      const fetchUser = async () => {
        const {data, error} = await supabase
        .from("profiles")
        .select()
        .eq('id', userId)
        .single();
        if(error){
          console.log(error.message)
        }
        if(data){
          setData({
            full_name_ka: data.full_name_ka || "Georgian name",
            full_name_en: data.full_name_en || "english name", 
            avatar_url: data.avatar_url || "www.example.com",
            phone_number: data.phone_number || "+00 00 00 00"
          });
          setProfile({
            ...data,

          })
        }
      }
      fetchUser()
    }, [])
    
    const { mutate: handleChangeData } = useMutation({
        mutationKey: ["user-personal-info"],
        mutationFn: editProfile,
      });
    const handelSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (user?.user.id) {
            handleChangeData({
              ...data,
              id: user.user.id, 
            });
          } else {
            console.error("User ID is missing");
          }
          setProfile({...data})
    }
 
  
    return(
        <AuthSection>
        <Card>
          <CardHeader>
          <TextCenterSmallBlock title="Edit profile" description=""/>
          </CardHeader>
          <CardContent>
          <FormContainer onSubmit={handelSubmit}>
            <p>data </p>
            <LabeledInputContainer>
              <Label>Georgian name</Label>
              <Input
                value={data.full_name_ka}
                onChange={(e) => {
                  setData({
                    full_name_ka: e.target.value,
                    full_name_en: data.full_name_en,
                    avatar_url: data.avatar_url,
                    phone_number: data.phone_number
                  });
                }}
                type="text"
                id="fullNameKa"
                placeholder={data.full_name_ka}
              />
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>English name</Label>
              <Input
                value={data.full_name_en}
                onChange={(e) => {
                  setData({
                    full_name_ka: data.full_name_ka,
                    full_name_en: e.target.value,
                    avatar_url: data.avatar_url,
                    phone_number: data.phone_number
                  });
                }}
                type="text"
                id="fullNameEn"
                placeholder={data.full_name_en}
              />
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>Phone number</Label>
              <Input
                value={data.phone_number}
                onChange={(e) => {
                  setData({
                    full_name_ka: data.full_name_ka,
                    full_name_en: data.full_name_en,
                    avatar_url: data.avatar_url,
                    phone_number:e.target.value
                  });
                }}
                type="text"
                id="phoneNumber"
                placeholder={data.phone_number}
              />
            </LabeledInputContainer>
            <LabeledInputContainer>
              <Label>Profile picture link</Label>
              <Input
                value={data.avatar_url}
                onChange={(e) => {
                  setData({
                    full_name_ka: data.full_name_ka,
                    full_name_en: data.full_name_en,
                    avatar_url: e.target.value,
                    phone_number: data.phone_number
                  });
                }}
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
    )
}
export default EditProfile