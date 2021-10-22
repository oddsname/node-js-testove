import {createWebHistory, createRouter} from "vue-router";
import Login from "./../ui/pages/Login.vue"
import Dashboard from './../ui/pages/Dashboard.vue'
import MainLayout from "./../ui/layout/main/MainLayout.vue"
import GuestLayout from "./../ui/layout/guest/GuestLayout.vue"

export const routeNames = {
    login: 'login',
    filesList: 'files-list',
}

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: 'list',
                name: routeNames.filesList,
                component: Dashboard
            }
        ],
    },
    {
        path: "/",
        component: GuestLayout,
        children: [
            {
                path: 'login',
                name: routeNames.login,
                component: Login,
            }
        ]
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
