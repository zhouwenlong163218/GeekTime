<template>
  <div class="order-bg">
          <div class="account-top">
              <div class="account-top1">
              <router-link to="myorder">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">订单详情</p>           
              </div>               
        </div>
        <div class="orderdetail-bg">
          <div class="invite-bg">
           <img class="invite-image1" src="../../assets/my/play/image17.png" alt="">
           <div class="money-bg">
               <p>充值（6）</p>
               <div class="app-bg">
                 <p class="App">App</p>
               </div>         
           </div>
        </div>
         <div class="xian">
          <van-divider :style="{ borderColor: '#dbdbdb' }" />
        </div>
      <div class="money-text">
          <p class="text1">总金额</p>
          <p class="text2">￥ 6.00</p>
      </div>
       <div class="money-text">
          <p class="money1">实付金额</p>
         <p class="money2">￥ 6.00</p>
      </div>
        </div>
       <div   class="orderdetail-bg2">
           <div class="orderdetail-bg3">
               <div class="orderdetail-bg4">
               </div>
             <p class="text3">订单信息</p>
           </div>
           <div class="orderdetail-bg5">
               <div class="text4-bg">
                <p class="text4">订单状态：</p>
               </div>
               <div class="text5-bg">
                 <p>已完成</p>
               </div>      
           </div>
               <div class="orderdetail-bg5">
               <div class="text4-bg">
                <p class="text4">订单编号：</p>
               </div>
               <div class="text6-bg">
                 <p >10796375519204096143</p>
               </div>      
              </div>

              <div class="orderdetail-bg5">
               <div class="text4-bg">
                <p class="text4">支付方法：</p>
               </div>
               <div class="text5-bg">
                 <p>微信</p>
               </div>      
           </div>
         
           <div class="orderdetail-bg5">
               <div class="text4-bg">
                <p class="text4">订单完成时间：</p>
               </div>
               <div class="text6-bg">
                 <p>2020年06月21日22:45:54</p>
               </div>      
           </div>
           <div class="orderdetail-bg5">
               <div class="text4-bg">
                <p class="text4">发票状态：</p>
               </div>
               <div class="text5-bg">
                 <p>不可开</p>
               </div>      
           </div>
       </div>
       <p class="text7">如需开具发票请关注极客时间微信服务号（微信号:jikeshijian）</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.order-bg{
    background-color: #f7f7f7;
    width: 100vw;
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
.invite-image1{
    margin-top: 1rem;
    margin-left: 1rem;
    height: 6rem;
}
.orderdetail-bg{
    background-color: #ffffff;
    
    margin-top: 1rem;    
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
.xian{  
    margin-top: 01rem;
    margin-left: 0.8rem;
}
.money-text{
    margin-left: 1rem;
    display: flex;
}
.text1{
    margin-top: 0rem;
    color: #888888;
    font-size: 13px;
}
.text2{
    margin-left: 18rem;
    margin-top: 0rem;
    color: #888888;
    font-size: 13px;
}
.money1{
     margin-top: 0.5rem;
    margin-left: 15.5rem;
     font-size: 15px;
   
}
.money2{
     margin-top: 0.5rem;
    margin-left: 0.8rem;
    color:#e88d34 ;
    font-size: 15px;
}
.orderdetail-bg2{
margin-top: 1rem;
background-color: #ffffff;
}
.orderdetail-bg3{
    display: flex;
}
.orderdetail-bg4{
    border-radius: 10px;
    width: 5px;
    height: 20px;
    background-color: #fb8919;
}
.text3{
    margin-left: 10px;
    font-size: 15px;
    margin-top: 0rem;
}
.orderdetail-bg5{
display: flex;
margin-left: 15px;
}
.text4{
    color: #898989;
    font-size: 11px;
}
.text4-bg{
    letter-spacing: 2px;
    text-align: left;
    width: 120px;
}
.text5-bg{
    margin-left: 5px;
    letter-spacing: 2px;
    color: #898989;
    font-size: 11px;
}
.text6-bg{
    margin-left: 5px;
    color: #898989;
    font-size: 11px;
}
.text7{
     letter-spacing: 1px;
    margin-top:0.5rem ;
    margin-left: -5rem;
   color: #898989;
    font-size: 10px; 
}
</style>