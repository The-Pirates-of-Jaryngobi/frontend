<!-- ResultHero.vue -->
<template>
    <div>
        <!-- inputData를 사용하는 하위 컴포넌트 -->
        <h1>{{ inputData }}</h1>
        <h1>최저가 레시피</h1>
        <!-- searchResults를 사용하는 하위 컴포넌트 -->
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                <div>{{ result.title }}</div>
                <div>Price: {{ result.price }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        inputData: String, // inputData props를 정의
        searchResults: Array // searchResults props를 정의
    }
};
</script>
