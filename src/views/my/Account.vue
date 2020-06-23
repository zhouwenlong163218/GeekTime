<template>
  <div class="account-bg">
    <div class="account-top">
            <router-link to="me">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">
            </router-link>              
              <p class="message-top-text">账户</p>  
              <router-link to="moneycenter">
                 <p class="account-text1">兑换入口</p>
                </router-link> 
              
        </div>
        <div>
            <div class="balance-bg">
            <img class="account2" src="../../assets/my/account/account2.png" alt="">
            <p class="account-balance-text">0.00</p>
        </div> 
        <div>
            <p class="coin-increase">充值币 0.00 | 增币 0.00</p>
        </div> 
        <div>
            <p class="coin-increase1">查看明细</p>
        </div>
        </div>
       
        <div>
           <img  class="account-image" src="../../assets/my/account/account1.png" alt="">  
        </div>
        <van-divider  :style="{ color: '#dbdbdb' }" />
        <div class="account-text2-bg">
            <p class="account-text2">充值</p>
            <p class="account-text3">（充值金额仅限 Android 系统使用）</p>
        </div>
        <div>
         <div class="account-bg6">
          <div class="account-bg6-co-1"  >
         <div class="account-image2-bg" >
           <img class="account-image2" src="../../assets/my/account/account4.png" alt="">        
           <p class="account-text-6-1">6</p>
         </div>   
           <p class="zimu1">￥ 6</p>  

         </div>     
         
            <div class="account-bg6-co1" >
        <div class="account-image2-bg" >
           <img class="account-image2" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">12</p>
         </div>   
           <p class="zimu">￥ 12</p>  
           
         </div>   
           
            <div class="account-bg6-co1"   >
         <div class="account-image2-bg" >
           <img class="account-image2" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">68</p>
         </div>   
           <p class="zimu">￥ 68</p>  
           
         </div> 
    </div>

    <div class="account-bg61">
          <div class="account-bg6-co"  >
         <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">108</p>
         </div>   
           <p class="zimu">￥ 108</p>  

         </div>     
         
            <div class="account-bg6-co1" >
        <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">218</p>
         </div>   
           <p class="zimu">￥ 218</p>  
           
         </div>   
           
            <div class="account-bg6-co1"   >
         <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">318</p>
         </div>   
           <p class="zimu">￥ 318</p>  
           
         </div> 
    </div>

   <div class="account-bg61">
          <div class="account-bg6-co"  >
         <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">418</p>
         </div>   
           <p class="zimu">￥ 418</p>  

         </div>     
         
            <div class="account-bg6-co1" >
        <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">648</p>
         </div>   
           <p class="zimu">￥ 648</p>  
           
         </div>   
           
            <div class="account-bg6-co1"   >
         <div class="account-image2-bg" >
           <img class="account-image2-1" src="../../assets/my/account/account3.png" alt="">        
           <p class="account-text-6">998</p>
         </div>   
           <p class="zimu">￥ 998</p>  
           
         </div> 
    </div>
       <div class="buttuon">
         <van-button type="primary" color="#fb8919" block>确认充值</van-button>
       </div>
        </div> 
        <div class="recharge-description">
          <p class="account-text2">充值说明</p>
          <p class="account-text9">1.因苹果政策，充值金额不支持跨越平台使用;</p>
          <p class="account-text9">2.充值金额不会过期，不支持退款、提现或转增其他人;</p>
          <span class="account-text9">3.充值如遇到问题，请关注</span>
          <span class="account-text8">【极客时间】</span>
          <span class="account-text9">微信服务号,</span>
          <p class="account-text9-1">   向我们反馈你的问题，我们会为你解决。</p>
          </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.account-bg{

 text-align: left;
 margin-left: 0.8rem;
 margin-right: 0.8rem;
}
.account-top{
    margin-top: 1rem;
display: flex;
}
.message-top{
    margin-left: 1.5rem;
   display: flex;
}
.message-top-text{
    font-weight: 700;
    font-size: 18px;
   margin-top: 0rem;
    margin-left: 10rem;
}
.account-text1{
    margin-top: 0.3rem;
    color: #888888;
    font-size: 13px;
    margin-left: 6rem;
}
.balance-bg{
 margin-top: 1.5rem;
 display: flex;   
}
.account2{
    margin-left: 10rem;
    height: 1.5rem;
}
.account-image{
    width: 100%;
}
.account-balance-text{
    margin-left: 0.5rem;
    margin-top: -0.4rem;
    font-size: 30px;
}
.coin-increase{
    letter-spacing: 1px;
    margin-top: -2rem;
    margin-left: 8rem;
  color: #bdbdbd;
    font-size: 13px;  
}
.coin-increase1{
    letter-spacing: 1px;
    margin-top: 0.5rem;
    margin-left: 11.5rem;
   color: #888888;
    font-size: 13px;  
}
.account-text2-bg{
    display: flex;
}
.account-text2{
   font-weight: 700;
    font-size: 18px;
    
}
.account-text3{
margin-left: 0.2rem;
color: #bdbdbd;
font-size: 13px;
margin-top: 1.3rem; 
letter-spacing: 1px;
}
.account-bg3{
    widows: 5rem;
    height: 3rem;
}
.account-bg6{
 display: flex;
}
.account-bg6-co{
  text-align: center;
  margin-left: 0rem;
  border-radius: 5px;
  background-color: #f6f7fb;
  width: 7rem;
  height: 4rem;
}
.account-bg6-co-1{
  text-align: center;
  margin-left: 0rem;
  border-radius: 5px;
  background-color: #fb8919;
  width: 7rem;
  height: 4rem;
}
.account-image2-bg{
  display: flex;
   margin-top: 0.6rem;
}
.account-image2-bg1{
  display: flex;
   margin-top: 0.6rem;
}
.account-image2{
  margin-left: 2.4rem;
  height: 1.5rem;
}

.account-image2-1{
  margin-left: 1.8rem;
  height: 1.5rem;
}
.account-text-6{
  margin-top: 0rem ;
  font-size: 20px;
}
.account-text-6-1{
  color: #ffffff;
  margin-top: 0rem ;
  font-size: 20px;
}
.zimu{
  font-size: 13px;
  margin-top: -1rem;
  margin-left: 0rem;
}
.zimu1{
  color: #ffffff;
  font-size: 13px;
  margin-top: -1rem;
  margin-left: 0rem;
}
.account-bg6-co1{
  text-align: center;
  margin-left: 1.3rem;
  border-radius: 5px;
  background-color: #f6f7fb;
  width: 7rem;
  height: 4rem;
}
.account-bg61{
 display: flex;
 margin-top: 1.3rem;
}
.buttuon{
  margin-top: 2rem;
}
.recharge-description{
  text-align: left;
}
.account-text9{
  font-size: 14px;
  color: #8c8c8c;
}
.account-text8{
  font-weight: 700;
}
.account-text9-1{
  margin-bottom: 3rem;
  margin-top: -0.0rem;
  margin-left: 11px;
  font-size: 14px;
  color: #8c8c8c;
}
</style> 