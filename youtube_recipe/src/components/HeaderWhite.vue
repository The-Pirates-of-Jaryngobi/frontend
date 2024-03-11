<template>
  <header :class="{ 'header-scroll': isScrolled }" class="header">
    <div class="header-container">
      <div class="header-gotohome text-white-shadow">
        <router-link to="/" class="router-link">
          <img src="../assets/logo.svg" target="blank" style="width: auto; height: 24px;" />
          <span>The Cheapest Youtubu Recipe</span>
        </router-link>
      </div>
      <div class="menu">
        <router-link to="/about" class="router-link text-white-shadow">About</router-link>
        <a href="https://github.com/orgs/The-Pirates-of-Jaryngobi/repositories" target="blank" class="router-link">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  color: #111;
  transition: background-color 0.3s, box-shadow 0.3s; /* 배경색 및 그림자에 대한 전환 효과 추가 */
}

.header-gotohome {
  font-weight: 800;
  gap: 10px;
  justify-items: center;
}

.router-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.header-scroll {
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 3%;
}

.text-white-shadow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* 흰색 그림자 설정 */
}

.menu {
  display: flex;
}

.menu a {
  margin-left: 20px;
  text-decoration: none;
  color: #111;
}

.menu a:hover {
  color: #111;
}
</style>
