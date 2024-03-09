<template>
    <ResultHero :inputData="inputData" :searchResults="searchResults" />
    <ResultDetail :inputData="inputData" :searchResults="searchResults" />
</template>

<script>
//import HeaderBlack from './components/HeaderBlack.vue'
import ResultHero from '../components/ResultHero.vue';
import ResultDetail from '../components/ResultDetail.vue';
//import Footer from './components/Footer.vue'

export default {
    props: {
        $route: {
            type: Object,
            required: true
        }
    },
    computed: {
        // 라우터 파라미터로부터 inputData를 가져오기
        inputData() {
            return this.$route.params.inputData;
        },
        // 검색 결과를 반환
        searchResults() {
            // 검색어에 해당하는 내용을 가져오는 로직 구현
            // 예시로 정적인 데이터를 사용하고, 실제로는 API 요청 등을 통해 데이터를 가져와야 함
            // 검색 결과를 가정한 정적 데이터
            const searchData = {
                "youtube_url": "https://www.youtube.com/watch?v=oI9yhGS8IpA&pp=ygUM6rOE656A66eQ7J20", // 유튜브 영상 링크
                "youtube_thumbnail": "https://i.ytimg.com/vi/oI9yhGS8IpA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxqCrQ_ehWU9FbIyoYQtqUxn7FCQ", // 유튜브 썸네일
                "youtube_title": "미친 색감!! 예쁜 계란말이 만들기 | 계란만 있으면 됩니다(4K)", // 유튜브 제목
                "channel_name": "B의 식탁 [B's table]", // 채널명
                "chaneel_img": "https://yt3.ggpht.com/d-TwBHsjfeApT3dKUBR2UUlILyXdwc8vCIX3NV8CHDMp29jg2MPYL4fMLQDqzFC2UE2hkjOi=s88-c-k-c0x00ffffff-no-rj", // 채널 이미지
                "total_price": 800.0, // 최종 가격
                "ingredient_list": [
                    {
                        "ingredient_name": "계란", // 재료명
                        "ingredient_unit_price": "10", // 상품 1g 단위당 가격
                        "ingredient_price": 500.0, // 상품 가격
                        "ingredient_volume": 5.0, // 재료 용량
                        "ingredient_unit": "개", // 재료 단위
                        "ingredient_url": "https://www.coupang.com/vp/products/5971027117?itemId=10725672822&vendorItemId=78006304374&pickType=COU_PICK&q=%EA%B3%84%EB%9E%80&itemsCount=36&searchId=de9c24a2dbb14ecdafe3f2f55a3c3c9f&rank=0&isAddedCart=", // 상품 url
                        "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/87707671798877-fcaf7e3a-5aed-4bfc-8bac-b1a692abfa4e.jpg" // 상품 이미지
                    },
                    {
                        "ingredient_name": "소금", // 재료명
                        "ingredient_unit_price": "5", // 상품 1g 단위당 가격
                        "ingredient_price": 10.0, // 상품 가격
                        "ingredient_volume": 3.0, // 재료 용량
                        "ingredient_unit": "g", // 재료 단위
                        "ingredient_url": "https://www.coupang.com/vp/products/1483853018?itemId=1044731006&vendorItemId=5506013843&pickType=COU_PICK&q=%EC%86%8C%EA%B8%88&itemsCount=36&searchId=9d20207defb44e6e94c70c6391ff873f&rank=2&isAddedCart=", // 상품 url
                        "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/10/23/21/7/5a32065e-20c7-437e-87ba-ee827a601288.jpg" // 상품 이미지
                    }
                ], // 레시피에 들어가는 재료 정보 리스트
                "ingredient_list_without_unit": [
                    {
                        "ingredient_name": "물"
                    }
                ] // 레시피에는 들어가지만 단위 정보가 없는 재료 리스트
            };

            // 가공된 검색 결과에서 필요한 정보를 반환합니다.
            return searchData;
        }
    },
    components: {
        ResultHero,
        ResultDetail,
    },
};
</script>
