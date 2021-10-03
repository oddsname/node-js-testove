import { createApp } from 'vue'
import App from './App.vue'

import {router} from "./router";
import {useAuth} from "./composable/auth.js";

const {check} = useAuth()

export const app = createApp(App)
    .use(router)
    .mount('#app')
