import { editProfile } from "@/api/edit-profile"
import { useMutation } from "react-query"

export const useEditProfile = () => {
    return useMutation({
        mutationFn: editProfile
    })
}