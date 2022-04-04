<template>
  <div class="wrap">
    <div class="weather">
      <p class="title">每日气象</p>
      <Whether />
    </div>
    <div class="trans">
      <p class="title">翻译器</p>
      <div class="transResult">
        <div class="input">
          <p>请输入要翻译的内容：</p>
          <a-textarea
            v-model:value="fyInput"
            placeholder="请输入要翻译的内容"
            allow-clear
          />
        </div>
        <div class="output">
          <p>翻译结果：</p>
          <a-textarea
            v-model:value="fyResult"
            placeholder="翻译结果"
            allow-clear
            disabled
          />
        </div>
      </div>
    </div>
    <div class="tools">
      <p class="title">更多工具</p>
      <div class="moreTool">
        <router-link to="/api/tools/canvas">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huaban"></use>
          </svg>
          <span>画板</span>
        </router-link>
        <router-link to="/api/tools/calendar">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>日历</span>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Whether from '@/components/weather.vue'

const fyInput = ref<string>('xxx')
const fyResult = ref<string>('fsdfs ')
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .weather {
    p {
      padding: 0;
      margin: 0;
    }
  }
  .trans {
    display: flex;
    flex-direction: column;
    .transResult {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  .tools {
    .moreTool {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: black;
        font-size: 14px;
      }
      .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
}
</style>
