<template>
  <div>  
        <div class="message-top">
            <router-link to="study">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">
            </router-link>
                 
              <p class="message-top-text">学习轨迹</p>   
                <img class="tongji" src="../../assets/img/统计.png" alt="">
        </div>
        <div>
          <div class="learning-bg">
                   <p class="learning-time">2020-06-17</p>
        </div>
        <div class="learning-info">
          <p class="time-color">11:29</p>
          <img class="time-image" src="../../assets/my/gift/image7.png" alt="">
            
            <div>
              <div class="learn-icon">
               <img class="au-fr" src="../../assets/my/gift/image8.png" alt="">
             <p class="au-fr-text">音频</p>
          </div>               
               <div class="learn-title-bg">
                 <p class="learn-title-text">第293期 | 兄弟，你受疫情影响了没？</p>
               </div>
            </div>
           
        </div> 
        
        </div>

           <div>
          <div class="learning-bg1">
                   <p class="learning-time">2020-06-15</p>
        </div>
        <div class="learning-info">
          <p class="time-color">21:15</p>
          <img class="time-image" src="../../assets/my/gift/image7.png" alt="">
            
            <div>
              <div class="learn-icon">
               <img class="au-fr" src="../../assets/my/gift/image8.png" alt="">
             <p class="au-fr-text">音频</p>
          </div>               
               <div class="learn-title-bg">
                 <p class="learn-title-text">第291期 | 我的四个团队管理小窍门</p>
               </div>
            </div>        
        </div>  
        </div>
       
           <div>
          <div class="learning-bg1">
                   <p class="learning-time">2019-10-01</p>
        </div>
        <div class="learning-info">
          <p class="time-color">21:15</p>
          <img class="time-image" src="../../assets/my/gift/image7.png" alt="">
            
            <div>
              <div class="learn-icon">
               <img class="au-fr" src="../../assets/my/gift/image9.png" alt="">
             <p class="au-fr-text">文章</p>
          </div>               
               <div class="learn-title-bg">
                 <p class="learn-title-text1">嘿，你的国庆怎么安排？</p>
               </div>
            </div>        
        </div>  
        </div>

            <div>
          <div class="learning-bg1">
                   <p class="learning-time">2019-7-21</p>
        </div>
        <div class="learning-info">
          <p class="time-color">09:07</p>
          <img class="time-image1" src="../../assets/my/gift/image7.png" alt="">
            
            <div>
              <div class="learn-icon">
               <img class="au-fr" src="../../assets/my/gift/image9.png" alt="">
             <p class="au-fr-text">文章</p>
          </div>               
               <div class="learn-title-bg">
                 <p class="learn-title-text">01 | 为什么说编辑要重视文字规范？</p>
               </div>
            </div>        
        </div>  
        </div>

            <div>
         
        <div class="learning-info">
          <p class="time-color">09:03</p>
          <img class="time-image2" src="../../assets/my/gift/image7.png" alt="">
            
            <div>
              <div class="learn-icon">
               <img class="au-fr" src="../../assets/my/gift/image8.png" alt="">
             <p class="au-fr-text">音频</p>
          </div>               
               <div class="learn-title-bg">
                 <p class="learn-title-text">第291期 | 我的四个团队管理小窍门</p>
               </div>
            </div>        
        </div>  
        </div>

        <p style="color:#888888">已经到底了</p>
  </div>
 
</template>

<script>
export default {

}
</script>

<style>
.message-top{
    margin-left: 1.5rem;
   display: flex;
}
.message-top-text{

    font-weight: 700;
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
.learning-bg{
height: 2rem;
width: 8rem;
border-top-right-radius:40px;
border-bottom-right-radius:40px;
background-color: #f6f7fb;
}
.learning-time{
  padding-top: 0.5rem;
  font-size: 15px;
  font-weight: 700;
}
.learning-info{
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  display: flex;
}
.time-color{
  color: #888888;
}
.time-image{
  margin-left: 0.4rem;
  margin-top: 1.2rem;
  height: 5rem;
}
.learn-icon{
  display: flex;
}
.au-fr{
  margin-left: 1rem;
  height: 1.5rem;
  margin-top: 1rem;
}
.au-fr-text{
  margin-left: 0.2rem;
  margin-top: 1.1rem;
  color: #888888;
  font-size: 14px;
}
.learn-title-bg{
  margin-left: 1.3rem;
  margin-top: -1rem;
  background-color: #f6f7fb;
  margin-right: 1rem;
  width: 17.5rem;
  height: 3rem;
}
.learn-title-text{
  text-align: left;
   margin-left: 1.3rem;
  letter-spacing: 1px;
}
.learning-bg1{
  margin-top: 2rem;
height: 2rem;
width: 8rem;
border-top-right-radius:40px;
border-bottom-right-radius:40px;
background-color: #f6f7fb;
}
.learn-title-text1{
  text-align: left;
   margin-left: 1.3rem;
  letter-spacing: 1px;
  padding-top: 0.8rem;
}
.time-image1{
  margin-left: 0.4rem;
  margin-top: 1.2rem;
  height: 6rem;
}
.time-image2{
  margin-left: 0.4rem;
 
  height: 6rem;
}
</style>