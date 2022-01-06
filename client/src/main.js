import { createApp } from 'vue'
import App from './App.vue'

import {router} from "./router";

export const app = createApp(App)
    .use(router)
    .mount('#app')
