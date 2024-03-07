<!-- ResultHero.vue -->
<template>
    <!--<div class="result-hero-bg align-center justify-center"></div>-->
    <div class="result-hero">
        <h1><span>{{ inputData }}</span><br>최저가 레시피</h1>
        <h2 v-for="result in searchResults" :key="result.id">₩ {{ result.price }}</h2>
        <p class="lb">recipe</p>
        <p class="rb">price</p>
    </div>
    <div class="youtube">
        <div class="youtube-img"><img src="../assets/youtube_test.png" alt="youtube recipe" width="100%"/></div>
        <div class="youtube-info">
            <div><h3>계란말이 레시피 youtube title</h3></div>
            <div class="youtube-info-additional">
                <div class="youtube-channel">
                    <img src="../assets/logo.svg" width="30px" height="30px"/>
                    <span class="channel-name">channel</span>
                    <span>구독자</span>
                </div>
                <div><span>게시일</span> 2024-03-07</div>
            </div>
        </div>
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

<style>
/*
.result-hero-bg {
    background-image: url("../assets/result_bg_raw.png");
    background-size: cover;
    width: 100%;
    height: 80vh;
    filter: grayscale(1);
    position: absolute;
    top: 0px;
    z-index: 1; 
}
*/

.result-hero {
    background-image: url("../assets/result_bg_raw.png");
    background-size: cover; /* 배경 이미지가 컨테이너를 꽉 채우도록 설정 */
    filter: grayscale(1);
    top: 0px;

    display: flex;
    flex-direction: column;
    justify-content: center; /* 컨텐츠를 수직 방향으로 중앙 정렬합니다. */
    align-items: center; /* 컨텐츠를 가로 방향으로 중앙 정렬합니다. */
    width: 100%;
    text-align: center;

    position: relative;
    z-index: 2; 

    overflow-wrap: break-word; /* 긴 단어가 있을 경우 줄바꿈이 일어나도록 설정합니다. */
    word-break: break-word; /* 단어 중간에서도 줄바꿈을 허용합니다 (필요 시). */
    margin: 0 auto; /* 좌우 마진을 자동으로 설정하여 가운데 정렬합니다. */
    padding: 22vh 0 28vh 0;
}

.result-hero h1 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 4.8em;
    line-height: 1.2;
    color: white;
    z-index: 3;
    max-width: 90%; /* 텍스트 컨테이너의 최대 너비를 설정합니다. */
}

.black-hans {
    font-family: "Black Han Sans", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.result-hero h2 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 3.2em;
    color: #000000;
    background-color: #ffffffa5;
    border-radius : 9999px;
    padding: 10px 60px;
    margin-top: 40px;
    z-index: 3;
}

.result-hero .lb {
    position: absolute;
    bottom: 6%;
    left: 9%;
    color: #ffffffa5;
}

.result-hero .rb {
    position: absolute;
    bottom: 6%;
    right: 9%;
    color: #ffffffa5;
}


.youtube {
    z-index: 5;
    max-width: 60%;
    top: -18vh;

    display: flex;
    flex-direction: column;
    margin: 0 auto; /* 좌우 마진을 자동으로 설정하여 가운데 정렬합니다. */
    position: relative;
    z-index: 2; 
}

.youtube-img {
    align-items: center; /* 컨텐츠를 가로 방향으로 중앙 정렬합니다. */
}

.youtube-info {
    font-family: "Noto Sans KR", sans-serif; 
    color: #111;
    width: 100%;
    text-align: left;
    align-items: left;
    margin-top: 20px;
    overflow-wrap: break-word; /* 긴 단어가 있을 경우 줄바꿈이 일어나도록 설정합니다. */
    word-break: break-word; /* 단어 중간에서도 줄바꿈을 허용합니다 (필요 시). */
}

.youtube-info h3 {
    font-size: 1.4em;
    font-weight: 700;
}

.youtube-info-additional {
    justify-content: center; 
    margin-top: 10px;
}

.youtube-channel {
    
}

.youtube-channel .channel-name {
    font-size: 1.2em;
    font-weight: 600;
}


@media (max-width: 600px) {
    .result-hero h1 {
        font-size: 3em; /* 작은 화면에서는 글자 크기를 조정합니다. */
    }

    .result-hero h2 { 
        font-size: 1.5em; /* 작은 화면에서는 글자 크기를 조정합니다. */
        padding: 6px 30px;
        margin-top: 20px;
    }

    .lb {
        display: none;
    }

    .rb {
        display: none;
    }
}

@media (min-width: 1800px) {
    .result-hero h1 {
        font-size: 7em; /* 큰 화면에서는 글자 크기를 조정합니다. */
    }
}

</style>
