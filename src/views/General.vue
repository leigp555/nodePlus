<template>
  <div class="wrap">
    <div class="main">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1">
          <template #tab
            ><span><book-outlined />笔记</span></template
          >
          <div class="show">
            <NodeList :articleInfo="articleInfo" />
          </div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab
            ><span><heart-outlined />收藏</span></template
          >
          <div class="show">
            <NodeList :articleInfo="articleInfo" />
          </div>
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #tab
            ><span><delete-outlined />回收站</span></template
          >
          <div class="show">
            <NodeList :articleInfo="articleInfo" />
          </div>
        </a-tab-pane>
        <a-tab-pane key="4">
          <template #tab
            ><span><search-outlined />搜索</span></template
          >
          <div class="show">
            <NodeList :articleInfo="articleInfo" />
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  BookOutlined,
  HeartOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons-vue'
import { computed, reactive, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import NodeList from '@/components/NodeList.vue'

const store = useStore(key)
const currentKey = computed(() => {
  return store.getters.getCurrentKind
})
const activeKey = ref<string>(currentKey.value)
watchEffect(() => {
  store.commit('modifyCurrentKind', activeKey.value)
})
const articleInfo = reactive([
  {
    title: 'good day',
    body: '今天是个好日子呀好日子呀好日子',
    nodeId: '46541515651',
    createAt: Date(),
    updateAt: Date(),
    favorite: false,
    tags: ['ok', 'good', 'funk']
  },
  {
    title: 'good day',
    body: '今天是个好日子呀好日子呀好日子',
    nodeId: '46541515651',
    createAt: Date(),
    updateAt: Date(),
    favorite: false,
    tags: ['ok', 'good', 'funk']
  }
])
</script>

<style lang="scss" scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
