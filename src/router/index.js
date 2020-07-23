import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import GameController from '../views/GameController.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: MainMenu
    }, {
        name: 'quiz',
        path: '/quiz',
        component: GameController,
        props: (route) => ({
            number: route.query.number,
            difficulty: route.query.difficulty,
            category: route.query.category,
            type: route.query.type
        })
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router