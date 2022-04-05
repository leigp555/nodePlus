<template>
  <teleport to="body">
    <div class="calendar-wrap">
      <div class="title">
        <button @click="back">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui1"></use>
          </svg>
        </button>
        <span>画板</span>
        <button @click="save">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-baocun"></use>
          </svg>
        </button>
      </div>
      <main>
        <Draw />
      </main>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Draw from '@/components/Draw.vue'

const router = useRouter()
const back = () => {
  router.back()
}
const save = () => {
  console.log('保存')
}
</script>

<style lang="scss" scoped>
.calendar-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    text-align: center;
    padding: 10px;
    background-color: #e0b62b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    button {
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
  main {
    flex-grow: 10;
  }
}
</style>
