<template>
  <div class="wrap">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" class="refresh">
      <van-tabs v-model:active="activeName">
        <van-tab title="笔记" name="a">
          a
          <TimeLine />
        </van-tab>
        <van-tab title="收藏" name="b">
          b
          <TimeLine />
        </van-tab>
        <van-tab title="回收站" name="c">
          c
          <TimeLine />
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { PullRefresh, Toast, Tab, Tabs } from 'vant'
import { defineComponent, ref } from 'vue'
import TimeLine from '@/components/TimeLine.vue'

export default defineComponent({
  components: {
    TimeLine,
    [PullRefresh.name]: PullRefresh,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    const loading = ref(true)
    const activeName = ref('a')
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功')
        loading.value = false
      }, 1000)
    }
    return {
      loading,
      onRefresh,
      activeName
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;

  .refresh {
    flex-grow: 10;

    padding: 20px 10px;
  }
}
</style>
