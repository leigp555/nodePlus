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
        () => {}
      )
    })
  }
}
export default allHttpReq
