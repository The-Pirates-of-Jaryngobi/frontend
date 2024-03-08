<template>
    <div class="container faq-line">
        <h3>FAQ</h3>
        <div class="column">
            <div>
                <p><strong>유튜브의 모든 레시피가 있나요?</strong></p><br>
                <p>아니요. 영상 설명 본문글에 음식명, 재료명, 단위, 용량을 적어둔 레시피만 유효한 레시피로 판별해요. 또한, 유튜브 랭킹 상위 10개만 가져오고 있어요.</p>
            </div>
            <div>
                <p><strong>재료 가격 기준은 무엇인가요?</strong></p><br>
                <p>레시피에 사용된 재료들의 가격은 쿠팡 랭킹순 TOP5 중에서 가장 저렴한 재료를 선정해요. 재료들의 가격은 매일 업데이트 되고 있어요.</p>
            </div>
            <div>
                <p><strong>저작권은 문제 없나요?</strong></p><br>
                <p>홈페이지 하단에 데이터 출처를 표기해두었으니 참고하시면 좋아요.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 10px;
    gap: 4em;
}

.column {
    display: flex;
    flex-direction: row;
    gap: 60px;
    width: 100%;
}

.column > div {
    flex: 1; /* 각 div의 너비를 동일하게 설정 */
}

h3 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2.7em;
    color: #403f4c;
    overflow-wrap: break-word; /* 긴 단어가 있을 경우 줄바꿈이 일어나도록 설정합니다. */
    word-break: normal; /* 단어 중간에서도 줄바꿈을 허용합니다 (필요 시). */
}

.column p {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    color: #666;
    line-height: 1.6em;
    font-size: 1em;
}

.column strong {
    font-family: "Noto Sans KR", sans-serif;
    color: #403f4c;
    font-size: 1.2em;
    line-height: 1.2em;
}

.faq-line {
    padding-top: 4em;
    border-Top: 1px solid #aaa5;
}

@media (max-width: 600px) {
    .column {
        flex-direction: column;
    }
}

</style>
