export const useEnv = () => {

    return {
        getServerUrl: () => import.meta.env.VITE_APP_SERVER_URL
    }
}