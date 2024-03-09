<template>
    <div class="result-detail">
        <verticalLine />
        <ingredientList :inputData="inputData" :searchResults="searchResults" />
        <contactUs />
    </div>
</template>

<script>
import verticalLine from './verticalLine.vue';
import ingredientList from './ingredientList.vue';
import contactUs from './contactUs.vue';

export default {
    props: {
        inputData: String, // inputData props를 정의
        searchResults: Object // searchResults props를 정의
    },
    components: {
        verticalLine,
        ingredientList,
        contactUs,
    },
};
</script>

<style scoped>
.result-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10vw;
    padding-bottom: 20vh;
    gap: 80px;
}
</style>