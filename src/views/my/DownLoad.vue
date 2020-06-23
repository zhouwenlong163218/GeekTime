<template>
  <div>
      <div class="down-bg">
          <router-link to="study">
          <img class="top-right" src="../../assets/my/gift/right.png" alt=""> 
          </router-link>
   
     <p class="text1">已下载</p>
     <p class="text2">下载中</p>
        <img class="invite-image" src="../../assets/my/play/image13.png" alt="">
      </div>
      <div class="down-bg1">
        <van-tabs v-model="active"   line-width="15px"
         title-inactive-color="#d2d2d2"
          title-active-color="#3d3d3d"
          :active="active"  :color="'#fa8818'">
        <van-tab title="全部">
            <div class="down-bg2">
            <p class="text3">专栏</p>
            <div class="down-bg3">
              <img class="invite-image1" src="../../assets/my/play/image14.png" alt="">
              <div class="down-bg4">
                  <p class="text4">重学前端</p>
                  <p class="text5">已更新58个 | 已下载1个</p>
              </div>
               <img class="text5-image" src="../../assets/my/play/image30.png" alt="">
            </div>
            </div>
        </van-tab>
        <van-tab title="专栏">
                <div class="down-bg2">
           
            <div class="down-bg3">
              <img class="invite-image1" src="../../assets/my/play/image14.png" alt="">
              <div class="down-bg4">
                  <p class="text4">重学前端</p>
                  <p class="text5">已更新58个 | 已下载1个</p>
              </div>
               <img class="text5-image" src="../../assets/my/play/image30.png" alt="">
            </div>
            </div></van-tab>       
</van-tabs>  
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style>
.down-bg{
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
}
.top-right{
    height: 25px;
    margin-top: 0.5rem;
    margin-left: 1rem;
}
.text1{
    letter-spacing: 2px;
    margin-top: 0.3rem;
    font-size: 20px;
    margin-left: 4rem;
    font-weight: 700;
}
.text2{
    letter-spacing: 2px;

    margin-top: 0.5rem;
    margin-left: 3rem;
    color: #b4b4b4;
    font-size: 15px;
}
.invite-image{
    margin-top: 0.5rem;
    margin-left: 6rem;
    height: 25px;
}
.down-bg1{
    width: 10rem;
}
.down-bg2{
    text-align: left;
    margin-left: 1rem;
    width: 100vw;
}
.text3{
    letter-spacing: 2px;
  font-size: 17px;
  font-weight: 700;
}
.down-bg3{
    display: flex;
}
.invite-image1{    
    height: 4rem;
}
.down-bg4{
    margin-left: 1rem;
    text-align: left;
}
.text4{
    margin-top: 0.3REM;
    letter-spacing: 2px;
    font-weight: 1000;
    font-size: 16px; 
}
.text5{
    font-size: 10px;
    letter-spacing: 2px;
    color: #888888;
}
.text5-image{
    height: 15px;
    margin-left: 10rem;
    margin-top: 1.5rem;
}
</style>