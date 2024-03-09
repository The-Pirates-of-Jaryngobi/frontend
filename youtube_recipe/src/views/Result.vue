<template>
    <div>
        <!--
        <ResultHero :menu_name="menu_name" :searchResult="searchResult" />
        <ResultDetail :menu_name="menu_name" :searchResult="searchResult" />
        -->
        <h1>{{ menu_name }}의 검색 결과</h1>
        <h2>유튜브 제목: {{ searchResult.youtube }}</h2>
        <ul>
            <li v-for="ingredient in searchResult.Ingredients" :key="ingredient">
                {{ ingredient }}
            </li>
        </ul>
    </div>
</template>

<script>
import ResultHero from '../components/ResultHero.vue';
import ResultDetail from '../components/ResultDetail.vue';

export default {
    props: {
        menu_name: String, 
        searchResult: Object, 
    },
    components: {
        ResultHero,
        ResultDetail,
    },
};
</script>
