import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js"

import MainLayout from "./layouts/Main/Main.vue"

import LeftSideBar from './layouts/Components/LeftSidebar.vue'



const app = createApp(App)

app.component("MainLayout", MainLayout);


app.component("LeftSideBar", LeftSideBar);



app.use(router)
app.mount('#app')
