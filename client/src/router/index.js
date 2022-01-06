import {createWebHistory, createRouter} from "vue-router";
import Login from "./../ui/pages/Login.vue"
import Dashboard from './../ui/pages/Dashboard.vue'
import MainLayout from "./../ui/layout/main/MainLayout.vue"
import GuestLayout from "./../ui/layout/guest/GuestLayout.vue"
import FileCreate from "../ui/pages/files/FileCreate.vue";
import FileEdit from "../ui/pages/files/FileEdit.vue";
import {isAuthorized} from "./middlewares/is-authorized.js";

export const routeNames = {
    login: 'login',
    filesList: 'user-list',
    fileCreate: 'file-create',
    fileEdit: 'file-edit',
}

const routes = [
    {
        path: "/",
        component: MainLayout,
        beforeEnter: async (to, from, next) => {
            await isAuthorized(to, from, next)
        },
        children: [
            {
                path: 'file-list',
                name: routeNames.filesList,
                component: Dashboard
            },
            {
                path: '/file-create',
                name: routeNames.fileCreate,
                component: FileCreate,
            },
            {
                path: '/file-edit/:id',
                name: routeNames.fileEdit,
                component: FileEdit,
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
