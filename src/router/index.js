import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/home/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/test',
    name:'test',
    title:'测试',
    component: () => import('../views/my/Test.vue'),
  },
  {
    path:'/personalhomepage',
    name:'PersonalHomepage',
    title:'个人主页',
    component: () => import('../views/my/PersonalHomepage.vue'),
  },
  {
    path:'/pushsetting',
    name:'PushSetting',
    title:'推送设置',
    component: () => import('../views/my/PushSetting.vue'),
  },
  {
    path:'/download',
    name:'DownLoad',
    title:'下载',
    component: () => import('../views/my/DownLoad.vue'),
  },
  {
    path:'/follow',
    name:'Follow',
    title:'关注',
    component: () => import('../views/my/Follow.vue'),
  },
  {
    path:'/shop',
    name:'Shop',
    title:'商店',
    component: () => import('../views/my/Shop.vue'),
  },
  {
    path:'/settldesk',
    name:'settldesk',
    title:'测试',
    component: () => import('../views/my/SettlDesk.vue'),
  },
  
  {
    path:'/myinformation',
    name:'Myinformation',
    component: () => import('../views/my/MyInformation.vue'),
  },
  {
    path:'/account',
    name:'Account',
    title:'账户',
    component: () => import('../views/my/Account.vue'),
  },
  {
    path:'/messagecenter',
    name:'Message',
    titlt:'消息中心',
    component: () => import('../views/my/MessageCenter.vue'),
  },
  {
    path:'/learningassistance',
    name:'LearningAssistance',
    titlt:'学习助手',
    component: () => import('../views/my/LearningAssistance.vue'),
  },
  {
    path:'/gift',
    name:'Gift',
    titlt:'礼券',
    component: () => import('../views/my/Gift.vue'),
  },
  {
    path:'/learningtrajectory',
    name:'LearningTrajectory',
    titlt:'我的学习/学习轨迹',
    component: () => import('../views/my/LearningTrajectory.vue'),
  },
  {
    path:'/invite',
    name:'Invite',
    titlt:'邀请好友',
    component: () => import('../views/my/InviteFriend.vue'),
  },
  {
    path:'/invitecored',
    name:'Invitecored',
    titlt:'邀请好友记录',
    component: () => import('../views/my/InviteCored.vue'),
  },
  {
    path:'/mylesson',
    name:'MyLesson',
    titlt:'我的课程',
    component: () => import('../views/my/MyLesson.vue'),
  },
  {
    path:'/moneyCenter',
    name:'MoneyCenter',
    titlt:'兑换中心',
    component: () => import('../views/my/MoneyCenter.vue'),
  },
  {
    path:'/play',
    name:'Play',
    titlt:'邀请好友',
    component: () => import('../views/my/Play.vue'),
  },
  {
    path:'/myorder',
    name:'MyOrder',
    titlt:'我的订单',
    component: () => import('../views/my/MyOrder.vue'),
  },
  {
    path:'/orderdetail',
    name:'ordertail',
    titlt:'订单详情',
    component: () => import('../views/my/OrderDetail.vue'),
  },
  {
    path:'/learningfeedback',
    name:'LarningFeedback',
    titlt:'反馈问题',
    component: () => import('../views/my/LearningFeedback.vue'),
  },
  {
    path:'/learningassistance',
    name:'LarningAssistance',
    titlt:'',
    component: () => import('../views/my/LearningAssistance.vue'),
  },
  {
    path:'/recharge',
    name:'Recharge',
    titlt:'充值VIP',
    component: () => import('../views/my/Recharge.vue'),
  },
  {
    path:'/daylesson',
    name:'DayLesson',
    titlt:'我的每日一课',
    component: () => import('../views/my/DayLesson.vue'),
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
