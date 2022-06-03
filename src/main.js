import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import coomment from '@/components/UI'

const app = createApp(App)

coomment.forEach(elem => {
    app.component(elem.name, elem);
})


app.use(store).use(router).mount('#app')
