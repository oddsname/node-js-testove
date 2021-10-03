import axios from "axios";
import {useEnv} from "../../composable/env.js";

const {getServerUrl} = useEnv()

const serverAxios = axios.create({
    withCredentials: true,
    baseURL: getServerUrl(),
})

export const serverHttp = {
    get(url, params = {}) {
        return serverAxios.get(url, params)
    },

    post(url, params = {}) {
        return serverAxios.post(url, params)
    },
}