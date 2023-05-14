<script setup>
import { ref } from 'vue'
import { api_login } from '@/apis/api.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const obj = ref({
  user: {
    email: '',
    password: ''
  }
})

const token = ref('')

const sendPostRequest = async () => {
  try {
    const response = await api_login(obj.value)
    console.log(response)
    obj.value.user.email = ''
    obj.value.user.password = ''
    alert('Login successful!')
    router.push('/todo')
    token.value = response.headers.authorization
    localStorage.setItem('userToken', token.value)
  } catch (error) {
    alert('please check your password!')
    obj.value.user.email = ''
    obj.value.user.password = ''
  }
}
</script>
<template>
  <h1>Login</h1>
  <div class="info">
    <form>
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
    <button @click="sendPostRequest">Login</button>
  </div>
</template>

<style>
h1 {
  color: #234d6f;
}
.info_input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
button {
  margin: 20px 0px;
  border-radius: 5%;
  border: dashed 1px black;
  width: 100px;
  height: 30px;
  background-color: #c8cbd2;
  color: #1a3856;
  cursor: pointer;
}
button:hover {
  font-weight: bold;
  font-size: 16px;
  transition-duration: 0.4s;
}
</style>
