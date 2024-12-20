import { Suspense } from "react";
import { AUTH_PATHS } from "../auth.enums";
import { SignUp } from "./sign-up.loader";
import { Fallback } from "@/routes/fallback-loader";

export const SIGN_UP_ROUTES = [
  {
    path: AUTH_PATHS.SIGN_UP,
    element: (
      <Suspense fallback={Fallback}>
        <SignUp />
      </Suspense>
    ),
  },
];
