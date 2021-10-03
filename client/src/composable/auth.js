import {AuthUser} from "../models/auth-user.js";
import {serverApi} from "../api/server/server-api.js";
import {cookieService} from "../services/cookie-service.js";

let authUser = null;

let isUserAuth = false;

export const useAuth = () => {

    const login = async (email, password) => {
        const{data} = await serverApi.login(email, password)

        if(data.success) {
            cookieService.authToken.set(data.token)

            return this.check();
        }

        return false;
    }

    const check = async () => {
        const token = cookieService.authToken.get();

        if(isUserAuth) {
            return true;
        }

        if(token) {
            const {data} = await serverApi.checkAuth()

            if(data.success && data.user) {
                isUserAuth = true;
                authUser = new AuthUser(data.user);

                return true;
            }
        }

        return false;
    }

    const logout = async () => {
        const {data} = await serverApi.logout();

        if(data.success) {
            isUserAuth = false;
            authUser = null;
            cookieService.authToken.remove();
        }

        return this.check();
    }

    return {
        login,
        check,
        logout,
    }
}