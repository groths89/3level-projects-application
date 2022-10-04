import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Memory from './components/Memory.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: Memory }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(Memory)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_memory-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
