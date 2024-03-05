<!--
<template>
    <header></header>
    <div>
        <input type="text" v-model="searchTerm" >
    </div>
    <NoResult v-if="showNoResult" />
    <footer></footer>
</template>
-->

<template>
    <div>
        <input v-model="inputData" type="text" placeholder="김치찌개">
        <button @click="$router.push(`/result/${inputData}`)">Go to Result</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: '',
        };
    },
    
    methods: {
        search() {
            // 검색어를 Result 페이지로 전달하는 로직 구현
            this.$router.push({ name: 'Result', params: { inputData: this.inputData } });
        },
    },
};


</script>

