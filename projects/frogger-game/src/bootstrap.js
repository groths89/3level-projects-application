import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Frogger from './components/Frogger.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: Frogger }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(Frogger)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_frogger-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
