<template>
  <div>
      <div>
          <div class="account-top">  
              <router-link  to="invite">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">  
               <img  class="cha" src="../../assets/my/daylesson/image6.png" alt=""> 
                </router-link>                          
              <p class="message-top-text">邀请记录</p>            
            </div>
            <div class="invite-bg">
            <img class="invite-image" src="../../assets/my/gift/image12.png" alt="">
           
            <div class="invite-text">
               <span>你一共邀请了</span> 
               <span class="zero">0</span>
               <span>位好友加入极客时间，</span> 
            </div>
            <div class="invite-text">
                <span>共获得</span>
                <span class="zero">0</span>
                <span>元礼券奖励！</span>
            </div>
            </div>
           
           

 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.account-top{
  margin-top: 1rem;
  display: flex;
}
.cha{
  margin-left: 1rem;
  height: 1.5rem;
}
.left-image{
  height: 1.5rem;
  margin-left: 0.8rem;
}
.message-top-text{
  margin-top: 0rem;
  font-weight: 700;
  margin-left: 7rem;
}
.invite-bg{
   background-color: #fcf9f2; 
   width: 100vw;
   height: 15rem;
}
.invite-image{
    margin-top: 1.5rem;
    height: 8.5rem;
    margin-left: 0.rem;  
}
.invite-text{
    margin-top: 0.5rem;
    font-size: 18px;
    letter-spacing: 1px;
}
.zero{
   color: #fb8919; 
}
</style>