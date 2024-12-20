import { lazy } from "react";

export const Author = lazy(
  () => import("@/pages/root-layout/author/components/author"),
);
