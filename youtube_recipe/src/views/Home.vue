<template>
    <header></header>
    <div>
        <input type="text" v-model="searchTerm" placeholder="검색어를 입력하세요" />
        <button @click="search">검색</button>
    </div>
    <div v-if="showNoResult">
        <NoResult />
    </div>
    <footer></footer>
</template>

<script>
//import HeaderWhite from './components/HeaderWhite.vue'
//import Hero from './components/HeroMain.vue'
//import Footer from './components/Footer.vue'

import NoResult from './components/NoResult.vue'

export default {
    data() {
        return {
            searchTerm: '',
            showNoResult: false
        };
    },
    methods: {
        async search() {
            if (this.searchTerm === '') {
                this.showNoResult = true;
            } else {
                // 검색어를 백엔드 API로 전달하여 데이터베이스에서 결과 확인
                const response = await fetch(`/api/search?term=${this.searchTerm}`);
                const data = await response.json();
                
                if (data.length === 0) {
                    this.showNoResult = true;
                } else {
                    this.$router.push({ name: 'Result', params: { searchTerm: this.searchTerm } });
                }
            }
        },
    },
    components: {
        NoResult
    }
};
</script>
