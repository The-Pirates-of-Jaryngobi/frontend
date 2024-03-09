<template>
    <div class="left-align area-margin">
        <h2>Thank you.</h2>
        <div><p>요리를 하는 모든 순간이 행복하기를 바라며, 이 서비스가 여러분의 요리 시간을 더욱 가치 있고 즐거운 시간으로 만들어 드리길 바랍니다. 🥂</p></div>
    </div>
</template>

<script>
    export default {
    methods: {
        contactUs() {
            window.location.href = "mailto:jaryngobi@example.com?subject=The%20Cheapest%20Youtube%20Recipe&body=안녕하세요,%0A%0A피드백을%20입력해주세요.%0A감사합니다.";
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