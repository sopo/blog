import { PROFILE_ROUTES } from "./profile-routes/profile-routes";
import { WRITE_ROUTES } from "./write-routes/write-routes";

export const USER_ROUTES = [
    ...PROFILE_ROUTES,
    ...WRITE_ROUTES
]