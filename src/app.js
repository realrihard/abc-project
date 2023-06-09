import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './app.css';

import App from './App.vue'
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';
import AppBtn from './components/ui/AppBtn.vue';
import AppBtnOutline from './components/ui/AppBtnOutline.vue';

import router from './router';

const app = createApp(App)
app.component('AppHeader', AppHeader)
app.component('AppBtn', AppBtn)
app.component('AppBtnOutline', AppBtnOutline)
app.component('AppMenu', AppMenu)
app.use(createPinia())
app.use(router)
app.mount('#app')
