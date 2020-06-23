<template>
  <div>
       <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">我的课程</p>
              <img class="invite-image" src="../../assets/my/play/image16.png" alt="">
              </div>  
            <van-tabs v-model="active" line-width="50px"
            :color="'#fa8818'" 
            title-inactive-color="#d2d2d2"
          title-active-color="#3d3d3d">
  <van-tab title="消费订单">无</van-tab>
  <van-tab title="充值订单">
      <div  class="my-order-bg">
        <div class="order-info-bg">  
      </div>

      <router-link to="orderdetail">
         <div class="order-info-bg1">
        <p class="order-text1">订单编号: 10796375519204096194</p>  
      <div class="xian">
          <van-divider :style="{ borderColor: '#dbdbdb' }" />
        </div>
       
        <div class="invite-bg">
        <img class="invite-image1" src="../../assets/my/play/image17.png" alt="">
           <div class="money-bg">
               <p>充值（6）</p>
               <div class="app-bg">
                 <p class="App">App</p>
                 <p class="money1">实付金额</p>
                 <p class="money2">￥ 6.00</p>
               </div>         
           </div>
        </div>
      </div>   
      </router-link>
    
      
  </div> 
   

  </van-tab>
 
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
.account-top{
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
.invite-image{
    margin-top: 1rem;
    margin-left: 8rem;
    height: 25px;
}
.my-order-bg{
    height: 100vh;
    width: 100vw;
     background-color:#f8f8f8 ;  
}
.order-info-bg1{
    height: 11rem;
    margin-top: 1rem;
    background-color: #ffffff;
}
.order-info-bg{
    height: 1rem;
    background-color: #f8f8f8;
}
.order-text1{
    padding-top: 1rem;
    margin-left: -12rem;
    font-size: 12px;
    color: #888888;
}
.xian{  
    margin-top: 0rem;
    margin-left: 0.8rem;
}
.invite-image1{
    margin-left: 1rem;
    height: 6rem;
}
.invite-bg{
    display: flex;
}
.money-bg{
    text-align: left;
    letter-spacing: 2px;
    margin-left: 1rem;
    font-weight: 600;
}
.App{
    margin-top: 2rem;
    font-size: 10px;
    color: #b2b2b2;
}
.app-bg{
    display: flex;
}
.money1{
     margin-top: 2rem;
    margin-left: 8rem;
     font-size: 10px;
    color: #b2b2b2; 
}
.money2{
     margin-top: 1.7rem;
    margin-left: 0.8rem;
    color:#e88d34 ;
    font-size: 15px;
}
</style>