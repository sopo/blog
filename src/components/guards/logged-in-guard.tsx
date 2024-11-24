import { PropsWithChildren } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
const LoggedInGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { lang } = useParams();
  const user = useAtomValue(UserAtom);
  if (user) {
    return <Navigate to={`/${lang}/profile`} />;
  }
  return <>{children || <Outlet />}</>;
};
export default LoggedInGuard;
