import {useAuth} from "../../composable/auth.js";
import {routeNames} from "../index.js";

export const isAuthorized = async (to, from, next) => {
    const {check} = useAuth()

    try {
        const result = await check();

        if (result) {
            return next();
        }
    } catch {
        return next({name: routeNames.login})
    }

    return next({name: routeNames.login})
}