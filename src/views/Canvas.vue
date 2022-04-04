<template>
  <teleport to="body">
    <div class="calendar-wrap">
      <div class="title">
        <button @click="back">返回</button>
        <span>画板</span>
        <button @click="save">保存</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

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
  }
  .main {
    flex-grow: 10;
  }
}
</style>
