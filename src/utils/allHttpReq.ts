import { Toast } from 'vant'
import { user } from '@/common/types'
import httpRequest from '@/utils/axios'

const allHttpReq = {
  login(data: user) {
    return new Promise(resolve => {
      httpRequest('/api/users/login', 'POST', {
        user: data
      }).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('用户名或密码不正确')
        }
      )
    })
  },
  register(data: user) {
    return new Promise(resolve => {
      httpRequest('/api/users/register', 'POST', {
        user: data
      }).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('用户名已存在')
        }
      )
    })
  }
}
export default allHttpReq
