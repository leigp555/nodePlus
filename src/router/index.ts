import { createRouter, createWebHashHistory } from 'vue-router'
import Enter from '@/views/Enter.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'
import AddNode from '@/views/AddNode.vue'
import MarkDown from '@/views/Markdown.vue'
import NodesHistory from '@/views/NodesHistory.vue'
import CurrentNode from '@/views/CurrentNode.vue'
import Tools from '@/views/Tools.vue'
import Canvas from '@/views/Canvas.vue'
import Calendar from '@/views/Calendar.vue'
import Search from '@/views/Search.vue'
import Normal from '@/views/Normal.vue'
import SearchResult from '@/views/SearchResult.vue'
import UserInfo from '@/views/UserInfo.vue'
import UserInfoList from '@/views/UserInfoList.vue'
import NoResult from '@/views/NoResult.vue'
import Nodes from '@/views/Nodes.vue'
import ComponentsWrap from '@/views/ConponentsWrap.vue'
import ToolList from '@/views/ToolList.vue'
// 路由规则
const routes = [
  {
    path: '/api/enter',
    component: Enter,
    children: [
      { path: '', component: Login },
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  },
  {
    path: '/',
    component: ComponentsWrap,
    children: [
      {
        path: '',
        component: Home,
        children: [
          { path: '', component: AddNode },
          { path: 'add', component: AddNode },
          { path: 'markdown', component: MarkDown },
          { path: 'normal', component: Normal }
        ]
      },
      {
        path: '/api/home',
        component: Home,
        children: [
          { path: '', component: AddNode },
          { path: 'add', component: AddNode },
          { path: 'markdown', component: MarkDown },
          { path: 'normal', component: Normal }
        ]
      },

      {
        path: '/api/nodes',
        component: Nodes,
        children: [
          { path: '', component: NodesHistory },
          { path: 'nodeHistory', component: NodesHistory },
          { path: 'list/:nodeId', component: CurrentNode }
        ]
      },
      {
        path: '/api/tools',
        component: Tools,
        children: [
          {
            path: '',
            component: ToolList,
            children: [
              { path: 'canvas', component: Canvas },
              { path: 'calendar', component: Calendar }
            ]
          }
        ]
      },
      {
        path: '/api/searcher',
        component: Search,
        children: [
          { path: '', component: NoResult },
          { path: 'result', component: SearchResult },
          { path: 'list/nodeId', component: CurrentNode }
        ]
      },
      {
        path: '/api/userInfo',
        component: UserInfo,
        children: [
          { path: '', component: UserInfoList },
          { path: 'list', component: UserInfoList }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
