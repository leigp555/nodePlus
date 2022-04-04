<template>
  <teleport to="body">
    <div class="calendar-wrap">
      <div class="title">
        <button @click="back">返回</button>
        <span>日历</span>
        <button style="visibility: hidden">保存</button>
      </div>
      <div class="main">
        <van-calendar
          title="  "
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '500px' }"
        />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { Calendar } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    [Calendar.name]: Calendar
  },
  setup() {
    const router = useRouter()
    const back = () => {
      router.back()
    }
    return { back }
  }
})
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
