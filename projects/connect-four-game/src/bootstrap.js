import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import ConnectFour from './components/ConnectFour.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: ConnectFour }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(ConnectFour)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_connectfour-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
