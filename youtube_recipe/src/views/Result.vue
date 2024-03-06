<template>
    <div class="content">

        <ResultHero :inputData="inputData" :searchResults="searchResults" />
        <ResultDetail :inputData="inputData" :searchResults="searchResults" />
        <!--{{ $route.params.searchTerm }}</p>-->
    </div>
</template>

<script>
//import HeaderBlack from './components/HeaderBlack.vue'
import ResultHero from '../components/ResultHero.vue';
import ResultDetail from '../components/ResultDetail.vue';
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
                { id: 1, title: '김치찌개', price: '5,000', ingredients: [{'감자 2개':'500원'}, {'물 100ml':'300원'}] },
                { id: 2, title: '계란말이', price: '1,000', ingredients: [{'계란 5개':'300원'}, {'물 20ml':'None'}, {'소금 한꼬집':'20원'}]},
                { id: 3, title: '메뉴 3' },
            ];
            const filteredData = searchData.filter(item => item.title.includes(this.inputData));

            // 가공된 검색 결과에서 필요한 정보만 추출하여 반환합니다.
            return filteredData.map(item => {
                const { title, price, ingredients } = item;
                return { title, price, ingredients };
            });
        }
    }, 
    components: {
        ResultHero,
        ResultDetail,
    },
};
</script>

<style >
/* h1 {
    color: #333;
} */
.content {
    margin-top: 40px; /* 헤더와 콘텐츠 사이의 간격 설정 */
    padding: 20px;
    background-color: #f4f4f4;
}
</style>
