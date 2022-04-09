<script lang="ts">
import { Popup, Toast } from 'vant'
import { UserOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, ref } from 'vue'
import { articleReqType } from '@/common/types'
import allHttpReq from '@/utils/allHttpReq'
import PreviewNode from '@/components/PreviewNode.vue'

export default defineComponent({
  components: {
    [Popup.name]: Popup,
    UserOutlined,
    PreviewNode
  },
  setup() {
    const article = reactive<articleReqType>({
      title: '',
      body: '',
      favorite: 'false',
      articleType: 'markdown',
      belong: 'node'
    })
    const show = ref<boolean>(false)
    const showPopup = () => {
      show.value = true
    }
    const save = () => {
      allHttpReq.addNode(article).then(() => {
        Toast.success('文章已保存')
      })
    }
    return { article, show, showPopup, save }
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <header>
        <div class="avatar">
          <a-avatar :size="32">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
          <span class="description">编辑与5小时前</span>
        </div>
        <div class="action">
          <a-button type="link" @click="showPopup">预览</a-button>
          <a-button type="link" @click="save">保存</a-button>
        </div>
        <a-input
          class="inputTitle"
          v-model:value="article.title"
          placeholder="请输入标题"
          allow-clear
          autofocus
        />
      </header>
      <main>
        <a-textarea v-model:value="article.body" placeholder="请输入文章内容" />
      </main>
    </div>
  </div>
  <van-popup
    v-model:show="show"
    position="bottom"
    :style="{ height: '80%' }"
    class="bottom-pup"
  >
    <PreviewNode :article="article" />
  </van-popup>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;

  > .inner {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    height: 100%;

    header {
      .avatar {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
        vertical-align: center;

        .description {
          height: 30px;
          line-height: 30px;
          border: 1px solid transparent;
          margin: 0;
          padding: 0;
          font-size: 12px;
        }
      }
      .action {
        display: flex;
        justify-content: end;
      }
      .inputTitle {
        font-size: 1.5em;
        font-family: Georgia, 'Nimbus Roman No9 L', 'Songti SC',
          'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif CN',
          STSong, 'AR PL New Sung', 'AR PL SungtiL GB', NSimSun, SimSun,
          'TW\-Sung', 'WenQuanYi Bitmap Song', 'AR PL UMing CN',
          'AR PL UMing HK', 'AR PL UMing TW', 'AR PL UMing TW MBE', PMingLiU,
          MingLiU, serif;
      }
    }

    main {
      padding: 10px 0 20px 0;
      flex-grow: 100;

      textarea {
        min-height: 100% !important;
      }
    }
  }
}
</style>
<style lang="scss">
#markdownArticleImg {
  img {
    max-width: 100px;
  }
}
</style>
