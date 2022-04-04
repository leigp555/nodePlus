<template>
  <a-timeline class="list">
    <a-timeline-item color="green">
      <router-link to="/api/nodes/list/1">
        <div class="articleInfo">
          <p class="title">标题</p>
          <p class="body">Create services site 2015-09-01</p>
        </div>
      </router-link>
    </a-timeline-item>
    <a-timeline-item color="green">
      <router-link to="/api/nodes/list/2">
        <div class="articleInfo">
          <p class="title">标题</p>
          <p class="body">Create services site 2015-09-01</p>
        </div>
      </router-link>
    </a-timeline-item>
  </a-timeline>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.list {
  .articleInfo {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px;
    height: 60px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -23px;
      border: 10px solid transparent;
      border-top: 15px solid darken(white, 10%);
      width: 0;
      height: 0;
      transform: rotateZ(90deg);
    }

    > p {
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
