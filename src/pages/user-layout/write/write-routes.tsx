import { Suspense } from "react";
import { Loader } from "@/components/loader/loader";
import Write from "@/pages/user-layout/write/views/write";
import { ROOT_PATHS } from "@/pages/root-layout/root.enums";

export const WRITE_ROUTES = [
  {
    path: ROOT_PATHS.WRITE,
    element: (
      <Suspense fallback={Loader}>
        <Write />
      </Suspense>
    ),
  },
];
