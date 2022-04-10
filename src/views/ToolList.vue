<script lang="ts" setup>
import { ref } from 'vue'
import Whether from '@/components/weather.vue'
import allHttpReq from '@/utils/allHttpReq'

const fyInput = ref<string>('')
const fyResult = ref<string>('')
const from = ref('zh')
const to = ref('en')
const translate = () => {
  allHttpReq
    .translate({ content: fyInput.value, from: from.value, to: to.value })
    .then(response => {
      const res = response as { result: string }
      fyResult.value = res.result
    })
}
const lang = ref<string>('中译英')
const langChange = () => {
  if (lang.value === '中译英') {
    from.value = 'zh'
    to.value = 'en'
  } else if (lang.value === '英译中') {
    from.value = 'en'
    to.value = 'zh'
  }
}
</script>

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
          <div class="content">
            <a-select
              ref="select"
              v-model:value="lang"
              style="width: 120px"
              @change="langChange"
            >
              <a-select-option value="中译英">中译英</a-select-option>
              <a-select-option value="英译中">英译中</a-select-option>
            </a-select>
            <a-button type="primary" @click="translate" class="translate"
              >翻译</a-button
            >
          </div>

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
      .content {
        display: flex;
        justify-content: start;
        gap: 10px;
        .translate {
        }
      }
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
