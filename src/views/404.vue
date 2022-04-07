<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const returnHome = () => {
  router.push('/api/home')
}
</script>
<template>
  <a-result status="404" title="404" sub-title="页面不存在请您检查网址是否正确">
    <template #extra>
      <a-button type="primary" @click="returnHome">返回主页面</a-button>
    </template>
  </a-result>
</template>
