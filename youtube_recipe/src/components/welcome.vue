<template>
    <div class="gray-bg left-align area-padding">
        <h2>Welcome to The Cheapest Youtube Recipe</h2>
        <p class="desc">물가 상승으로 인해 가성비 좋게 집에서 요리하려고 생각하신다면, 유튜브에서 가장 저렴하게 요리할 수 있는 레시피 영상을 찾아드릴게요. 어떤 음식을 찾으시나요?</p>
        <div class="more">
            <div class="metric">
                <h3>800+</h3>
                <p>dishes</p>
            </div>
            <div class="metric">
                <h3>8,000+</h3>
                <p>recipe videos </p>
            </div>
            <div class="metric">
                <h3>20K</h3>
                <p>ingredients list</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.area-padding {
    padding: 20vh 10vw;
}

.gray-bg {
    background-color: rgb(64, 63, 76);
    width: 100%;
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
    font-size: 2.7em;
    color: rgb(255, 255, 255);
}

.left-align .desc {
    font-weight: 300;
    font-style: normal;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.917);
    width: 60%;
}

.more {
    font-family: "Jua", "Jua Placeholder", sans-serif;
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 80px;
    height: auto;
    justify-content: flex-start;
    max-width: 1000px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
    color: white;
}

.more h3 {
    font-size: 1.85em;
    font-weight: 800;
}

.more p {
    font-size: 1em;
    font-weight: 500;

}

@media (max-width: 1000px) {
    .left-align .desc {
        width: 80%;
    }
}


@media (max-width: 600px) {
    .left-align .desc {
        font-size: 1em;
        width: 100%;
    }

    .more {
        flex-direction: column;
    }
}
</style>