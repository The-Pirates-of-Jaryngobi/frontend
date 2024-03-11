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
            // 검색어에 해당하는 내용을 가져오는 로직
            // 예시로 정적인 데이터를 사용하고, 실제로는 API 요청 등을 통해 데이터를 가져와야 합니다.
            const searchData = {
                "홍합미역국": {
                    "youtube_url": "https://www.youtube.com/watch?v=OwhZKjBeqyQ",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/OwhZKjBeqyQ/maxresdefault.jpg",
                    "youtube_title": "홍합미역국 끓이는법 바다향 물씬 나는 국물이 뽀얀 홍합 미역국 맛있게 만들기",
                    "youtube_uploaded_date": "2019-10-22 00:00:00",
                    "channel_name": "엄마의집밥 Mom's food",
                    "channel_img": "https://yt3.ggpht.com/uMA7_qEIa3Gg9vNGhiMZN8MPTFe9U3q9w28J5TBN5wnZPualDAwrB9lzjmX-0Tw0xhds7aoZjQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1580.2400000000002,
                    "ingredient_list": [
                        {
                            "ingredient_name": "미역",
                            "ingredient_unit_price": 17.39,
                            "ingredient_price": 17390,
                            "ingredient_volume": 27.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7449334644?itemId=19389782379&vendorItemId=70080553798",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ee4f/9e4387713e06ade97b495fcf621979d72dff3c3518fd9bda6c37ba6f7169.jpg",
                            "price": 469.53000000000003
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 19.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 121.41
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 7.6
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 18.2
                        },
                        {
                            "ingredient_name": "홍합",
                            "ingredient_unit_price": 2.39,
                            "ingredient_price": 23900,
                            "ingredient_volume": 370.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7231444491?itemId=18350096022&vendorItemId=73332567771",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3286/c99fbec96fd7b96e4cb524226cc91be7cfbf2f091129440625f8e5d0c080.png",
                            "price": 884.3000000000001
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 3.3,
                            "ingredient_price": 11210,
                            "ingredient_volume": 24.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/239196850?itemId=18171493809&vendorItemId=85320843397",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/20c16af9-400e-47b9-8359-4b68cc4e41e99153747284672463110.png",
                            "price": 79.19999999999999
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
                    "total_price": 6194.475,
                    "ingredient_list": [
                        {
                            "ingredient_name": "자숙피조개살",
                            "ingredient_unit_price": 14.99,
                            "ingredient_price": 14990,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7657654961?itemId=20392399463&vendorItemId=85630732790",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/e05f/bb57d6c94afa2b2a1c0b38a33656861c10c11bba44983a9499947bce3960.jpg",
                            "price": 4497.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 1308.0
                        },
                        {
                            "ingredient_name": "올리고당",
                            "ingredient_unit_price": 2.4,
                            "ingredient_price": 36000,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=12346402311&vendorItemId=84606305062",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7396239517444869-f3787541-82b4-427d-a4e2-ef4495036f67.jpg",
                            "price": 54.0
                        },
                        {
                            "ingredient_name": "매실액기스",
                            "ingredient_unit_price": 2.91,
                            "ingredient_price": 42760,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6594935237?itemId=14897081248&vendorItemId=81430704532",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a150/942728f028eb03c1f576ede8835e4eaa73e313f9f9a4d10cf80bb16ccd68.png",
                            "price": 65.47500000000001
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 22.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 81.9
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 175.5
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.84,
                            "ingredient_price": 15180,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4076040557935910-8d249e23-c0fa-4257-9ebe-9e0cf74388c0.jpg",
                            "price": 12.6
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
                    "channel_img": "https://yt3.ggpht.com/JT9ut-deHCrte60mbXQmV7GUQ8MqLqd61a-NaGwdV2K5epg7NOMaWO_wU6yd-VfizWgOTT2-7Qk=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 1098.13,
                    "ingredient_list": [
                        {
                            "ingredient_name": "우유",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 19500,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6659186192?itemId=2660581138&vendorItemId=70651228408",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1177513559864216-9e77398c-b314-4b90-ab1b-d635100a960b.jpg",
                            "price": 97.5
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 21.0
                        },
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 18.8,
                            "ingredient_price": 11750,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=14419335763&vendorItemId=88438600407",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4337/f836d411aa1447218da683295ded6bff56dca252afe1c3bdebc00159ce5a.JPG",
                            "price": 75.2
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 16.299999999999997
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 6.08
                        },
                        {
                            "ingredient_name": "오일",
                            "ingredient_unit_price": 3.11,
                            "ingredient_price": 16820,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/487322?itemId=17572599273&vendorItemId=84994378258",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1057991738033402-89640caa-db2e-4f81-9e20-8b073e7fa525.jpg",
                            "price": 46.65
                        },
                        {
                            "ingredient_name": "강력분",
                            "ingredient_unit_price": 1.12,
                            "ingredient_price": 22320,
                            "ingredient_volume": 170.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1421510377?itemId=2460073624&vendorItemId=87933064191",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9499/c7817a9e663243c61e2070e4248f0ba37f9e68009e7d2b25762912cf4f87.png",
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
                    "total_price": 770.9999999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "무",
                            "ingredient_unit_price": 1.58,
                            "ingredient_price": 7900,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7403364293?itemId=19166701875&vendorItemId=82973629812",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/89cd/22258b766852d6eb23c4df7bed982b034ce0c7c9e3a53f96f44906d80386.jpg",
                            "price": 158.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 109.0
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 5.433333333333333
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 3.8
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.84,
                            "ingredient_price": 15180,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4076040557935910-8d249e23-c0fa-4257-9ebe-9e0cf74388c0.jpg",
                            "price": 4.2
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
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 7.666666666666665
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
                    "total_price": 1424.9,
                    "ingredient_list": [
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 54.6
                        },
                        {
                            "ingredient_name": "들깨가루",
                            "ingredient_unit_price": 8.31,
                            "ingredient_price": 8310,
                            "ingredient_volume": 45.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1060458752?itemId=2004669584&vendorItemId=70004615073",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/061f/cb1b650bdb6ff0060e60e6834f842003ea528134becba3c7311f9e908bcb.jpg",
                            "price": 373.95000000000005
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 95.85
                        },
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 3.3,
                            "ingredient_price": 11210,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/239196850?itemId=18171493809&vendorItemId=85320843397",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/20c16af9-400e-47b9-8359-4b68cc4e41e99153747284672463110.png",
                            "price": 49.5
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 11.5
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 200.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 42.0
                        },
                        {
                            "ingredient_name": "삶은손질된토란대",
                            "ingredient_unit_price": 2.2,
                            "ingredient_price": 22000,
                            "ingredient_volume": 340.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7817092076?itemId=21219919815&vendorItemId=88280865399",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9f5c/50d64082475f937e53aaeaec3e7e1c313ceae615bc52e3b373b55175806d.jpg",
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
                    "total_price": 506.64000000000004,
                    "ingredient_list": [
                        {
                            "ingredient_name": "다크초콜렛블럭",
                            "ingredient_unit_price": 6.7,
                            "ingredient_price": 6700,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6138530431?itemId=19344756351&vendorItemId=71583285146",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3225711041318621-4d9acd60-0cf9-4793-ac07-55d60ebdc179.jpg",
                            "price": 268.0
                        },
                        {
                            "ingredient_name": "버터",
                            "ingredient_unit_price": 9.44,
                            "ingredient_price": 25710,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7560464841?itemId=19977726848&vendorItemId=87076074963",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/50d94581-a5cb-4248-ba1e-671f09fc6ba61848645928949945057.png",
                            "price": 141.6
                        },
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 18.8,
                            "ingredient_price": 11750,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=14419335763&vendorItemId=88438600407",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4337/f836d411aa1447218da683295ded6bff56dca252afe1c3bdebc00159ce5a.JPG",
                            "price": 94.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 2.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 3.04
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
                    "total_price": 3445.17,
                    "ingredient_list": [
                        {
                            "ingredient_name": "파",
                            "ingredient_unit_price": 2.59,
                            "ingredient_price": 25900,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7463554652?itemId=19459376019&vendorItemId=75939343495",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/af0b/5b5322a49d3ffc877a65e0324c0e9a39ccd0673059525678f3853dbf5690.jpg",
                            "price": 51.8
                        },
                        {
                            "ingredient_name": "마늘",
                            "ingredient_unit_price": 7.12,
                            "ingredient_price": 35600,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7522579565?itemId=19733204766&vendorItemId=74155694139",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a85a/1a71ab05c1bcf4e6af88cd0c366597f27b7b0e86f63ba836a8a99b4f4691.png",
                            "price": 71.2
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 63.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
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
                            "ingredient_price": 24490,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 24.45
                        },
                        {
                            "ingredient_name": "케찹",
                            "ingredient_unit_price": 1.86,
                            "ingredient_price": 24500,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=317168944&vendorItemId=70754922523",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/05/25/14/8/979826c6-9cba-447b-bd8b-a03100b48c66.jpg",
                            "price": 37.2
                        },
                        {
                            "ingredient_name": "카레가루",
                            "ingredient_unit_price": 5.54,
                            "ingredient_price": 55440,
                            "ingredient_volume": 16.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4005453?itemId=556122587&vendorItemId=70909973964",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4877396567387320-ee054021-f5cb-40c9-96bd-ef1efb7a8ad3.png",
                            "price": 88.64
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
                            "ingredient_unit_price": 9.4,
                            "ingredient_price": 13200,
                            "ingredient_volume": 250.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5930058127?itemId=10534803498&vendorItemId=77816348238",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6520778785531071-f8fc9737-f8d6-4eef-8080-6747b99438cb.jpg",
                            "price": 2350.0
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 24.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
                            "price": 62.88
                        },
                        {
                            "ingredient_name": "다시다",
                            "ingredient_unit_price": 3.6,
                            "ingredient_price": 42840,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/45708?itemId=18036780282&vendorItemId=85191203553",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/462394f7-364a-43bb-be99-7cd1e99f01e89194122958364267151.png",
                            "price": 18.0
                        },
                        {
                            "ingredient_name": "어묵",
                            "ingredient_unit_price": 4.1,
                            "ingredient_price": 24430,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/305534577?itemId=19224742703&vendorItemId=86341414063",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/399a7f01-e137-49a4-b643-7c997bf735325468668615047965851.png",
                            "price": 409.99999999999994
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
                    "total_price": 4500.099999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "신김치",
                            "ingredient_unit_price": 2.5,
                            "ingredient_price": 25000,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7122229650?itemId=17835916638&vendorItemId=84999602570",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/d5ae/d2c7c2f20e98343338c13baf5d878e3506fe0a2f50380b76a03a6fd189db.jpg",
                            "price": 1000.0
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.69,
                            "ingredient_price": 16900,
                            "ingredient_volume": 180.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7472965964?itemId=19503240121&vendorItemId=86018545921",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1582/b4a5a3a502648f442cd515bddc80425374ad537b055415e517a20fe75812.jpg",
                            "price": 304.2
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 14.7,
                            "ingredient_price": 7350,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6097731697?itemId=11406371607&vendorItemId=78682324950",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7030340116853210-5cce2da8-d902-453c-9cac-eef7401d1fb0.jpg",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 122.50000000000001
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 84.0
                        },
                        {
                            "ingredient_name": "간마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/546432680819306-54f32764-2a7d-4253-92dc-9571d6a902a5.jpg",
                            "price": 111.0
                        },
                        {
                            "ingredient_name": "된장",
                            "ingredient_unit_price": 1.7,
                            "ingredient_price": 23780,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7735374057?itemId=20797053013&vendorItemId=3000201322",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8353012220753453-4f34688f-5f16-4df2-a13c-2a157e1c1fa1.jpg",
                            "price": 51.0
                        },
                        {
                            "ingredient_name": "황설탕",
                            "ingredient_unit_price": 1.83,
                            "ingredient_price": 27460,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2146550469?itemId=20142506636&vendorItemId=74038381322",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1517/17b12bd00fc94a4a95a70e655826ca9b259adce79b80a402098c8181ce72.jpg",
                            "price": 18.3
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.83,
                            "ingredient_price": 27390,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18204720267&vendorItemId=3008200213",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3578077938599046-faf01df5-9ab8-4312-8694-3933c3153852.png",
                            "price": 36.6
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
                            "ingredient_unit_price": 5.1,
                            "ingredient_price": 14200,
                            "ingredient_volume": 400.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6504316111?itemId=12081336697&vendorItemId=86683721665",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/628b/db65bce23cc9e99aaa7ef32b7ab503950605b6015a5be169df4167e3eaba.jpg",
                            "price": 2039.9999999999998
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
                            "ingredient_unit_price": 5.2,
                            "ingredient_price": 25900,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228412?itemId=10910051324&vendorItemId=78189867044",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/714727371294559-1b182bcc-2ba3-455b-b7b3-b9f5c600ff59.jpg",
                            "price": 26.0
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
                    "total_price": 2107.0,
                    "ingredient_list": [
                        {
                            "ingredient_name": "유채나물",
                            "ingredient_unit_price": 5.95,
                            "ingredient_price": 23800,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5126024110?itemId=7011107053&vendorItemId=74303338872",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9e22/d9fd3a1ed4c86742663a1b7a4b14929ba628927fd3f39b40d857ebbf75d2.jpg",
                            "price": 1785.0
                        },
                        {
                            "ingredient_name": "당근",
                            "ingredient_unit_price": 2.42,
                            "ingredient_price": 12100,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7534360517?itemId=19790890806&vendorItemId=86893492181",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0c8/f5ce9d7cfb931230ea71e70ea36d42f85abb7e7210ba49d87f5b67cc02ff.jpg",
                            "price": 145.2
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 63.9
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 89.9
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 23.0
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
                    "total_price": 875.6,
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
                            "ingredient_unit_price": 1.7,
                            "ingredient_price": 23780,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7735374057?itemId=20797053013&vendorItemId=3000201322",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8353012220753453-4f34688f-5f16-4df2-a13c-2a157e1c1fa1.jpg",
                            "price": 8.5
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77c4fb51-65b7-43ee-955d-7deec1714bc55045824864441731918.png",
                            "price": 23.5
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 163.5
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 24.5
                        },
                        {
                            "ingredient_name": "마늘",
                            "ingredient_unit_price": 7.12,
                            "ingredient_price": 35600,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7522579565?itemId=19733204766&vendorItemId=74155694139",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a85a/1a71ab05c1bcf4e6af88cd0c366597f27b7b0e86f63ba836a8a99b4f4691.png",
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
                    "total_price": 11947.266666666668,
                    "ingredient_list": [
                        {
                            "ingredient_name": "밥",
                            "ingredient_unit_price": 3.81,
                            "ingredient_price": 30500,
                            "ingredient_volume": 420.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1258945808?itemId=19013178382&vendorItemId=86137798562",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3321529521019768-9a86b90f-84ae-4e07-9e60-38864be73bee.jpg",
                            "price": 1600.2
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.69,
                            "ingredient_price": 16900,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7472965964?itemId=19503240121&vendorItemId=86018545921",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1582/b4a5a3a502648f442cd515bddc80425374ad537b055415e517a20fe75812.jpg",
                            "price": 152.1
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.84,
                            "ingredient_price": 15180,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4076040557935910-8d249e23-c0fa-4257-9ebe-9e0cf74388c0.jpg",
                            "price": 25.2
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/09/05/17/0/72607960-2d0a-446b-946c-64559be71024.jpg",
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
                            "ingredient_unit_price": 39.9,
                            "ingredient_price": 39900,
                            "ingredient_volume": 250.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5694247522?itemId=18737849489&vendorItemId=85870199357",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/05/03/14/5/a2632555-ceb7-449d-be5d-b6e33f94b19a.jpg",
                            "price": 9975.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 5.066666666666666
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
                    "total_price": 5963.699999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "불린미역",
                            "ingredient_unit_price": 26.8,
                            "ingredient_price": 13400,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5896631287?itemId=10384536777&vendorItemId=77666604015",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8913910505254357-8c24c812-feaf-4d8d-9817-566f843e8cf9.jpg",
                            "price": 2680.0
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
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 18.2
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 168.0
                        },
                        {
                            "ingredient_name": "소고기",
                            "ingredient_unit_price": 19.99,
                            "ingredient_price": 19990,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7485959624?itemId=19565425440&vendorItemId=86673308004",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1225692299273221-a9b59cca-3cfa-47ba-8ec8-653798e55ab1.jpg",
                            "price": 2998.4999999999995
                        }
                    ],
                    "ingredient_list_without_unit": []
                },
                "비름나물무침": {
                    "youtube_url": "https://www.youtube.com/watch?v=HpKfBaw_RA0",
                    "youtube_thumbnail": "https://i.ytimg.com/vi/HpKfBaw_RA0/maxresdefault.jpg",
                    "youtube_title": "비름나물무침 만드는법, 이건 무조건 드세요! 오메가3 골다공증에 좋은 비름나물/참비름",
                    "youtube_uploaded_date": "2022-05-16 00:00:00",
                    "channel_name": "엄마의집밥 Mom's food",
                    "channel_img": "https://yt3.ggpht.com/uMA7_qEIa3Gg9vNGhiMZN8MPTFe9U3q9w28J5TBN5wnZPualDAwrB9lzjmX-0Tw0xhds7aoZjQ=s88-c-k-c0x00ffffff-no-rj",
                    "total_price": 2128.7099999999996,
                    "ingredient_list": [
                        {
                            "ingredient_name": "비름나물",
                            "ingredient_unit_price": 6.95,
                            "ingredient_price": 13900,
                            "ingredient_volume": 250.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/4337295562?itemId=5072641122&vendorItemId=72382330324",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/bce8/02c1f9bdad6a31f0d2fe38af12241a53aec9b5e5111569314350f7e83b8e.jpeg",
                            "price": 1737.5
                        },
                        {
                            "ingredient_name": "실파",
                            "ingredient_unit_price": 9.9,
                            "ingredient_price": 9900,
                            "ingredient_volume": 11.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6692229991?itemId=15469035166&vendorItemId=82688524276",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5d84/d979f9f5bdb87c22912a3cfdec511f21c6474e00647b61df1fc355e0f70f.jpg",
                            "price": 108.9
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 13.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 25.349999999999998
                        },
                        {
                            "ingredient_name": "된장",
                            "ingredient_unit_price": 1.7,
                            "ingredient_price": 23780,
                            "ingredient_volume": 18.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7735374057?itemId=20797053013&vendorItemId=3000201322",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8353012220753453-4f34688f-5f16-4df2-a13c-2a157e1c1fa1.jpg",
                            "price": 30.599999999999998
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 8.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 29.12
                        },
                        {
                            "ingredient_name": "갈은깨",
                            "ingredient_unit_price": 11.5,
                            "ingredient_price": 11500,
                            "ingredient_volume": 7.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1911738124?itemId=3245728805&vendorItemId=71232822026",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7169474778291558-f70b8111-3305-46b3-a2f3-41a0254d1a33.jpg",
                            "price": 80.5
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 12.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 76.67999999999999
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 3.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 32.7
                        },
                        {
                            "ingredient_name": "굵은소금",
                            "ingredient_unit_price": 0.92,
                            "ingredient_price": 18360,
                            "ingredient_volume": 8.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7598091427?itemId=20092631837&vendorItemId=87875020025",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/32fe/800d5f0d40a1104c3754215f75d62be476b631ce33b7f80c12391baa5f8e.png",
                            "price": 7.36
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
                    "total_price": 3746.95,
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                            "ingredient_price": 24490,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 48.9
                        },
                        {
                            "ingredient_name": "물엿올리고당",
                            "ingredient_unit_price": 2.47,
                            "ingredient_price": 12360,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/35151?itemId=17969220731&vendorItemId=3000043756",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/03/06/3000043756/3b712f84-b9ce-4c85-9c19-4ff10834402a.jpg",
                            "price": 148.20000000000002
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 175.5
                        },
                        {
                            "ingredient_name": "고추기름",
                            "ingredient_unit_price": 4.28,
                            "ingredient_price": 61610,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72470?itemId=2877871685&vendorItemId=81354691042",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ca19/5fd5685b9b2352402868561e569a175407976fb1ef990419a4caf267d16e.png",
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
                    "total_price": 793.9000000000001,
                    "ingredient_list": [
                        {
                            "ingredient_name": "인스턴트드라이이스트",
                            "ingredient_unit_price": 18.8,
                            "ingredient_price": 11750,
                            "ingredient_volume": 4.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1310248746?itemId=14419335763&vendorItemId=88438600407",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4337/f836d411aa1447218da683295ded6bff56dca252afe1c3bdebc00159ce5a.JPG",
                            "price": 75.2
                        },
                        {
                            "ingredient_name": "강력분",
                            "ingredient_unit_price": 1.12,
                            "ingredient_price": 22320,
                            "ingredient_volume": 360.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1421510377?itemId=2460073624&vendorItemId=87933064191",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9499/c7817a9e663243c61e2070e4248f0ba37f9e68009e7d2b25762912cf4f87.png",
                            "price": 403.20000000000005
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 6.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 9.120000000000001
                        },
                        {
                            "ingredient_name": "식물성오일",
                            "ingredient_unit_price": 12.9,
                            "ingredient_price": 12900,
                            "ingredient_volume": 18.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/33222751?itemId=124801757&vendorItemId=3254410022&pickType=COU_PICK",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1861310314724957-ce1a718a-c904-45f6-9d72-75a453e14983.jpg",
                            "price": 232.20000000000002
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 198.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 41.58
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                    "total_price": 1263.65,
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
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
                            "ingredient_price": 24490,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 48.9
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 134.85
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
                    "total_price": 2425.5000000000005,
                    "ingredient_list": [
                        {
                            "ingredient_name": "소고기양지",
                            "ingredient_unit_price": 16.44,
                            "ingredient_price": 49310,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6304494253?itemId=13053991445&vendorItemId=80316709070",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/01/20/11/9/dca795db-9fce-41ea-9a29-b800b897db00.jpg",
                            "price": 1644.0000000000002
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
                            "ingredient_unit_price": 3.3,
                            "ingredient_price": 11210,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/239196850?itemId=18171493809&vendorItemId=85320843397",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/20c16af9-400e-47b9-8359-4b68cc4e41e99153747284672463110.png",
                            "price": 99.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 273.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 36.4
                        },
                        {
                            "ingredient_name": "자른미역",
                            "ingredient_unit_price": 20.0,
                            "ingredient_price": 10000,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5710286741?itemId=9518763272&vendorItemId=76803521987",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7995909724220-3a4c6068-eec4-4716-b3da-746e8d31593e.jpg",
                            "price": 200.0
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 34.5
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
                    "total_price": 2379.3399999999997,
                    "ingredient_list": [
                        {
                            "ingredient_name": "습식맵쌀가루",
                            "ingredient_unit_price": 4.6,
                            "ingredient_price": 9200,
                            "ingredient_volume": 450.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/48617425?itemId=171859159&vendorItemId=3411946086",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/12/03/3411946086/e12e4d95-2f28-4809-a7fa-2be72823a9c4.jpg",
                            "price": 2070.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 2.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 3.04
                        },
                        {
                            "ingredient_name": "백설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
                            "ingredient_volume": 40.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7139315300?itemId=16584760&vendorItemId=3005825349",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1150455489522113-a56336d3-5f99-4469-8457-4aedb5e93eff.jpg",
                            "price": 65.19999999999999
                        },
                        {
                            "ingredient_name": "건포도",
                            "ingredient_unit_price": 6.7,
                            "ingredient_price": 26800,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/154401001?itemId=19224750523&vendorItemId=86341421769",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/d6d4a0c8-532d-45d4-8c1b-f3c434c9ccd8374498979979065653.png",
                            "price": 134.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 450.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 94.5
                        },
                        {
                            "ingredient_name": "미지근한물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063&pickType=COU_PICK",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 12.6
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
                    "total_price": 989.5799999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "중멸치",
                            "ingredient_unit_price": 11.3,
                            "ingredient_price": 16900,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5729226493?itemId=9607824729&vendorItemId=88663879076",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9747/3278b7bf4f092b86ddee0cabe23f4e209634f39ed47858fd2a57ecaa9e8b.jpg",
                            "price": 565.0
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 14.7,
                            "ingredient_price": 7350,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6097731697?itemId=11406371607&vendorItemId=78682324950",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7030340116853210-5cce2da8-d902-453c-9cac-eef7401d1fb0.jpg",
                            "price": 147.0
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 21.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
                            "price": 55.02
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.83,
                            "ingredient_price": 27390,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18204720267&vendorItemId=3008200213",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3578077938599046-faf01df5-9ab8-4312-8694-3933c3153852.png",
                            "price": 18.3
                        },
                        {
                            "ingredient_name": "황설탕",
                            "ingredient_unit_price": 1.83,
                            "ingredient_price": 27460,
                            "ingredient_volume": 6.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/2146550469?itemId=20142506636&vendorItemId=74038381322",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1517/17b12bd00fc94a4a95a70e655826ca9b259adce79b80a402098c8181ce72.jpg",
                            "price": 10.98
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
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
                    "total_price": 2115.983333333333,
                    "ingredient_list": [
                        {
                            "ingredient_name": "무",
                            "ingredient_unit_price": 1.58,
                            "ingredient_price": 7900,
                            "ingredient_volume": 480.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7403364293?itemId=19166701875&vendorItemId=82973629812",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/89cd/22258b766852d6eb23c4df7bed982b034ce0c7c9e3a53f96f44906d80386.jpg",
                            "price": 758.4000000000001
                        },
                        {
                            "ingredient_name": "부추",
                            "ingredient_unit_price": 6.93,
                            "ingredient_price": 27700,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7153505103?itemId=17989410984&vendorItemId=73453966419",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c10b/2747a242ba86ca2a92e6da786b35d84b37feaf48bf4ffca8981f22b00745.jpg",
                            "price": 346.5
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 3.333333333333333,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 12.133333333333333
                        },
                        {
                            "ingredient_name": "깨소금",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 134.85
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 95.85
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 218.0
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.33,
                            "ingredient_price": 3990,
                            "ingredient_volume": 90.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7257694107?itemId=18477853883&vendorItemId=85617748048",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3419146629828407-257238be-cfdc-41cd-881a-b535b88c3b95.jpg",
                            "price": 119.7
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
                    "total_price": 280.7,
                    "ingredient_list": [
                        {
                            "ingredient_name": "떡",
                            "ingredient_unit_price": 9.4,
                            "ingredient_price": 13200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5930058127?itemId=10534803498&vendorItemId=77816348238",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6520778785531071-f8fc9737-f8d6-4eef-8080-6747b99438cb.jpg",
                            "price": 47.0
                        },
                        {
                            "ingredient_name": "간장",
                            "ingredient_unit_price": 2.35,
                            "ingredient_price": 8000,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18171819377&vendorItemId=85321160831",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77c4fb51-65b7-43ee-955d-7deec1714bc55045824864441731918.png",
                            "price": 11.75
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 109.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 9.75
                        },
                        {
                            "ingredient_name": "케찹",
                            "ingredient_unit_price": 1.86,
                            "ingredient_price": 24500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6572877795?itemId=317168944&vendorItemId=70754922523",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/05/25/14/8/979826c6-9cba-447b-bd8b-a03100b48c66.jpg",
                            "price": 18.6
                        },
                        {
                            "ingredient_name": "올리고당",
                            "ingredient_unit_price": 2.4,
                            "ingredient_price": 36000,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=12346402311&vendorItemId=84606305062",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7396239517444869-f3787541-82b4-427d-a4e2-ef4495036f67.jpg",
                            "price": 48.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 2.1
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 18.2
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                    "total_price": 2409.9,
                    "ingredient_list": [
                        {
                            "ingredient_name": "도토리가루",
                            "ingredient_unit_price": 11.0,
                            "ingredient_price": 33000,
                            "ingredient_volume": 180.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7281850949?itemId=18593192180&vendorItemId=82732389918",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4a0f/acd5098e292d02b239be5a19c843fe4185017530c79fcb3215c0910e8566.jpg",
                            "price": 1980.0
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1080.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 226.79999999999998
                        },
                        {
                            "ingredient_name": "들기름",
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 191.7
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 7.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 11.4
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
                    "total_price": 2387.2999999999997,
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7d46e3dc-159f-4a68-98eb-7d81e84673b01825372048899440918.png",
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
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 24.5
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
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 44.95
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 7.6
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
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
                    "total_price": 6313.65,
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
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 18.2
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
                            "ingredient_price": 24490,
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/356109451292814-5c1804b1-593f-4bfe-8c93-5d6ca7b86f0e.jpg",
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
                    "total_price": 5035.55,
                    "ingredient_list": [
                        {
                            "ingredient_name": "닭다리",
                            "ingredient_unit_price": 5.83,
                            "ingredient_price": 6990,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5077126547?itemId=6882155226&vendorItemId=74174758824",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2410034443733245-c96a1077-f5ab-4df4-bb35-0cd0eaf8bc2e.jpg",
                            "price": 4664.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
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
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 54.6
                        },
                        {
                            "ingredient_name": "진간장",
                            "ingredient_unit_price": 1.83,
                            "ingredient_price": 27390,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5897832438?itemId=18204720267&vendorItemId=3008200213",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3578077938599046-faf01df5-9ab8-4312-8694-3933c3153852.png",
                            "price": 54.900000000000006
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                    "total_price": 1591.3999999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "닭",
                            "ingredient_unit_price": 4.14,
                            "ingredient_price": 49620,
                            "ingredient_volume": 240.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5140323612?itemId=7045112872&vendorItemId=74337215286",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/03/05/16/7/b1c68b27-466e-4026-8323-3994beb9bbe0.jpg",
                            "price": 993.5999999999999
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 58.5
                        },
                        {
                            "ingredient_name": "고추기름",
                            "ingredient_unit_price": 4.28,
                            "ingredient_price": 61610,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/72470?itemId=2877871685&vendorItemId=81354691042",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ca19/5fd5685b9b2352402868561e569a175407976fb1ef990419a4caf267d16e.png",
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77c4fb51-65b7-43ee-955d-7deec1714bc55045824864441731918.png",
                            "price": 47.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 36.4
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 6.3
                        },
                        {
                            "ingredient_name": "튀김가루",
                            "ingredient_unit_price": 1.91,
                            "ingredient_price": 19080,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6640593253?itemId=17956561520&vendorItemId=85970521228",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/17a0/04a06ebf80b589c5b71513fe4b8f1cc102b522ceebf38a200309397110c0.png",
                            "price": 57.3
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                    "total_price": 3270.5499999999997,
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
                            "ingredient_unit_price": 12.13,
                            "ingredient_price": 48500,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6340332659?itemId=13298346783&vendorItemId=80555653454",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/32d5/0463a1a9cbeaed1d6785b04f6391a8b1f0f75bbe9aa2f9261a7ea327bca9.jpg",
                            "price": 1213.0
                        },
                        {
                            "ingredient_name": "편마늘",
                            "ingredient_unit_price": 4.88,
                            "ingredient_price": 29280,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890446561?itemId=19272806059&vendorItemId=86387962600",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/dbc8aa41-b1dc-447d-8a57-14f0c18a614624297691915085764.png",
                            "price": 73.2
                        },
                        {
                            "ingredient_name": "양조간장",
                            "ingredient_unit_price": 3.11,
                            "ingredient_price": 46610,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6091708833?itemId=18204495963&vendorItemId=88375813525",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cb69/d614e4711b236d216a9030c8b1b11bd535423a0883b5364e5976884d18dc.png",
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
                            "ingredient_unit_price": 2.4,
                            "ingredient_price": 36000,
                            "ingredient_volume": 60.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/592825?itemId=12346402311&vendorItemId=84606305062",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7396239517444869-f3787541-82b4-427d-a4e2-ef4495036f67.jpg",
                            "price": 144.0
                        },
                        {
                            "ingredient_name": "설탕",
                            "ingredient_unit_price": 1.63,
                            "ingredient_price": 24490,
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
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
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
                    "total_price": 1529.0,
                    "ingredient_list": [
                        {
                            "ingredient_name": "국간장",
                            "ingredient_unit_price": 3.3,
                            "ingredient_price": 11210,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/239196850?itemId=18171493809&vendorItemId=85320843397",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/20c16af9-400e-47b9-8359-4b68cc4e41e99153747284672463110.png",
                            "price": 16.5
                        },
                        {
                            "ingredient_name": "참치액",
                            "ingredient_unit_price": 4.7,
                            "ingredient_price": 19930,
                            "ingredient_volume": 2.5,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1463018080?itemId=18623602264&vendorItemId=85760514037",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1a0edbe1-73fa-44b3-b561-3f6a867703a95018413528174038520.png",
                            "price": 11.75
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
                            "ingredient_unit_price": 6.39,
                            "ingredient_price": 11500,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7558184610?itemId=19906589768&vendorItemId=86063361351",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/221a/ac0822697789f7b06e066a304e4e56f5315d91b4ac477b39736e696cba0a.jpg",
                            "price": 31.95
                        },
                        {
                            "ingredient_name": "들깨가루",
                            "ingredient_unit_price": 8.31,
                            "ingredient_price": 8310,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1060458752?itemId=2004669584&vendorItemId=70004615073",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/061f/cb1b650bdb6ff0060e60e6834f842003ea528134becba3c7311f9e908bcb.jpg",
                            "price": 41.550000000000004
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.33,
                            "ingredient_price": 3990,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7257694107?itemId=18477853883&vendorItemId=85617748048",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3419146629828407-257238be-cfdc-41cd-881a-b535b88c3b95.jpg",
                            "price": 19.950000000000003
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 18.2
                        },
                        {
                            "ingredient_name": "식용유",
                            "ingredient_unit_price": 2.62,
                            "ingredient_price": 47190,
                            "ingredient_volume": 5.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6680558424?itemId=15403790368&vendorItemId=87576247097",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7e03/a05e9badf865e55c296900732aee957db58acdc952c4a8f7d3f510e13df9.jpg",
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
                    "total_price": 3093.6000000000004,
                    "ingredient_list": [
                        {
                            "ingredient_name": "돼지고기목살",
                            "ingredient_unit_price": 9.97,
                            "ingredient_price": 29900,
                            "ingredient_volume": 130.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5169947632?itemId=7131594758&vendorItemId=74423389195",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6598779476294580-230e90d6-b1d5-40fa-aa2e-0fef0e42ece5.jpg",
                            "price": 1296.1000000000001
                        },
                        {
                            "ingredient_name": "신김치",
                            "ingredient_unit_price": 2.5,
                            "ingredient_price": 25000,
                            "ingredient_volume": 390.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7122229650?itemId=17835916638&vendorItemId=84999602570",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/d5ae/d2c7c2f20e98343338c13baf5d878e3506fe0a2f50380b76a03a6fd189db.jpg",
                            "price": 975.0
                        },
                        {
                            "ingredient_name": "청양고추",
                            "ingredient_unit_price": 14.7,
                            "ingredient_price": 7350,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6097731697?itemId=11406371607&vendorItemId=78682324950",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/7030340116853210-5cce2da8-d902-453c-9cac-eef7401d1fb0.jpg",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 70.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 171.5
                        },
                        {
                            "ingredient_name": "간마늘",
                            "ingredient_unit_price": 3.7,
                            "ingredient_price": 18250,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228407?itemId=10910051311&vendorItemId=78189867054",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/546432680819306-54f32764-2a7d-4253-92dc-9571d6a902a5.jpg",
                            "price": 74.0
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
                            "ingredient_unit_price": 3.3,
                            "ingredient_price": 11210,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/239196850?itemId=18171493809&vendorItemId=85320843397",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/20c16af9-400e-47b9-8359-4b68cc4e41e99153747284672463110.png",
                            "price": 33.0
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                    "total_price": 3398.125,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 367.5
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
                            "ingredient_unit_price": 14.6,
                            "ingredient_price": 21870,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/18406051?itemId=15491403141&vendorItemId=85296814379",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6f68a808-994c-4e3a-8198-a19e1d96e43c4285942145224219448.png",
                            "price": 2190.0
                        },
                        {
                            "ingredient_name": "소면",
                            "ingredient_unit_price": 1.78,
                            "ingredient_price": 32100,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5189171848?itemId=19421827113&vendorItemId=86533289145",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/fbfc71dc-cdab-4945-9b09-05eb1646bb125630445462236113439.png",
                            "price": 178.0
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.69,
                            "ingredient_price": 16900,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7472965964?itemId=19503240121&vendorItemId=86018545921",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1582/b4a5a3a502648f442cd515bddc80425374ad537b055415e517a20fe75812.jpg",
                            "price": 84.5
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
                    "total_price": 15477.95,
                    "ingredient_list": [
                        {
                            "ingredient_name": "대파",
                            "ingredient_unit_price": 2.45,
                            "ingredient_price": 24500,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7777089811?itemId=21011062691&vendorItemId=88074628457",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3479/e5ca22145ad0665ed3a47d075c23df0605aa6711482519f16b55b3a8628e.jpg",
                            "price": 294.0
                        },
                        {
                            "ingredient_name": "굵은소금",
                            "ingredient_unit_price": 0.92,
                            "ingredient_price": 18360,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7598091427?itemId=20092631837&vendorItemId=87875020025",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/32fe/800d5f0d40a1104c3754215f75d62be476b631ce33b7f80c12391baa5f8e.png",
                            "price": 92.0
                        },
                        {
                            "ingredient_name": "밀가루",
                            "ingredient_unit_price": 1.33,
                            "ingredient_price": 3990,
                            "ingredient_volume": 25.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7257694107?itemId=18477853883&vendorItemId=85617748048",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3419146629828407-257238be-cfdc-41cd-881a-b535b88c3b95.jpg",
                            "price": 33.25
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 105.0
                        },
                        {
                            "ingredient_name": "멸치액젓",
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 120.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 276.0
                        },
                        {
                            "ingredient_name": "조청",
                            "ingredient_unit_price": 3.02,
                            "ingredient_price": 45280,
                            "ingredient_volume": 190.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6209315616?itemId=10104584660&vendorItemId=85929841698",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/b4eb36be-7b49-4532-856a-b88615e3631a1848092172661924616.png",
                            "price": 573.8
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 80.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 291.2
                        },
                        {
                            "ingredient_name": "다진생강",
                            "ingredient_unit_price": 5.2,
                            "ingredient_price": 25900,
                            "ingredient_volume": 16.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6012228412?itemId=10910051324&vendorItemId=78189867044",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/714727371294559-1b182bcc-2ba3-455b-b7b3-b9f5c600ff59.jpg",
                            "price": 83.2
                        },
                        {
                            "ingredient_name": "고들빼기",
                            "ingredient_unit_price": 7.3,
                            "ingredient_price": 7250,
                            "ingredient_volume": 1500.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/176981231?itemId=506031394&vendorItemId=4296041167&pickType=COU_PICK",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6751249728934350-2b4c66d3-18a0-4e6f-9ec9-d3adca529c84.jpg",
                            "price": 10950.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 255.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 2779.5
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
                    "total_price": 3231.5,
                    "ingredient_list": [
                        {
                            "ingredient_name": "검은콩",
                            "ingredient_unit_price": 9.7,
                            "ingredient_price": 58210,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7268065376?itemId=18529408922&vendorItemId=81754640877",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7717/5be279882771a790a1a2eb63b29453d68b044555ed157aa8e2b0c39296c3.jpg",
                            "price": 1455.0
                        },
                        {
                            "ingredient_name": "쌀",
                            "ingredient_unit_price": 2.59,
                            "ingredient_price": 25900,
                            "ingredient_volume": 150.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7593206829?itemId=20065869703&vendorItemId=76228882840",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3780795541352399-d6fc3bc5-942c-490b-a965-775f28cd16cf.jpg",
                            "price": 388.5
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 800.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
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
                    "total_price": 1194.8999999999999,
                    "ingredient_list": [
                        {
                            "ingredient_name": "감자",
                            "ingredient_unit_price": 1.49,
                            "ingredient_price": 14900,
                            "ingredient_volume": 300.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7831991401?itemId=21302462251&vendorItemId=88362141295",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f209/fb5e60a1b20329b1c14a93f589f9f23ea962328264d952ef362a79b4f355.jpg",
                            "price": 447.0
                        },
                        {
                            "ingredient_name": "삼겹살다짐육",
                            "ingredient_unit_price": 6.13,
                            "ingredient_price": 30660,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/1519590114?itemId=19396190611&vendorItemId=86508323607",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8664ccc5-8759-4a93-b13a-e483e54d518c8682526039184364961.png",
                            "price": 306.5
                        },
                        {
                            "ingredient_name": "양파",
                            "ingredient_unit_price": 1.69,
                            "ingredient_price": 16900,
                            "ingredient_volume": 70.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7472965964?itemId=19503240121&vendorItemId=86018545921",
                            "ingredient_img": "https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1582/b4a5a3a502648f442cd515bddc80425374ad537b055415e517a20fe75812.jpg",
                            "price": 118.3
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77c4fb51-65b7-43ee-955d-7deec1714bc55045824864441731918.png",
                            "price": 70.5
                        },
                        {
                            "ingredient_name": "당근",
                            "ingredient_unit_price": 2.42,
                            "ingredient_price": 12100,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7534360517?itemId=19790890806&vendorItemId=86893492181",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0c8/f5ce9d7cfb931230ea71e70ea36d42f85abb7e7210ba49d87f5b67cc02ff.jpg",
                            "price": 72.6
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
                    "total_price": 20778.2,
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
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 735.0
                        },
                        {
                            "ingredient_name": "소고기다시다",
                            "ingredient_unit_price": 4.4,
                            "ingredient_price": 8710,
                            "ingredient_volume": 20.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/3630414?itemId=20254840572&vendorItemId=3026283531",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1371692968447068-b6905a5d-ec71-423e-960c-171fbc7c2e5f.jpg",
                            "price": 88.0
                        },
                        {
                            "ingredient_name": "소금",
                            "ingredient_unit_price": 1.52,
                            "ingredient_price": 7580,
                            "ingredient_volume": 10.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7118404111?itemId=154184&vendorItemId=3000080355",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/77422699043342-2253a7aa-405d-4763-99c9-431b47b34762.jpg",
                            "price": 15.2
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
                    "total_price": 3172.7999999999997,
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
                            "ingredient_unit_price": 2.3,
                            "ingredient_price": 11260,
                            "ingredient_volume": 100.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7728625433?itemId=20761927235&vendorItemId=3037177082",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/879066650434839-962532b9-29ce-4e29-ad09-32cc2aaf34f8.jpg",
                            "price": 229.99999999999997
                        },
                        {
                            "ingredient_name": "굵은소금",
                            "ingredient_unit_price": 0.92,
                            "ingredient_price": 18360,
                            "ingredient_volume": 50.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7598091427?itemId=20092631837&vendorItemId=87875020025",
                            "ingredient_img": "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/32fe/800d5f0d40a1104c3754215f75d62be476b631ce33b7f80c12391baa5f8e.png",
                            "price": 46.0
                        },
                        {
                            "ingredient_name": "고춧가루",
                            "ingredient_unit_price": 10.9,
                            "ingredient_price": 10900,
                            "ingredient_volume": 30.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/5608218091?itemId=9055310202&vendorItemId=76341650663",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/17/1/d1341756-8a54-4fd4-acea-17b14c8129f8.jpg",
                            "price": 327.0
                        },
                        {
                            "ingredient_name": "고추장",
                            "ingredient_unit_price": 1.95,
                            "ingredient_price": 27300,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6900313161?itemId=346924589&vendorItemId=85717010423",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/26266206601838-abb50f02-5ef9-4fc5-b98f-0ba491f2fe1b.png",
                            "price": 29.25
                        },
                        {
                            "ingredient_name": "식초",
                            "ingredient_unit_price": 0.84,
                            "ingredient_price": 15180,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/840193?itemId=3900978&vendorItemId=3004663263",
                            "ingredient_img": "https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4076040557935910-8d249e23-c0fa-4257-9ebe-9e0cf74388c0.jpg",
                            "price": 12.6
                        },
                        {
                            "ingredient_name": "물",
                            "ingredient_unit_price": 0.21,
                            "ingredient_price": 15390,
                            "ingredient_volume": 1000.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7689270513?itemId=20877904962&vendorItemId=87945141063",
                            "ingredient_img": "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1077787963868499-c1e46ca7-d157-4de0-ad8e-063b93ac490d.jpg",
                            "price": 210.0
                        },
                        {
                            "ingredient_name": "다진마늘",
                            "ingredient_unit_price": 3.64,
                            "ingredient_price": 18200,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/6890784639?itemId=19929771567&vendorItemId=87029336992",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/23c231f2-41be-4410-8873-5544a8f8fa272857012207940814782.png",
                            "price": 54.6
                        },
                        {
                            "ingredient_name": "참깨",
                            "ingredient_unit_price": 8.99,
                            "ingredient_price": 17980,
                            "ingredient_volume": 15.0,
                            "ingredient_unit": "g",
                            "ingredient_url": "https://www.coupang.com/vp/products/7574514650?itemId=17716327048&vendorItemId=84881175299",
                            "ingredient_img": "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/766316930514427-fac38c83-125d-4d65-b995-c48d45e9ee71.jpg",
                            "price": 134.85
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
