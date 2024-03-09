<template>
    <div class="left-align area-margin">
        <h2>사이트 이용 중 개선이 필요하거나 제안할 내용이 있다면 편하게 알려주세요.</h2>
        <v-btn @click="contactUs" variant="elevated" size="x-large" rounded="lg" color="#E84855">Contact us</v-btn>
    </div>
</template>

<script>
    export default {
    methods: {
        contactUs() {
            window.location.href = "mailto:jaryngobi@example.com?subject=The%20Cheapest%20Youtube%20Recipe&body=안녕하세요,%0A%0A피드백을%20입력해주세요.%0A%0감사합니다.";
        },
    },
}
</script>

<style scoped>
.area-margin {
    margin: 5vh 0;
}

.left-align {
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: flex-start;
}

.left-align h2 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2.6em;
    color: rgb(64, 63, 76);
    width: 60%;
}

@media (max-width: 1000px) {
    .left-align h2 {
        font-size: 2em;
        color: rgb(64, 63, 76);
        width: 80%;
    }
}


@media (max-width: 600px) {
    .left-align h2 {
        font-size: 1.6em;
        color: rgb(64, 63, 76);
        width: 100%;
    }
}
</style>