<template>
  <Markdown v-if="articleType === 'markdown'" />
  <Normal v-else-if="articleType === 'normal'" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Markdown from '@/views/Markdown.vue'
import Normal from '@/views/Normal.vue'

const articleType = ref('markdown')
</script>

<style lang="scss" scoped></style>
