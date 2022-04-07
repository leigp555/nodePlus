import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

const instance = axios.create()
const AUTH_TOKEN = window.localStorage.getItem('_AUTH_TOKEN')
// @ts-ignore
if (process.env.NODE_ENV === 'production') {
  instance.defaults.baseURL = 'http://api.com'
  // @ts-ignore
} else if (process.env.NODE_ENV === 'test') {
  instance.defaults.baseURL = 'http://localhost:8080'
} else {
  instance.defaults.baseURL = 'http://localhost:8888'
}
instance.defaults.baseURL = 'http://localhost:8000'
instance.defaults.timeout = 8000
instance.defaults.withCredentials = false
instance.defaults.headers.common.Authorization = AUTH_TOKEN
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
instance.defaults.transformRequest = data => qs.stringify(data)
// 状态码大于400的都将视作失败
instance.defaults.validateStatus = status => status >= 200 && status <= 400
instance.interceptors.request.use(
  config =>
    // 在发送请求之前做些什么
    config,
  () =>
    // 对请求错误做些什么
    Promise.reject(new Error('请求未发送'))
)
instance.interceptors.response.use(
  response => {
    // const { data, status, statusText, headers, config, request } = response
    return response
  },
  error => {
    if (!window.navigator.onLine) {
      // 断网处理比如跳转到断网页面
      Toast.fail('网络异常，请检查网络')
      return Promise.reject(error)
    }
    if (!error.response) {
      Toast.fail('系统繁忙，请稍后再试1')
      return Promise.reject(error)
    }
    // 有错误信息返回的情况下
    // 统一处理400以上的状态码
    if (error.response.status === 401) {
      Toast.fail('用户未认证')
    } else if (error.response.status === 403) {
      Toast.fail('token过期了')
    } else if (error.response.status === 404) {
      Toast.fail('访问内容不存在')
    } else if (error.response.status === 500) {
      Toast.fail('系统繁忙，请稍后再试2')
    }
    return Promise.reject(error)
  }
)

const httpRequest = (url: string, type = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    const option = {
      url,
      method: type
    } as AxiosRequestConfig
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    instance(option)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          resolve(res.data)
        } else {
          // 此处可统一处理非200-400之间的状态码
          // Toast.fail(res.data.msg)
          reject(res.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default httpRequest
