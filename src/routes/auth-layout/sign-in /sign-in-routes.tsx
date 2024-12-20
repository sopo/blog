
import { Suspense } from "react";
import { AUTH_PATHS } from "../auth.enums";
import { SignIn } from "../lazy-imports/sign-in.loader";
import { Fallback } from "@/routes/fallback-loader";

export const SIGN_IN_ROUTES = [
{
    path: AUTH_PATHS.SIGN_IN,
    element: <Suspense fallback={Fallback}>
        <SignIn />
        </Suspense>
}
]