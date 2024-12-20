import { ABOUT_ROUTES } from "./about-routes/about-routes";
import { AUTHOR_ROUTES } from "./author-routes/author-routes";
import { HOME_ROUTES } from "./home-routes/home-routes";

export const ROOT_ROUTES = [...HOME_ROUTES, ...ABOUT_ROUTES, ...AUTHOR_ROUTES];
