<template>
  <v-app>
    <header>
      <HeaderWhite />
    </header>
    <v-main>  <!--div id="app" 대신 입력-->
      <RouterView />
    </v-main>
    <footer>
      <FooterBlack />
    </footer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeaderWhite from './components/HeaderWhite.vue';
import FooterBlack from './components/FooterBlack.vue';

export default defineComponent({
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    HeaderWhite,
    FooterBlack,
  },
});
</script>
