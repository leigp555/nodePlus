<script lang="ts">
import { Cell, CellGroup, ActionSheet, Field, Toast } from 'vant'
import { defineComponent, reactive, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import allHttpReq from '@/utils/allHttpReq'
import transApi from '@/utils/transApi'
import { userInfoType } from '@/common/types'

export default defineComponent({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [ActionSheet.name]: ActionSheet,
    [Field.name]: Field,
    UserOutlined
  },

  setup() {
    const router = useRouter()
    const hash = {
      avatar: '头像',
      username: '用户名',
      email: '邮箱',
      gender: '性别',
      location: '地区',
      phoneNumber: '手机号码'
    }
    const userInfo = reactive<userInfoType>({
      avatar: '未设置',
      username: '未设置',
      email: '未设置',
      gender: '未设置',
      location: '未设置',
      phoneNumber: '未设置'
    })
    // 获取当前用户
    allHttpReq.getUserInfo().then(response => {
      const res = response as { user: userInfoType }
      /*eslint-disable*/
      for (let key in hash) {
        //@ts-ignore
        res.user[key] ? (userInfo[key] = res.user[key]):(userInfo[key] ="未设置")
        userInfo.avatar=res.user.avatar
      }
    })
    //更新用户
    const updateUserInfo = () => {
      allHttpReq.updateUserInfo(userInfo).then(res => {
        console.log(res)
      })
    }
    // 是否展示弹窗
    const show = ref<boolean>(false)
    // 新的数据
    const newValue = ref<string>('')
    // 弹窗展示
    const popInfo = ref<string>('')

    const currentInfo = ref<string>('')
    const controlShow = (info: string) => {
      show.value = true
      // @ts-ignore
      popInfo.value = hash[info]
      currentInfo.value = info
    }
    const popClose = () => {
      if(currentInfo.value==='phoneNumber'){
        const reg=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if(!reg.test(newValue.value)){
          Toast.fail('手机号码格式不正确')
          return
        }
      }
      if(currentInfo.value==='email'){
        const reg= /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
        if(!reg.test(newValue.value)){
          Toast.fail('邮箱格式不正确')
          return
        }
      }
      //@ts-ignore
      userInfo[currentInfo.value] = newValue.value || userInfo.username
      newValue.value = ''
      currentInfo.value = ''
      updateUserInfo()
    }
    const actions = [{ name: '男' }, { name: '女' }]
    const onSelect = (item: { name: string }) => {
      show.value = false
      userInfo.gender = item.name
      updateUserInfo()
    }
    const handleFile = (e: Event) => {
      const el = e.target as HTMLInputElement
      // @ts-ignore
      const file = el.files[0]
      transApi.fileToUrl(file).then(response => {
        const res = response as string
        userInfo.avatar = res
        updateUserInfo()
      })
    }
    const exit=()=>{
      window.localStorage.setItem("_AUTH_TOKEN",'')
      router.push("/api/enter/login")
    }
    return {
      userInfo,
      show,
      controlShow,
      newValue,
      popInfo,
      popClose,
      currentInfo,
      actions,
      onSelect,
      handleFile,
      exit
    }
  }
})
</script>
<template>
  <van-cell-group class="cell">
    <van-cell is-link class="cellItem">
      <label>
        <div class="itemWrap">
          <span>头像</span>
          <input
            style="display: none"
            type="file"
            title=" "
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="handleFile"
          />
          <span>
            <a-avatar :src="userInfo.avatar">
              <template #icon>
                <UserOutlined />
              </template> </a-avatar
          ></span>
        </div>
      </label>
    </van-cell>
    <van-cell is-link class="cellItem" @click="controlShow('username')">
      <div class="itemWrap">
        <span>昵称 </span> <span>{{ userInfo.username }}</span>
      </div>
    </van-cell>

    <van-cell is-link class="cellItem" @click="controlShow('email')">
      <div class="itemWrap">
        <span>邮箱 </span> <span>{{ userInfo.email }}</span>
      </div>
    </van-cell>

    <van-cell is-link class="cellItem" @click="controlShow('gender')">
      <div class="itemWrap">
        <span>性别 </span> <span>{{ userInfo.gender }}</span>
      </div>
    </van-cell>

    <van-cell is-link class="cellItem" @click="controlShow('location')">
      <div class="itemWrap">
        <span>地区 </span> <span>{{ userInfo.location }}</span>
      </div>
    </van-cell>

    <van-cell is-link class="cellItem" @click="controlShow('phoneNumber')">
      <div class="itemWrap">
        <span>手机号 </span> <span>{{ userInfo.phoneNumber }}</span>
      </div>
    </van-cell>
  </van-cell-group>
  <a-button type="primary" class="exit" @click="exit">退出登录</a-button>

  <van-action-sheet
    v-model:show="show"
    :actions="actions"
    @select="onSelect"
    style="padding: 20px 0"
    v-if="currentInfo === 'gender'"
  />
  <van-action-sheet
    v-else
    v-model:show="show"
    :title="popInfo"
    style="height: 40%"
    @close="popClose"
  >
    <van-cell-group inset>
      <van-field
        v-model="newValue"
        :label="popInfo"
        :placeholder="`请输入${popInfo}`"
      />
    </van-cell-group>
  </van-action-sheet>
</template>

<style lang="scss" scoped>
.cell {
  margin-top: 40px;
  .cellItem {
    display: flex;
    align-items: center;
  }
  .itemWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.exit {
  margin-left: 50%;
  margin-top: 50px;
  border-radius: 5px;
  transform: translateX(-50%);
}
</style>
