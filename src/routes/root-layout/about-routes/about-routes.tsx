import { Suspense } from "react";
import { ROOT_PATHS } from "../root.enums";
import { About } from "./lazy-imports/about-loader";
import { Fallback } from "@/routes/fallback-loader";

export const ABOUT_ROUTES = [
  {
    path: ROOT_PATHS.ABOUT,
    element: (
      <Suspense fallback={Fallback}>
        <About />
      </Suspense>
    ),
  },
];
