<template>
  <section>
    <ul>
        <!-- App.vue 에있는 recipeItems 리스트를 참조-->
      <li v-for="(recipeItem, index) in propsdata" v-bind:key="recipeItem.id" class="shadow"> 
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ recipeItem }}
        <span class="removeBtn" type="button" @click="removeItem(recipeItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],

  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.recipeItems.push(localStorage.key(i))
      }
    }
  },
  methods: {
    removeItem(recipeItem, index) {
      console.log(recipeItem, index)
      localStorage.removeItem(recipeItem);
      this.recipeItems.splice(index, 1);
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>