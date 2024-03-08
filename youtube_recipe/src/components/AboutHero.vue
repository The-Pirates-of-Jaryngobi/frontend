<template>
    <v-main class="d-flex align-center justify-center no-hero">
        <h1>유튜브 최저가 레시피</h1>
        <p class="lt">Youtube</p>
        <p class="rt">Recipe</p>
        <p class="lb">Cheapest</p>
        <p class="rb">Ingredients</p>
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
    background-image: url("../assets/about_bg.svg");
    background-size: cover; /* 배경 이미지가 컨테이너를 꽉 채우도록 설정 */
    color: #fff;
}

.no-hero h1 {
    font-size: 5em;
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
}

.no-hero p {
    font-family: "Roboto", sans-serif;
    margin-top: 10px;
}

.lb {
    position: absolute;
    top: 82vh;
    left: 12%;
    color: #ffffffa5;
}

.rb {
    position: absolute;
    top: 82vh;
    right: 12%;
    color: #ffffffa5;
}

.lt {
    position: absolute;
    top: 9vh;
    left: 12%;
    color: #ffffffa5;
}

.rt {
    position: absolute;
    top: 9vh;
    right: 12%;
    color: #ffffffa5;
}

</style>
