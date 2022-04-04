<template>
  <div class="wrap">
    <header class="address" @click="showModal">
      <span
        ><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dizhi"></use>
        </svg>
      </span>
      <span>{{ weather.address }}</span>
    </header>
    <main>
      <a-skeleton active :loading="isLoading">
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
      </a-skeleton>
    </main>
  </div>

  <div>
    <a-modal
      v-model:visible="visible"
      title="请输入城市名例如：杭州"
      @ok="handleOk"
    >
      <a-input v-model:value="weather.address" placeholder="请输入城市名" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import Sunny from '@/components/weather/sunny.vue'
import Storm from '@/components/weather/storm.vue'
import Night from '@/components/weather/night.vue'
import Cloud from '@/components/weather/cloud.vue'
import Breezy from '@/components/weather/breezy.vue'

const weather = reactive({
  address: '杭州',
  kind: '多云',
  temperature: 16
})
const isLoading = ref<boolean>(true)
const weatherRequst = () => {
  axios
    .get(
      `https://api.seniverse.com/v3/weather/now.json?key=SDi6BpkMusDpqLf3l&location=${pinyin(
        weather.address,
        { toneType: 'none' }
      ).replace(/\s*/g, '')}&language=zh-Hans&unit=c`
    )
    .then(res => {
      isLoading.value = false
      weather.kind = res.data.results[0].now.text
      weather.temperature = res.data.results[0].now.temperature
    })
    .catch(() => {
      isLoading.value = false
      window.alert('请输入正确的城市名')
    })
}
weatherRequst()
const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
  weatherRequst()
}
</script>

<style lang="scss" scoped>
.wrap {
  .address {
    padding: 10px 0;
    display: inline-flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
  main {
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.custom-class {
}
</style>
