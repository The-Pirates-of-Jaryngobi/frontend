<template>
    <v-main class="d-flex align-center justify-center no-hero">
        <h1>검색 결과가 없습니다.</h1>
        <p>다른 검색어를 시도해보세요.</p>
    </v-main>
</template>

<style scoped>
.no-hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    line-height: 1.2;
    text-align: center;
}

.no-hero h1 {
    font-family: "Noto Sans KR", sans-serif; 
    font-size: 1.2rem;
    color: #111;
}

.no-hero p {
    margin-top: 10px;
    color: #333;
}
</style>
