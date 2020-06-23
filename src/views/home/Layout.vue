<template>
<div >
      <router-view />
     <van-tabbar  active-color="#fa8818" v-model="active">
  <van-tabbar-item to="find" icon="browsing-history-o">发现</van-tabbar-item>
  <van-tabbar-item to="class" icon="friends-o">讲堂</van-tabbar-item>
  <van-tabbar-item to="tribe" icon="fire-o">部落</van-tabbar-item>
  <van-tabbar-item to="study" icon="notes-o">学习</van-tabbar-item>
  <van-tabbar-item to="me" icon="user-circle-o">我的</van-tabbar-item>
</van-tabbar> 
</div>

</template>

<script>
export default {
 data() {
    return {
      active: 0,
    };
  },
} 
</script>

<style>

</style>