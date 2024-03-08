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
        searchResult(menu_name) {
            console.log('검색어 :', menu_name); // 확인용 코드
            
            if (menu_name.trim() === '') {
                this.$router.push('/noresult');
            } else {
                this.$router.push({ name: 'Result', params: { menu_name: menu_name } });
            }
        }
    }
};

/*
import HomeHero from '../components/HomeHero.vue';

export default {
    components: {
        HomeHero,
    },
    methods: {
        searchResult(menu_name) {
            console.log('검색어 :', menu_name); // 확인용 코드
            
            if (menu_name.trim() === '') {
                this.$router.push('/noresult');
            } else {
                // 검색 결과 중에서 menu_name과 일치하는 항목을 찾습니다.
                const matchedResult = this.searchResults.find(result => result.menu_name === menu_name);
                
                if (matchedResult) {
                    // 일치하는 검색 결과가 있으면 해당 결과로 라우팅합니다.
                    this.$router.push({ name: 'Result', params: { menu_name: menu_name } });
                } else {
                    // 일치하는 검색 결과가 없으면 'noresult' 페이지로 이동합니다.
                    this.$router.push('/noresult');
                }
            }
        }
    }
};
*/
</script>
