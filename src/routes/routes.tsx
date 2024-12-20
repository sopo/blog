import GuestGuard from "@/components/guards/guest-guard";
import LoggedInGuard from "@/components/guards/logged-in-guard";
import About from "@/pages/about/about";
import Author from "@/pages/author/author";
import Home from "@/pages/home/home";
import Profile from "@/pages/profile/profile";
import Root from "@/pages/Root";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import Write from "@/pages/write/write";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/en" />,
  },
  {
    path: "/:lang",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sign-in",
        element: (
          <LoggedInGuard>
            <SignIn />
          </LoggedInGuard>
        ),
      },
      {
        path: "sign-up",
        element: (
          <LoggedInGuard>
            <SignUp />
          </LoggedInGuard>
        ),
      },
      {
        path: "profile",
        element: (
          <GuestGuard>
            <Profile />
          </GuestGuard>
        ),
      },
      {
        path: "write",
        element: (
          <GuestGuard>
            <Write />
          </GuestGuard>
        ),
      },
      {
        path: "author/:id",
        element: <Author />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes)