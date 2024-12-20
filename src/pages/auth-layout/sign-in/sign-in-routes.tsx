import { Suspense } from "react";
import { AUTH_PATHS } from "../auth.enums";
import { SignIn } from "./sign-in.loader";
import { Loader } from "@/components/loader/loader";

export const SIGN_IN_ROUTES = [
  {
    path: AUTH_PATHS.SIGN_IN,
    element: (
      <Suspense fallback={Loader}>
        <SignIn />
      </Suspense>
    ),
  },
];
