import axios from 'axios'
import qs from 'qs'
import { message } from 'ant-design-vue'

const instance = axios.create()
// 读取token方便后面携带
const AUTH_TOKEN = window.localStorage.getItem('xxx')
// 根据环境变量调整接口
// @ts-ignore
switch (process.env.NODE_ENV) {
  case 'production':
    instance.defaults.baseURL = 'http://api.com'
    break
  case 'test':
    instance.defaults.baseURL = 'http://localhost:8080'
    break
  default:
    instance.defaults.baseURL = 'http://localhost:8888'
}

instance.defaults.timeout = 8000
instance.defaults.withCredentials = true
instance.defaults.headers.common.Authorization = AUTH_TOKEN
// 设置数据上传数据格式
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

instance.defaults.transformRequest = data => qs.stringify(data)
instance.defaults.validateStatus = status => status >= 200 && status < 400
instance.interceptors.request.use(
  config =>
    // 在发送请求之前做些什么
    config,
  error =>
    // 对请求错误做些什么
    Promise.reject(error)
)
instance.interceptors.response.use(
  response =>
    // const { data, status, statusText, headers, config, request } = response
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    response.data,
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (!error.response) {
      // 如果服务器连错误信息都没有返回那么可能是服务器崩了，或者用户没网了，要进行断网处理
      if (!window.navigator.onLine) {
        // 断网处理比如跳转到断网页面
        return
      }
    }
    // 有错误信息返回的情况下
    // eslint-disable-next-line consistent-return,default-case
    switch (error.response.status) {
      case 401:
        message.error('用户未认证')
        break
      case 403:
        message.error('token过期了')
        break
      case 404:
        message.error('页面不存在')
        break
      // No Default
    }
    // eslint-disable-next-line consistent-return
    return Promise.reject(error)
  }
)
