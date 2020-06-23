<template>
  <div>
      <div class="message-title">
        <div class="message-top">
            <router-link to="me">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">
            </router-link>
                 
              <p class="message-top-text">消息中心</p>   
                <img class="tongji" src="../../assets/img/统计.png" alt="">
        </div>
        <div class="message-divider">
               <van-divider :style="{borderColor: '#bfbfbf'}" />
        </div>
        <router-link to="systemcenter">
               <div class="message-image1">
            <img class="message-tongzhi" src="../../assets/message/系统通知.png" alt="">
            <div class="message-text-back">
                <div class="mesage-texte-backgruond">
                   <p>系统通知</p> 
                   <p class="message-text1">2020/06/14</p>
                </div>
                
                <p class="message-text">你有1张价值10元的礼券将于今晚24点过期...</p>
            </div>
        </div>
        </router-link>
     
        <div class="xian">
           <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 
          <div class="message-image1">
            <img class="message-tongzhi" src="../../assets/message/活动公告.png" alt="">
            <div class="message-text-back">
                <div class="mesage-texte-backgruond">
                   <p>活动公告</p> 
                   <p class="message-text1">2020/06/14</p>
                </div>
                
                <p class="message-text">跳槽大厂第一步，杨波带你搞定分布式系...</p>
            </div>
        </div>
        <div class="xian">
           <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 
          <router-link to="learningassistance">
             <div class="message-image1">
            <img class="message-tongzhi" src="../../assets/message/学习助手.png" alt="">
            <div class="message-text-back">
                <div class="mesage-texte-backgruond">
                   <p>学习助手</p> 
                   <p class="message-text1">2020/06/18</p>
                </div>
                
                <p class="message-text">你的学习周报已出炉，2020年6月1日至7日</p>
            </div>
        </div>
        <div class="xian">
           <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 
          </router-link>
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.message-title{
    
    margin-top: 1rem;
   
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
.tongji{
    margin-top: 1rem;
    margin-left: 7rem;
    height: 1.5rem;
}
.message-divider{
    margin-top: -1rem;
}
.message-image1{
    margin-left: 1.5rem;
    display: flex;
}
.message-tongzhi{
    height: 4rem;
}
.message-text-back{
    margin-top: -0.5rem;
    margin-left: 1.5rem;
    text-align: left;
}
.mesage-texte-backgruond{
    display: flex;
}
.message-text{
    color: #aaaaaa;
    margin-top: -0.5rem;
    font-size: 14px;
}
.message-text1{
    margin-left: 9rem;
    margin-top: 1.2rem;
    color: #aaaaaa;
    font-size: 13px;
}
.xian{  
    margin-top: -0.5rem;
    margin-left: 1.5rem;
}

</style>