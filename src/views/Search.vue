<script setup lang="ts">
import { ref } from 'vue'
import NoResult from '@/views/NoResult.vue'
import SearchResult from '@/views/SearchResult.vue'

const value = ref<string>('')
const loading = ref<boolean>(false)
const newContent = ref<boolean>(false)
const onSearch = () => {
  newContent.value = true
}
</script>

<template>
  <div class="wrap">
    <div class="title">
      <span>笔记检索</span>
    </div>
    <div class="result">
      <div class="header">
        <a-input-search
          v-model:value="value"
          placeholder="请输入检索内容"
          :loading="loading"
          enter-button
          @input="onSearch"
        />
      </div>
      <div class="main">
        <NoResult v-if="!value" />
        <SearchResult v-else :value="value" v-model:new-content="newContent" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    text-align: center;
    padding: 10px;
    background-color: #e0b62b;
  }
  .result {
    flex-grow: 10;
    padding: 20px;
    .header {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
