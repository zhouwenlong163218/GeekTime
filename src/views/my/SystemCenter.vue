<template>
  <div class="system-background">
      <div class="system-background1">
           <div class="message-top">
            <router-link to="messagecenter">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">
            </router-link>
                 
              <p class="message-top-text">消息中心</p>   
               
        </div> 
      </div>
      <p class="system-time">3小时</p>
      <div class="system-info">
        <div class="system-info1">
            <p>礼券过期提醒</p>
            <p class="system-info2">你有1张价值10元得礼券将于今晚24点过期，请尽快使用</p>
        </div>
        <van-divider  :style="{ color: '#dbdbdb' }" />
        
        <div class="see-right0">
            <p class="see">查看详情</p>
            <img class="see-right" src="../../assets/img/right.png" alt="">
        </div>
      </div>
       <p class="system-time">3小时</p>
      <div class="system-info">
        <div class="system-info1">
            <p>礼券过期提醒</p>
            <p class="system-info2">你有1张价值10元得礼券将于今晚24点过期，请尽快使用</p>
        </div>
        <van-divider  :style="{ color: '#dbdbdb' }" />
        
        <div class="see-right0">
            <p class="see">查看详情</p>
            <img class="see-right" src="../../assets/img/right.png" alt="">
        </div>
      </div>
       <p class="system-time">6小时</p>
      <div class="system-info">
        <div class="system-info1">
            <p>礼券过期提醒</p>
            <p class="system-info2">你有1张价值10元得礼券将于今晚24点过期，请尽快使用</p>
        </div>
        <van-divider  :style="{ color: '#dbdbdb' }" />
        
        <div class="see-right0">
            <p class="see">查看详情</p>
            <img class="see-right" src="../../assets/img/right.png" alt="">
        </div>
      </div>
       <p class="system-time">昨天 12：04</p>
      <div class="system-info">
        <div class="system-info1">
            <p>礼券过期提醒</p>
            <p class="system-info2">恭喜获得价值50元礼券1张，50元学习鼓励金，4天后生效，
                请注意查看
            </p>
        </div>
        <van-divider  :style="{ color: '#dbdbdb' }" />
        
        <div class="see-right0">
            <p class="see">查看详情</p>
            <img class="see-right" src="../../assets/img/right.png" alt="">
        </div>
        
      </div>
       <div class="margin-button">

       </div>
          
      
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.system-background{
    
     height: 100%;
    width: 100vw;
    background-color: #f8f8f8;
   
}
.system-background1{
   
    background-color: #ffffff;
}
.message-top{
   
    margin-left: 1.5rem;
    display: flex;
}
.message-top-text{
    font-weight: 500;
    font-size: 18px;
   margin-top: 1rem;
    margin-left: 8rem;
}
.left-image{
    margin-top: 1rem;
    height: 1.5rem;
}
.system-time{
    margin-top: 1rem;
    margin-left: 0rem;
    color: #959595;
    font-size: 13px;
}
.system-info{
    text-align: left;
    height: 10rem;
    background-color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
}
.system-info1{
    padding-top: 0.1rem;
    margin-left: 1.2rem;
    margin-right: 1rem;
}
.system-info2{
    letter-spacing:2px;
    color: #959595;
    font-size: 15px;
}
.see{
    font-size: 15px;
    color: #898989;
    margin-left: 17.5rem;
    margin-top: -0.3rem;
    
}
.see-right{
    height: 16px;
    margin-left: 0.5rem;  
}
.see-right0{
    margin-top: 1rem;
    margin-left: 0.5rem;
   display: flex;
}
.margin{
    margin-top: 1rem;
}
.margin-button{
    height: 2rem;
   background-color: #f8f8f8;
}
</style>