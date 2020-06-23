<template>
  <div class="account-bg">
     
          <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">我的礼券</p>
                <p class="text">兑换礼券</p>
              </div>               
        </div>
        
        <div class="gift-bg">  
             <div class="gift-bg1">       
             </div>
           <div class="gift-bg2">
               <div class="gift-gift">
                  <p class="gift-text">618 老用户答谢返场券</p>
               <p class="gift-money">￥</p>
               <p class="gift-money1">30</p> 
               </div>
           <p class="gift-text2">实付金额满99可用</p>
           <p class="gift-text2">可以与限时优惠，拼团活动同享</p>
           <p class="gift-text3">使用时间 2020.06.18-2020.06.21</p> 
           </div>
           <div>      
           </div>           
        </div>
        <div class="gift-bg">  
             <div class="gift-bg1">       
             </div>
           <div class="gift-bg2">
               <div class="gift-gift">
                  <p class="gift-text">50元学习鼓励金</p>
               <p class="gift-money1-1">￥</p>
               <p class="gift-money1">50</p> 
               </div>
           <p class="gift-text2">仅限618当日，实付金额满99可用</p>
           <p class="gift-text2">6月上新课程不可用</p>
           <p class="gift-text3">使用时间 2020.06.18-2020.06.18</p> 
           </div>
           <div>      
           </div>           
        </div>

         <div class="gift-bg">  
             <div class="gift-bg1">       
             </div>
           <div class="gift-bg2">
               <div class="gift-gift">
                  <p class="gift-text">40元用户回馈券</p>
               <p class="gift-money1-1">￥</p>
               <p class="gift-money1">40</p> 
               </div>
           <p class="gift-text2">实付金额99立减40元</p>
           <p class="gift-text2">6月上新课程不可用</p>
           <p class="gift-text3">使用时间 2020.06.15-2020.06.17</p> 
           </div>
           <div>      
           </div>           
        </div>
        <div>
            <p class="gift-history">历史礼券 | 礼券说明</p>
        </div>
  </div>
</template>

<script>
export default {

}
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
.text{   
    color: #888888;
    margin-left: 7rem;
    font-size: 10px;
    margin-top: 1.1rem;
}
.gift-bg{
    display: flex;
    margin-top: 1rem;
    
    background-color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
}
.gift-bg1{
    
    margin-left: 0rem;
    
    background-color: #fcdab5;
    width: 0.3rem;
}
.gift-bg2{
   text-align: left;
    margin-left: 1rem;
}
.gift-gift{
    height: 3rem;    
    display: flex;
}
.gift-text{
    font-size: 15px;
   letter-spacing: 1.5px;
}
.gift-money{
    color: #f9af5a;
    font-size: 15px;
    margin-left: 7rem;
}
.gift-money1-1{
    color: #f9af5a;
    font-size: 15px;
    margin-left: 10rem;
}
.gift-money1{
    margin-top: 0.8rem;
    color: #f9af5a;
    font-size: 1.7rem;
}
.gift-text2{
    letter-spacing: 1px;
    margin-top: -0.5rem;
    font-size: 10px;
}
.gift-text3{
    letter-spacing: 1px;
    margin-top: 1rem;
    font-size: 10px;
}
.gift-history{
    margin-top: 17rem;
    font-size: 10px;
    color: #f9af5a;
}
.xian{
    margin-left: 1rem;
}
</style>