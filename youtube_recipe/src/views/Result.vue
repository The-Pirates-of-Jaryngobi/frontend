<template>
    <div>
        <ResultHero :menu_name="menu_name" :searchResult="searchResult" />
        <ResultDetail :menu_name="menu_name" :searchResult="searchResult" />
    </div>
</template>

<script>
import ResultHero from '../components/ResultHero.vue';
import ResultDetail from '../components/ResultDetail.vue';

export default {
    computed: {
        menu_name() {
            return this.$route.params.menu_name;
        },
        searchResult() {
            // 검색어에 해당하는 내용을 가져오는 로직 구현
            // 예시로 정적인 데이터를 사용하고, 실제로는 API 요청 등을 통해 데이터를 가져와야 합니다.
            const searchData = {
                '계란말이': {
                    "youtube_url": "https://www.youtube.com/watch?v=oI9yhGS8IpA&pp=ygUM6rOE656A66eQ7J20", // 유튜브 영상 링크
                    "youtube_thumbnail": "https://i.ytimg.com/vi/oI9yhGS8IpA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxqCrQ_ehWU9FbIyoYQtqUxn7FCQ", // 유튜브 썸네일
                    "youtube_title": "미친 색감!! 예쁜 계란말이 만들기 | 계란만 있으면 됩니다(4K)", // 유튜브 제목
                    "youtube_uploaded_date" : "2023.01.13",
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
                },
                "홍합미역국": {
                    "youtube_url": "https://www.youtube.com/watch?v=OwhZKjBeqyQ",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/OwhZKjBeqyQ/maxresdefault.jpg",
                    "youtube_title": "홍합미역국 끓이는법 바다향 물씬 나는 국물이 뽀얀 홍합 미역국 맛있게 만들기",
                    "youtube_uploaded_date": "2019-10-22 00:00:00",
                    "channel_name": "엄마의집밥 Mom's food",
                    "channel_img": "https://yt3.ggpht.com/uMA7_qEIa3Gg9vNGhiMZN8MPTFe9U3q9w28J5TBN5wnZPualDAwrB9lzjmX-0Tw0xhds7aoZjQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1822.0600000000002,
                    "ingredient_list": [
                        {
                            "ingredient_name": "미역",
                            "ingredient_unit_price": 17.39,
                            "ingredient_price": 17390,
                            "ingredient_volume": 27.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7449334644?itemId=19389782379&vendorItemId=70080553798",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 469.53000000000003
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 19.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 372.40000000000003
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 3.75
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.5
                        },
                        {
                            "ingredient_name": "홍합",
                            "ingredient_unit_price": 2.5,
                            "ingredient_price": 12500,
                            "ingredient_volume": 370.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4322446192?itemId=5033154937&vendorItemId=72311683674",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3147/5811f9e4c0a77bcad83cc2bc7c4434bf8230ebad3a8f0c023c4d45c1f3e6.JPG",
                            "price": 925.0
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 1.37,
                            "ingredient_price": 19190,
                            "ingredient_volume": 24.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5938053333?itemId=18204402896&vendorItemId=78415747472",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 32.88
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "피조개무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=twoDyAOIH60",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/twoDyAOIH60/maxresdefault.jpg",
                    "youtube_title": "피꼬막살(피조개살) 무침",
                    "youtube_uploaded_date": "2020-03-07 00:00:00",
                    "channel_name": "SHF",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSfrlNbY7-Io75ZUpFBTKEDEPE77xHwpr8bkpAHBQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1907.325,
                    "ingredient_list": [
                        {
                            "ingredient_name": "자숙피조개살",
                            "ingredient_unit_price": 1.55,
                            "ingredient_price": 99000,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7657709569?itemId=20392679003&vendorItemId=87475390533",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 465.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1044.0
                        },
                        {
                            "ingredient_name": "올리고당",
                            "ingredient_unit_price": 2.13,
                            "ingredient_price": 42690,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=7367555431&vendorItemId=74658955839",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 47.925
                        },
                        {
                            "ingredient_name": "매실액기스",
                            "ingredient_unit_price": 3.52,
                            "ingredient_price": 42220,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2176203818?itemId=18741428378&vendorItemId=71688414360",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/09/28/19/9/5fbf859e-38e1-426a-aab9-9eff4be1b459.jpg",
                            "price": 79.2
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 83.25
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 175.5
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.83,
                            "ingredient_price": 15020,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.45
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "피자빵": {
                    "youtube_url": "https://www.youtube.com/watch?v=3T2IWWjxHAE",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/3T2IWWjxHAE/maxresdefault.jpg",
                    "youtube_title": "Chewy Pizza Bread 쫄깃한 피자빵 만들기 | Kkuume",
                    "youtube_uploaded_date": "2022-09-01 00:00:00",
                    "channel_name": "꾸움 Kkuume",
                    "channel_img": "",
                    "total_price": 1078.1100000000001,
                    "ingredient_list": [
                        {
                            "ingredient_name": "우유",
                            "ingredient_unit_price": 2.24,
                            "ingredient_price": 24230,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1232968322?itemId=19223670182&vendorItemId=86340356463",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 112.00000000000001
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 21.0
                        },
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 10.94,
                            "ingredient_price": 109440,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=20558829307&vendorItemId=85434486463",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 43.76
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 16.299999999999997
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 3.0
                        },
                        {
                            "ingredient_name": "오일",
                            "ingredient_unit_price": 3.11,
                            "ingredient_price": 16820,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/487322?itemId=17572599273&vendorItemId=84994378258",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 46.65
                        },
                        {
                            "ingredient_name": "강력분",
                            "ingredient_unit_price": 1.12,
                            "ingredient_price": 22320,
                            "ingredient_volume": 170.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1421510377?itemId=2460073624&vendorItemId=87933064191",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 190.4
                        },
                        {
                            "ingredient_name": "찹쌀가루",
                            "ingredient_unit_price": 4.86,
                            "ingredient_price": 29130,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6066446013?itemId=18764005996&vendorItemId=85895811367",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/cece244b-df20-4e1c-83c9-06575630bf4e1655421444451836065.png",
                            "price": 243.00000000000003
                        },
                        {
                            "ingredient_name": "파슬리플레이크",
                            "ingredient_unit_price": 26.8,
                            "ingredient_price": 21420,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/238576915?itemId=18040284511&vendorItemId=85194623118",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/887b84ac-7068-46ba-a4ba-9c096920e0806927987208978511747.png",
                            "price": 402.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "파무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=_2wVS8dfmfE",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/_2wVS8dfmfE/maxresdefault.jpg",
                    "youtube_title": "고깃집 파절이는 이렇게 무쳐야 진짜 맛있어요",
                    "youtube_uploaded_date": "2022-06-12 00:00:00",
                    "channel_name": "김대석 셰프TV",
                    "channel_img": "https://yt3.ggpht.com/aupNCO-3Qu8vAKwSMhLIlrhXi25j4cnqOE-00u6vODlFLDTAied56l_pTLCpYCknkGvRxhNg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 738.8249999999998,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 286.8
                        },
                        {
                            "ingredient_name": "무",
                            "ingredient_unit_price": 1.58,
                            "ingredient_price": 7900,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7403364293?itemId=19166701875&vendorItemId=82973629812",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 158.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 87.0
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 5.433333333333333
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1.875
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.83,
                            "ingredient_price": 15020,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 4.1499999999999995
                        },
                        {
                            "ingredient_name": "통깨",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 89.9
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 99.0
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 6.666666666666666
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "토란대나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=DF2fDqdz3tI",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/DF2fDqdz3tI/maxresdefault.jpg",
                    "youtube_title": "토란대 나물 볶음 / 토란대 독성 제거 꼭 하세요.",
                    "youtube_uploaded_date": "2021-02-25 00:00:00",
                    "channel_name": "Meal is love우리네 밥상",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSJTPmaHRdgATYaMGlFwMUL82YBkR28iWcAuJNdag=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1543.5500000000002,
                    "ingredient_list": [
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 55.5
                        },
                        {
                            "ingredient_name": "들깨가루",
                            "ingredient_unit_price": 7.2,
                            "ingredient_price": 72100,
                            "ingredient_volume": 45.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6669341850?itemId=18333052229&vendorItemId=85477546173",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 324.0
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 1.37,
                            "ingredient_price": 19190,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5938053333?itemId=18204402896&vendorItemId=78415747472",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 20.55
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 10.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 200.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 42.0
                        },
                        {
                            "ingredient_name": "삶은손질된토란대",
                            "ingredient_unit_price": 2.2,
                            "ingredient_price": 22000,
                            "ingredient_volume": 340.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7817092076?itemId=21219919815&vendorItemId=88280865399",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 748.0000000000001
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 49.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "초코소라빵": {
                    "youtube_url": "https://www.youtube.com/watch?v=gAIvpzyNcqs",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/gAIvpzyNcqs/hqdefault.jpg",
                    "youtube_title": "Sub ] 입안에서 사방사방 달콤 초코크림 맛보세요 / 쉽게 맛있는 초코 소라빵 만들기 / You will love and keep this recipe for ever",
                    "youtube_uploaded_date": "2022-05-26 00:00:00",
                    "channel_name": "호주가이버hojugyver",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZS6BwR367IxBxWpbfBlUAClPkU3ADcJb8nqQ75g6j8=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 484.25,
                    "ingredient_list": [
                        {
                            "ingredient_name": "다크초콜렛블럭",
                            "ingredient_unit_price": 6.7,
                            "ingredient_price": 6700,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6138530431?itemId=19344756351&vendorItemId=71583285146&pickType=COU_PICK",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3225711041318621-4d9acd60-0cf9-4793-ac07-55d60ebdc179.jpg",
                            "price": 268.0
                        },
                        {
                            "ingredient_name": "버터",
                            "ingredient_unit_price": 10.67,
                            "ingredient_price": 53360,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/206818868?itemId=18578646483&vendorItemId=85715378404",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 160.05
                        },
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 10.94,
                            "ingredient_price": 109440,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=20558829307&vendorItemId=85434486463",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 54.699999999999996
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 2.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "채소떡볶이": {
                    "youtube_url": "https://www.youtube.com/watch?v=g6K87STXV-k",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/g6K87STXV-k/maxresdefault.jpg",
                    "youtube_title": "6년을 갈아 넣은 떡볶이 양념에 저희 딸이 접시까지 핥아 먹고 있네요. 한번 달려 보입시다~",
                    "youtube_uploaded_date": "2021-09-01 00:00:00",
                    "channel_name": "쿡잇파파 C.E.P.P",
                    "channel_img": "https://yt3.ggpht.com/lP5MSH0ECoAx4eL1BiV68ElBRWE8qVkCnVdaFB4xQPHl1Hq3x8Ynux7qi30cuuyrfnSczoH38UI=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3285.73,
                    "ingredient_list": [
                        {
                            "ingredient_name": "파",
                            "ingredient_unit_price": 4.25,
                            "ingredient_price": 4250,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6528172171?itemId=5911958170&vendorItemId=73210037048&pickType=COU_PICK",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4063320789843989-2f070b18-3886-4b8c-871b-2403227cfec9.jpg",
                            "price": 85.0
                        },
                        {
                            "ingredient_name": "마늘",
                            "ingredient_unit_price": 7.12,
                            "ingredient_price": 35600,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7522579565?itemId=19733204766&vendorItemId=74155694139",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 71.2
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 63.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 117.0
                        },
                        {
                            "ingredient_name": "고운고추가루",
                            "ingredient_unit_price": 9.0,
                            "ingredient_price": 22500,
                            "ingredient_volume": 14.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=2307634996&vendorItemId=70304472937",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/602898626509561-ba93000f-f3fb-4370-bf63-acf22f286222.jpg",
                            "price": 126.0
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 24.45
                        },
                        {
                            "ingredient_name": "케찹",
                            "ingredient_unit_price": 1.97,
                            "ingredient_price": 6500,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=20279414658&vendorItemId=3000044037",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 39.4
                        },
                        {
                            "ingredient_name": "카레가루",
                            "ingredient_unit_price": 5.55,
                            "ingredient_price": 55490,
                            "ingredient_volume": 16.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4005453?itemId=556122587&vendorItemId=70909973964",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 88.8
                        },
                        {
                            "ingredient_name": "물엿",
                            "ingredient_unit_price": 1.25,
                            "ingredient_price": 20000,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6426819903?itemId=19739516335&vendorItemId=85322257772",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fa5d7606-0e64-47e9-8068-bfd1304793271942558829879633390.png",
                            "price": 25.0
                        },
                        {
                            "ingredient_name": "떡",
                            "ingredient_unit_price": 8.5,
                            "ingredient_price": 11880,
                            "ingredient_volume": 250.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6511333006?itemId=14383382934&vendorItemId=77604375339",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2125.0
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 24.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 62.88
                        },
                        {
                            "ingredient_name": "다시다",
                            "ingredient_unit_price": 3.6,
                            "ingredient_price": 42840,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/45708?itemId=18036780282&vendorItemId=85191203553",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.0
                        },
                        {
                            "ingredient_name": "어묵",
                            "ingredient_unit_price": 4.4,
                            "ingredient_price": 13090,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/305534577?itemId=19224737751&vendorItemId=86341408669",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/ef244fb8-1ae2-4f9f-814d-7d415663d55c8032382146989868077.png",
                            "price": 440.00000000000006
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "참치죽": {
                    "youtube_url": "https://www.youtube.com/watch?v=j9NXZh0gX3w",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/j9NXZh0gX3w/maxresdefault.jpg",
                    "youtube_title": "비 오는 날엔 술 한잔 생각나는 김치찜! 고등어 통조림으로 쉽게 만듭니다! ㅣ 백종원의 백종원레시피",
                    "youtube_uploaded_date": "2020-01-07 00:00:00",
                    "channel_name": "백종원 PAIK JONG WON",
                    "channel_img": "https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 4505.6,
                    "ingredient_list": [
                        {
                            "ingredient_name": "신김치",
                            "ingredient_unit_price": 2.5,
                            "ingredient_price": 25000,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7122229650?itemId=17835916638&vendorItemId=84999602570",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1000.0
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.65,
                            "ingredient_price": 16540,
                            "ingredient_volume": 180.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6258806325?itemId=19223783161&vendorItemId=86340471165",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 297.0
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 16.21,
                            "ingredient_price": 29170,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6639183562?itemId=19223914026&vendorItemId=86340596423",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3960703655094524-f015193d-605b-4763-a119-4181683915d7.jpg",
                            "price": 324.20000000000005
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 119.5
                        },
                        {
                            "ingredient_name": "굵은고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295383828?itemId=18595395425&vendorItemId=85731555076",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5d09926d-e09b-4a22-ae42-be174e7f58463745549208769097908.png",
                            "price": 174.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 84.0
                        },
                        {
                            "ingredient_name": "간마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 109.2
                        },
                        {
                            "ingredient_name": "된장",
                            "ingredient_unit_price": 3.02,
                            "ingredient_price": 9070,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1320940305?itemId=154135&vendorItemId=3000080349",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/193968610145347-df4fd946-d496-44df-b0a5-8ef49270fc45.jpg",
                            "price": 90.6
                        },
                        {
                            "ingredient_name": "황설탕",
                            "ingredient_unit_price": 2.04,
                            "ingredient_price": 30670,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2146550469?itemId=20142506636&vendorItemId=88803700015",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 20.4
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.16,
                            "ingredient_price": 15050,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7196421572?itemId=18180298196&vendorItemId=85329334567",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 23.2
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 148.5
                        },
                        {
                            "ingredient_name": "고등어통조림",
                            "ingredient_unit_price": 5.0,
                            "ingredient_price": 13900,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6504316111?itemId=12081336697&vendorItemId=86683721665",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/628b/db65bce23cc9e99aaa7ef32b7ab503950605b6015a5be169df4167e3eaba.jpg",
                            "price": 2000.0
                        },
                        {
                            "ingredient_name": "고운고춧가루",
                            "ingredient_unit_price": 9.0,
                            "ingredient_price": 22500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=2307634996&vendorItemId=70304472937",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/602898626509561-ba93000f-f3fb-4370-bf63-acf22f286222.jpg",
                            "price": 90.0
                        },
                        {
                            "ingredient_name": "간생강",
                            "ingredient_unit_price": 5.0,
                            "ingredient_price": 50240,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228412?itemId=19282714821&vendorItemId=86397666119",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 25.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "유채나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=NEtlBQH7qro",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/NEtlBQH7qro/maxresdefault.jpg",
                    "youtube_title": "유채나물 무조건 데치세요!  나물 중에 찐 . 어떤 나물과 견줄 수 없는 유채나물 무침",
                    "youtube_uploaded_date": "2020-02-01 00:00:00",
                    "channel_name": "뚝딱Tooktak",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZQnMzW6bGQxUdeTKTvuLsD66xoIrxqHaeYlDoqriA=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2241.7000000000003,
                    "ingredient_list": [
                        {
                            "ingredient_name": "유채나물",
                            "ingredient_unit_price": 5.88,
                            "ingredient_price": 23500,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2304699009?itemId=3972352221&vendorItemId=4384678259",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1764.0
                        },
                        {
                            "ingredient_name": "당근",
                            "ingredient_unit_price": 2.78,
                            "ingredient_price": 13900,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728601536?itemId=21021502361&vendorItemId=86893492119",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0c8/f5ce9d7cfb931230ea71e70ea36d42f85abb7e7210ba49d87f5b67cc02ff.jpg",
                            "price": 166.79999999999998
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 196.0
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 9.49,
                            "ingredient_price": 18980,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1667161685?itemId=2840569126&vendorItemId=70829944677",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/316782230414351-876ced41-ce45-4dbe-8c7c-94e22c1b506d.jpg",
                            "price": 94.9
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 20.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "우거지해장국": {
                    "youtube_url": "https://www.youtube.com/watch?v=XQbCuyji3_4",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/XQbCuyji3_4/maxresdefault.jpg",
                    "youtube_title": "쉽게 만드는 우거지 해장국👍 김장 후 남은 배추우거지 활용법",
                    "youtube_uploaded_date": "2022-11-22 00:00:00",
                    "channel_name": "엄마의요리랜드",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSzmkCZkwKcgQ_Ro-8oeTrlhgKCjcO_oVZgO38TFw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 848.6,
                    "ingredient_list": [
                        {
                            "ingredient_name": "배추우거지",
                            "ingredient_unit_price": 1.55,
                            "ingredient_price": 30900,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7518917411?itemId=19716454398&vendorItemId=86206337577",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9597/b748c8a209b97e76706935e16fce772548e25bf7675cdffe50d7251177ac.jpg",
                            "price": 620.0
                        },
                        {
                            "ingredient_name": "된장",
                            "ingredient_unit_price": 3.02,
                            "ingredient_price": 9070,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1320940305?itemId=154135&vendorItemId=3000080349",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/193968610145347-df4fd946-d496-44df-b0a5-8ef49270fc45.jpg",
                            "price": 15.1
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 23.5
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 130.5
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 23.900000000000002
                        },
                        {
                            "ingredient_name": "마늘",
                            "ingredient_unit_price": 7.12,
                            "ingredient_price": 35600,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7522579565?itemId=19733204766&vendorItemId=74155694139",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 35.6
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "연어롤": {
                    "youtube_url": "https://www.youtube.com/watch?v=P3cuVX_3iL4",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/P3cuVX_3iL4/hqdefault.jpg",
                    "youtube_title": "세상 쉬운 초간단 연어요리 연어초밥 만들기",
                    "youtube_uploaded_date": "2020-08-10 00:00:00",
                    "channel_name": "초이초이",
                    "channel_img": "https://yt3.ggpht.com/oBob-Z7uJ395tKq2IPSZtoFjLaC3vDdR0ya1WmoN-YJBIEnS_Knuz52bVxM5WQHQ-ZTvh0aP4w=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 13256.800000000001,
                    "ingredient_list": [
                        {
                            "ingredient_name": "밥",
                            "ingredient_unit_price": 3.61,
                            "ingredient_price": 36380,
                            "ingredient_volume": 420.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7038410650?itemId=19565597272&vendorItemId=86673474312",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2d4f86a3-11bb-482a-8537-8c1e7b59bce11135118731124213168.png",
                            "price": 1516.2
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.65,
                            "ingredient_price": 16540,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6258806325?itemId=19223783161&vendorItemId=86340471165",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 148.5
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.83,
                            "ingredient_price": 15020,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 24.9
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 16.299999999999997
                        },
                        {
                            "ingredient_name": "마요네즈",
                            "ingredient_unit_price": 3.74,
                            "ingredient_price": 11970,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7127363444?itemId=17860149902&vendorItemId=83040764260",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 74.80000000000001
                        },
                        {
                            "ingredient_name": "플레인요거트",
                            "ingredient_unit_price": 3.6,
                            "ingredient_price": 17430,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/296352196?itemId=19225412069&vendorItemId=86342060272",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/c369fbd0-0a16-4e8d-b143-9e1639596d801410192380379510325.png",
                            "price": 72.0
                        },
                        {
                            "ingredient_name": "생연어",
                            "ingredient_unit_price": 45.5,
                            "ingredient_price": 45500,
                            "ingredient_volume": 250.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6594974253?itemId=14897326709&vendorItemId=85339341026",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/03/14/17/0/85d654d4-42cf-4ad5-9fa5-36a9c4cef206.jpg",
                            "price": 11375.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2.5
                        },
                        {
                            "ingredient_name": "다진양파",
                            "ingredient_unit_price": 1.33,
                            "ingredient_price": 26600,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7804655079?itemId=21146772648&vendorItemId=81634351715",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/df40/889243db03497c084012e160a1f758ee1fce02634d811e0ae2ce5c5a5949.jpg",
                            "price": 26.6
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "쇠고기미역국": {
                    "youtube_url": "https://www.youtube.com/watch?v=CS3Sx-lPX5s",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/CS3Sx-lPX5s/maxresdefault.jpg",
                    "youtube_title": "20년 동안 대통령의 식사를 책임진 요리사의 윤기 좔좔 감칠 맛나는 소고기 미역국~ 건강에 딱! 소중한 사람의 생일이나 기념일에도 딱! 직접 요리해 보세요┃최고의 요리비결┃알고e즘",
                    "youtube_uploaded_date": "2023-04-30 00:00:00",
                    "channel_name": "EBSCulture (EBS 교양)",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZRk8O4slYECdXddc8tE05mh8IkazJ9Xi0zXxBmtaw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 5420.5,
                    "ingredient_list": [
                        {
                            "ingredient_name": "불린미역",
                            "ingredient_unit_price": 20.0,
                            "ingredient_price": 10000,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5710286741?itemId=9518763272&vendorItemId=76803521987",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2000.0
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 99.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.5
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 168.0
                        },
                        {
                            "ingredient_name": "소고기",
                            "ingredient_unit_price": 20.9,
                            "ingredient_price": 20900,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7538803732?itemId=19812721275&vendorItemId=86914831967",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4793573765786466-ff8878ec-3c16-4527-a456-f08a0e0b1bca.jpg",
                            "price": 3135.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "비름나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=9bbtzAgyfVQ",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/9bbtzAgyfVQ/maxresdefault.jpg",
                    "youtube_title": "들기름에 무치지마세요. 대박집 비름나물무침 '이것'을 넣고 무쳐야 정말 맛있어요",
                    "youtube_uploaded_date": "2023-04-05 00:00:00",
                    "channel_name": "요리왕비룡 Korean Food Cooking",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZTct-uy-QGq5D06gqsk2k1ka0ztG8xOQii4Y8Hecg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 4789.925,
                    "ingredient_list": [
                        {
                            "ingredient_name": "비름",
                            "ingredient_unit_price": 23.46,
                            "ingredient_price": 11730,
                            "ingredient_volume": 200.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6408062814?itemId=19224390152&vendorItemId=86341061582&pickType=COU_PICK",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 4692.0
                        },
                        {
                            "ingredient_name": "된장",
                            "ingredient_unit_price": 3.02,
                            "ingredient_price": 9070,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1320940305?itemId=154135&vendorItemId=3000080349",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/193968610145347-df4fd946-d496-44df-b0a5-8ef49270fc45.jpg",
                            "price": 7.55
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 49.5
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 4.875
                        },
                        {
                            "ingredient_name": "들깨가루",
                            "ingredient_unit_price": 7.2,
                            "ingredient_price": 72100,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6669341850?itemId=18333052229&vendorItemId=85477546173",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 36.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "북어채무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=XIa2Lp-QPPY",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/XIa2Lp-QPPY/maxresdefault.jpg",
                    "youtube_title": "이렇게만 만들어주세요! '이것'을 안넣어야 시간이 지나도 맛이 변하지 않아요 [북어채무침] (+깨알팁)",
                    "youtube_uploaded_date": "2022-03-18 00:00:00",
                    "channel_name": "딸을 위한 레시피 Recipes for daughters",
                    "channel_img": "https://yt3.ggpht.com/cX0xLVL_WbQF66EiRmtYhU5I1If0scnNuswcMdalq88OCLQ6drE2H6qB_jEynsTN9b1EtaDatw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3746.35,
                    "ingredient_list": [
                        {
                            "ingredient_name": "황태채",
                            "ingredient_unit_price": 28.9,
                            "ingredient_price": 28900,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7651903600?itemId=20362356550&vendorItemId=80470898719",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f9d4/1e8daf27cfe6ded78d9c2b91b12efe71f4d7934f80ac7c131070c90beb97.jpg",
                            "price": 2890.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.6
                        },
                        {
                            "ingredient_name": "통깨",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 134.85
                        },
                        {
                            "ingredient_name": "백설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 48.9
                        },
                        {
                            "ingredient_name": "물엿올리고당",
                            "ingredient_unit_price": 2.46,
                            "ingredient_price": 12320,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/35151?itemId=17969220731&vendorItemId=3000043756",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 147.6
                        },
                        {
                            "ingredient_name": "맛술",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 7820,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2517202?itemId=513909655&vendorItemId=4322627626",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3828188459522639-097f22f2-eb10-467e-a5f8-d56a9d83c7de.jpg",
                            "price": 60.0
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 148.5
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 175.5
                        },
                        {
                            "ingredient_name": "고추기름",
                            "ingredient_unit_price": 4.28,
                            "ingredient_price": 61680,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72470?itemId=2877871685&vendorItemId=86016490820",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 128.4
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "베이글": {
                    "youtube_url": "https://www.youtube.com/watch?v=DZBqTysR7AE",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/DZBqTysR7AE/maxresdefault.jpg",
                    "youtube_title": "🥯쫄깃쫄깃 손반죽 베이글 만들기! +쪽파크림치즈, 잠봉뵈르, BLT, 연어 샌드위치 레시피 with 위즈웰 인헨스 오븐",
                    "youtube_uploaded_date": "2023-04-27 00:00:00",
                    "channel_name": "진영 Jinyeong",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSOriiHA5-9LFB0XNTubl4WqnPDKv-OOFMwUstmgw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 616.1800000000001,
                    "ingredient_list": [
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 10.94,
                            "ingredient_price": 109440,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=20558829307&vendorItemId=85434486463",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 43.76
                        },
                        {
                            "ingredient_name": "강력분",
                            "ingredient_unit_price": 1.12,
                            "ingredient_price": 22320,
                            "ingredient_volume": 360.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1421510377?itemId=2460073624&vendorItemId=87933064191",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 403.20000000000005
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 6.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 4.5
                        },
                        {
                            "ingredient_name": "식물성오일",
                            "ingredient_unit_price": 5.03,
                            "ingredient_price": 4530,
                            "ingredient_volume": 18.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/988704?itemId=14282667975&vendorItemId=3000080376",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 90.54
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 198.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 41.58
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 32.599999999999994
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "미역튀각": {
                    "youtube_url": "https://www.youtube.com/watch?v=EDpTBA9AVRc",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/EDpTBA9AVRc/maxresdefault.jpg",
                    "youtube_title": "💚미역을 기름에 튀기지 마세요 이 방법이 최고입니다/ 김자반 보다 10배 맛있어요/맛보면 감탄이 절로 나오는 대박 레시피",
                    "youtube_uploaded_date": "2021-08-12 00:00:00",
                    "channel_name": "함께해요 맛나요리",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZRsGQa2oOsyfjCqhSEatFDlODUFopJOluSVXOQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1271.15,
                    "ingredient_list": [
                        {
                            "ingredient_name": "마른미역",
                            "ingredient_unit_price": 17.39,
                            "ingredient_price": 17390,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7449334644?itemId=19389782379&vendorItemId=70080553798",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ee4f/9e4387713e06ade97b495fcf621979d72dff3c3518fd9bda6c37ba6f7169.jpg",
                            "price": 695.6
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 235.8
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 148.5
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 48.9
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 9.49,
                            "ingredient_price": 18980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1667161685?itemId=2840569126&vendorItemId=70829944677",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/316782230414351-876ced41-ce45-4dbe-8c7c-94e22c1b506d.jpg",
                            "price": 142.35
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "미역국": {
                    "youtube_url": "https://www.youtube.com/watch?v=xsTFsunt6-8",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/xsTFsunt6-8/maxresdefault.jpg",
                    "youtube_title": "생일 축하합니다~♬ 참 쉬운 미역국 끓이기!",
                    "youtube_uploaded_date": "2020-03-20 00:00:00",
                    "channel_name": "백종원 PAIK JONG WON",
                    "channel_img": "https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3092.7,
                    "ingredient_list": [
                        {
                            "ingredient_name": "소고기양지",
                            "ingredient_unit_price": 23.73,
                            "ingredient_price": 7120,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1473796614?itemId=2532934918&vendorItemId=70525675924",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2373.0
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 14.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 138.6
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 1.37,
                            "ingredient_price": 19190,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5938053333?itemId=18204402896&vendorItemId=78415747472",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 41.1
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 273.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 37.0
                        },
                        {
                            "ingredient_name": "자른미역",
                            "ingredient_unit_price": 20.0,
                            "ingredient_price": 10000,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5710286741?itemId=9518763272&vendorItemId=76803521987",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 200.0
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 30.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "모듬찰떡": {
                    "youtube_url": "https://www.youtube.com/watch?v=GgLZpCJdT6E",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/GgLZpCJdT6E/maxresdefault.jpg",
                    "youtube_title": "이제 백설기 집에서 밥솥으로 취사하세요.",
                    "youtube_uploaded_date": "2022-02-27 00:00:00",
                    "channel_name": "뚝딱Tooktak",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZQnMzW6bGQxUdeTKTvuLsD66xoIrxqHaeYlDoqriA=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2491.0,
                    "ingredient_list": [
                        {
                            "ingredient_name": "습식맵쌀가루",
                            "ingredient_unit_price": 4.94,
                            "ingredient_price": 9880,
                            "ingredient_volume": 450.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/191956?itemId=19444197938&vendorItemId=86555147043",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2223.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 2.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1.5
                        },
                        {
                            "ingredient_name": "백설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 65.19999999999999
                        },
                        {
                            "ingredient_name": "건포도",
                            "ingredient_unit_price": 4.65,
                            "ingredient_price": 46500,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/106484974?itemId=321926599&vendorItemId=3788359713",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 93.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 450.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 94.5
                        },
                        {
                            "ingredient_name": "미지근한물",
                            "ingredient_unit_price": 0.23,
                            "ingredient_price": 16800,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5625704601?itemId=19013169354&vendorItemId=86137789886",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 13.8
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "멸치볶음": {
                    "youtube_url": "https://www.youtube.com/watch?v=EUdt9GjWj5c",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/EUdt9GjWj5c/maxresdefault.jpg",
                    "youtube_title": "밥도둑을 두 개나 만들어버렸어요;; 간장맛 vs 고추장맛 과연 승자는?",
                    "youtube_uploaded_date": "2021-06-03 00:00:00",
                    "channel_name": "백종원 PAIK JONG WON",
                    "channel_img": "https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 999.24,
                    "ingredient_list": [
                        {
                            "ingredient_name": "중멸치",
                            "ingredient_unit_price": 11.3,
                            "ingredient_price": 16900,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5729226493?itemId=9607824729&vendorItemId=88663879076",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 565.0
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 16.21,
                            "ingredient_price": 29170,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6639183562?itemId=19223914026&vendorItemId=86340596423",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3960703655094524-f015193d-605b-4763-a119-4181683915d7.jpg",
                            "price": 162.10000000000002
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 21.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 55.02
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.16,
                            "ingredient_price": 15050,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7196421572?itemId=18180298196&vendorItemId=85329334567",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 11.6
                        },
                        {
                            "ingredient_name": "황설탕",
                            "ingredient_unit_price": 2.04,
                            "ingredient_price": 30670,
                            "ingredient_volume": 6.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2146550469?itemId=20142506636&vendorItemId=88803700015",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.24
                        },
                        {
                            "ingredient_name": "통깨",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 2.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 17.98
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 39.0
                        },
                        {
                            "ingredient_name": "물엿",
                            "ingredient_unit_price": 1.25,
                            "ingredient_price": 20000,
                            "ingredient_volume": 32.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6426819903?itemId=19739516335&vendorItemId=85322257772",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fa5d7606-0e64-47e9-8068-bfd1304793271942558829879633390.png",
                            "price": 40.0
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 7.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 69.3
                        },
                        {
                            "ingredient_name": "고운고춧가루",
                            "ingredient_unit_price": 9.0,
                            "ingredient_price": 22500,
                            "ingredient_volume": 3.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=2307634996&vendorItemId=70304472937",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/602898626509561-ba93000f-f3fb-4370-bf63-acf22f286222.jpg",
                            "price": 27.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "메밀전병": {
                    "youtube_url": "https://www.youtube.com/watch?v=m_YtvvzSwz0",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/m_YtvvzSwz0/maxresdefault.jpg",
                    "youtube_title": "메밀전병 만들기 강원도 별미 메일전병 메밀총떡 만드는법 정말 맛있어요",
                    "youtube_uploaded_date": "2019-10-15 00:00:00",
                    "channel_name": "엄마의집밥 Mom's food",
                    "channel_img": "https://yt3.ggpht.com/uMA7_qEIa3Gg9vNGhiMZN8MPTFe9U3q9w28J5TBN5wnZPualDAwrB9lzjmX-0Tw0xhds7aoZjQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2541.233333333333,
                    "ingredient_list": [
                        {
                            "ingredient_name": "무",
                            "ingredient_unit_price": 1.58,
                            "ingredient_price": 7900,
                            "ingredient_volume": 480.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7403364293?itemId=19166701875&vendorItemId=82973629812",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 758.4000000000001
                        },
                        {
                            "ingredient_name": "부추",
                            "ingredient_unit_price": 12.54,
                            "ingredient_price": 31360,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4760601434?itemId=19223909723&vendorItemId=86340592139",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 627.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.333333333333332
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 9.49,
                            "ingredient_price": 18980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1667161685?itemId=2840569126&vendorItemId=70829944677",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/316782230414351-876ced41-ce45-4dbe-8c7c-94e22c1b506d.jpg",
                            "price": 142.35
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "메밀가루",
                            "ingredient_unit_price": 6.35,
                            "ingredient_price": 10800,
                            "ingredient_volume": 25.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7265795578?itemId=18517906817&vendorItemId=85656626812",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c663/e7d5955c8754331d040824fd18e6243ab062cb8e5070ed12c93d31839b78.png",
                            "price": 158.75
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 375.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 78.75
                        },
                        {
                            "ingredient_name": "당면",
                            "ingredient_unit_price": 2.97,
                            "ingredient_price": 41600,
                            "ingredient_volume": 65.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6743987390?itemId=15752069423&vendorItemId=70467035589",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/614825887290840-440e0cd6-e68b-4ab9-9584-149a04c77625.jpg",
                            "price": 193.05
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 174.0
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.14,
                            "ingredient_price": 17160,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/13432703?itemId=19610911320&vendorItemId=86717879346",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 102.6
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "떡강정": {
                    "youtube_url": "https://www.youtube.com/watch?v=vRqMJrDL8gM",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/vRqMJrDL8gM/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgALQBYoCDAgAEAEYfyA3KBMwDw==&rs=AOn4CLANsGfrZC8JKAN8Rb9VcnbjOODqSQ",
                    "youtube_title": "레알 존맛탱구리 떡꼬치 만들어봄!!!",
                    "youtube_uploaded_date": "2020-05-11 00:00:00",
                    "channel_name": "오늘 뭐 먹지?",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZSdaxGDuQXbW6w3kXpzFcRlGRWXJiTuKpi-2S1rBw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 250.2,
                    "ingredient_list": [
                        {
                            "ingredient_name": "떡",
                            "ingredient_unit_price": 8.5,
                            "ingredient_price": 11880,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6511333006?itemId=14383382934&vendorItemId=77604375339",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 42.5
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 11.75
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 87.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 9.75
                        },
                        {
                            "ingredient_name": "케찹",
                            "ingredient_unit_price": 1.97,
                            "ingredient_price": 6500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=20279414658&vendorItemId=3000044037",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 19.7
                        },
                        {
                            "ingredient_name": "올리고당",
                            "ingredient_unit_price": 2.13,
                            "ingredient_price": 42690,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=7367555431&vendorItemId=74658955839",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 42.599999999999994
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2.1
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.5
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 16.299999999999997
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "도토리묵": {
                    "youtube_url": "https://www.youtube.com/watch?v=tHjBqkSNlwY",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/tHjBqkSNlwY/maxresdefault.jpg",
                    "youtube_title": "도토리묵 만들기! 도토리묵에 반드시 \"이것\"을 넣어주세요!",
                    "youtube_uploaded_date": "2023-08-17 00:00:00",
                    "channel_name": "아따아줌마TV_전라도할매 전통요리",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZQlKNEgmU4Pa4KnW6I26CK_Bez3O6FXFhr7zop4mg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2800.425,
                    "ingredient_list": [
                        {
                            "ingredient_name": "도토리가루",
                            "ingredient_unit_price": 11.0,
                            "ingredient_price": 33000,
                            "ingredient_volume": 180.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7281850949?itemId=18593192180&vendorItemId=82732389918",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1980.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1080.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 226.79999999999998
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 588.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 7.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 5.625
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "도라지나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=nhQ3vFCWUyQ",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/nhQ3vFCWUyQ/maxresdefault.jpg",
                    "youtube_title": "비법공개⭐️ 쓴맛없이 도라지 나물 맛있게하는 방법 | 제사에 쓰는 도라지나물 만드는 방법도 알려드릴게요 | 도라지나물볶음",
                    "youtube_uploaded_date": "2019-09-05 00:00:00",
                    "channel_name": "딸을 위한 레시피 Recipes for daughters",
                    "channel_img": "https://yt3.ggpht.com/cX0xLVL_WbQF66EiRmtYhU5I1If0scnNuswcMdalq88OCLQ6drE2H6qB_jEynsTN9b1EtaDatw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2385.35,
                    "ingredient_list": [
                        {
                            "ingredient_name": "도라지",
                            "ingredient_unit_price": 7.45,
                            "ingredient_price": 29800,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6828496977?itemId=16203643651&vendorItemId=83398190880",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5e1b/659782046d1fd374a6da0a39bc9aec9753f032e71e3f83c3a9f00969edd1.jpg",
                            "price": 2235.0
                        },
                        {
                            "ingredient_name": "까나리액젓",
                            "ingredient_unit_price": 1.2,
                            "ingredient_price": 22100,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7195988134?itemId=18626117227&vendorItemId=85761496343",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 6.0
                        },
                        {
                            "ingredient_name": "꽃소금",
                            "ingredient_unit_price": 1.33,
                            "ingredient_price": 20000,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7322762466?itemId=18784997968&vendorItemId=85916280361",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/b00d/3bb421ea2072ed697ee2bc41132ff4e21d59f69a8630190969313074b3b8.jpg",
                            "price": 6.65
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 23.900000000000002
                        },
                        {
                            "ingredient_name": "참기름",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 35680,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72465?itemId=11201096244&vendorItemId=85193104418",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5f6d21d5-289c-4b5f-9912-55f2b2ab43417869728638207554014.png",
                            "price": 49.5
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 9.49,
                            "ingredient_price": 18980,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1667161685?itemId=2840569126&vendorItemId=70829944677",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/316782230414351-876ced41-ce45-4dbe-8c7c-94e22c1b506d.jpg",
                            "price": 47.45
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 3.75
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 13.100000000000001
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "닭날개튀김": {
                    "youtube_url": "https://www.youtube.com/watch?v=0Q11qfhhOa4",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/0Q11qfhhOa4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgXyg_MA8=&rs=AOn4CLCN7V3WEBKDquYE2HaFdUvkuVAK3g",
                    "youtube_title": "닭날개튀김의 최고봉 입니다. 완전 최고예요.",
                    "youtube_uploaded_date": "2023-02-27 00:00:00",
                    "channel_name": "Mrs macarons마카롱여사",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZRbcOOdbkV90cjmvJHfQ_rITPW2u1yWIBHMmeX_LMA=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 6313.95,
                    "ingredient_list": [
                        {
                            "ingredient_name": "닭날개",
                            "ingredient_unit_price": 12.0,
                            "ingredient_price": 24000,
                            "ingredient_volume": 500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7352565270?itemId=19394227916&vendorItemId=86506408092",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/9b5e2235-7c83-43a6-a4c7-d0a6f5110b876100525310740345124.png",
                            "price": 6000.0
                        },
                        {
                            "ingredient_name": "녹말가루",
                            "ingredient_unit_price": 4.39,
                            "ingredient_price": 4390,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7522733692?itemId=19733882650&vendorItemId=86837741791",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1852597268171107-c6ccc49f-9e60-40bc-8555-646c8c49e8b2.jpg",
                            "price": 65.85
                        },
                        {
                            "ingredient_name": "피시소스",
                            "ingredient_unit_price": 3.24,
                            "ingredient_price": 13620,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7172300014?itemId=18820670337&vendorItemId=85950997080",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8f969be2-a515-47d5-978d-a5f5001d562c2229149222753471402.png",
                            "price": 32.400000000000006
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.5
                        },
                        {
                            "ingredient_name": "라임즙",
                            "ingredient_unit_price": 5.5,
                            "ingredient_price": 13200,
                            "ingredient_volume": 27.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6636850377?itemId=376169853&vendorItemId=3911342831",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1068669011896223-b46aa340-4d3f-4491-8b0a-18720423e25c.jpg",
                            "price": 151.25
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 24.45
                        },
                        {
                            "ingredient_name": "청주",
                            "ingredient_unit_price": 4.3,
                            "ingredient_price": 3580,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5760586837?itemId=18877403308&vendorItemId=3037177116",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 21.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "닭고추장조림": {
                    "youtube_url": "https://www.youtube.com/watch?v=rDWNoRjcEYk",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/rDWNoRjcEYk/maxresdefault.jpg",
                    "youtube_title": "'닭다리 양념구이' 이렇게 쉽고 맛있을 줄이야, 대박이네",
                    "youtube_uploaded_date": "2020-05-28 00:00:00",
                    "channel_name": "소소황 Cook & Eat",
                    "channel_img": "https://yt3.ggpht.com/O5duj-utaWLVDGXNomi-1OyyZp3q0JK5Wva3UJ3tW8wHuNe9aGtX7R2TRQrSooljWJ09wb81=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3736.350000000001,
                    "ingredient_list": [
                        {
                            "ingredient_name": "닭다리",
                            "ingredient_unit_price": 4.23,
                            "ingredient_price": 50700,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5140323612?itemId=7045112872&vendorItemId=74337215286",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 3384.0000000000005
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 58.5
                        },
                        {
                            "ingredient_name": "케첩",
                            "ingredient_unit_price": 1.86,
                            "ingredient_price": 24500,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=317168944&vendorItemId=70754922523",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/05/25/14/8/979826c6-9cba-447b-bd8b-a03100b48c66.jpg",
                            "price": 55.800000000000004
                        },
                        {
                            "ingredient_name": "물엿",
                            "ingredient_unit_price": 1.25,
                            "ingredient_price": 20000,
                            "ingredient_volume": 45.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6426819903?itemId=19739516335&vendorItemId=85322257772",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fa5d7606-0e64-47e9-8068-bfd1304793271942558829879633390.png",
                            "price": 56.25
                        },
                        {
                            "ingredient_name": "맛술",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 7820,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2517202?itemId=513909655&vendorItemId=4322627626",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3828188459522639-097f22f2-eb10-467e-a5f8-d56a9d83c7de.jpg",
                            "price": 30.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 55.5
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.16,
                            "ingredient_price": 15050,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7196421572?itemId=18180298196&vendorItemId=85329334567",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 34.8
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 48.9
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.6
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "닭강정": {
                    "youtube_url": "https://www.youtube.com/watch?v=JNidDoFsx7c",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/JNidDoFsx7c/maxresdefault.jpg",
                    "youtube_title": "더럽 닭 3편, 김과장이 만드는 닭강정 [Chicken Gangjeong] | 정호영의 오늘도 요리",
                    "youtube_uploaded_date": "2020-06-23 00:00:00",
                    "channel_name": "정호영의 오늘도 요리 Kitchen Caden",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZTDNPcWD7UH_jED20D-SlhpEHw0gbiETRfxqjXQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1609.1,
                    "ingredient_list": [
                        {
                            "ingredient_name": "닭",
                            "ingredient_unit_price": 4.23,
                            "ingredient_price": 50700,
                            "ingredient_volume": 240.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5140323612?itemId=7045112872&vendorItemId=74337215286",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1015.2
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 58.5
                        },
                        {
                            "ingredient_name": "고추기름",
                            "ingredient_unit_price": 4.28,
                            "ingredient_price": 61680,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72470?itemId=2877871685&vendorItemId=86016490820",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 85.60000000000001
                        },
                        {
                            "ingredient_name": "물엿",
                            "ingredient_unit_price": 1.25,
                            "ingredient_price": 20000,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6426819903?itemId=19739516335&vendorItemId=85322257772",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fa5d7606-0e64-47e9-8068-bfd1304793271942558829879633390.png",
                            "price": 125.0
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 47.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 37.0
                        },
                        {
                            "ingredient_name": "케첩",
                            "ingredient_unit_price": 1.86,
                            "ingredient_price": 24500,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=317168944&vendorItemId=70754922523",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/05/25/14/8/979826c6-9cba-447b-bd8b-a03100b48c66.jpg",
                            "price": 74.4
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 6.3
                        },
                        {
                            "ingredient_name": "튀김가루",
                            "ingredient_unit_price": 1.76,
                            "ingredient_price": 17640,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7448501892?itemId=19385271920&vendorItemId=86503009666",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 52.8
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 32.599999999999994
                        },
                        {
                            "ingredient_name": "감자전분",
                            "ingredient_unit_price": 2.49,
                            "ingredient_price": 49770,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7709102992?itemId=20660022594&vendorItemId=70051516572",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/56e7/67ec436f56d000910ff125cb6ae00f920632e34aa0d55d34fee293624d5c.JPG",
                            "price": 74.7
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "꽈리고추멸치볶음": {
                    "youtube_url": "https://www.youtube.com/watch?v=B7BuDoXFhik",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/B7BuDoXFhik/hqdefault.jpg",
                    "youtube_title": "꽈리고추 멸치볶음 | 딱딱하지않고 부드러운 멸치볶음 | 비린내없이 멸치볶음하는 꿀팁",
                    "youtube_uploaded_date": "2019-04-06 00:00:00",
                    "channel_name": "딸을 위한 레시피 Recipes for daughters",
                    "channel_img": "https://yt3.ggpht.com/cX0xLVL_WbQF66EiRmtYhU5I1If0scnNuswcMdalq88OCLQ6drE2H6qB_jEynsTN9b1EtaDatw=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3276.35,
                    "ingredient_list": [
                        {
                            "ingredient_name": "멸치",
                            "ingredient_unit_price": 11.9,
                            "ingredient_price": 17900,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7553382606?itemId=19883643306&vendorItemId=86361735095",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/362c/5cb13b99d71e9a4be04b95552b4c247500d47c03d960d6fdf870dad4d84d.jpg",
                            "price": 1428.0
                        },
                        {
                            "ingredient_name": "꽈리고추",
                            "ingredient_unit_price": 12.35,
                            "ingredient_price": 49400,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6340332659?itemId=13298346783&vendorItemId=80555653454",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1235.0
                        },
                        {
                            "ingredient_name": "편마늘",
                            "ingredient_unit_price": 4.88,
                            "ingredient_price": 29280,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890446561?itemId=19272806059&vendorItemId=86387962600",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 73.2
                        },
                        {
                            "ingredient_name": "양조간장",
                            "ingredient_unit_price": 3.11,
                            "ingredient_price": 46610,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6091708833?itemId=18204495963&vendorItemId=88375813525",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 46.65
                        },
                        {
                            "ingredient_name": "맛술",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 7820,
                            "ingredient_volume": 75.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2517202?itemId=513909655&vendorItemId=4322627626",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3828188459522639-097f22f2-eb10-467e-a5f8-d56a9d83c7de.jpg",
                            "price": 150.0
                        },
                        {
                            "ingredient_name": "올리고당",
                            "ingredient_unit_price": 2.13,
                            "ingredient_price": 42690,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=7367555431&vendorItemId=74658955839",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 127.8
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24520,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 24.45
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 45.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 117.9
                        },
                        {
                            "ingredient_name": "송송썬청양고추",
                            "ingredient_unit_price": 4.89,
                            "ingredient_price": 48900,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5368399606?itemId=7938214777&vendorItemId=75227384369",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/e0de/3cb4d674990729c2194accb3bd8de767453fa0440c676dce187f1d604844.jpg",
                            "price": 73.35
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "깻잎나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=5_hB5RG9VKE",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/5_hB5RG9VKE/maxresdefault.jpg",
                    "youtube_title": "2000원으로 만든 깻잎나물볶음, 촉촉하고 부드럽게 만드는 비결",
                    "youtube_uploaded_date": "2023-06-22 00:00:00",
                    "channel_name": "요리왕비룡 Korean Food Cooking",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZTct-uy-QGq5D06gqsk2k1ka0ztG8xOQii4Y8Hecg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1581.3,
                    "ingredient_list": [
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 1.37,
                            "ingredient_price": 19190,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5938053333?itemId=18204402896&vendorItemId=78415747472",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 6.8500000000000005
                        },
                        {
                            "ingredient_name": "참치액",
                            "ingredient_unit_price": 6.3,
                            "ingredient_price": 13200,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1463018080?itemId=2516565144&vendorItemId=85382914150",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/79ad/e11ba73f15420ece01c2edd513fd32736825c78c611de53fc18cd319764e.PNG",
                            "price": 15.75
                        },
                        {
                            "ingredient_name": "물엿",
                            "ingredient_unit_price": 1.25,
                            "ingredient_price": 20000,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6426819903?itemId=19739516335&vendorItemId=85322257772",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fa5d7606-0e64-47e9-8068-bfd1304793271942558829879633390.png",
                            "price": 12.5
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 19.6,
                            "ingredient_price": 35250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7248384207?itemId=18432606089&vendorItemId=85574074967",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 98.0
                        },
                        {
                            "ingredient_name": "들깨가루",
                            "ingredient_unit_price": 7.2,
                            "ingredient_price": 72100,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6669341850?itemId=18333052229&vendorItemId=85477546173",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 36.0
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.14,
                            "ingredient_price": 17160,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/13432703?itemId=19610911320&vendorItemId=86717879346",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 17.099999999999998
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 21.0
                        },
                        {
                            "ingredient_name": "발아깻잎",
                            "ingredient_unit_price": 8.95,
                            "ingredient_price": 35800,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4367789072?itemId=5144627805&vendorItemId=72453982283",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c9a3/9204f0cadcec3f510d2e726f64e6ad0a5f7dd1b0884d90e1891804976b67.jpg",
                            "price": 1342.5
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 18.5
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 13.100000000000001
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "김치전골": {
                    "youtube_url": "https://www.youtube.com/watch?v=qWbHSOplcvY",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/qWbHSOplcvY/maxresdefault.jpg",
                    "youtube_title": "성공률 100% 돼지고기 김치찌개",
                    "youtube_uploaded_date": "2020-08-12 00:00:00",
                    "channel_name": "백종원 PAIK JONG WON",
                    "channel_img": "https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3099.1000000000004,
                    "ingredient_list": [
                        {
                            "ingredient_name": "돼지고기목살",
                            "ingredient_unit_price": 9.97,
                            "ingredient_price": 29900,
                            "ingredient_volume": 130.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5169947632?itemId=7131594758&vendorItemId=74423389195",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1296.1000000000001
                        },
                        {
                            "ingredient_name": "신김치",
                            "ingredient_unit_price": 2.5,
                            "ingredient_price": 25000,
                            "ingredient_volume": 390.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7122229650?itemId=17835916638&vendorItemId=84999602570",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 975.0
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 16.21,
                            "ingredient_price": 29170,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6639183562?itemId=19223914026&vendorItemId=86340596423",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3960703655094524-f015193d-605b-4763-a119-4181683915d7.jpg",
                            "price": 324.20000000000005
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 70.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 167.3
                        },
                        {
                            "ingredient_name": "간마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 72.8
                        },
                        {
                            "ingredient_name": "고운고춧가루",
                            "ingredient_unit_price": 9.0,
                            "ingredient_price": 22500,
                            "ingredient_volume": 3.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=2307634996&vendorItemId=70304472937",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/602898626509561-ba93000f-f3fb-4370-bf63-acf22f286222.jpg",
                            "price": 27.0
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 1.37,
                            "ingredient_price": 19190,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5938053333?itemId=18204402896&vendorItemId=78415747472",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 13.700000000000001
                        },
                        {
                            "ingredient_name": "새우젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 39900,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7257059878?itemId=18475011874&vendorItemId=79834886511",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ba02/96b4f945cad31462b8c83c5683d46f595789774ba76d09f89c0b0b0b85db.png",
                            "price": 40.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 540.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 113.39999999999999
                        },
                        {
                            "ingredient_name": "굵은고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 8.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295383828?itemId=18595395425&vendorItemId=85731555076",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5d09926d-e09b-4a22-ae42-be174e7f58463745549208769097908.png",
                            "price": 69.6
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "골뱅이국수무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=kDnyztnBnhE",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/kDnyztnBnhE/hqdefault.jpg",
                    "youtube_title": "[파골뱅이비빔국수]이국수를 먹는순간 다른 비빔국수는 텁텁해서 못먹어요!비빔국수 양념장/비빔국수/비빔양념장",
                    "youtube_uploaded_date": "2021-03-03 00:00:00",
                    "channel_name": "양장금주부",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZTUXzGXmbCeLw7N2q2_YiICTdp-NKyj0yKavZ4oOg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3281.125,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 358.5
                        },
                        {
                            "ingredient_name": "오이",
                            "ingredient_unit_price": 9.25,
                            "ingredient_price": 18500,
                            "ingredient_volume": 62.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4905422521?itemId=6400960383&vendorItemId=70654132610",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ea7c/df99f820f4985d7bea12d2c2cfdb73cd62a1018c5825832047c9a64e9987.jpg",
                            "price": 578.125
                        },
                        {
                            "ingredient_name": "골뱅이",
                            "ingredient_unit_price": 13.8,
                            "ingredient_price": 33180,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/18406051?itemId=17910009410&vendorItemId=85068501377",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2269893661020724-900b0aff-a593-42b0-a462-e8dca13c1c52.jpg",
                            "price": 2070.0
                        },
                        {
                            "ingredient_name": "소면",
                            "ingredient_unit_price": 1.92,
                            "ingredient_price": 11500,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2070876420?itemId=18818675113&vendorItemId=85949056939",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 192.0
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.65,
                            "ingredient_price": 16540,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6258806325?itemId=19223783161&vendorItemId=86340471165",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 82.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "고들빼기김치": {
                    "youtube_url": "https://www.youtube.com/watch?v=JzX1RY951NM",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/JzX1RY951NM/maxresdefault.jpg",
                    "youtube_title": "고들빼기김치 담는법, 가을에는 무조건 만드세요! 고들빼기 김치 가을김치",
                    "youtube_uploaded_date": "2023-10-11 00:00:00",
                    "channel_name": "엄마의집밥 Mom's food",
                    "channel_img": "https://yt3.ggpht.com/uMA7_qEIa3Gg9vNGhiMZN8MPTFe9U3q9w28J5TBN5wnZPualDAwrB9lzjmX-0Tw0xhds7aoZjQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 9190.0,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 286.8
                        },
                        {
                            "ingredient_name": "굵은소금",
                            "ingredient_unit_price": 1.0,
                            "ingredient_price": 20000,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7639921549?itemId=20296510348&vendorItemId=85916280487",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7b2f/bd1b494236dd2e2df7e1845856401ef1dd06509ea6e5bc918aefe9a9b04b.jpg",
                            "price": 100.0
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.14,
                            "ingredient_price": 17160,
                            "ingredient_volume": 25.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/13432703?itemId=19610911320&vendorItemId=86717879346",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 28.499999999999996
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 105.0
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 240.0
                        },
                        {
                            "ingredient_name": "조청",
                            "ingredient_unit_price": 3.08,
                            "ingredient_price": 46270,
                            "ingredient_volume": 190.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6209315616?itemId=10104584660&vendorItemId=85929841698",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/b4eb36be-7b49-4532-856a-b88615e3631a1848092172661924616.png",
                            "price": 585.2
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 80.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 296.0
                        },
                        {
                            "ingredient_name": "다진생강",
                            "ingredient_unit_price": 5.0,
                            "ingredient_price": 50240,
                            "ingredient_volume": 16.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228412?itemId=19282714821&vendorItemId=86397666119",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 80.0
                        },
                        {
                            "ingredient_name": "고들빼기",
                            "ingredient_unit_price": 3.5,
                            "ingredient_price": 35000,
                            "ingredient_volume": 1500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/184963779?itemId=529242082&vendorItemId=4377641087",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/images/2019/02/12/16/7/3d5d690b-43ae-49f7-80b1-dc3eae68deca.jpg",
                            "price": 5250.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 255.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 2218.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "검정콩밥": {
                    "youtube_url": "https://www.youtube.com/watch?v=ccWNPlfIfHI",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/ccWNPlfIfHI/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZiBmKGYwDw==&rs=AOn4CLBClWRX5yPU2YLnvqu2eRhkf3Qjig",
                    "youtube_title": "검은콩, 쌀. 준비 끝! #shorts",
                    "youtube_uploaded_date": "2022-01-04 00:00:00",
                    "channel_name": "1분엄마 1 minute mom",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZT4eLRTxn5Ef3Y6Swp_YWycBk4zruXsbwUMSToG=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3135.5,
                    "ingredient_list": [
                        {
                            "ingredient_name": "검은콩",
                            "ingredient_unit_price": 9.25,
                            "ingredient_price": 37000,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6758262561?itemId=19225634887&vendorItemId=86342276559",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 1387.5
                        },
                        {
                            "ingredient_name": "쌀",
                            "ingredient_unit_price": 2.4,
                            "ingredient_price": 47900,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7757584328?itemId=20912063208&vendorItemId=87979005800",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 360.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 168.0
                        },
                        {
                            "ingredient_name": "콩삶은물",
                            "ingredient_unit_price": 2.44,
                            "ingredient_price": 13900,
                            "ingredient_volume": 500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7679889870?itemId=18611620103&vendorItemId=85168725314",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/d03b/951fcdc610f7475b39ca24f6c3c6249218b4d33079fc9dbffd6da7c0e7fd.jpg",
                            "price": 1220.0
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "감자크로켓": {
                    "youtube_url": "https://www.youtube.com/watch?v=NXm6BRSF5ww",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/NXm6BRSF5ww/maxresdefault.jpg",
                    "youtube_title": "강원도 감자래요 1편, 감자고로케 [Potato Croquette] | 정호영의 오늘도 요리",
                    "youtube_uploaded_date": "2020-04-17 00:00:00",
                    "channel_name": "정호영의 오늘도 요리 Kitchen Caden",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZTDNPcWD7UH_jED20D-SlhpEHw0gbiETRfxqjXQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1269.9,
                    "ingredient_list": [
                        {
                            "ingredient_name": "감자",
                            "ingredient_unit_price": 1.49,
                            "ingredient_price": 14900,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7831991401?itemId=21302462251&vendorItemId=88362141295",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 447.0
                        },
                        {
                            "ingredient_name": "삼겹살다짐육",
                            "ingredient_unit_price": 7.47,
                            "ingredient_price": 22400,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5386919578?itemId=8021228309&vendorItemId=75309943694",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 373.5
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.65,
                            "ingredient_price": 16540,
                            "ingredient_volume": 70.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6258806325?itemId=19223783161&vendorItemId=86340471165",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 115.5
                        },
                        {
                            "ingredient_name": "맛술",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 7820,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2517202?itemId=513909655&vendorItemId=4322627626",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3828188459522639-097f22f2-eb10-467e-a5f8-d56a9d83c7de.jpg",
                            "price": 180.0
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 70.5
                        },
                        {
                            "ingredient_name": "당근",
                            "ingredient_unit_price": 2.78,
                            "ingredient_price": 13900,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728601536?itemId=21021502361&vendorItemId=86893492119",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0c8/f5ce9d7cfb931230ea71e70ea36d42f85abb7e7210ba49d87f5b67cc02ff.jpg",
                            "price": 83.39999999999999
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "갈비탕": {
                    "youtube_url": "https://www.youtube.com/watch?v=aIRTQdg1FIc",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/aIRTQdg1FIc/hqdefault.jpg",
                    "youtube_title": "🥣대박집 갈비탕레시피 는 이렇게 끓이는 구나...비법공개  .",
                    "youtube_uploaded_date": null,
                    "channel_name": "맛팩토리",
                    "channel_img": "https://yt3.ggpht.com/TkSbGYKPyTf9MCiEaoufP9MaHnWz4WhBoChxj3ufcZTC7h-NIgGN732ksnt4JdmilGCOWgTrH5U=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 20766.5,
                    "ingredient_list": [
                        {
                            "ingredient_name": "찜용갈비",
                            "ingredient_unit_price": 9.97,
                            "ingredient_price": 29910,
                            "ingredient_volume": 2000.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6304494410?itemId=13053992305&vendorItemId=80316709966",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/01/20/11/8/9d08e283-bb85-47cb-be86-a4d6aa7ac22e.jpg",
                            "price": 19940.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 3500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 735.0
                        },
                        {
                            "ingredient_name": "소고기다시다",
                            "ingredient_unit_price": 4.2,
                            "ingredient_price": 16760,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/3630414?itemId=19721294999&vendorItemId=85193109076",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 84.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 0.75,
                            "ingredient_price": 18840,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 7.5
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "간장마늘쫑장아찌": {
                    "youtube_url": "https://www.youtube.com/watch?v=QHbbKBjMWLs",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/QHbbKBjMWLs/maxresdefault.jpg",
                    "youtube_title": "이틀완성 마늘쫑 고추장장아찌 1년을 두고 먹어도 아삭한맛",
                    "youtube_uploaded_date": "2020-05-04 00:00:00",
                    "channel_name": "엄마의손맛",
                    "channel_img": "https://yt3.ggpht.com/ytc/AIf8zZS05ncOXEkGmyQUcaJE8gF2nlv11x-XcFvKLOEETg=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 3053.95,
                    "ingredient_list": [
                        {
                            "ingredient_name": "마늘쫑",
                            "ingredient_unit_price": 4.73,
                            "ingredient_price": 37800,
                            "ingredient_volume": 450.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7460820943?itemId=19446001952&vendorItemId=86556897792",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/b841/c5c26a7ac57ec4e19dcf4103729a99912520b7482824c453079b72ae2252.jpg",
                            "price": 2128.5
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.0,
                            "ingredient_price": 30610,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761965459&vendorItemId=85192464163",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 200.0
                        },
                        {
                            "ingredient_name": "굵은소금",
                            "ingredient_unit_price": 1.0,
                            "ingredient_price": 20000,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7639921549?itemId=20296510348&vendorItemId=85916280487",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7b2f/bd1b494236dd2e2df7e1845856401ef1dd06509ea6e5bc918aefe9a9b04b.jpg",
                            "price": 50.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 8.7,
                            "ingredient_price": 43500,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1295382700?itemId=19133056738&vendorItemId=86252641685",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 261.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 29.25
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.83,
                            "ingredient_price": 15020,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 12.45
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1000.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 210.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 55.5
                        },
                        {
                            "ingredient_name": "참깨",
                            "ingredient_unit_price": 7.15,
                            "ingredient_price": 42900,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1522984037?itemId=19517732482&vendorItemId=70139804471",
                            "ingredient_img": "https://img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
                            "price": 107.25
                        }
                    ],
                    "ingredient_list_without_unit": []
                }
            };
            return searchData[this.menu_name];
        },
    },
    components: {
        ResultHero,
        ResultDetail,
    },
};
</script>
