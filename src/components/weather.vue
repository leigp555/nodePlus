<template>
  <div class="wrap">
    <header class="address">杭州</header>
    <main>
      <div class="section">
        <Sunny v-if="weather.kind === '晴'" />
        <Storm v-else-if="weather.kind === '下雪'" />
        <Night v-else-if="weather.kind === '夜晚'" />
        <Cloud v-else-if="weather.kind === '多云' || '阴'" />
        <Breezy v-else-if="weather.kind === '阵雨'" />
      </div>
      <div class="tem">
        <p><span>天气: </span>{{ weather.kind }}</p>
        <p><span>气温: </span>{{ weather.temperature }}℃</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'
import Sunny from '@/components/weather/sunny.vue'
import Storm from '@/components/weather/storm.vue'
import Night from '@/components/weather/night.vue'
import Cloud from '@/components/weather/cloud.vue'
import Breezy from '@/components/weather/breezy.vue'

const weather = reactive({
  kind: '多云',
  temperature: 16
})
axios
  .get(
    'https://api.seniverse.com/v3/weather/now.json?key=SDi6BpkMusDpqLf3l&location=hangzhou&language=zh-Hans&unit=c'
  )
  .then(
    res => {
      weather.kind = res.data.results[0].now.text
      weather.temperature = res.data.results[0].now.temperature
    },
    () => {}
  )
  .catch(() => {})
</script>

<style lang="scss" scoped>
.wrap {
  header {
    padding: 10px 0;
  }
  main {
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }
}
</style>
