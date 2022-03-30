<template>
  <div class="searchWrap">
    <div class="search">
      <a-space direction="vertical" class="inner">
        <a-input-search
          v-model:value="value"
          placeholder="input search text"
          enter-button
          @input="onSearch"
        />
      </a-space>
    </div>
    <div class="searchResult">
      <div class="content" v-if="visible">
        <List :articleInfo="articleInfo" />
      </div>
      <div class="null" v-if="!visible">
        <a-empty description="什么也没有" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import List from '@/components/NodeList.vue'

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

const value = ref<string>('')
const haveContent = ref(true)
const visible = ref<boolean>(true)
const onSearch = () => {
  visible.value = true
  haveContent.value = true
}
</script>
<style lang="scss" scoped>
.searchWrap {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;

    > .inner {
      width: 80%;
    }
  }
  .searchResult {
    > .null {
      margin-top: 60px;
    }
  }
}
</style>
