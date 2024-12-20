import { Suspense } from "react";
import { ROOT_PATHS } from "../../root.enums";
import { Fallback } from "@/routes/fallback-loader";
import Write from "@/pages/write/write";

export const WRITE_ROUTES = [
  {
    path: ROOT_PATHS.WRITE,
    element: (
      <Suspense fallback={Fallback}>
        <Write />
      </Suspense>
    ),
  },
];
