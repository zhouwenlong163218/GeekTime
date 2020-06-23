<template>
<div>
     <div class="day-bg">
        <div class="day-lesson-bg">
            <router-link to="me">
               <img  class="left-image" src="../../assets/message/左.png" alt=""> 
            </router-link>
             
             <p class="day-lesson-text">我的每日一课</p>
             <img class="share" src="../../assets/my/daylesson/分享.png" alt="">
        </div>
        <div class="day-lesson-name">
            <div class="day-lesson-name-image">
              <van-image round  width="3rem"  height="3rem"
                :src="require('../../assets/my/play/image22.png')"/>  
            </div>
             <div>
                 <p class="Geek">Geeck_866c2c</p>
                 <p class="Geek1">未开通</p>
             </div>
             <div class="day-lesson-vip">
                   <p class="day-lesson-vip1">VIP</p>                            
               </div>              
              
        </div>
  </div> 
  <div class="recharge-bg">
      <div>
         <p class="text1">1个月每日一课VIP</p> 
         <p class="text2">折合每日1.45元</p>
      </div>
      <div>
          <p class="text3">￥45</p>
      </div>
      <router-link to="settldesk">
         <div class="vip-kaitong">
              <p class="vip-kaitong1">开通</p>
            </div>    
      </router-link>
                
  </div>
   <div class="xian">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>

 <div class="recharge-bg">
      <div>
         <p class="text1">3个月每日一课VIP ( 买一赠一 )</p> 
         <p class="text2">折合每日0.53元</p>
      </div>
      <div>
          <p class="text3-1">￥98</p>
      </div>
        <div class="vip-kaitong">
              <p class="vip-kaitong1">开通</p>
            </div>           
  </div>
   <div class="xian">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>

      <div class="recharge-bg">
      <div>
         <p class="text1">1年每日一课VIP</p> 
         <p class="text2">折合每日0.41元</p>

      </div>
     <div class="tehui">
        <p class="tehui-text">特惠</p>
      </div>
         <p class="text4">￥365</p>
      <div>
          <p class="text3-2">￥149</p>
      </div>
        <div class="vip-kaitong">
              <p class="vip-kaitong1">开通</p>
            </div>           
  </div>
   <div class="xian">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>
        <div class="text5-bg">
              <p class="text5">每日一课VIP会员说明</p>
              <p class="text6">1.用户成为付费会员后，即可在会员有效期内免费观看每日一
                  课所有视频，全年更新总数不低于200个.</p>
                   
                  <p class="text7">2.每日一课还包含了极客邦科技主办的QCon,ArchSummit, GMTC等 精品技术大会实录。
                  </p>
                  <p class="text8">注意事项</p>
                  <p  class="text6">1.每日一课一经购买，不得转让或退款。</p>
        </div>
      
   </div>
</template>

<script>
export default {

}
</script>

<style>
.day-bg{
    height: 10rem;
    background-size: 100%;
    background-image: url('../../assets/my/daylesson/image1.jpg');
}
.day-lesson-bg{
    display: flex;
}
.left-image{
    height: 17px;
    margin-top: 1rem;
    margin-left: 1rem;
}
.day-lesson-text{
    margin-top: 0.8rem;
    margin-left: 8rem;
    color: #ffffff;
    font-size: 17px;
}
.share{
    margin-top: 0.8rem;
    margin-left: 6.5rem;
    height: 25px;
}
.day-lesson-name{
    display: flex;
}
.day-lesson-name-image{
    margin-left: 1.5rem;
}
.Geek{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  color: #ffffff;
  font-size: 16px;
}
.Geek1{
    margin-left: -3.3rem;
    margin-top: -0.5rem;
  color: #ffffff;
  font-size: 13px;
}
.day-lesson-vip{
  border-radius: 30px;
   margin-top: 0.5rem;
  background-color: #f3f3f3;
  text-align: center;
  width: 40px;
  height: 16px;
  margin-left: 0.3rem;
  display: flex;
}
.day-lesson-vip1{
    margin-left: 8px;
  margin-top: 0rem;
  font-size: 14px;
  color: #d3d3d3;
}
.recharge-bg{
    text-align: left  ;
    margin-left: 1rem;
    display: flex;
}
.text1{
    letter-spacing: 2px;
    font-weight: 700;
}
.text2{
    margin-top: -0.5rem;
    font-size: 10px;
    color: #c39f38;
}
.text3{
    color: #c99e1e;
    margin-left: 7rem;
    margin-top: 2rem;
}
.vip-kaitong{
  text-align: center;
  margin: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 1rem;
  background-color: #efcf68;
  width: 70px;
  height: 30px;
  border-radius: 30px;
}
.vip-kaitong1{
  text-anchor: middle;
  font-weight: 600;
  margin-top: 0.2rem;
  font-size: 16px;
}
.xian{  
    margin-top: 01rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
}
.text3-1{
    color: #c99e1e;
    margin-left: 0.5rem;
    margin-top: 2rem;
}
.tehui{
    background-color: red;
    width: 40px;
    height: 20px;
    border-radius: 10px;
}
.tehui-text{
    margin-left: 7px;
    margin-top: 4px;
    color: #fff;
    font-size: 10px;
}
.text3-2{
    color: #c99e1e;
    margin-left: 1.5rem;
    margin-top: 2rem;
}
.text4{
    margin-top: 2rem;
    margin-left: 1rem;
 color: #b6b7b7;
text-decoration: line-through;
}
.text5-bg{
    text-align: left;
    margin-left: 1rem;
      margin-right: 1rem;
}
.text5{
    font-weight: 600;
    letter-spacing: 1px;
}
.text6{
    font-size: 13px;
    letter-spacing: 1px;
    color: #b5b5b5;
}
.text7{
    margin-top: 2rem;
    font-size: 13px;
    letter-spacing: 1px;
    color: #b5b5b5;
}
.text8{
    margin-top: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
}
</style>