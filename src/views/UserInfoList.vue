<template>
  <van-cell-group class="cell">
    <van-cell is-link class="cellItem">
      <div class="itemWrap">
        <span>头像 </span>
        <span>
          <a-avatar>
            <template #icon>
              <UserOutlined />
            </template> </a-avatar
        ></span>
      </div>
    </van-cell>
    <van-cell is-link class="cellItem">
      <div class="itemWrap"><span>昵称 </span> <span>xx</span></div>
    </van-cell>
    <van-cell is-link class="cellItem">
      <div class="itemWrap"><span>邮箱 </span> <span>xx</span></div>
    </van-cell>
    <van-cell is-link class="cellItem">
      <div class="itemWrap"><span>性别 </span> <span>xx</span></div>
    </van-cell>
    <van-cell is-link class="cellItem">
      <div class="itemWrap"><span>手机号 </span> <span>xx</span></div>
    </van-cell>
  </van-cell-group>
  <a-button type="primary" class="exit">退出登录</a-button>
  <router-view />
</template>

<script lang="ts">
import { Cell, CellGroup } from 'vant'
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    UserOutlined
  }
})
</script>

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
