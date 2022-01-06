import axios from "axios";
import {useEnv} from "../../composable/env.js";
import {formDataService} from "../../services/form-data-service.js";

const {getServerUrl} = useEnv()

const serverAxios = axios.create({
    withCredentials: true,
    baseURL: getServerUrl(),
})

export const serverHttp = {
    get(url, params = {}) {
        return serverAxios.get(url, params)
    },

    post(url, params = {}, headers = {}) {
        return serverAxios.post(url, params, {
            headers,
        })
    },

    formData(url, params = {}, headers = {}) {
        const formData = formDataService.objectToFormData(params);

        return serverAxios.post(url, formData, headers)
    },

    setAuthToken(token) {
        serverAxios.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${token}`;
            return config;
        })
    }
}