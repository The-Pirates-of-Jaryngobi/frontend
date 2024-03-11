<template>
    <v-main class="d-flex align-center justify-center home-hero">
        <h1>최저가 유튜브 레시피를<br><span style="font-weight: 400;">검색해보세요</span></h1>
        <div class="input-btn">
            <!-- 현재 표시할 placeholder를 배열에서 가져옴 -->
            <input v-model="menu_name" type="text" :placeholder="menuList[currentIndex]" class="menu-input" @keyup.enter="searchResult">
            <!-- 버튼 클릭 시 searchResult 메서드 실행-->
            <v-btn @click="searchResult" variant="elevated" size="x-large" rounded="lg" color="#E84855">Search</v-btn>
        </div>
    </v-main>
</template>

<script>

export default {
    data() {
        return {
            menu_name: '',
            //placeholders: ['갈비탕', '계란말이', '베이글', '홍합미역국'],
            currentIndex: 0,
            menuList: ['홍합미역국', '피조개무침', '피자빵', '파무침', '토란대나물무침', '초코소라빵', '채소떡볶이', '참치죽', '유채나물무침', '우거지해장국', '연어롤', '쇠고기미역국', '비름나물무침', '북어채무침', '베이글', '미역튀각', '미역국', '모듬찰떡', '멸치볶음', '메밀전병', '떡강정', '도토리묵', '도라지나물무침', '닭날개튀김', '닭고추장조림', '닭강정', '꽈리고추멸치볶음', '깻잎나물무침', '김치전골', '골뱅이국수무침', '고들빼기김치', '검정콩밥', '감자크로켓', '갈비탕', '간장마늘쫑장아찌'],
        };
    },
    methods: {
        searchResult() {
            console.log('검색어 :', this.menu_name);
            if (this.menuList.includes(this.menu_name)) {
                this.$router.push({ name: 'Result', params: { menu_name: this.menu_name } });
            } else {
                this.$router.push({ name: 'NoResult' });
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.menuList.length;
        }, 2000);
    },
    watch: {
        menu_name(newValue, oldValue) {
            console.log('menu_name changed:', newValue);
        }
    },
};
</script>

<style scoped>
.home-hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    line-height: 1.2;
    font-family: "Noto Sans KR", sans-serif; 
    color: #111;
    text-align: center;
    padding-top: 20px;

    background-image: url("../assets/main_bg.svg");
    background-position: center; /* 이미지를 중앙으로 위치 */
    background-size: cover; /* 배경 이미지가 컨테이너를 꽉 채우도록 설정 */
}

.home-hero h1 {
    font-size: 5em;
    font-weight: 900;
}


.input-btn {
    margin-top: 4em;
    display: flex;
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

    .home-hero h1 {
        font-size: 4.5em;
        padding: 20px 0;
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

    .home-hero h1 {
        font-size: 4em;
        padding: 20px 0;
    }
}

</style>