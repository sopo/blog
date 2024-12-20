import { Suspense } from "react";
import { Fallback } from "@/routes/fallback-loader";
import { ROOT_PATHS } from "@/pages/root-layout/root.enums";
import { Home } from "./home.loader";

export const HOME_ROUTES = [
  {
    path: ROOT_PATHS.HOME,
    element: (
      <Suspense fallback={Fallback}>
        <Home />
      </Suspense>
    ),
  },
];
