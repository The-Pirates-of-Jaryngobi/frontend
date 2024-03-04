<template>
    <header></header>
    <div>
        <input type="text" v-model="searchTerm" placeholder="검색어를 입력하세요" />
        <button @click="search">검색</button>
    </div>
    <footer></footer>
</template>

<script>
//import HeaderWhite from './components/HeaderWhite.vue'
//import Hero from './components/HeroMain.vue'
//import Footer from './components/Footer.vue'

export default {
    data() {
        return {
            searchTerm: '',
        };
    },
    methods: {
        search() {
            // 검색어를 Result 페이지로 전달하는 로직 구현
            this.$router.push({ name: 'Result', params: { searchTerm: this.searchTerm } });
        },
    },
    components: {
        HeaderWhite
    }
};
</script>
