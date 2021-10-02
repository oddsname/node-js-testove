import { createApp } from 'vue'
import App from './App.vue'

import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
import "tailwindcss/tailwind.css"

import {router} from "./router";

export const app = createApp(App)
    .use(Equal)
    .use(router)
    .mount('#app')
