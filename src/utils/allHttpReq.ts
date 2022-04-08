import { Toast } from 'vant'
import { articleReqType, nodesReqType, user } from '@/common/types'
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
  getNodes(data: nodesReqType) {
    return new Promise(resolve => {
      httpRequest('/api/article/articleList', 'GET', data).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('列表获取失败，请重试')
        }
      )
    })
  },
  getCurrentNode(data: { articleId?: string }) {
    return new Promise(resolve => {
      httpRequest('/api/article/currentArticle', 'GET', data).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('文章获取失败，请重试')
        }
      )
    })
  },
  deleteNode(data: { articleId?: string }) {
    return new Promise(resolve => {
      httpRequest(
        `/api/article/deleteArticle?articleId=${data.articleId}`,
        'DELETE'
      ).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('删除失败，请重试')
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
