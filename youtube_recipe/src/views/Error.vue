<template>
    <v-main class="d-flex align-center justify-center no-hero">
        <h1>Error!</h1>
        <p>{{ errorMessage }}</p>
    </v-main>
</template>

<script>
export default {
props: {
    errorMessage: {
    type: String,
    required: true,
    },
},
}
</script>

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
