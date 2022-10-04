import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import SpaceInvaders from './components/SpaceInvaders.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: SpaceInvaders }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(SpaceInvaders)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_spaceinvaders-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
