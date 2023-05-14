import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api_todoGet } from '@/apis/apiTodo.js'

export const useCounterStore = defineStore('counter', () => {
  const config = ref({
    headers: {
      Authorization: localStorage.getItem('userToken'),
      accept: 'application/json'
    }
  })
  const data = ref([])
  // 取得資訊
  const getRequest = async () => {
    try {
      const response = await api_todoGet(config.value)
      data.value = response.data.todos
    } catch (error) {
      console.error(error)
    }
  }

  return { getRequest, data }
})
