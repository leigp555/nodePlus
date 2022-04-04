<template>
  <div class="wrap">
    <div class="main">
      <router-view />
    </div>
    <div class="replace" v-show="navShow"></div>
    <transition name="fade">
      <van-tabbar v-show="navShow">
        <van-tabbar-item
          icon="home-o"
          @click="onChange(1)"
          class="first"
          :class="{ selected: active === 1 }"
          >笔记</van-tabbar-item
        >
        <van-tabbar-item
          icon="search"
          @click="onChange(2)"
          :class="{ selected: active === 2 }"
          >工具</van-tabbar-item
        >
        <van-tabbar-item
          @click="onChange(3)"
          :class="{ selected: active === 3 }"
          ><div class="addNode">
            <div class="addWrap" :class="{ selected: active === 3 }">
              <div class="inner">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tianjia"></use>
                </svg>
              </div>
            </div>
          </div>
        </van-tabbar-item>
        <van-tabbar-item
          icon="friends-o"
          @click="onChange(4)"
          :class="{ selected: active === 4 }"
          >检索</van-tabbar-item
        >
        <van-tabbar-item
          icon="setting-o"
          @click="onChange(5)"
          :class="{ selected: active === 5 }"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
// import { key } from '@/store'

const routeTable = {
  1: '/api/nodes',
  2: '/api/tools',
  3: '/api/home',
  4: '/api/searcher',
  5: '/api/userInfo'
}
export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const router = useRouter()
    // const store = useStore(key)
    const touchStart = ref<number[]>([0, 0])
    const touchEnd = ref<number[]>([0, 0])
    const navShow = ref<boolean>(true)
    onMounted(() => {
      document.documentElement.addEventListener('touchstart', e => {
        touchStart.value[0] = e.touches[0].clientX
        touchStart.value[1] = e.touches[0].clientY
      })
      document.documentElement.addEventListener('touchmove', e => {
        touchEnd.value[0] = e.touches[0].clientX
        touchEnd.value[1] = e.touches[0].clientY
        if (touchEnd.value[1] - touchStart.value[1] > 40) {
          navShow.value = true
        } else if (touchEnd.value[1] - touchStart.value[1] < -40) {
          navShow.value = false
        }
      })
    })
    const active = ref<number>(3)
    // eslint-disable-next-line
    for (let key in routeTable) {
      if (routeTable[key] === router.currentRoute.value.fullPath) {
        active.value = parseInt(key, 10)
      }
    }
    const onChange = number => {
      router.push(routeTable[number])
      active.value = number
    }
    return { onChange, active, navShow }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
  .main {
    flex-grow: 10;
  }
  .first {
    color: #646566;
  }
  .selected {
    color: #2f92fb;
  }
  .addNode {
    position: relative;
    top: 0;
    left: 0;
    .addWrap {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 -2px 0px 0px rgba(0, 0, 0, 0.2);
      position: absolute;
      bottom: -5px;
      left: 0;
      z-index: 10;
      transform: translate(-50%, 10px);
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected {
        //选中后换颜色
        box-shadow: 0 -2px 0px 0px rgba(255, 60, 0, 0.2);
      }
      .inner {
        background: #1989fa;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 50%;
          height: 50%;
          color: white;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      }
    }
  }
  .replace {
    height: 50px;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 250ms;
}
</style>
