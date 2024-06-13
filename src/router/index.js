import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = getAuth()
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {
        onAuthStateChanged(auth, user => {
            if (user) {
                next()
            } else {
                next('/login')
            }
        })
    } else {
        next()
    }
})

export default router