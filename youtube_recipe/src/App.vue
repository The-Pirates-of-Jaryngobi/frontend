<template>
  <div id="app">
    <RecipeHeader v-bind:propsdata="recipeName"></RecipeHeader>
    <RecipeInput v-on:addRecipe="addRecipe" v-on:addRecipeName='addRecipeName'></RecipeInput>
    <RecipeList v-bind:propsdata="recipeItems"></RecipeList>
    <!-- <RecipeFooter v-on:removeAll="clearAll"></RecipeFooter> -->
  </div>
</template>

<script>
import RecipeHeader from './components/RecipeHeader.vue'
import RecipeInput from './components/RecipeInput.vue'
import RecipeList from './components/RecipeList.vue'
import RecipeFooter from './components/RecipeFooter.vue'

export default {
  data() {
    return {
      recipeName : '메뉴를 입력하세요',
      recipeItems: ['레시피', 'api', '요청한','응답으로','리스트','채우기'] //api 요청으로 받은 응답으로 리스트 생성
    }
  },
  // created() {
 
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       this.recipeItems.push(localStorage.key(i))
  //     }
  //   }
  // },

  methods: {
    addRecipe(recipe) {
      //recipe로 요청을 보내 응답을 받는 함수형태로 구현
      // localStorage.setItem(recipe, recipe)
      // this.recipeItems = ['응답받은 데이터를 리스트로']
      // this.recipeItems.push(recipeItem) //RecipeInput과 연동
    },
    addRecipeName(recipe) {
      this.recipeName = recipe
    },

    clearAll() {
      localStorage.clear()
      this.recipeItems = []
    }
  },

  components: {
    RecipeHeader: RecipeHeader,
    RecipeInput: RecipeInput,
    RecipeList: RecipeList,
    RecipeFooter: RecipeFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>