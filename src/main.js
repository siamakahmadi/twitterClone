import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MainLayout from "./layouts/Main.vue"

const app = createApp(App)

app.component("MainLayout", MainLayout);


app.use(router)
app.mount('#app')
