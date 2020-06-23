<template>
   <div class="account-bg">
     
          <div class="account-top">
              <div class="account-top1">
              <router-link to="recharge">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">结算台</p>
              </div>  
                    
        </div>
      <div class="settldesk-bg">
                  <img class="image1" src="../../assets/my/play/image24.png" alt="">
                  <div class="text1-bg">
                  <p class="text1">1个月每日一课VIP</p>
                  <div class="text2-set">
                       <p class="text2">￥ 45</p>
                       <p class="text3">x1</p>
                  </div>
                  </div>                
        </div> 
        <div class="settldesk-bg2">
                <div class=text4-set>
                  <img class="image2" src="../../assets/my/play/image25.png" alt="">
                  <p class="text4">礼券</p>
                  <p class="text5">无可用礼券</p>
                   <img class="text5-image" src="../../assets/my/play/image30.png" alt="">
                </div>
               <div class="xian">
               <van-divider :style="{borderColor: '#bfbfbf'}" />
               </div>  
                <div class=text4-set1>
                  <img class="image2" src="../../assets/my/play/image27.png" alt="">
                  <p class="text4">优惠口令</p>   
                </div>
                 <div class="xian">
               <van-divider :style="{borderColor: '#bfbfbf'}" />
               </div>
                <div class=text4-set1>
                 <p class="text7">总计:</p>
                 <p class="text8">￥45</p>
                </div>         
        </div>
          <p class="text9">当前支付方式</p>
           <div class="settldesk-bg3">
             <img class="image3-1" src="../../assets/my/play/image28.png" alt="">
             <p class="text10">余额支付</p>
             <img class="image4" src="../../assets/my/play/image29.png" alt="">
            <div class="text11">
                 <p class="text12">去充值</p>
            </div>
           </div>

             <div class="settldesk-bg4">
            <p class="text13">选择其他支付方式</p>
             <img class="text5-image1" src="../../assets/my/play/image30.png" alt="">
            
           </div>
           <p class="text14">·本商品为虚拟内容服务，购买后不支持退换，转让，请斟酌确认</p>
           <p class="text15">当前登录账号: 137****2062</p>
           <div class="text16-bg"> 
             <img class="image5" src="../../assets/my/play/image31.png" alt="">
             <p class="text16">45 确认支付</p> 
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
.settldesk-bg{
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
}
.image1{
  height: 5rem;
}
.text1-bg{
  text-align: left;
}
.text1{
  font-weight: 700;
  letter-spacing: 1px;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
}
.text2-set{
  display: flex;
   margin-left: 0.5rem;
}
.text2{
 color: #fb8919; 
}
.text3{
  font-size: 13px;
  margin-top: 1.5rem;
  margin-left: 14rem;
}
.settldesk-bg2{
  margin-top: 1rem;
  background: #ffffff;
}
.text4-bg{
 margin-left: 1rem;
 text-align: left;
}
.text4-set{
  display: flex;
  text-align: left;
  margin-left: 1rem;
}
.text4-set1{
  margin-top: -1rem;
  display: flex;
  text-align: left;
  margin-left: 1rem;
}
  .image2{
    height: 25px;
    margin-top: 0.9rem;
  }
.text4{
  margin-left: 0.5rem;
}
.text5{
  color: #8a8a8a;
  margin-left: 12.5rem;
}
.image3{
  margin-top: 1.9rem;
  height: 15px;
  margin-left: 1rem;
}
.text5-image{
   margin-top: 1rem;
  height: 20px;
  margin-left: 0.3rem;
}
.xian{
  margin-top: -1rem;
  margin-left: 1rem;
}
.text7{
  margin-left: 18rem;
}
.text8{
  color: #fb8818;
}
.text9{
  margin-left: -17rem;
  color: #888787;
}
.settldesk-bg3{
  height: 3rem;
  display: flex;
  margin-top: 0.5rem;
  background: #ffffff;
}
 .image3{
   margin-left: 1rem;
    height: 23px;
    margin-top: 0.9rem;
  }
  .image3-1{
   margin-left: 1rem;
    height: 23px;
    margin-top: 0.9rem;
  }
  .text10{
    margin-left: 0.5rem;
  }
   .image4{
   margin-left: 1rem;
    height: 20px;
    margin-top: 1.2rem;
  }
  .text11{
    margin-top: 0.5rem;
    margin-left: 4rem;
    border-radius: 20px;
    height: 2rem;
    width: 80px;
    background-color: #fbf4ec;
  }
  .text12{
    margin-top: 0.3rem;
    color: #fb8818;
  }
  .settldesk-bg4{
    text-align: center;
  height: 2.5rem;
  display: flex;
  margin-top: 0.5rem;
  background: #ffffff;
}
.text13{
  margin-left: 9rem;
  margin-top: 0.5rem;
}
.text5-image1{
   margin-top: 0.5rem;
  height: 20px;
  margin-left: 0.3rem;
}
.text14{
  color: #b6b6b6;
  text-align: left;
  margin-left: 0.8rem;
  letter-spacing: 1px;
  font-size: 13.5px;
}
.text15{
  color: #b6b6b6;
 margin-top: 6rem;
  letter-spacing: 1px;
  font-size: 13.5px;
}
.text16-bg{
  display: flex;
  height: 4rem;
  background-color: #b1b1b1;
}
.image5{
 height: 25px;
 margin-left: 9rem;
 margin-top: 1rem;
}
.text16{
  color: #fff;
  font-size: 20px;
  margin-top: 1rem;
}

</style>