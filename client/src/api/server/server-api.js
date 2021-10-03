import {serverHttp} from "./server-config.js";

export const serverApi = {
    login: (email, password) => serverHttp.post('/api/login', {
        email,
        password,
    }),

    logout: () => serverHttp.post('/api/logout'),
    
    checkAuth: () => serverHttp.post('/api/check-auth'),
}
