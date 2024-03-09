<template>
    <div class="area">
        <div class="card">
            <div class="thumb"><img src="../assets/info_youtube.jpg" /></div>
            <div class="text">
                <h3>본문에 레시피 내용을 담은 유튜브가 기준이에요.</h3>
                <br>
                <p>모든 유튜브 레시피를 가져오지 않고, 설명에서 본문 내용에 재료 이름과 단위, 용량이 표기되어 있는 조건에 충족하는 유튜브 영상만을 수집하여 최대 10건의 관련 레시피 중에 가장 최저가 레시피를 소개하고 있어요.</p>
            </div>
        </div>
        <div class="card reverse">
            <div class="thumb"><img src="../assets/info_coupang.jpg" /></div>
            <div class="text">
                <h3>재료는 쿠팡 랭킹순 TOP10의 내용을 매일 업데이트해요.</h3>
                <br>
                <p>레시피에 사용되는 재료는 쿠팡에서 검색하여 랭킹순 TOP10에 해당하는 상품이 기준이에요. 시시각각 가격이 변동하기 때문에 하루에 1회, 한국 시간 2시에 재료의 가격을 업데이트하여 레시피 최종가격에 반영하고 있어요.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.area {
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 80px;
}

.card {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    color: #333;
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
    justify-content: space-between;
    width: 100%;
}

.card > div {
    flex: 1; /* 각 div의 너비를 동일하게 설정 */
}

.reverse {
    flex-direction: row-reverse;
}

.text {
    max-width: 40vw;
}

.text p {
    line-height: 1.6em;
}

.card .text h3 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2em;
    color: rgb(64, 63, 76);
}

.card img {
    max-width: 460px;
    width : 40vw;
    border-radius: 20px;
}

@media (max-width: 768px) {
    .area {
    flex-direction: column;
    }

    .card {
    flex-direction: column;
    max-width: 90vw;
    width: 90vw;
    }

    .card img {
        width: 90vw;
    }

    .text {
        max-width: 88vw;
    }

    .card .text h3 {
        font-size: 1.6em;
    }
}
</style>
