<template>
  <v-app>
    <HeaderWhite />
    <v-main>  <!--div id="app" 대신 입력-->
      <RouterView />
    </v-main>
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

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

v-main {
  position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
}


footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
}

</style>
