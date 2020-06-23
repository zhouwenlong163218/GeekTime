<template>
  <div>
     <div class="study-background">
         <div class="study-title">
        <h3 class="study-title1">我的学习</h3>
        <router-link to="">
           <img class="time-image" src="../../assets/img/统计.png" >
        </router-link>
       <router-link to="learningtrajectory">
         <img class="time-image1" src="../../assets/img/时间.png" >
       </router-link>
        
             </div> 
       <div class="time-background">
         <p class="text-color">本周时长0小时0分钟</p>
         <img class="right" src="../../assets/img/right.png" alt="">
         <div class="time-background1">
        </div>
     </div> 
     <div class="time-time">
          <div>
        <p class="shuzi">0</p>
        <p class="biji">笔记</p>
       </div>
        <div class="liuyan">
        <p class="shuzi">0</p>
        <p class="biji">留言</p>
       </div>
      <div class="liuyan">
        <p class="shuzi">0</p>
        <p class="biji">收藏</p>
       </div>
         <router-link to="download">
           <div class="liuyan">
        <p class="shuzi">1</p>
        <p class="biji">下载</p>
       </div>
         </router-link>
       
       </div>  
    </div>
      <div  class="dingyuan-title">
          <p class="none-study">暂无学习内容</p>
          <van-button style="width:40%"  color="#fa8818" round type="info">订阅</van-button>
      </div>
     </div>

    
</template>

<script>
export default {

}
</script>

<style>
.tribe-title{
  width: 70%;
}
.study-background{
  height: 15rem;   
  background-image: url('../../assets/studyimg/bg.png'); 
  background-size: 100%;
}
.study-title{
   margin-left: 1rem;
}
.study-title1{
    float: left;
}
.time-image{
  margin-top: 1.5rem;
  margin-left: 12rem;
}
.time-image1{
  margin-top: 1.3rem;
  margin-left: -4rem;

}
.time-background{
  margin-top: 0.5rem;
  height: 2rem;
  background-color: #fbf6f0;
  width: 50%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.time-background1{
  background-color: blue;
  display: flex;
}
.text-color{
  margin-top: 0.3rem;
  text-align: center;
  margin-left: 0.5rem;
  float: left;
  font-size: 15px;
  letter-spacing:2px;
}
.right{
  margin-top: 0.5rem;
  height: 1rem;
}
.time-time{
  margin-left: 2rem;
  margin-top: 1rem;
  height: 2rem;
  display: flex;
  
}
.shuzi{
  font-size: 30px;
}
.biji{
  margin-top: -2rem;
}
.liuyan{
  margin-left: 4rem;
}
.dingyuan-title{
  width: 100%; 
 border-top-right-radius: 50px; 
 border-top-left-radius: 50px; 
}
.none-study{
  font-size: 14px;
  color: #c7c7c7;
  margin-top: 5rem;
}
.tribe-me{
  margin-left: 10rem;
}

</style>