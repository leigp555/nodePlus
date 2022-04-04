<template>
  <div class="wrap">
    <div class="title">
      <span>百宝箱</span>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    text-align: center;
    padding: 10px;
    background-color: #e0b62b;
  }
  .main {
    flex-grow: 10;
  }
}
</style>
