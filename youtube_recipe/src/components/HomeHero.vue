<template>
    <v-app>
        <v-container fluid fill-height class="d-flex align-center justify-center bg-light">
            <v-row justify="center">
                <v-col cols="12" sm="12" md="6" lg="4">
                    <h1>최저가 유튜브 레시피를</h1>
                    <h1 style="font-weight: 300;">검색해보세요</h1>
                    <br>
                    <!-- 현재 표시할 placeholder를 배열에서 가져옴 -->
                    <input v-model="inputData" type="text" :placeholder="placeholders[currentIndex]" class="menu-input">
                    <!-- 버튼 클릭 시 search 메서드 실행-->
                    <v-btn @click="Search" variant="elevated" size="large" rounded="lg" color="#E84855">
                    Search
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
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
.menu-input {
    background-color: #eee;
    width: 60%;
    height: 44px;
    border-radius: 10px;
    margin-right: 10px;
}

.container {
    display: grid;
    place-content: center;
    height: 100vh; /* 화면 높이의 100%로 설정하여 화면 중앙에 배치합니다. */
}

</style>