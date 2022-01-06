import {serverHttp} from "./server-config.js";
import {cookieService} from "../../services/cookie-service.js";

export const serverApi = {
    login: (email, password) => serverHttp.post('/api/auth/login', {
        email,
        password,
    }),

    logout: () => serverHttp.post('/api/auth/logout'),
    
    checkAuth: () => {
        const token = cookieService.authToken.get()

        serverHttp.setAuthToken(token);

        return serverHttp.post('/api/auth/check')
    },

    createUserFile: (file, data) => {
        console.log({file,...data})

        return  serverHttp.formData('/api/user/file/save', {
            file,
            ...data,
        })
    }
}

