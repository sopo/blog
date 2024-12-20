import { Loader } from "@/components/loader/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import Author from "./author";

export const AUTHOR_ROUTES = [
  {
    path: ROOT_PATHS.AUTHOR + "/:id",
    element: (
      <Suspense fallback={Loader}>
        <Author />
      </Suspense>
    ),
  },
];
