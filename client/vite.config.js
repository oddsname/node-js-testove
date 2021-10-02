import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {config} from "dotenv";

config()

export default () => {
    process.env = {
        VITE_APP_SERVER_URL: process.env.VITE_APP_SERVER_URL
    }

    return defineConfig({
        plugins: [vue()],
        server: {
            port: process.env.VUE_APP_PORT || '3000',
            fs: {
                strict: false,
            },
        },
    })
}
