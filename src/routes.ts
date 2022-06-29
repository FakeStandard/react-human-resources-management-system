import { FC } from "react"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Page404 from "./pages/Page404"
import Register from "./pages/Register"
import User from "./pages/User"

interface Route {
    key: string
    title: string
    path: string
    enabled: boolean
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'dashboard-route',
        title: 'Dashboard',
        path: '/dashboard',
        enabled: true,
        component: Dashboard
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    {
        key: 'page404-route',
        title: 'Page404',
        path: '/pashboard',
        enabled: true,
        component: Page404
    },
    {
        key: 'register-route',
        title: 'Register',
        path: '/register',
        enabled: true,
        component: Register
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user',
        enabled: true,
        component: User
    }
]