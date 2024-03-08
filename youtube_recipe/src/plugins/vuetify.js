// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    themes: {
      light: {
        primary: '#3f51b5', // 포인트 컬러
      },
    },
    defaultTheme: 'light',
  },
});



// plugins/vuetify.js
import Vue from 'vue';

Vue.use(Vuetify);

export default new Vuetify({});
