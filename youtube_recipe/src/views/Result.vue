<template>
    <header></header>
    <div class="content">
        <h2>검색 결과</h2>
        <p>입력한 검색어: {{ inputData }} </p> 
        <!--{{ $route.params.searchTerm }}</p>-->
    </div>
</template>

<script>
//import HeaderBlack from './components/HeaderBlack.vue'
//import Hero from './components/HeroResult.vue'
//import Footer from './components/Footer.vue'

export default {
    computed: {
        inputData() {
            return this.$route.params.inputData;
        },
        searchResults() {
            // 검색어에 해당하는 내용을 가져오는 로직 구현
            // 예시로 정적인 데이터를 사용하고, 실제로는 API 요청 등을 통해 데이터를 가져와야 합니다.
            const searchData = [
                { id: 1, title: '메뉴 1' },
                { id: 2, title: '메뉴 2' },
                { id: 3, title: '메뉴 3' },
            ];
            return searchData.filter(item => item.title.includes(this.inputData)); // searchTerm -> inputData로 수정
        },
    },
};
</script>

<style>
h1 {
    color: #333;
}
.content {
margin-top: 40px; /* 헤더와 콘텐츠 사이의 간격 설정 */
padding: 20px;
background-color: #f4f4f4;
}
</style>
