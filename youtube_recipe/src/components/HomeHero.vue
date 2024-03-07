<template>
    <v-main class="d-flex align-center justify-center hero main-hero">
        <h1>최저가 유튜브 레시피를<br><span style="font-weight: 400;">검색해보세요</span></h1>
        <div class="input-btn">
            <!-- 현재 표시할 placeholder를 배열에서 가져옴 -->
            <input v-model="inputData" type="text" :placeholder="placeholders[currentIndex]" class="menu-input" @keyup.enter="Search">
            <!-- 버튼 클릭 시 search 메서드 실행-->
            <v-btn @click="Search" variant="elevated" size="x-large" rounded="lg" color="#E84855">Search</v-btn>
        </div>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            inputData: '',
            placeholders: ['김치찌개', '계란말이', '된장찌개'], // placeholder를 순서대로 담은 배열
            currentIndex: 0 // 현재 placeholder의 인덱스
        };
    },
    methods: {
        Search() {
            this.$emit('input-event', this.inputData);
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.placeholders.length;
        }, 2000);
    },
    watch: {
        // inputData가 변경될 때마다 실행
        inputData(newValue, oldValue) {
            console.log('inputData changed:', newValue);
        }
    }
}
</script>

<style>

.hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    line-height: 1.2;
    font-family: "Noto Sans KR", sans-serif; 
    color: #111;
    text-align: center;
    padding-top: 20px;
}

.main-hero {
    background-image: url("../assets/main_bg.svg");
    background-position: center; /* 이미지를 중앙으로 위치 */
    background-size: cover; /* 배경 이미지가 컨테이너를 꽉 채우도록 설정 */
}

.main-hero h1 {
    font-size: 5em;
    font-weight: 900;
}


.input-btn {
    margin-top: 4em;
}

.menu-input {
    min-width: 480px;
    max-width: 600px;
    height: 52px;
    background-color: #eee;
    border-radius: 5px; 
    padding: 0px 12px;
    font-size: 16px;
    margin-right: 10px;
    appearance: none; /* 기본 스타일 제거 */
}


@media (min-width: 1001px) {
    .hero {
        background-size: 1000px; /* 화면 너비가 1001px 이상일 경우의 최대 배경 이미지 크기 설정 */
    }
}

@media (max-width: 768px) {
    .menu-input {
        min-width: 380px; /* 화면이 768px 이하일 때 인풋의 최소 가로 너비 */
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .input-btn {
        display: flex;
        flex-direction: column;
    }

    .menu-input {
        min-width: 236px; /* 화면이 480px 이하일 때 인풋의 최소 가로 너비 */
        margin-right: 0px;
        margin-bottom: 10px;
    }
}

</style>