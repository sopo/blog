import GuestGuard from "@/components/guards/guest-guard";
import LoggedInGuard from "@/components/guards/logged-in-guard";
import Root from "@/pages/Root";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AUTH_PATHS } from "./auth-layout/auth.enums";
import { AUTH_ROUTES } from "./auth-layout/auth-routes";
import AuthLayout from "@/layouts/auth-layout";
import { ROOT_ROUTES } from "./root-layout/root-routes";
import { ROOT_PATHS } from "./root-layout/root.enums";
import UserLayout from "@/layouts/user-layout";
import { USER_ROUTES } from "./root-layout/user-layout/user-routes";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/en" />,
  },
  {
    path: "/:lang",
    element: <Root />,
    children: [
      ...ROOT_ROUTES,
      {
        path: AUTH_PATHS.AUTH,
        element: (
          <LoggedInGuard>
            <AuthLayout />
          </LoggedInGuard>
        ),
        children: [...AUTH_ROUTES],
      },

      {
        path: ROOT_PATHS.USER,
        element: (
          <GuestGuard>
            <UserLayout />
          </GuestGuard>
        ),
        children: [...USER_ROUTES],
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
