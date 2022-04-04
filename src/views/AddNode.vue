<template>
  <div class="wrap">
    <div class="round">
      <div class="left">
        <button>
          <router-link to="/api/home/markdown"> markdown</router-link>
        </button>
      </div>
      <div class="right">
        <button>
          <router-link to="/api/home/normal">普通笔记</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$round: black;
$wrap-color: #e0b62b;
.wrap {
  background-color: $wrap-color;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  .round {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    button {
      background-color: transparent;
      border: none;
      outline: none;
    }
    .left {
      border: 1px solid $round;
      width: 40%;
      height: 40%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      border: 1px solid $round;
      width: 40%;
      height: 40%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
