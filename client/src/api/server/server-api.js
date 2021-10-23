import {serverHttp} from "./server-config.js";

export const serverApi = {
    login: (email, password) => serverHttp.post('/api/auth/login', {
        email,
        password,
    }),

    logout: () => serverHttp.post('/api/auth/logout'),
    
    checkAuth: () => serverHttp.post('/api/auth/check-auth'),
}
