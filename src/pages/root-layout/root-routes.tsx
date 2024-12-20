import { ABOUT_ROUTES } from "./about/about-routes";
import { AUTHOR_ROUTES } from "./author/author-routes";
import { HOME_ROUTES } from "./home/home-routes";


export const ROOT_ROUTES = [...HOME_ROUTES, ...ABOUT_ROUTES, ...AUTHOR_ROUTES];
