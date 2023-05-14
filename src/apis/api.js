import { request } from '@/apis/request.js'
const api_register = (obj) => {
  return request.post(`/users`, obj)
}
const api_login = (obj) => {
  return request.post(`/users/sign_in`, obj)
}

export { api_register, api_login }
