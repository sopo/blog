import { Suspense } from "react";
import { AUTH_PATHS } from "../auth.enums";
import { SignUp } from "./sign-up.loader";
import { Loader } from "@/components/loader/loader";

export const SIGN_UP_ROUTES = [
  {
    path: AUTH_PATHS.SIGN_UP,
    element: (
      <Suspense fallback={Loader}>
        <SignUp />
      </Suspense>
    ),
  },
];
