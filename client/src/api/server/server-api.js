import {serverHttp} from "./server-config.js";

export const serverApi = {

    loginUse: () => serverHttp.get('/api/login',)

}
