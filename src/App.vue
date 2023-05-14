<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showImg = computed(() => {
  return route.meta.showImg !== false
})
const cleanToken = () => {
  localStorage.setItem('userToken', '')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <img src="./assets/img/cat.gif" alt="" v-if="!showImg" class="todoImg" />
      <img src="./assets/img/ellem.gif" alt="" v-if="showImg" class="homeImg" />
      <NavbarItem msg="ToDo List!" />

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/" v-if="!showImg" @click="cleanToken">Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

img {
  width: 50%;
  margin: 0 auto;
  display: flex;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  place-items: center;
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  margin-left: -1rem;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
