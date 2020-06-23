<template>
  <div class="account-bg">
     
          <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">推送设置</p>      
              </div>               
        </div>
        <div class="account-top1">
            <p class="text1">接受新消息</p>
            <p class="text1-1">已开启</p>
        </div>
        <div class="push-bg">
        <p>更改通知样式，请在设备的“设置” - “通知” - “极客时间”进行修改</p>
        </div>
            <div class="account-top1">
            <p class="text1">内容上新及活动通知</p>
            <div class="push-bg2">
              <van-switch v-model="checked" active-color="#07c160" size="30px" />   
            </div>  
        </div>
         <div class="push-bg">
        <p>新课上架，限时优惠、热点活动等通知</p>
        </div>

          <div class="account-top1">
            <p class="text1">课程更新提醒</p>
            <div class="push-bg2-1">
              <van-switch v-model="checked1" active-color="#07c160" size="30px" />   
            </div>  
        </div>
        <div class="push-bg">
        <p>已购课程更新了内容的通知</p>
        </div>
         <div class="account-top1">
            <p class="text1">学习助手</p>
            <div class="push-bg2-2">
              <van-switch v-model="checked2" active-color="#07c160" size="30px" />   
            </div>  
        </div>
       <div class="push-bg">
        <p>学习提醒，学习统计等通知</p>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
    };
  },
};
</script>

<style>
.account-bg{
    width: 100vw;
    background-color: #f5f5f5;
    height: 100vh;
}
.account-top{
display: flex;
background-color: #ffffff;

}
.account-top1{
    display: flex;
}
.top-right{
    margin-top: 0.5rem;
    margin-left: 1rem;
}
.top-text{
    margin-top: 0.8rem;
    margin-left: 130px;
    font-weight: 700;
}
.account-top1{
    letter-spacing: 2px;
margin-top: 0.5rem;
display: flex;
background-color: #ffffff;

}
.text1{
    margin-left: 1rem;
}
.text1-1{
    margin-left: 15rem;
}
.push-bg{
    text-align: left;
    letter-spacing: 2px;
    font-size: 12px;
    color: #a1a1a1;
    margin-left: 1rem;
    margin-right: 4rem;
}
.push-bg2{
    margin-top: 0.8rem;
    margin-left: 10rem;
}
.push-bg2-1{
    margin-top: 0.8rem;
    margin-left: 13.3rem;
}
.push-bg2-2{
    margin-top: 0.8rem;
    margin-left: 15.5rem;
}
</style>