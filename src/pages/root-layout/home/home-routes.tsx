import { Suspense } from "react";
import { Loader } from "@/components/loader/loader";
import { ROOT_PATHS } from "@/pages/root-layout/root.enums";
import { Home } from "./home.loader";

export const HOME_ROUTES = [
  {
    path: ROOT_PATHS.HOME,
    element: (
      <Suspense fallback={Loader}>
        <Home />
      </Suspense>
    ),
  },
];
