<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png');
        "
      ></div>
    </div>
  </div>
  <div class="wrapper">
    <div class="rotate" :class="{ rotated: state === 'register' }">
      <transition name="fade" mode="out-in">
        <div class="login" v-if="state === 'login'">
          <Login v-model:state="state" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div class="register" v-if="state === 'register'">
          <Register v-model:state="state" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const state = ref<'login' | 'register'>('login')
</script>

<style lang="scss" scoped>
@import 'src/style/background.scss';
.wrapper {
  -webkit-perspective: 1200px;
  perspective: 1200px;
  -webkit-perspective-origin: center center;
  perspective-origin: center center;
  height: 100%;
  position: relative;
  .rotate {
    width: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    transition: all 500ms;
    background: transparent;
    z-index: 10;
  }
  .rotated {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) rotateY(180deg);
    background: transparent;
  }
  .register {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
  }
}
.fade-enter-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 250ms;
}
.fade-leave-active {
  transition: all 250ms;
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
</style>
