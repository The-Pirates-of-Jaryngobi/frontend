<template>
    <header></header>
    <div>
        <h2>검색 결과</h2>
        <p>검색어: {{ searchTerm }}</p>
        <ul>
            <!-- 검색 결과를 리스트 형태로 보여줌 -->
            <li v-for="result in searchResults" :key="result.id">{{ result.title }}</li>
        </ul>
    </div>
    <footer></footer>
</template>
    
<script>
//import HeaderBlack from './components/HeaderBlack.vue'
//import Hero from './components/HeroResult.vue'
//import Footer from './components/Footer.vue'

export default {
    computed: {
        searchTerm() {
            return this.$route.params.searchTerm; // Home 페이지에서 전달된 검색어 가져오기
        },
        searchResults() {
            // 검색어에 해당하는 내용을 가져오는 로직 구현
            // 예시로 정적인 데이터를 사용하고, 실제로는 API 요청 등을 통해 데이터를 가져와야 합니다.
            const searchData = [
            { id: 1, title: '메뉴 1' },
            { id: 2, title: '메뉴 2' },
            { id: 3, title: '메뉴 3' },
            ];
            return searchData.filter(item => item.title.includes(this.searchTerm));
        },
    },
};
</script>

<style>
h1 {
    color: #333;
}
</style>
