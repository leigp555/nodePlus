import { Toast } from 'vant'
import {
  articleReqType,
  articleType,
  nodesReqType,
  user,
  userInfoType
} from '@/common/types'
import httpRequest from '@/utils/axios'

const allHttpReq = {
  // 登录
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
  // 注册
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
  // 添加文章
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
  // 获取文章列表
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
  // 根据文章id获取文章
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
  // 删除文章（移入回收站）
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
  // 更新文章
  updateNode(data: articleType) {
    return new Promise(resolve => {
      // eslint-disable-next-line no-underscore-dangle
      httpRequest(`/api/article/updateArticle?articleId=${data._id}`, 'PUT', {
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
  // 收藏文章
  cellected(data: { articleId?: string }) {
    return new Promise(resolve => {
      httpRequest(
        `/api/article/favorites?articleId=${data.articleId}`,
        'PATCH'
      ).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('收藏失败，请重试')
        }
      )
    })
  },
  // 还原文章（移入allnode列表）
  resetNode(data: { articleId?: string }) {
    return new Promise(resolve => {
      httpRequest(
        `/api/article/resetNode?articleId=${data.articleId}`,
        'PUT'
      ).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('还原失败，请重试')
        }
      )
    })
  },
  // 彻底删除
  completeDelete(data: { articleId?: string }) {
    return new Promise(resolve => {
      httpRequest(
        `/api/article/completeDelete?articleId=${data.articleId}`,
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
  translate(data: { content: string; from: string; to: string }) {
    return new Promise(resolve => {
      httpRequest(`/api/translate/`, 'GET', data).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('翻译失败，请重试')
        }
      )
    })
  },
  // 检索
  search(data: { content: string }) {
    return new Promise(resolve => {
      httpRequest(`/api/article/search/`, 'GET', data).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('查询失败，请重试')
        }
      )
    })
  },
  // 更新用户资料
  updateUserInfo(data: userInfoType) {
    return new Promise(resolve => {
      httpRequest(`/api/users/updateUser`, 'PUT', data).then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('更新失败，请重试')
        }
      )
    })
  },
  // 获取当前用户资料
  getUserInfo() {
    return new Promise(resolve => {
      httpRequest(`/api/users/currentUser`, 'GET').then(
        res => {
          resolve(res)
        },
        () => {
          Toast.fail('查询失败，请重试')
        }
      )
    })
  }
}

export default allHttpReq
