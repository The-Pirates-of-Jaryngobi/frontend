import axios from 'axios'

export async function checkDataInDB(inputData) {
    try {
        const response = await axios.post('http://your-backend-api-url/check', {
            data: inputData
        });
        return response.data.exists;
    } catch (error) {
        console.error('데이터베이스 확인 실패:', error);
        return false;
    }
}

/* 통합 버전
export default {
    methods: {
        async searchResult() {
            try {
                // 데이터베이스에 있는지 확인하기 위해 백엔드 API 호출
                const response = await this.$axios.post('http://your-backend-api-url/check', {
                    data: this.inputData
                });

                if (response.data.exists) {
                    // 데이터베이스에 있으면 Result 페이지로 이동
                    this.$router.push({ name: 'Result', params: { inputData: this.inputData } });
                } else {
                    // 데이터베이스에 없으면 NoResult 페이지로 이동
                    this.$router.push('/noresult');
                }
            } catch (error) {
                console.error('데이터베이스 확인 실패:', error);
                // 에러 발생 시 Error 페이지로 이동
                this.$router.push('/error');
            }
        }
    }
};
*/