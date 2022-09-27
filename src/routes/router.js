
import Index from '../components/Index.vue'
import Wall from '../components/Wall.vue'
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import ProfilePage from "../components/ProfilePage.vue"

import { createRouter, createWebHistory } from 'vue-router' 
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons'

/// On crée notre router 
const routes = [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/home", component: Wall },
    { path: "/profile", component: ProfilePage },
    { path: "/Signup", component: Signup },
    { path: "/", redirect: "/login" }
]
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from) => {    
if (isLoginRequired(to)) {
    return router.push("/login")
}
})

function isLoginRequired(to) {
    if (!isPrivatePage(to)) return false
    if (!isTokenInCache()) return true
    return false
}


function isPrivatePage(to) {
    const publicPages = ["/login", "/signup"]
    return !publicPages.includes(to.path)
}

function isTokenInCache(to) {
    return localStorage.getItem("token") !== null
}

export default router