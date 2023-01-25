import { createRouter, createWebHashHistory } from 'vue-router'
import layout from "@/layout";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout'),
        redirect: '/psyLogin',
        children: [
            {
                path: '/psyHome',
                name: 'psyHome',
                component: () => import('@/views/psyHome/psyHome')
            },
            {
                path: '/psyTest',
                name: 'psyTest',
                component: () => import('@/views/psyTest/psyTest')
            },
            {
                path: '/psyAsk',
                name: 'psyAsk',
                component: () => import('@/views/psyAsk/psyAsk')
            },
            {
                path: '/psyConsult',
                name: 'psyConsult',
                component: () => import('@/views/psyConsult/psyConsult')
            },
            {
                path: '/psyTeam',
                name: 'psyTeam',
                component: () => import('@/views/psyTeam/psyTeam')
            },
        ],
    },
    {
        path: '/psyLogin',
        name: 'psyLogin',
        component: () => import('@/views/psyLogin/psyLogin')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/404')
    },
    {
        path: '/403',
        name: '403',
        component: () => import('@/components/403')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// activeRouter()
export default router

