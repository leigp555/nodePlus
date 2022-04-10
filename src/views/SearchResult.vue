<script lang="ts" setup>
import { defineProps, ref, toRefs, watchEffect, defineEmits } from 'vue'
import { articleType } from '@/common/types'
import allHttpReq from '@/utils/allHttpReq'

const data = ref<articleType[]>([])
const props = defineProps<{ value: string; newContent: boolean }>()
const { value, newContent } = toRefs(props)
const search = () => {
  allHttpReq.search({ content: value.value }).then(response => {
    const res = response as { result: articleType }
    // @ts-ignore
    data.value = res.result
  })
}

const emit = defineEmits(['update:newContent'])
// 防抖函数
const timer = ref<boolean>(false)
const clock = ref<number>()
const debounce = (fn: () => void, delay = 2000) => {
  if (!timer.value) {
    window.clearTimeout(clock.value)
    fn()
    timer.value = true
    clock.value = window.setTimeout(() => {
      timer.value = false
      emit('update:newContent', false)
    }, delay)
  }
}

watchEffect(() => {
  // eslint-disable-next-line no-unused-expressions
  newContent.value && debounce(search, 3000)
})
const avatarSrc = window.localStorage.getItem('avatar') || ''
// 超长缩减
const subString = (str: string) => {
  let string: string
  if (str.length > 50) {
    string = `${str.substring(0, 100).trim()}...`
  } else {
    string = str.trim()
  }
  return string
}
</script>
<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <router-link :to="`/api/nodes/list/${item._id}`">
        <a-list-item>
          <a-list-item-meta :description="subString(item.body)">
            <template #title>
              <p>{{ item.title }}</p>
            </template>
            <template #avatar>
              <a-avatar :src="avatarSrc" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </router-link>
    </template>
  </a-list>
</template>

<style lang="scss" scoped></style>
