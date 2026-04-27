import { loadFonts } from './plugins/webfontloader'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
