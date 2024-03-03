<template>
  <header>
    <h1>요리 레시피</h1>
    <h2>{{ propsdata }}</h2>
  </header>
</template>

<script>
export default {
   props: ['propsdata']
}
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>