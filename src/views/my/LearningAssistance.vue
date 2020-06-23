<template>
    <div class="order-bg">
          <div class="account-top">
              <div class="account-top1">
              <router-link to="messagecenter">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">学习助手</p>            
              </div>              
        </div>
         <div>
             
         </div>
          <p class="time-time">2小时</p>
       <div class="assistance-bg">
           <div class="assistance-bg1">
             <p class="assitance-text">上周学习报告出炉</p>
             <p class="assistance-text1">2020年6月15日至21日</p>
           </div>
           <div class="assistance-bg2">
              <p class="time">学习时长</p> 
              <p class="time1">0小时5分钟</p>
              <img class="image20" src="../../assets/my/play/image20.png" alt="">
              <p class="time2">100%</p>
           </div>

            <div class="assistance-bg2">
              <p class="time">文章学习</p> 
              <p class="time1">0篇</p>
              <p class="time3">持平</p>
           </div>

               <div class="assistance-bg2">
              <p class="time">音频学习</p> 
              <p class="time1">3条</p>
              <img class="image21" src="../../assets/my/play/image20.png" alt="">
              <p class="time4">100%</p>
           </div>
           
             <div class="assistance-bg2">
              <p class="time">视频学习</p> 
              <p class="time1">3条</p>
              <img class="image21" src="../../assets/my/play/image20.png" alt="">
              <p class="time4">200%</p>
           </div>
            <van-divider :style="{ borderColor: '#dbdbdb' }" />
            <div class="assistance-cha">
                <p class="text5">查看详情</p>
              <img class="image22" src="../../assets/my/play/image21.png" alt="">
            </div>
       </div>   

       <p class="time-time">2020-6-15</p>
       <div class="assistance-bg">
           <div class="assistance-bg1">
             <p class="assitance-text">上周学习报告出炉</p>
             <p class="assistance-text1">2020年6月15日至21日</p>
           </div>
           <div class="assistance-bg2">
              <p class="time">学习时长</p> 
              <p class="time1">0小时0分钟</p>
             <p class="time5">持平</p>

           </div>

            <div class="assistance-bg2">
              <p class="time">文章学习</p> 
              <p class="time1">0骗</p>
              <p class="time3">持平</p>
           </div>

               <div class="assistance-bg2">
              <p class="time">音频学习</p> 
              <p class="time1">0条</p>
                            <p class="time3">持平</p>

           </div>
           
             <div class="assistance-bg2">
              <p class="time">视频学习</p> 
              <p class="time1">0条</p>
                            <p class="time3">持平</p>

           </div>
            <van-divider :style="{ borderColor: '#dbdbdb' }" />
            <div class="assistance-cha">
                <p class="text5">查看详情</p>
              <img class="image22" src="../../assets/my/play/image21.png" alt="">
            </div>
       </div>  
         <p class="time-time">2020-06-08</p>
       <div class="assistance-bg">
           <div class="assistance-bg1">
             <p class="assitance-text">上周学习报告出炉</p>
             <p class="assistance-text1">2020年6月15日至21日</p>
           </div>
           <div class="assistance-bg2">
              <p class="time">学习时长</p> 
              <p class="time1">0小时0分钟</p>
             <p class="time5">持平</p>

           </div>

            <div class="assistance-bg2">
              <p class="time">文章学习</p> 
              <p class="time1">0骗</p>
              <p class="time3">持平</p>
           </div>

               <div class="assistance-bg2">
              <p class="time">音频学习</p> 
              <p class="time1">0条</p>
                            <p class="time3">持平</p>

           </div>
           
             <div class="assistance-bg2">
              <p class="time">视频学习</p> 
              <p class="time1">0条</p>
                            <p class="time3">持平</p>

           </div>
            <van-divider :style="{ borderColor: '#dbdbdb' }" />
            <div class="assistance-cha">
                <p class="text5">查看详情</p>
              <img class="image22" src="../../assets/my/play/image21.png" alt="">
            </div>
       </div>    

     
       
      <div class="buttom">
          
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.order-bg{
    background-color: #f8f8f8;
    width: 100vw;
 
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
    letter-spacing: 2px;
    margin-top: 0.8rem;
    margin-left: 130px;
    font-weight: 700;
}
.time-time{
    margin-top: 1rem;
    font-size: 12px;
    color: #888888;
}
.assistance-bg{
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
   
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #ffffff;
}
.assistance-bg1{
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url('../../assets/my/play/image19.png');  
    height: 5rem;  
}
.assitance-text{
    padding-top: 1rem;
    letter-spacing: 2px;
    margin-left: 1rem;
    color: #ffffff;
}
.assistance-text1{
    margin-left: 1rem;
    font-size: 13px;
    color: #ffffff;
}
.assistance-bg2{
 display: flex;
}
.time{
    letter-spacing: 1px;
    margin-left: 1rem;
    font-size: 13px;
    color: #a2a2a2;
}
.time1{
    letter-spacing: 2px;
    margin-top: 0.7rem;
    margin-left: 1rem;
    font-weight: 700;
}
.image20{
    margin-top: 1rem;
    height: 15px;
    margin-left: 8rem;
}
.time2{
    color: #8bce48;
    margin-left: 0.2rem;
}
.time3{
margin-left: 13rem;
font-size: 14px;
}
.time4{
    margin-left: 0.2rem;
    color: #8bce48;
}
.image21{
    margin-top: 1rem;
    height: 15px;
    margin-left: 12rem;
}
.assistance-cha{
  
    display: flex;
}
.text5{
    letter-spacing: 1px;
 margin-left: 18.5rem;
 margin-top: 0rem;
font-size: 13px;
color: #a2a2a2;

}
.image22{
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    height: 15px;
}
.time5{
margin-left: 9rem;
font-size: 14px;
}
.buttom{
    height: 2rem;
}
</style>