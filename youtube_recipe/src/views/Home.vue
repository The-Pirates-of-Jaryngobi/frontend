<template>
    <v-main class="d-flex align-center justify-center home-hero">
        <h1>최저가 유튜브 레시피를<br><span style="font-weight: 400;">검색해보세요</span></h1>
        <div class="input-btn">
            <!-- 현재 표시할 placeholder를 배열에서 가져옴 -->
            <input v-model="menu_name" type="text" :placeholder="placeholders[currentIndex]" class="menu-input" @keyup.enter="searchResult">
            <!-- 버튼 클릭 시 searchResult 메서드 실행-->
            <v-btn @click="searchResult" variant="elevated" size="x-large" rounded="lg" color="#E84855">Search</v-btn>
        </div>
    </v-main>
</template>

<script>

export default {
    data() {
        return {
            menu_name: '', // menu_name 데이터 추가
            placeholders: ['김치찌개', '계란말이', '된장찌개'],
            currentIndex: 0,
            menuList: ['계란말이', '닭갈비'],
        };
    },
    methods: {
        searchResult() {
            console.log('검색어 :', this.menu_name);
/*
            const menuList = {
                '계란말이': {
                    "youtube_url": "https://www.youtube.com/watch?v=oI9yhGS8IpA&pp=ygUM6rOE656A66eQ7J20", // 유튜브 영상 링크
                    "youtube_thumbnail": "https://i.ytimg.com/vi/oI9yhGS8IpA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxqCrQ_ehWU9FbIyoYQtqUxn7FCQ", // 유튜브 썸네일
                    "youtube_title": "미친 색감!! 예쁜 계란말이 만들기 | 계란만 있으면 됩니다(4K)", // 유튜브 제목
                    "channel_name": "B의 식탁 [B's table]", // 채널명
                    "chaneel_img": "https://yt3.ggpht.com/d-TwBHsjfeApT3dKUBR2UUlILyXdwc8vCIX3NV8CHDMp29jg2MPYL4fMLQDqzFC2UE2hkjOi=s88-c-k-c0x00ffffff-no-rj", // 채널 이미지
                    "total_price": 985.0, // 최종 가격
                    "ingredient_list": [
                        {
                            "ingredient_name": "계란", // 재료명
                            "ingredient_unit_price": "184", // 상품 1g 단위당 가격
                            "ingredient_price": 500.0, // 상품 가격
                            "ingredient_volume": 5.0, // 재료 용량
                            "ingredient_unit": "개", // 재료 단위
                            "ingredient_url": "https://www.coupang.com/vp/products/5971027117?itemId=10725672822&vendorItemId=78006304374&pickType=COU_PICK&q=%EA%B3%84%EB%9E%80&itemsCount=36&searchId=de9c24a2dbb14ecdafe3f2f55a3c3c9f&rank=0&isAddedCart=", // 상품 url
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/87707671798877-fcaf7e3a-5aed-4bfc-8bac-b1a692abfa4e.jpg" // 상품 이미지
                        },
                        {
                            "ingredient_name": "맛소금", // 재료명
                            "ingredient_unit_price": "21.89", // 상품 1g 단위당 가격
                            "ingredient_price": 2080.0, // 상품 가격
                            "ingredient_volume": 3.0, // 재료 용량
                            "ingredient_unit": "g", // 재료 단위
                            "ingredient_url": "https://www.coupang.com/vp/products/1483853018?itemId=1044731006&vendorItemId=5506013843&pickType=COU_PICK&q=%EC%86%8C%EA%B8%88&itemsCount=36&searchId=9d20207defb44e6e94c70c6391ff873f&rank=2&isAddedCart=", // 상품 url
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/10/23/21/7/5a32065e-20c7-437e-87ba-ee827a601288.jpg" // 상품 이미지
                        },
                        {
                            "ingredient_name": "설탕", // 재료명
                            "ingredient_unit_price": "1.63", // 상품 1g 단위당 가격
                            "ingredient_price": 24490.0, // 상품 가격
                            "ingredient_volume": 3.0, // 재료 용량
                            "ingredient_unit": "g", // 재료 단위
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349&q=%EC%84%A4%ED%83%95&itemsCount=36&searchId=9d008b206e1b4877a028d58636c5835b&rank=6&isAddedCart=", // 상품 url
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg" // 상품 이미지
                        }
                    ], // 레시피에 들어가는 재료 정보 리스트
                    "ingredient_list_without_unit": [{ "ingredient_name": "물" }]
                },
                '닭갈비': {
                    "youtube_url": "https://www.youtube.com/watch?v=Q7d8RLOhng0", "youtube_thumbnail": "https://i.ytimg.com/vi/Q7d8RLOhng0/maxresdefault.jpg", "youtube_title": "\ub2ed\uac08\ube44 \ub3c8\uc8fc\uace0 \uc0ac\uba39\uc9c0 \ub9d0\uace0 \ub9cc\ub4dc\uc138\uc694!!\ucd98\ucc9c\ub2ed\uac08\ube44 \ub9cc\ud07c \ub9db\uc788\ub294 \ub2ed\uac08\ube44 \ub808\uc2dc\ud53c", "youtube_uploaded_date": "2020-07-15", "channel_name": "\ubc25\uc0c1\ucc28\ub824\uc8fc\ub294\ub0a8\uc790", "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSMn3FSMz-JzjG7e1gvF6ij1yHAhZ7PomWt_QPk=s88-c-k-c0x00ffffff-no-rj", "total_price": 2592.0, "ingredient_list": [{"ingredient_name": "\ub2ed\ub2e4\ub9ac\uc0b4", "ingredient_unit_price": 3.81, "ingredient_price": 45700, "ingredient_volume": 400.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/7141699477?itemId=17931917695&vendorItemId=85093894059", "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/02/10/18/3/6bd4518c-5277-47eb-8f4f-d82190dc074e.jpg"}, {"ingredient_name": "\uc591\ud30c", "ingredient_unit_price": 1.65, "ingredient_price": 16540, "ingredient_volume": 180.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/6258806325?itemId=19223783161&vendorItemId=86340471165", "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif"}, {"ingredient_name": "\ub300\ud30c", "ingredient_unit_price": 2.39, "ingredient_price": 23900, "ingredient_volume": 0.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495", "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg"}, {"ingredient_name": "\uc0ac\uacfc", "ingredient_unit_price": 5.53, "ingredient_price": 49800, "ingredient_volume": 100.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/7786388385?itemId=21055461157&vendorItemId=3077142648", "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4bec/8271603d126db8710e636579063a53e2e19693fa81d7afd7ee1139122963.JPG"}, {"ingredient_name": "\uae7b\uc78e", "ingredient_unit_price": 21.9, "ingredient_price": 21900, "ingredient_volume": 0.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/7420408904?itemId=19247471001&vendorItemId=86363313512", "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3391359859455750-b30483d9-de31-44c8-a9df-8c0577d0e9cc.jpg"}, {"ingredient_name": "\uace0\uad6c\ub9c8", "ingredient_unit_price": 2.18, "ingredient_price": 10900, "ingredient_volume": 100.0, "ingredient_unit": "g", "ingredient_url": "https://www.coupang.com/vp/products/7598703729?itemId=20095813478&vendorItemId=83643408403", "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif"}], "ingredient_list_without_unit": ["\ub300\ud30c", "\uae7b\uc78e"]
                }
            };
*/
            if (this.menuList.includes(this.menu_name)) {
                this.$router.push({ name: 'Result', params: { menu_name: this.menu_name } });
            } else {
                this.$router.push({ name: 'NoResult' });
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.placeholders.length;
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