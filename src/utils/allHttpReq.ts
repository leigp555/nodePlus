import { Toast } from 'vant'
import { articleReqType, user } from '@/common/types'
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
  },
  addNode(data: articleReqType) {
    return new Promise(resolve => {
      httpRequest('/api/article/create', 'POST', {
        article: data
      }).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('笔记未保存')
        }
      )
    })
  },
  updateNode(data: articleReqType) {
    return new Promise(resolve => {
      httpRequest('/api/article/updateArticle', 'PUT', {
        article: data
      }).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('笔记未保存')
        }
      )
    })
  }
}
export default allHttpReq
