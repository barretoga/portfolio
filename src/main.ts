import '~/assets/styles/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

import App from '~/App.vue'
import router from '~/router'
import i18n from '~/config/internationalization'

import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Toast)

app.mount('#app')
