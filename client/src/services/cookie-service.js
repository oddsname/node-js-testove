import Cookies from 'js-cookie'

const AUTH_TOKEN = 'auth_token';

export const cookieService = {

    authToken: {
        set: (token) => Cookies.set(AUTH_TOKEN, token),
        get: () => Cookies.get(AUTH_TOKEN),
        remove: () => Cookies.remove(AUTH_TOKEN)
    }

}