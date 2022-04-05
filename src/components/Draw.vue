<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as Events from 'events'
import paint from '@/utils/inputCavans'
import transImg from '@/utils/transApi'

const inputCanvas = ref<HTMLCanvasElement>()
const fillColor = ref<string>('#000000')
const lineWidth = ref<number>(4)
const canvasColor = ref('#ffffff')
const canvasHeight = ref(
  document.documentElement!.getBoundingClientRect().height
)
const submit = () => {
  paint(inputCanvas.value!, fillColor.value, lineWidth.value!)
}
onMounted(() => {
  inputCanvas.value!.width = document.body.getBoundingClientRect().width
  inputCanvas.value!.height = document.body.getBoundingClientRect().height
  paint(inputCanvas.value!, fillColor.value, lineWidth.value!)
  document.body.addEventListener(
    'touchmove',
    e => {
      e.preventDefault()
    },
    { passive: false }
  )
})

const visible = ref<boolean>(false)

const showDrawer = () => {
  visible.value = true
}
const lineWidthAdd = () => {
  lineWidth.value! += 1
  submit()
}
const lineWidthSub = () => {
  if (lineWidth.value <= 0) {
    window.alert('宽度不能为负数')
  } else {
    lineWidth.value -= 1
  }
  submit()
}
// 获取canvas图片
const getCanvasImg = async () => {
  let canvasImg
  try {
    canvasImg = await transImg.canvasToImg(inputCanvas.value!, 1, 'image')
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return canvasImg
}
const changeCanvasHeight = async () => {
  const img = (await getCanvasImg()) as HTMLImageElement
  inputCanvas.value!.width = document.body.getBoundingClientRect().width
  inputCanvas.value!.height = canvasHeight.value
  submit()
  const ctx = inputCanvas.value!.getContext('2d')
  ctx!.drawImage(img, 0, 0)
  visible.value = false
  alert('高度已修改')
}
const resetCanvas = () => {
  inputCanvas.value!.width = document.body.getBoundingClientRect().width
  inputCanvas.value!.height = canvasHeight.value
  submit()
  alert('已清空')
}
const resetHeight = async () => {
  const img = (await getCanvasImg()) as HTMLImageElement
  inputCanvas.value!.width = document.body.getBoundingClientRect().width
  inputCanvas.value!.height = document.body.getBoundingClientRect().height
  submit()
  const ctx = inputCanvas.value!.getContext('2d')
  ctx!.drawImage(img, 0, 0)
  visible.value = false
  alert('高度重置')
}

const clearImg = ref<HTMLImageElement>()
onMounted(() => {
  // @ts-ignore
  clearImg.value = document.getElementById('clearImg')!
})
function handle1(e: Events) {
  clearImg.value!.style.top = `${e.touches[0].pageY}px`
  clearImg.value!.style.left = `${e.touches[0].pageX}px`
  clearImg.value!.style.display = 'block'
}
function handle2(e: Events) {
  clearImg.value!.style.top = `${e.touches[0].pageY}px`
  clearImg.value!.style.left = `${e.touches[0].pageX}px`
}
function handle3() {
  clearImg.value!.style.display = 'none'
}

const continuePaint = () => {
  paint(inputCanvas.value!, fillColor.value, lineWidth.value!)
  // 销毁事件监听
  clearImg.value!.style.display = 'none'
  document.documentElement.removeEventListener('touchstart', handle1)
  document.documentElement.removeEventListener('touchmove', handle2)
  document.documentElement.removeEventListener('touchend', handle3)
}
const clearWidth = ref<number>(4)
const clearWidthAdd = () => {
  clearWidth.value += 1
  paint(inputCanvas.value!, canvasColor.value, clearWidth.value)
}
const clearWidthSub = () => {
  clearWidth.value -= 1
  paint(inputCanvas.value!, canvasColor.value, clearWidth.value)
}
const clearWidthChange = () => {
  paint(inputCanvas.value!, canvasColor.value, clearWidth.value)
}
const clear = () => {
  paint(inputCanvas.value!, canvasColor.value, clearWidth.value)
  // 获取鼠标位置

  document.documentElement.addEventListener('touchstart', handle1)
  document.documentElement.addEventListener('touchmove', handle2)
  document.documentElement.addEventListener('touchend', handle3)
}
onUnmounted(() => {
  // 组件销毁前一定要把事件监听取消不然会有bug
  document.documentElement.removeEventListener('touchstart', handle1)
  document.documentElement.removeEventListener('touchmove', handle2)
  document.documentElement.removeEventListener('touchend', handle3)
})
</script>

<template>
  <div id="canvasWrap">
    <canvas
      ref="inputCanvas"
      id="inputCanvas"
      :style="{ background: canvasColor }"
    ></canvas>
    <div class="selector">
      <button @click="showDrawer">画板设置</button>
      <button @click="resetCanvas">清空画布内容</button>
      <button @click="resetHeight">重置画布高度</button>
      <button @click="clear">橡皮擦</button>
      <button @click="continuePaint">继续绘画</button>
    </div>
  </div>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    width="50%"
    :closable="false"
    title="画板设置"
    placement="right"
  >
    <div class="setting">
      <div class="section">
        <p>线条颜色:{{ fillColor }}</p>
        <label>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-beijingyanse"></use>
          </svg>
          <input type="color" v-model="fillColor" @change="submit" />
        </label>
      </div>
      <div class="section">
        <p>线条宽度:{{ lineWidth }}</p>
        <label>
          <button @click="lineWidthAdd">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jia"></use>
            </svg>
          </button>
          <input
            type="text"
            v-model.number="lineWidth"
            @change="submit"
            style="max-width: 50px"
          />
          <button @click="lineWidthSub">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jian"></use>
            </svg>
          </button>
        </label>
      </div>
      <div class="section">
        <p>画布颜色:{{ canvasColor }}</p>
        <label>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-beijingyanse"></use>
          </svg>
          <input type="color" v-model="canvasColor" @change="submit" />
        </label>
      </div>
      <div class="section">
        <p>画布高度:{{ canvasHeight }}</p>
        <label>
          <input
            type="text"
            v-model.number="canvasHeight"
            style="max-width: 50px"
            @change="changeCanvasHeight"
          />
          <button
            @click="changeCanvasHeight"
            style="box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5)"
          >
            提交
          </button>
        </label>
      </div>
      <div class="section">
        <p>橡皮擦宽度:{{ clearWidth }}</p>
        <label>
          <button @click="clearWidthAdd">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jia"></use>
            </svg>
          </button>
          <input
            type="text"
            v-model.number="clearWidth"
            @change="clearWidthChange"
            style="max-width: 50px"
          />
          <button @click="clearWidthSub">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jian"></use>
            </svg>
          </button>
        </label>
      </div>
    </div>
  </a-drawer>
  <div id="clearImg" ref="clearImg"></div>
</template>
<style lang="scss" scoped>
#canvasWrap {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  #inputCanvas {
    display: block;
  }
  .selector {
    position: fixed;
    top: 50px;
    left: 0;
  }
}
.setting {
  display: flex;
  flex-direction: column;
  gap: 20px;
  > .section {
    label {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      input {
        text-align: center;
        outline: none;
        border: none;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
      }
      button {
        background-color: transparent;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: none;
      }
    }
  }
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#clearImg {
  width: 20px;
  height: 20px;
  background: red;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
</style>
