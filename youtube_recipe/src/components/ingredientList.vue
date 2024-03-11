<template>
    <div class="ingredient">
        <h2>Ingredients</h2>
        <div class="ingredient-info">
            {{ menu_name }} 레시피에 들어가는 재료를 소개합니다. <br>
            <span v-if="searchResult.ingredient_list_without_unit.length > 0">
                본 재료 외에는 
                <span v-for="(ingredient, index) in searchResult.ingredient_list_without_unit" :key="index" class="bold"> {{ ingredient.ingredient_name }} </span>
                이(가) 레시피에 포함됩니다.
            </span>
        </div>
        <v-container class="pd-0">
            <v-row justify="center">
                <v-col cols="12" sm="6" v-for="ingredient in searchResult.ingredient_list" :key="ingredient.ingredient_name">
                    <a :href="ingredient.ingredient_url" target="_blank" class="link-deco">
                        <v-card class="ingredient-card">
                            <img :src="ingredient.ingredient_img" class="coupang-img" alt="ingredient image"/>
                            <v-card-title class="ingredient-title">{{ ingredient.ingredient_name }} {{ roundPrice(ingredient.ingredient_volume) }}{{ ingredient.ingredient_unit }}</v-card-title>
                            <v-card-text class="ingredient-text">
                                <div>{{ roundPrice(ingredient.ingredient_unit_price * ingredient.ingredient_volume) }}원</div>
                            </v-card-text>
                        </v-card>
                    </a>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        menu_name: String, // inputData props를 정의
        searchResult: Object // searchResult props를 정의
    },
    methods: {
        // "youtube_uploaded_date"에서 날짜 부분만 추출하는 메서드
        extractDate(fullDate) {
        return fullDate.split(' ')[0]; // 문자열을 공백으로 분할하여 첫 번째 부분을 반환
        },
        // "total_price"를 반올림하여 반환하는 메서드
        roundPrice(price) {
        return Math.round(price); // 반올림된 가격 반환
        }
    },
}
</script>

<style scoped>
.ingredient {
    align-items: center;
    background-color: #fff;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    color: #333;
}

.ingredient h2 {
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2.6em;
    color: rgb(64, 63, 76);
}

.ingredient-info {
    font-size: 1.2em;
    line-height: 1.6;
    text-align: center;
    padding: 25px 0;
}

.pd-0 {
    padding: 0;
}

.bold {
    font-weight: 600;
}

.ingredient-card {
    background-color: #eee8;
    text-align: center; 
    padding: 10%;
    padding-top: 12%;
    box-shadow: none;
    border-radius: 20px;
    min-width: 260px;
    margin: 20px 0;
    transition: box-shadow 0.3s ease;
    filter: grayscale(100%);
    flex: 1;
}


.ingredient-card:hover {
    box-shadow: 0 8px 16px rgba(50, 50, 50, 0.2);
    filter: grayscale(0%);
}

.coupang-img {
    transition: filter 0.3s ease;
    border-radius: 500px;
    background-color: #fff;
    margin-bottom: 5px;
    min-width: 80px;
    min-height: 80px;
    max-height: 80px;
    max-width: 80px;
}

.link-deco {
    text-decoration: none; /* 링크에 밑줄을 제거합니다. */
    color: inherit; /* 링크 색상을 상위 요소에서 상속합니다. */
}

.ingredient-title {
    white-space: normal;
    font-family: "Gasoek One", sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    color: rgb(64, 63, 76);
}

.ingredient-text {
    font-size: 1em;
    margin-top: 5px;
}



</style>