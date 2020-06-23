<template>
  <div class="invite-bg">
      <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">邀请好友赢礼券</p>
                <router-link to="invitecored">
                     <p class="text">邀请记录</p>
                </router-link>
               
              </div>                
        </div>
        <div class="invite-text-bg">
            <div class="invite-text-bg1">
            <span class="invite-text">邀请好友</span>
            <span class="invite-text1">赢礼券</span>   
            </div>
           <div class="invite-text-bg2">
               <span>成功邀请好友注册，你可获得得</span>
               <span class="color">30元</span>
               <span>礼券</span>
           </div>
           <div class="invite-text-bg3">
               <span>好友可得</span>
               <span class="color">35元</span>
               <span>新人礼包</span>
           </div>
           <img class="invite-image" src="../../assets/my/gift/image6.png" alt="">
           <div class="invite-button">
               <p class="invite-button-text">一键邀请</p>
           </div>
           <div class="color1">
                 <span  >查看细则></span>
           </div>
         
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.invite-bg{
    height: 100vh;
    width: 100vw;
    background-color: #fdfaf3;
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
    margin-left: 100px;
    font-weight: 700;
}
.text{
    
    color: #888888;
    margin-left: 6.5rem;
    font-size: 10px;
    margin-top: 1.1rem;
}
.invite-text-bg{
    
    margin-top: 3rem;
}
.invite-text-bg1{
    letter-spacing: 3px;
}
.invite-text{
    font-size: 2.3rem;
}
.invite-text1{
    font-size: 2.3rem;
    color: #fc9126;
}
.invite-text-bg2{
    margin-top: 1rem;
  letter-spacing: 1px;  
}
.color{
  color: #fc9126;   
}
.invite-text-bg3{
    margin-top: 0.5rem;
  letter-spacing: 1px;  
}
.invite-image{
    margin-top: 2rem;
}
.invite-button{
    text-align: center;
    border-radius: 5px;
    background-color: #fa8818;
    margin-right: 1rem;
    margin-left: 1rem;
    height: 3.5rem;
}
.invite-button-text{
    padding-top: 1rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #ffffff;
}
.color1{
    margin-top: 1rem;
  color: #fc9126;   
}
</style>