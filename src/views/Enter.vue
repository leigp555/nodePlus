<template>
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
  .rotate {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transition: all 500ms;
  }
  .rotated {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
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
</style>
