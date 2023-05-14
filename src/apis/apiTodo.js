import { request } from '@/apis/request.js'

// 取得-get
const api_todoGet = (config) => {
  return request.get(`/todos`, config)
}
// 新增-post
const api_todoPost = (content, config) => {
  return request.post(`/todos`, content, config)
}
// 刪除-delete
const api_todoDelete = (id, config) => {
  return request.delete(`/todos/${id}`, config)
}
// 切換-patch
const api_todoPatch = (id, config) => {
  return request.patch(`/todos/${id}/toggle`, {}, config)
}

export { api_todoGet, api_todoPost, api_todoDelete, api_todoPatch }
