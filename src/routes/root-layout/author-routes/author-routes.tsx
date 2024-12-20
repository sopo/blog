import { Fallback } from "@/routes/fallback-loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import Author from "@/pages/author/author";

export const AUTHOR_ROUTES = [
  {
    PATH: ROOT_PATHS.AUTHOR + "/:id",
    element: (
      <Suspense fallback={Fallback}>
        <Author />
      </Suspense>
    ),
  },
];
