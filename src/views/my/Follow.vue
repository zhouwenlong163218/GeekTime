<template>
  <div>
        <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
              <div class="follow-bg">
                 <van-tabs v-model="active">
             <van-tab title="关注">
                  <div class="follow-bg1">
                     <img class="image6" src="../../assets/home/image6.png" alt="">
                     <p class="text12">暂无关注你的人</p>  
                  </div>

             </van-tab>
             <van-tab title="正在关注">
                 <div class="follow-bg1">
                    <div class="follow-bg2">
                        <p class="text1">正在关注3人</p>
                    </div>
                 </div>
                 <div>
                     <div class="follow-bg3">
                          <van-image round width="3rem"  height="3rem"
                        :src="require('../../assets/home/image3.png')"/>
                        <div class="text2-bg">
                         <p class="text2">池建强</p>
                         <p class="text3">极客时间创始人</p>                        
                     </div>
                     <div class="follow-bg4"> 
                         <p class="text4">已关注</p>
                     </div>
                     </div>

                     <div class="follow-bg3">
                          <van-image round width="3rem"  height="3rem"
                        :src="require('../../assets/home/image4.png')"/>
                        <div class="text2-bg">
                         <p class="text2">盘眬</p>
                         <p class="text3">人类向往光明，却用尽了黑暗的手段</p>                        
                     </div>
                     <div class="follow-bg4"> 
                         <p class="text4">已关注</p>
                     </div>
                     </div>
                     
                     <div class="follow-bg3">
                          <van-image round width="3rem"  height="3rem"
                        :src="require('../../assets/home/image5.png')"/>
                        <div class="text2-bg">
                         <p class="text2-1">冰激凌化了吗</p>
                                             
                     </div>
                     <div class="follow-bg4"> 
                         <p class="text4">已关注</p>
                     </div>
                     </div>
                 </div>
             </van-tab>
  
</van-tabs>
              </div>
              </div>               
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
    display: flex;

}
.account-top1{
    display: flex;
}
.top-right{
    margin-top: 0.5rem;
    margin-left: 1rem;
}
.follow-bg{
    width: 20rem;
    margin-left: 1rem;  
}
.follow-bg1{
    margin-left: -3.5rem;
    
    width: 100vw;
}
.follow-bg2{
    letter-spacing: 2px;
    font-size: 15px;
    padding-top: 0.3rem;
    text-align: left;
    height: 3rem;
   background-color: #f5f6fa;  
} 
.text1{
margin-left: 1rem;
}
.follow-bg3{
    margin-left: -3rem;
    text-align: left;
    margin-top: 1rem;
    display: flex; 
}
.text2-bg{
    width: 17rem;
   
}
.text2{
    margin-left: 1rem;
    margin-top: 0rem;
}
.text3{
     margin-left: 1rem;
    margin-top: -.5rem;
    font-size: 13px;
    color: #878787;
}
.follow-bg4{
    border-radius: 20px;
    background-color: #fcf5ed; 
    margin-top: 0.5rem;
    height: 30px;
    width: 70px;
}
.text4{
    margin-top: 7px;
    margin-left: 15px;
    color: #f98a1e;
    letter-spacing: 1px;
    font-size: 12px;
}
.text2-1{
    margin-left: 1rem;
    margin-top: 0.7rem;
}
.image6{
    margin-top: 10rem;
}
.text12{
    letter-spacing: 2px;
   color: #b2b2b2; 
}
</style>