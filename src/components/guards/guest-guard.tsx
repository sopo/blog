import { PropsWithChildren } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import { AUTH_PATHS } from "@/pages/auth-layout/auth.enums";

const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { lang } = useParams();
  const user = useAtomValue(UserAtom);
  if (!user) {
    return (
      <Navigate to={`/${lang}/${AUTH_PATHS.AUTH}/${AUTH_PATHS.SIGN_IN}`} />
    );
  }
  return <>{children || <Outlet />}</>;
};
export default GuestGuard;
