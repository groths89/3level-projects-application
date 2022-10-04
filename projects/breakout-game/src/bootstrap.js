import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Breakout from './components/Breakout.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: Breakout }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(Breakout)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_breakout-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
