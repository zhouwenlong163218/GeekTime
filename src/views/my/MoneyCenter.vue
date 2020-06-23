<template>
  <div>
      <div>
            <div class="account-top">  
              <router-link  to="account">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">  
               <img  class="cha" src="../../assets/my/daylesson/image6.png" alt=""> 
                </router-link>       
                        
              <p class="message-top-text">兑换中心</p>            
            </div>
            <div class="money-image">
              <van-swipe  :autoplay="5000" :show-indicators="false">
                 <van-swipe-item>
                   <img  class="share2" src="../../assets/my/daylesson/image7.png" alt="">
                 </van-swipe-item>
                  <van-swipe-item>
                    <img  class="share2" src="../../assets/my/daylesson/image8.png">
                    </van-swipe-item> 
                       </van-swipe>
            </div>
            <div class="money-swipe">
              <div class="money-swipe1">
                  <van-swipe  :autoplay="5000" :show-indicators="false">
                 <van-swipe-item>
                    充值礼品卡
                 </van-swipe-item>
                  <van-swipe-item>
                   阅码礼品卡
                    </van-swipe-item> 
                       </van-swipe> 
              </div>
              <div class="money-swipe2">
                <p class="money-swipe2-text">了解详情</p>
                <img class="image-1" src="../../assets/img/right.png" alt="">
              </div>
            </div>
            <div class="money-swipe3">
                <div class="">
                  <van-swipe  :autoplay="5000" :show-indicators="false">
                 <van-swipe-item>
                    由极客时间官方发售，内含充值金额，课兑换
                    成账户余额，用于订阅极客时间内课程
                 </van-swipe-item>
                  <van-swipe-item>
                   由极客时间官方制定发售，用于在极客时间兑
                   换指定的专栏或视频课
                    </van-swipe-item> 
                       </van-swipe> 
              </div>
            </div>
            <div class="listmoney">
                  <p class="listmoney-text">立即兑换</p>
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
.money-image{
  margin-top: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  
}
.share2{
  width: 100%; 
}
.money-swipe{
  display: flex;
}
.money-swipe1{
  font-size: 18px;
  letter-spacing: 1px;
  text-align: left;
  margin-left: 1rem;
  height: 3rem;
  width: 17rem;
}
.money-swipe2{
  margin-left: 1rem;

  display: flex;
}
.money-swipe2-text{
  color: #8c8c8c;
  font-size: 15px;
  margin-top: 0rem;
}
.image-1{
  height: 1.5rem;
  margin-left: 0.5rem;
}
.money-swipe3{
  font-size: 18px;
  letter-spacing: 1px;
  text-align: left;
 margin-top: 3rem;
  margin-right: 1rem;
  margin-left: 1rem; 
}
.listmoney{
  text-align: center;
  border-radius: 5px;
  margin-top: 2rem;
  background-color: #fb8919;
  margin-left: 4rem;
  margin-right: 4rem;
  height: 3.5rem;
}
.listmoney-text{
  color: #ffffff;
  letter-spacing: 1px;
  padding-top: 1rem;
}
</style>