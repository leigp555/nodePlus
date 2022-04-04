<template>
  <div class="wrap">
    <div class="weather">
      <p class="title">每日气象</p>
      <Whether />
    </div>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import Whether from '@/components/weather.vue'
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
  .weather {
    p {
      padding: 0;
      margin: 0;
    }
    .title {
      padding: 5px 0;
    }
  }
}
</style>
