import { lazy } from "react";

export const Author = lazy(
  () => import("./author"),
);
