import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { logout } from "@/supabase/auth"
const Logout:React.FC = () => {
    const {mutate: handleLogout} = useMutation({
        mutationKey: ['logout'],
        mutationFn: logout
    })
    return(
        <Button variant={"default"} onClick={() => handleLogout()}>Log out</Button>
    )
}
export default Logout