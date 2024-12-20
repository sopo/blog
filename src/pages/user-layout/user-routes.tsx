import { PROFILE_ROUTES } from "./profile/profile-routes";
import { WRITE_ROUTES } from "./write/write-routes";

export const USER_ROUTES = [...PROFILE_ROUTES, ...WRITE_ROUTES];
