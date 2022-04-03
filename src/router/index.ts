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
import CurrentInfo from '@/views/CurrentInfo.vue'

// 路由规则
const routes = [
  {
    path: '/',
    name: '主界面',
    component: Home,
    children: [
      { path: '', name: '添加笔记界面', component: AddNode },
      { path: 'add', name: '添加笔记界面', component: AddNode },
      { path: 'markdown', name: '注册', component: MarkDown },
      { path: 'normal', name: '注册', component: Normal }
    ]
  },
  {
    path: '/api/home',
    name: '主界面',
    component: Home,
    children: [
      { path: '', name: '添加笔记界面', component: AddNode },
      { path: 'add', name: '添加笔记界面', component: AddNode },
      { path: 'markdown', name: '注册', component: MarkDown },
      { path: 'normal', name: '注册', component: Normal }
    ]
  },
  {
    path: '/api/enter',
    name: 'enter',
    component: Enter,
    children: [
      { path: '', name: 'login', component: Login },
      { path: 'login', name: '登录', component: Login },
      { path: 'register', name: '注册', component: Register }
    ]
  },
  {
    path: '/api/nodes',
    name: '笔记本历史界面',
    component: Nodes,
    children: [
      { path: '', name: '笔记时间图', component: NodesHistory },
      { path: 'nodeHistory', name: '笔记时间图', component: NodesHistory },
      { path: 'list/nodeId', name: '笔记时间图', component: CurrentNode }
    ]
  },
  {
    path: '/api/tools',
    name: '工具界面',
    component: Nodes,
    children: [
      { path: '', name: '工具界面', component: Tools },
      { path: 'canvas', name: '笔记时间图', component: Canvas },
      { path: 'calendar', name: '笔记时间图', component: Calendar }
    ]
  },
  {
    path: 'api/searcher',
    name: '内容检索界面',
    component: Search,
    children: [
      { path: '', name: '空界面', component: NoResult },
      { path: 'result', name: '有搜索结果页面', component: SearchResult },
      { path: 'result/nodeId', name: '有搜索结果页面', component: CurrentNode }
    ]
  },
  {
    path: '/api/userInfo ',
    name: '内容检索界面',
    component: UserInfo,
    children: [
      { path: 'list', name: '用户信息列表界面', component: UserInfoList },
      {
        path: 'list/:detail',
        name: '具体修改哪一项信息',
        component: CurrentInfo
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
