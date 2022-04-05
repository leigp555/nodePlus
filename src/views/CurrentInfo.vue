<template>
  <Teleport to="body">
    <div class="wrap">
      <div class="inner">
        <van-cell-group inset>
          <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { Field, CellGroup } from 'vant'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },
  setup() {
    const value = ref('')
    return { value }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f7f8fa;
  .inner {
    margin-top: 20%;
  }
}
</style>
