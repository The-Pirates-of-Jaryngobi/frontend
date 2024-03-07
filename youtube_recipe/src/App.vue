<template>
  <v-app>
    <!--<v-app-bar>-->
    <HeaderWhite />
    <RouterView />
    <!--<FooterBlack />-->
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

.gasoek-one-regular {
  font-family: "Gasoek One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.black-han sans-regular {
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

v-main {
  position: relative;
  width: 100%;
}


</style>
