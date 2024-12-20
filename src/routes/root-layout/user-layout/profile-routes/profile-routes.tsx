import { Suspense } from "react";
import { ROOT_PATHS } from "../../root.enums";
import { Fallback } from "@/routes/fallback-loader";
import Profile from "@/pages/profile/profile";


export const PROFILE_ROUTES = [{
    path: ROOT_PATHS.PROFILE,
    element: (
        <Suspense fallback={Fallback}>
        <Profile />
        </Suspense>
    )
}]