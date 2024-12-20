import { Suspense } from "react";
import { ROOT_PATHS } from "../../../pages/root-layout/root.enums";
import { About } from "./about-loader";
import { Loader } from "@/components/loader/loader";

export const ABOUT_ROUTES = [
  {
    path: ROOT_PATHS.ABOUT,
    element: (
      <Suspense fallback={Loader}>
        <About />
      </Suspense>
    ),
  },
];
