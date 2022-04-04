<template>
  <div class="stormy">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <span class="snowe"></span>
    <span class="snowex"></span>
    <span class="stick"></span>
    <span class="stick2"></span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.stormy {
  width: 40px;
  height: 40px;
  border-radius: 40%;
  position: relative;
  background: linear-gradient(
    to top right,
    rgba(117, 117, 117, 1) 0%,
    rgba(33, 33, 33, 1) 90%
  );
  box-shadow: 1px 1px 30px rgba(33, 33, 33, 1);
}
.stormy li {
  position: absolute;
  list-style: none;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #777;
  box-shadow: 1px 1px 30px #555;
  animation: fall 3s infinite linear;
  opacity: 0;
}
.stormy li:nth-child(1) {
  top: 0%;
  left: 100%;
}

.stormy li:nth-child(2) {
  top: 5%;
  left: 90%;
}

.stormy li:nth-child(3) {
  top: -10%;
  left: 80%;
  animation-delay: 2s;
}

.stormy li:nth-child(4) {
  top: 10%;
  left: 100%;
  animation-delay: 2s;
}

.stormy li:nth-child(5) {
  top: 20%;
  left: 80%;
  animation-delay: 0.5s;
}

.stormy li:nth-child(6) {
  top: 35%;
  left: 70%;
  background-color: #bbb;
  animation-delay: 0.5s;
}

.stormy li:nth-child(7) {
  top: 23%;
  left: 60%;
  background-color: #bbb;
  animation-delay: 0.8s;
}

.stormy li:nth-child(8) {
  top: 5%;
  left: 70%;
  background-color: #bbb;
  animation-delay: 0.8s;
}
.snowe {
  position: absolute;
  top: 60%;
  left: 40%;
  width: 20px;
  height: 20px;
  border-radius: 60px;
  background-color: #ddd;
}
.snowex {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 15px;
  background-color: #bbb;
}
.stick {
  position: absolute;
  top: 60%;
  left: 40%;
  width: 3px;
  height: 15px;
  transform: rotate(-45deg);
  background-color: #333;
  z-index: -10;
}
.stick2 {
  position: absolute;
  top: 60%;
  left: 70%;
  width: 3px;
  height: 15px;
  transform: rotate(45deg);
  background-color: #333;
  z-index: -10;
}
@keyframes fall {
  10% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
    transform: translate(-10px, 30px);
  }
  100% {
    transform: translate(-25px, 70px);
  }
}
</style>
