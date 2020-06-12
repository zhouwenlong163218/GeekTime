import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/home/Layout.vue";

Vue.use(VueRouter);

const routes = [
/*   {
    path:'/find',
    name:'Find',
    component: () => import('../views/home/Find.vue'),
  }, */
/*   {
    path:'/study',
    name:'Study',
    component: () => import('../views/home/Study.vue'),
  }, */
 /*    {
    path:'/layout',
    name:'Study',
    component: () => import('../views/home/Layout.vue'),
  }, */
      {
    path:'/myinformation',
    name:'Myinformation',
    component: () => import('../views/my/MyInformation.vue'),
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
        component: () => import('../views/home/Tribe.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
