<template>
    <HomeHero @input-event="searchResult" />
</template>


<script>
import HomeHero from '../components/HomeHero.vue';
/*import { checkDataInDB } from '../api/isindb.js';*/

export default {
    components: {
        HomeHero,
    },
    methods: {
        searchResult(inputData) {
            console.log('검색어 :', inputData); // 확인용 코드
            
            if (inputData.trim() === '') {
                this.$router.push('/noresult');
            } else {
                this.$router.push({ name: 'Result', params: { inputData: inputData } });
            }
        }
    }
    /* 백엔드 API 연결되면 확인할 코드! isindb.js도 확인 필요
    methods: {
        async searchResult(inputData) {
            try {
                const responseData = await checkDataInDB(inputData);
                this.$router.push({ 
                        name: 'Result',
                        params: { 
                            inputData: inputData,
                            responseData: responseData
                    }
                });
            } catch (error) {
                console.error('에러 발생:', error);
                this.$router.push('/error');
            }
        },
        async searchResult(inputData) {
            try {
                if (this.inputData.trim() === '') {
                    this.$router.push('/noresult');
                } else {
                    const isDataInDB = await checkDataInDB(this.inputData);
                    if (isDataInDB) {
                        this.$router.push({ 
                            name: 'Result',
                            params: { 
                                inputData: inputData,
                                responseData: response.data
                            }
                        });
                    } else {
                        this.$router.push('/noresult');
                    }
                }
            } catch (error) {
                console.error('에러 발생:', error);
                this.$router.push('/error');
            }
        },
        async searchResult() {
            try {
                const isDataInDB = await checkDataInDB(this.inputData);
                const route = isDataInDB ? `/result/${this.inputData}` : '/noresult';
                this.$router.push(route);
            } catch (error) {
                console.error('에러 발생:', error);
                this.$router.push('/error');
            }
        }
    }
    */
};

/* 백엔드 API 연결하면 테스트해보기 1 - old
import axios from 'axios';

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
        }
    },
    components: {
        NoResult
    }
};

*/


/* 백엔드 API 연결하면 테스트해보기 2 -old

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
        async checkDataInDB(data) {
            try {
                const response = await axios.post('http://your-backend-api-url/check', {
                data: this.inputData
                });
                // 백엔드에서 받은 응답에 따라 searchResult 설정
                this.searchResult = response.data.exists;
            } catch (error) {
                console.error('데이터베이스 확인 실패:', error);
                // 에러 발생 시 searchResult를 null로 설정
                this.searchResult = null;
            }
        }
    };

*/
</script>

<style>

</style>