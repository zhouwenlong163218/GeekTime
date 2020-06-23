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
                src="https://img.yzcdn.cn/vant/cat.jpeg"/>  
            </div>
             <div>
                 <p class="Geek">Geeck_866c2c</p>
                 <p class="Geek1">未开通</p>
             </div>
             <div class="day-lesson-vip">
                   <p class="day-lesson-vip1">VIP</p>                 
               </div>
               <router-link to="recharge">
                   <div class="vip-kaitong">
              <p class="vip-kaitong1">开通</p>
            </div>
               </router-link>
             
        </div>
        <div class="share1-bg">
             <img  class="share1" src="../../assets/my/daylesson/image1.png" alt="">
        </div>
               <div>
                 <div class="video">
                  <img  class="share2" src="../../assets/my/daylesson/image3.png" alt="">
                         <p class="video2-1">最近播放</p>
                         <p class="video2-2">4</p>
                  <img class="image1" src="../../assets/img/right.png" alt="">
                 </div>

                  <div class="video">
                  <img  class="share2" src="../../assets/my/daylesson/image2.png" alt="">
                         <p class="video2-1">本地视频</p>             
                  <img class="image1-1" src="../../assets/img/right.png" alt="">
                 </div>

                  <div class="video">
                  <img  class="share2" src="../../assets/my/daylesson/image4.png" alt="">
                         <p class="video2-1">已购视频</p>
                         
                  <img class="image1-1" src="../../assets/img/right.png" alt="">
                 </div>
                 <div class="video3">
                       <p  class="video3-1">
                         我创建的看单
                       </p>
                        <img class="image3-1" src="../../assets/my/daylesson/image5.png" alt="">
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
.vip-kaitong{
  text-align: center;
  margin: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 5rem;
  background-color: #efcf68;
  width: 70px;
  height: 30px;
  border-radius: 30px;
}
.vip-kaitong1{
  text-anchor: middle;
  color: #624100;
  margin-top: 0.2rem;
 
  font-size: 16px;
}
.share1-bg{
    margin-left: 1.5rem;
    background-color: aqua;
    margin-right: 1.5rem;
    height: 4rem;
}
.share1{
    width: 100%;
}
.video{
  text-align: center;
  margin-left: 1.5rem;
  display: flex;
  margin-top: 2rem;
}
.share2{
  height: 1.5rem;
}
.video2-1{
  font-weight: 700;
  margin-left: 1rem;
  margin-top: 0rem;
}
.video2-2{
 color: #ababab;
  margin-left: 14.5rem;
  margin-top: 0rem;
}
.image1{
  margin-top: -0.2rem;
  height: 1.5rem;
}
.image1-1{
  margin-left: 15rem;
  margin-top: -0.2rem;
  height: 1.5rem;
}
.video3{
  display: flex ;
  margin-top: 1rem;
  text-align: left;
  height: 3.5rem;
  background-color: #f6f7fb;
  width: 100%;
  
}
.video3-1{
  font-weight: 700;
  margin-left: 1.5rem;

}
.image3-1{
  margin-left: 14rem;
  margin-top: 1.3rem;
  height: 1rem;
}
</style>