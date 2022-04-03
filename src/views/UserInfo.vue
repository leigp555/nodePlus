<template>
  <div class="headerWrap">
    userinfo
    <!--    <div class="slideTop">-->
    <!--      <div class="avatarWrap">-->
    <!--        <router-link :to="linkX">-->
    <!--          <a-avatar :size="42" :src="avatarSrc" class="avatar">-->
    <!--            <template #icon>-->
    <!--              <UserOutlined />-->
    <!--            </template>-->
    <!--          </a-avatar>-->
    <!--        </router-link>-->
    <!--        <span class="nickname">{{ dataState.nickName }}</span>-->
    <!--      </div>-->
    <!--      <a-button-->
    <!--        type="primary"-->
    <!--        v-if="dataState.isPunch"-->
    <!--        class="button"-->
    <!--        @click="punch"-->
    <!--        >已打卡</a-button-->
    <!--      >-->
    <!--      <a-button type="primary" v-else class="button noPunch" @click="punch"-->
    <!--        >未打卡</a-button-->
    <!--      >-->
    <!--    </div>-->
    <!--    <div class="slideBottom">-->
    <!--      <div class="punk">-->
    <!--        <span>{{ dataState.totalPunch }}</span>-->
    <!--        <span>已连续打卡</span>-->
    <!--      </div>-->
    <!--      <div class="totalDay">-->
    <!--        <span>{{ dataState.totalDay }}</span>-->
    <!--        <span>记录总天数</span>-->
    <!--      </div>-->
    <!--      <div class="totalNode">-->
    <!--        <span>{{ dataState.totalNode }}</span>-->
    <!--        <span>笔记总数</span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
// import { reactive, ref } from 'vue'
// import { UserOutlined } from '@ant-design/icons-vue'
//
// const dataState = reactive({
//   isPunch: false,
//   nickName: '未登录',
//   totalPunch: 0,
//   totalDay: 0,
//   totalNode: 0
// })
// const avatarSrc = ref<string>('')
// const linkX = ref<string>('/userInfo')
// const punch = () => {}
</script>

<style lang="scss" scoped>
.headerWrap {
  background-color: #ff9966;
  padding: 0 20px;
  .slideTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 5px 0;
    margin-bottom: 10px;
    > .button {
      border-radius: 20%;
      text-align: center;
      font-size: 12px;
      padding: 5px 5px;
      border: none;
      background-color: #cccccc;
      &.noPunch {
        background-color: #0099cc;
      }
    }
    .avatarWrap {
      > .nickname {
        max-width: 5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > a > .avatar {
        box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.5);
      }
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 14px;
    }
  }
  .slideBottom {
    padding: 0 15px 10px 15px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > span {
        &:first-child {
          font-size: 16px;
          font-weight: bold;
        }
        &:nth-child(2) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
