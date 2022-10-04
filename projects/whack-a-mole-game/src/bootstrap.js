import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import WhackAMole from './components/WhackAMole.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: WhackAMole }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(WhackAMole)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_wam-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
