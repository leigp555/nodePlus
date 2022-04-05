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
        />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
const loading = ref<boolean>(false)
</script>

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
