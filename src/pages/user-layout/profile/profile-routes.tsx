import { Suspense } from "react";
import { ROOT_PATHS } from "../../root-layout/root.enums";
import { Loader } from "@/components/loader/loader";
import { Profile } from "./profile.loader";

export const PROFILE_ROUTES = [
  {
    path: ROOT_PATHS.PROFILE,
    element: (
      <Suspense fallback={Loader}>
        <Profile />
      </Suspense>
    ),
  },
];
