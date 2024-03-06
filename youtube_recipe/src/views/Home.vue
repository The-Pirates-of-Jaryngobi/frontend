<template>
    <div class="content">
        <input v-model="inputData" type="text" placeholder="김치찌개">
        <button @click="$router.push(`/result/${inputData}`)">검색</button>
    </div>
    <!--<NoResult v-if="showNoResult" />-->
</template>

<script>
//import HeaderWhite from '../components/HeaderWhite.vue';

export default {
    data() {
        return {
        inputData: ''
        };
    },
    methods: {
        search() {
        // 입력 데이터가 비어 있는 경우 NoResult 페이지로 이동 (에러는 안 나지만, 작동 안 되고 있어서 수정 필요)
        if (this.inputData.trim() === '') {
            this.$router.push('/noresult');
        } else {
            // 입력 데이터가 있는 경우 검색 결과 페이지로 이동
            this.$router.push({ name: 'Result', params: { inputData: this.inputData } });
        }
        }
    }/*,
    components: {
        HeaderWhite
    }*/
};



/* 백엔드 API 연결하면 테스트해보기 1

//import HeaderWhite from './components/HeaderWhite.vue'
//import Hero from './components/HeroMain.vue'
//import Footer from './components/Footer.vue'

export default {
    data() {
        return {
            inputData: '',
            showNoResult: false
        };
    },
    methods: {        
        async search() {
            if (this.inputData === '') {
                this.showNoResult = true;
            } else {
                // 검색어를 백엔드 API로 전달하여 데이터베이스에서 결과 확인
                const response = await fetch(`/api/search?term=${this.inputData}`);
                const data = await response.json();
                
                if (data.length === 0) {
                    this.$router.push({ name: 'NoResult' }); // 검색 결과가 없을 때 NoResult.vue로 이동
                } else {
                    this.$router.push({ name: 'Result', params: { inputData: this.inputData } });
                }
            }
        },
    },
    components: {
        NoResult
    }
};

*/


/* 백엔드 API 연결하면 테스트해보기 2

export default {
    data() {
        return {
        inputData: ''
        };
    },
    methods: {
        searchResult() {
        // 입력 데이터 확인 후 Result 페이지로 이동 또는 NoResult 페이지로 이동
        if (this.inputData.trim() === '') {
            this.$router.push('/noresult');
        } else {
            // 실제로 DB에 있는지 여부를 확인하여 처리하는 로직이 필요합니다.
            const isDataInDB = this.checkDataInDB(this.inputData);
            if (isDataInDB) {
            this.$router.push(`/result/${this.inputData}`);
            } else {
            this.$router.push('/noresult');
            }
        }
        },
        checkDataInDB(data) {
        // 여기에 실제로 데이터베이스에서 데이터를 확인하는 로직을 작성해야 합니다.
        // 이 예시에서는 단순히 false를 반환합니다.
        return false;
        }
    }
    };

*/


</script>


<style>
h1 {
    color: #333;
}
.content {
margin-top: 40px; /* 헤더와 콘텐츠 사이의 간격 설정 */
padding: 20px;
background-color: #f4f4f4;
}
</style>