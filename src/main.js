import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js"

import HomeLayout from "./layouts/Home/Home.vue"
import AuthLayout from './layouts/Auth/Auth.vue'
import DirectLayout from "./layouts/Direct/Direct.vue"
import PageTitle from './components/PageTitle/PageTitle.vue'


const app = createApp(App)

app.component("HomeLayout", HomeLayout);
app.component("AuthLayout", AuthLayout);
app.component("DirectLayout",DirectLayout);


app.component("PageTitle", PageTitle);


app.use(router)
app.mount('#app')
