import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js"

import HomeLayout from "./layouts/Home/Home.vue"


const app = createApp(App)

app.component("HomeLayout", HomeLayout);


app.use(router)
app.mount('#app')
