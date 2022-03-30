<template>
  <div class="wrap">
    <a-list
      class="listWrap"
      :loading="controlUpdate.initLoading"
      item-layout="horizontal"
      :data-source="articleInfo"
    >
      <template #renderItem="{ item }">
        <router-link to="">
          <a-list-item>
            <a-skeleton :title="false" :loading="controlUpdate.loading" active>
              <a-list-item-meta :description="hiddenText(item.body)">
                <template #title>
                  <div class="titleWrapX">
                    <div>
                      <a-divider class="line" />
                    </div>
                    <div class="inner">
                      <span id="nodeTitle" v-html="item.title"></span>
                      <span> {{ formatTime(item.createAt) }}</span>
                    </div>
                  </div>
                </template>
              </a-list-item-meta>
            </a-skeleton>
          </a-list-item>
        </router-link>
      </template>
      <template #loadMore>
        <div
          v-if="!controlUpdate.initLoading && !controlUpdate.loading"
          class="loadMore"
          :style="{
            textAlign: 'center',
            marginTop: '16px',
            height: '32px',
            lineHeight: '32px'
          }"
        >
          <a-button v-if="!controlUpdate.end" @click="onLoadMore"
            >加载更多</a-button
          >
          <div v-if="controlUpdate.end" class="noMore">
            没有更多了, <a href="#">回到顶部?</a>
          </div>
        </div>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive, toRefs } from 'vue'
import dayjs from 'dayjs'

interface articleType {
  articleInfo: {
    title: string
    body: string
    nodeId: string
    createAt: Date
    updateAt: Date
    favorite: boolean
    tags: string[]
  }
}
const props = defineProps<articleType>()
const { articleInfo } = toRefs(props)
const controlUpdate = reactive({
  initLoading: false,
  loading: false,
  end: false,
  rangItem: 0
})
// 文字超长隐藏
const hiddenText = (text: string) => {
  if (text.length > 14) {
    return `${text.substring(0, 14)}...`
  }
  return text
}
const formatTime = (time: string) => {
  return dayjs(time).format('MM月DD日HH:mm')
}
const onLoadMore = () => {}
</script>

<style scoped lang="scss">
.wrap {
  padding: 0 20px;

  > .listWrap {
    min-height: 350px;
  }

  .noMore {
    margin-top: 20px;
  }

  .titleWrapX {
    .inner {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .line {
      margin-top: 0;
      background-color: rgba(42, 42, 42, 0.2);
    }
  }
}

#nodeTitle {
  max-width: 8em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0;
}
</style>
