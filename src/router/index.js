import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/home/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/myinformation',
    name:'Myinformation',
    component: () => import('../views/my/MyInformation.vue'),
  },
  {
    path:'/messagecenter',
    name:'Message',
    titlt:'消息中心',
    component: () => import('../views/my/MessageCenter.vue'),
  },
  {
    path:'/systemcenter',
    name:'System',
    titlt:'系统通知',
    component: () => import('../views/my/SystemCenter.vue'),
  },
  {
    path:'/search',
    name:'Search',
    title:'历史搜索',
    component:() =>import('../views/search/Search.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    meta: { title: '发现主页' },
    component: Layout,
    redirect: 'find',
    children: [
      {
        path:'/find',
        name:'Find',
        title:'发现',
        component: () => import('../views/home/Find.vue'),
      },
      {
        path:'/study',
        name:'Study',
        title:'学习',
        component: () => import('../views/home/Study.vue'),
      },
      {
        path:'/tribe',
        name:'tribe',
        title:'部落',
        component: () => import('../views/home/Tribe.vue'),
      },
      {
        path:'/class',
        name:'class',
        title:'讲堂',
        component: () => import('../views/home/Class.vue'),
      },
      {
        path:'/me',
        name:'me',
        title:'我的',
        component: () => import('../views/home/Me.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
