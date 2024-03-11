<template>
    <div class="result-detail">
        <verticalLine />
        <ingredientList :menu_name="menu_name" :searchResult="searchResult" />
        <div class="pd30"></div>
        <verticalLine />
        <div class="pd30"></div>
        <dataCriteria />
        <div class="pd30"></div>
        <faq />
        <contactUs />
        </div>
</template>

<script>
import verticalLine from './verticalLine.vue';
import ingredientList from './ingredientList.vue';
import contactUs from './contactUs.vue';
import dataCriteria from './dataCriteria.vue';
import faq from '../components/faq.vue';

export default {
    props: {
        menu_name: String, // menu_name props를 정의
        searchResult: Object // searchResult props를 정의
    },
    components: {
        verticalLine,
        ingredientList,
        contactUs,
        dataCriteria,
        faq,
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

.pd30 {
    padding-bottom: 30px;
}

@media (max-width: 600px) {
    
    .pd30 {
        padding-bottom: 10px;
    }

}
</style>