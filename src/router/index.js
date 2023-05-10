import {createWebHistory, createRouter} from "vue-router";
import Main from "@/pages/Main.vue";
const routes = [
    {
        path: "/",
        name: "main",
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router