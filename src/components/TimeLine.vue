<script lang="ts" setup>
import { Toast } from 'vant'
import { ref, toRefs, defineProps, watchEffect, defineEmits } from 'vue'
import {
  HeartOutlined,
  DeleteOutlined,
  RedoOutlined
} from '@ant-design/icons-vue'
import { articleRseType, articleType } from '@/common/types'
import allHttpReq from '@/utils/allHttpReq'

const emit = defineEmits(['update:loading'])
const props = defineProps<{ belong: string; loading: boolean }>()
const { belong, loading } = toRefs(props)
const source = ref<articleType[]>([])
const offset = ref(0)
const limit = ref(3)
const noMore = ref(false)
const httpReq = () => {
  return new Promise(resolve => {
    allHttpReq
      .getNodes({
        belong: belong.value,
        limit: limit.value,
        offset: offset.value
      })
      .then(response => {
        const res = response as articleRseType
        source.value = source.value.concat(res.articles)
        resolve(res)
      })
  })
}
httpReq()
watchEffect(() => {
  if (loading.value) {
    allHttpReq
      .getNodes({
        belong: belong.value,
        limit: limit.value,
        offset: offset.value
      })
      .then(response => {
        const res = response as articleRseType
        source.value = res.articles
        emit('update:loading', false)
        Toast('刷新成功')
      })
  }
})

const loadMore = () => {
  if (!noMore.value) {
    offset.value += 3
    httpReq().then(response => {
      const res = response as articleRseType
      if (res.articles.length === 0) {
        noMore.value = true
      }
    })
  }
}
const deleteNode = (articleId: string) => {
  allHttpReq
    .deleteNode({
      articleId
    })
    .then(() => {
      allHttpReq
        .getNodes({
          belong: belong.value,
          limit: limit.value,
          offset: offset.value
        })
        .then(response => {
          const res = response as articleRseType
          source.value = res.articles
        })
    })
}
const cellectedNode = (articleId: string) => {
  allHttpReq
    .cellected({
      articleId
    })
    .then(() => {
      allHttpReq
        .getNodes({
          belong: belong.value,
          limit: limit.value,
          offset: offset.value
        })
        .then(response => {
          const res = response as articleRseType
          source.value = res.articles
        })
    })
}
const resetNode = (articleId: string) => {
  allHttpReq
    .resetNode({
      articleId
    })
    .then(() => {
      allHttpReq
        .getNodes({
          belong: belong.value,
          limit: limit.value,
          offset: offset.value
        })
        .then(response => {
          const res = response as articleRseType
          source.value = res.articles
        })
    })
}

const completeDelete = (articleId: string) => {
  allHttpReq
    .completeDelete({
      articleId
    })
    .then(() => {
      allHttpReq
        .getNodes({
          belong: belong.value,
          limit: limit.value,
          offset: offset.value
        })
        .then(response => {
          const res = response as articleRseType
          source.value = res.articles
        })
    })
}
</script>
<template>
  <div id="top"></div>
  <a-timeline class="list" v-for="item in source" :key="item._id">
    <a-timeline-item color="green">
      <router-link :to="`/api/nodes/list/${item._id}`">
        <div class="articleInfo">
          <p class="title">{{ item.title }}</p>
          <p class="body">{{ item.body }}</p>
        </div>
      </router-link>
      <a-button
        type="link"
        @click.stop="cellectedNode(item._id)"
        v-if="belong !== 'garbage'"
      >
        <heart-outlined />
        收藏
      </a-button>
      <a-button
        type="link"
        @click.stop="resetNode(item._id)"
        v-if="belong === 'garbage'"
      >
        <redo-outlined />
        还原
      </a-button>
      <a-button
        type="link"
        @click.stop="completeDelete(item._id)"
        v-if="belong === 'garbage'"
        ><delete-outlined />彻底删除</a-button
      >
      <a-button
        type="link"
        @click.stop="deleteNode(item._id)"
        v-if="belong !== 'garbage'"
        ><delete-outlined />删除</a-button
      >
    </a-timeline-item>
  </a-timeline>
  <div class="more">
    <a-button type="primary" class="loadMore" @click="loadMore" v-if="!noMore"
      >加载更多</a-button
    >
    <p v-else class="loadMore">没有更多了,<a href="#">回到顶部</a></p>
  </div>
</template>

<style lang="scss" scoped>
.list {
  margin-top: 20px;
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
.more {
  padding-bottom: 120px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
