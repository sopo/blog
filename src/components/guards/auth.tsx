import { PropsWithChildren } from "react"
import { Navigate, Outlet, useParams } from "react-router-dom"
import { useAtom, useAtomValue } from "jotai"
import { UserAtom } from "@/store/auth"
const AuthGuard:React.FC<PropsWithChildren> =({children}) => {
    const {lang} = useParams()
    // const [user] = useAtom(UserAtom)
    const user = useAtomValue(UserAtom)
    if(!user){
       return <Navigate to={`/${lang}/sign-in`} />
    }
    return <>{children || <Outlet />}</>;
}
export default AuthGuard