import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import RockPaperScissors from './components/RockPaperScissors.vue'

const mount = (el) => {
    const routes = [
        { path: '/', component: RockPaperScissors }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    const app = createApp(RockPaperScissors)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_rps-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
