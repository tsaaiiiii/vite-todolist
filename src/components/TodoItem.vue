<script setup>
import { api_todoPost, api_todoDelete, api_todoPatch } from '@/apis/apiTodo.js'
import { ref, onMounted, computed } from 'vue'
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
const config = ref({
  headers: {
    Authorization: localStorage.getItem('userToken'),
    accept: 'application/json'
  }
})
const dataUse = computed(() => store.data)
const input_content = ref({
  todo: {
    content: ''
  }
})

const type = ref('')
const setType = (value) => {
  type.value = value
}
const getRequest = () => {
  store.getRequest()
}

const dataFilter = computed(() => {
  if (type.value === 'Finished') {
    // console.log('finished')
    return dataUse.value.filter((item) => item.completed_at !== null)
  } else if (type.value === 'Pending') {
    // console.log('pending')
    return dataUse.value.filter((item) => item.completed_at === null)
  } else {
    // console.log('all')
    return dataUse.value
  }
})

onMounted(getRequest)

const sentBtn = () => {
  addRequest()
  input_content.value.todo.content = ''
}

// 新增項目
const addRequest = async () => {
  try {
    const response = await api_todoPost(input_content.value, config.value)
    console.log(response)
    getRequest()
  } catch (error) {
    console.log(error)
  }
}

// 刪除項目
const deleteRequest = async (id) => {
  try {
    const response = await api_todoDelete(id, config.value)
    console.log(response)
    getRequest()
  } catch (error) {
    console.log(error)
  }
}

// 切換狀態
const patchRequest = async (id) => {
  try {
    const response = await api_todoPatch(id, config.value)
    console.log(response)
    getRequest()
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="todoList">
    <div class="newThing">
      <input
        type="text"
        class="todoAdd"
        placeholder="What are you doing today？"
        v-model="input_content.todo.content"
      />
      <input type="button" class="btn" value="sent" @click="sentBtn" />
    </div>

    <div class="allBtn">
      <input type="button" class="all" value="All" @click="setType('All')" />
      <input type="button" class="finished" value="Finished" @click="setType('Finished')" />
      <input type="button" class="pending" value="Pending" @click="setType('Pending')" />
    </div>
    <ul class="list">
      <li v-for="item in dataFilter" :key="item.id">
        <p>{{ item.content }}</p>
        <input
          type="checkbox"
          class="check"
          value="✔"
          @click="patchRequest(item.id)"
          v-bind:checked="item.completed_at"
        />
        <input type="button" class="delete" value="✘" @click="deleteRequest(item.id)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todoList {
  margin-top: 50px;
}
.newThing {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.allBtn {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.btn,
.all,
.finished,
.pending {
  width: 70px;
  height: 30px;
  border: double 2px #193857;
  background-color: #e7ecef;
  color: #193857;
  cursor: pointer;
}
.btn:hover,
.all:hover,
.finished:hover,
.pending:hover {
  color: #fff;
  font-weight: bold;
  background-color: #193857;
  transition-duration: 0.8s;
  border: dotted 2px #193857;
}

.todoAdd {
  width: 200px;
  height: 30px;
}
li {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}
p {
  color: #193857;
  font-weight: bold;
}
.delete {
  background-color: #e7ecef;
  border: none;
}
.delete:hover {
  font-size: 16px;
  transition-duration: 0.4s;
  color: #547c9f;
}
</style>
