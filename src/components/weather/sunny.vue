<template>
  <div class="hot">
    <span class="sun"></span>
    <span class="sunx"></span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hot {
  width: 40px;
  height: 40px;
  border-radius: 40%;
  z-index: 10;
  position: relative;
  background: linear-gradient(
    to top right,
    rgba(255, 87, 34, 1) 0%,
    rgba(251, 140, 0, 1) 100%
  );
  box-shadow: 1px 1px 30px rgba(255, 111, 0, 1);
}

.sun {
  position: absolute;
  top: -10%;
  left: 65%;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: linear-gradient(
    to bottom left,
    rgba(255, 235, 59, 1) 0%,
    rgba(249, 168, 37, 1) 90%
  );
  box-shadow: 1px 1px 30px rgba(255, 160, 0, 1);
  animation: inex 3s infinite linear;
}

.sunx {
  position: absolute;
  top: 30%;
  left: 45%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0.2;
}
@keyframes inex {
  50% {
    opacity: 0.4;
  }
  60% {
    opacity: 1;
  }
}
</style>
