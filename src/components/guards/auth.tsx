import { PropsWithChildren } from "react"
import { Navigate, Outlet, useParams } from "react-router-dom"
const AuthGuard:React.FC<PropsWithChildren> =({children}) => {
    const {lang} = useParams()
    const user = true
    if(!user){
       return <Navigate to={`/${lang}/sign-in`} />
    }
    return <>{children || <Outlet />}</>;
}
export default AuthGuard