import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/Index.vue'),
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: () => import('../pages/Quiz.vue'),
        meta: {
            headerImage: 'brain.png',
            headerText: 'Тест на определение IQ'
        }
    },
    {
        path: '/results',
        name: 'results',
        component: () => import('../pages/Results.vue'),
        params: true,
        meta: {
            headerImage: 'brain.png',
            headerText: 'Готово!'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;