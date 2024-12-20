import { Suspense } from "react";
import { ROOT_PATHS } from "../root.enums";
import { Home } from "./lazy-imports/home.loader";
import { Fallback } from "@/routes/fallback-loader";

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
