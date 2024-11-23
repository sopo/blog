import FormContainer from "@/components/containers/form-element-containers/form-container";
import LabeledInputContainer from "@/components/containers/form-element-containers/labeled-input-container";
import AuthSection from "@/components/containers/section-containers/auth-section";
import TextCenterSmallBlock from "@/components/ui-blocks/text-blocks/text-center-small-block";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent,  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserPersonalInfo } from "@/supabase/user-personal-info";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
const EditProfile:React.FC = () => {
    const user = useAtomValue(UserAtom)
    const [data, setData] = useState({
        full_name_ka: "",
        full_name_en: "",
        avatar_url: "",
        phone_number: ""
    })
    const { mutate: handleChangeData } = useMutation({
        mutationKey: ["user-personal-info"],
        mutationFn: UserPersonalInfo,
      });
    const handelSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (user?.user.id) {
            handleChangeData({
              ...data,
              id: user.user.id, 
            });
            console.log("User info saved!");
          } else {
            console.error("User ID is missing");
          }
    }
    return(
        <AuthSection>
        <Card>
          <CardHeader>
          <TextCenterSmallBlock title="profile" description="desc"/>
          </CardHeader>
          <CardContent>
          <FormContainer onSubmit={handelSubmit}>
            <LabeledInputContainer>
              <Label>Name ka</Label>
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
                placeholder="N"
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