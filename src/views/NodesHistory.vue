<script lang="ts">
import { PullRefresh, Tab, Tabs } from 'vant'
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
    const loading = ref(false)
    const onRefresh = () => {
      loading.value = true
    }
    return {
      loading,
      onRefresh
    }
  }
})
</script>
<template>
  <div class="wrap">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" class="refresh">
      <van-tabs>
        <van-tab title="笔记" name="a">
          <TimeLine belong="node" v-model:loading="loading" />
        </van-tab>
        <van-tab title="收藏" name="b">
          <TimeLine belong="favorite" v-model:loading="loading" />
        </van-tab>
        <van-tab title="回收站" name="c">
          <TimeLine belong="garbage" v-model:loading="loading" />
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>

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
