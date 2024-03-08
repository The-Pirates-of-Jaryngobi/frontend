<template>
  <v-app>
    <!--<v-app-bar>-->
    <HeaderWhite />
    <RouterView />
    <FooterBlack />
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

<style>

v-main {
  position: relative;
  width: 100%;
}


</style>
