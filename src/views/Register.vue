<script lang="ts" setup>
import { reactive } from 'vue'
import { RuleObject } from 'ant-design-vue/es/form'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { logType } from '@/common/types'
import allHttpReq from '@/utils/allHttpReq'

const router = useRouter()
const formState = reactive<logType>({
  email: '',
  password: '',
  checkPass: '',
  avatarSrc: ''
})
// 校验
const verifyUserName = [
  { required: true, message: '请填写用户名' },
  {
    pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: '请输入正确的邮箱',
    trigger: 'blur'
  }
]
const verifyPassWord = [
  { required: true, message: '请填写密码' },
  {
    pattern: /^[a-zA-Z0-9_-]{6,16}$/,
    message: '密码必须6到16位(字母，数字，下划线，减号)',
    trigger: 'blur'
  }
]
const validatePass = async (_rule: RuleObject, value: string) => {
  if (value === '') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('请再输入一次密码')
  }
  if (value !== formState.password) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('两次输入不一致')
  }
  return Promise.resolve()
}
const verifyAgain = [{ validator: validatePass, trigger: 'change' }]

const onFinish = (value: logType) => {
  allHttpReq
    .register({ email: value.email, password: value.password })
    .then(res => {
      console.log(res)
      router.push('/api/enter/login')
    })
}
const toLogin = () => {
  router.push('/api/enter/login')
}
</script>
<template>
  <div class="wrap">
    <div class="inner">
      <div class="avatarWrap">
        <a-avatar :size="64" src="" class="avatar">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
      <a-form
        class="formWrap"
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        :wrapper-col="{ span: 24, offset: 0 }"
      >
        <a-form-item
          class="formItem"
          label=""
          name="email"
          :rules="verifyUserName"
          has-feedback
        >
          <a-input
            v-model:value="formState.email"
            placeholder="请输入邮箱"
            class="formInput"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          class="formItem"
          label=""
          name="password"
          :rules="verifyPassWord"
          has-feedback
        >
          <a-input-password
            v-model:value="formState.password"
            placeholder="请输入密码"
            class="formInput"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          has-feedback
          label=""
          name="checkPass"
          class="formItem"
          :rules="verifyAgain"
        >
          <a-input
            v-model:value="formState.checkPass"
            type="password"
            autocomplete="off"
            placeholder="确认密码"
            class="formInput"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item class="formItem" :wrapper-col="{ span: 24, offset: 0 }">
          <a-button type="primary" html-type="submit" class="submit"
            >Submit</a-button
          >
          <p class="link">
            已有账号?直接
            <a-button
              type="link"
              style="font-size: 16px; padding: 0"
              @click="toLogin"
              >登录</a-button
            >
          </p>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  max-width: 500px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .inner {
    padding: 0 20px;
    background-color: transparent;

    > .avatarWrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
    }

    > .formWrap {
      > .formItem {
        .formInput {
          line-height: 3em;
          border-radius: 6px;
        }

        .submit {
          width: 100%;
          height: 3em;
          border-radius: 6px;
          color: #ffffff;
          font-size: 16px;
          background-color: #ff6a00;
          margin-bottom: 10px;
          border: none;
        }

        .link {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
