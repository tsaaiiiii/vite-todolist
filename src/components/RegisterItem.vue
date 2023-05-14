<script setup>
import { ref } from 'vue'
import { api_register } from '@/apis/api.js'

import { useRouter } from 'vue-router'

const router = useRouter()
const obj = ref({
  user: {
    email: '',
    nickname: '',
    password: ''
  }
})
const sendPostRequest = async () => {
  try {
    const response = await api_register(obj.value)
    console.log(response)
    obj.value.user.nickname = ''
    obj.value.user.email = ''
    obj.value.user.password = ''
    alert('Register successful!')
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <h1>Register</h1>
  <div class="info">
    <form>
      <div class="info_input">
        <label for="nickname">Nickname</label>
        <input
          type="text"
          placeholder="nickname..."
          class="nickname"
          name="nickname"
          v-model="obj.user.nickname"
        />
      </div>
      <div class="info_input">
        <label for="email">Email：</label>
        <input
          type="email"
          placeholder="Email..."
          class="email"
          name="email"
          v-model="obj.user.email"
        />
      </div>
      <div class="info_input">
        <label for="password">Password：</label>
        <input
          type="password"
          placeholder="Password..."
          class="password"
          name="password"
          v-model="obj.user.password"
        />
      </div>
    </form>
  </div>
  <div class="button">
    <button @click="sendPostRequest">Register</button>
  </div>
</template>

<style scoped>
.info_input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.button {
  margin-top: 20px;
}
</style>
