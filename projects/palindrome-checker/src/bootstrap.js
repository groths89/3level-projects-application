import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import PalindromeChecker from './components/PalindromeChecker.vue'

const mount = (el) => {
/*     const dateDiv = document.createElement('div')
    const wrapperDiv = document.createElement('div')
    const clocksContainerDiv = document.createElement('div')
    const mainClockDiv = document.createElement('div')
    
    dateDiv.classList.add('date')
    wrapperDiv.classList.add('wrapper')
    clocksContainerDiv.classList.add('clocks-container')
    mainClockDiv.classList.add('main-clock')    
    
    if (document.querySelector('#_clock-dev-root')) {
        document.querySelector('#_clock-dev-root').appendChild(dateDiv)
        document.querySelector('#_clock-dev-root').appendChild(wrapperDiv)        
    } else {
        const root = document.querySelector('#root')
        root.appendChild(dateDiv)
        root.appendChild(wrapperDiv)     
    }

    document.querySelector('.wrapper').appendChild(clocksContainerDiv)
    document.querySelector('.clocks-container').appendChild(mainClockDiv) */

    const routes = [
        { path: '/', component: PalindromeChecker }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    })

    const app = createApp(PalindromeChecker)
    app.use(router)

    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_palindrome-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
