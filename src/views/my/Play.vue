<template>
  <div>
      <div class="play-bg">
          <router-link to="me">
            <img class="invite-image" src="../../assets/my/play/image1.png" alt="">  
          </router-link>
        
        <img class="invite-image1" src="../../assets/my/play/image2.png" alt="">
      </div>
          <div>
              <p class="play-text1">第293 | 兄弟，你受疫情</p>
              <p  class="play-text2">影响了没？</p>
              <p class="play-text3">— 卖桃者说 —</p>
               <img class="play-image" src="../../assets/my/play/image3.png" alt=""> 
          </div>
          <div class="play-bg12">
              <div class="play-bg1">
             <p class="play-text4">1 x</p>
             <img class="invite-image2" src="../../assets/my/play/image1.png" alt="">
          </div>
            <div class="play-bg1-1">
             <p class="play-text5">定时</p>
             <img class="invite-image2" src="../../assets/my/play/image1.png" alt="">
          </div>   
          </div>
             <div class="play-image4">
              <img class="image4-1" src="../../assets/my/play/image4.png" alt="">
              <div class="play-time-bg">
                  <p class="time-text1">00:00</p>
                  <p class="time-text2">08:54</p>
              </div>
          </div>
          <div class="play-image5">
            <img class="play-image5-1" src="../../assets/my/play/image5.png" alt="">
            <img class="play-image5-1" src="../../assets/my/play/image6.png" alt="">
            <img class="play-image5-2" src="../../assets/my/play/image7.png" alt="">
             <img class="play-image5-1" src="../../assets/my/play/image8.png" alt="">
              <img class="play-image5-1" src="../../assets/my/play/image9.png" alt="">      
          </div>
               <div class="play-image5">
            <img class="play-image6-1" src="../../assets/my/play/image10.png" alt="">
            <img class="play-image6-2" src="../../assets/my/play/image11.png" alt="">  
            <img class="play-image6-3" src="../../assets/my/play/image12.png" alt="">      
          </div>
          
  </div>
</template>

<script>
export default {

}
</script>

<style>
.play-bg{
display: flex;
}
.invite-image{
    margin-top: 1rem;
    margin-left: 11rem;
}
.invite-image1{
    margin-left: 7rem;
    margin-top: 1rem;
    height: 30px;
}
.play-text1{
    margin-top: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
}
.play-text2{
    margin-top: -0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
}
.play-text3{
    color: #9f9f9f;
    font-size: 14px;
    letter-spacing: 2px;
}
.play-image{
    height: 17rem;
}
.play-bg12{
    display: flex;
}
.play-bg1{
    display: flex;
    margin-top: 1rem;
    margin-left: 7rem;
    border-radius: 20px;
    width: 4rem;
    height: 2rem;
 border: #9f9f9f 1px solid;
}
.play-bg1-1{
    display: flex;
    margin-top: 1rem;
    margin-left: 2rem;
    border-radius: 20px;
    width: 4rem;
    height: 2rem;
 border: #9f9f9f 1px solid;
}
.play-text4{
    color: #939393;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
}
.play-text5{
    letter-spacing: 1px;
    color: #939393;
    font-size: 12px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
}
.invite-image2{
    height: 13px;
    margin-left: 0.3rem;
    margin-top: 0.7rem;
}
.play-image4{
    margin-left: 1rem;
    margin-right: 1rem;
}
.image4-1{
    margin-top: 2rem;
    width: 22rem;
}
.play-time-bg{
 display: flex;
}
.time-text1{
    color: #b6b6b6;
    margin-top: 0.3rem;
    font-size: 12px;
    margin-left: 1rem;
}
.time-text2{
    color: #b6b6b6;
    margin-top: 0.3rem;
    font-size: 12px;
    margin-left: 18rem;
}
.play-image5{
    display: flex;
    margin-top: 2rem;
}
.play-image5-1{
    margin-left: 2rem;
    height: 30px;
}
.play-image5-2{
    margin-top: -1rem;
    margin-left: 2rem;
    height: 60px;
}
.play-image6-1{
    margin-left: 4rem;
    height: 25px;
}
.play-image6-2{
    margin-left: 5.5rem;
    height: 25px;
}
.play-image6-3{
    margin-left: 5.5rem;
    height: 25px;
}
</style>