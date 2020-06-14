<template>
<div >
      <router-view />
     <van-tabbar  active-color="#fa8818" v-model="active">
  <van-tabbar-item to="find" icon="home-o">发现</van-tabbar-item>
  <van-tabbar-item to="class" icon="search">讲堂</van-tabbar-item>
  <van-tabbar-item to="tribe" icon="friends-o">部落</van-tabbar-item>
  <van-tabbar-item to="study" icon="setting-o">学习</van-tabbar-item>
  <van-tabbar-item to="me" icon="setting-o">我的</van-tabbar-item>
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