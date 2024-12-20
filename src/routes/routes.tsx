import GuestGuard from "@/components/guards/guest-guard";
import LoggedInGuard from "@/components/guards/logged-in-guard";
import Root from "@/pages/root-layout/Root";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROOT_ROUTES } from "../pages/root-layout/root-routes";
import { ROOT_PATHS } from "../pages/root-layout/root.enums";
import UserLayout from "@/layouts/user-layout";
import { USER_ROUTES } from "../pages/user-layout/user-routes";
import { AUTH_PATHS } from "@/pages/auth-layout/auth.enums";
import AuthLayout from "@/pages/auth-layout/auth-layout";
import { AUTH_ROUTES } from "@/pages/auth-layout/auth-routes";

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
