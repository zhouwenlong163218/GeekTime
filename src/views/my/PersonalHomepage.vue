<template>
  <div>
    <div class="homepage-bg">
       <img class="image1" @click="right" src="../../assets/home/左.png" alt="">
        <img class="image2" src="../../assets/home/统计.png" alt="">
    </div>
    <div class="homepage-bg1">
        <div class="homepage-image">
            <van-image class="van-image" round  width="5rem" height="5rem"
           :src="require('../../assets/home/image2.png')"/>    
           <div class="homepage-image1">
            <img class="image3" src="../../assets/home/image8.png" alt="">
            <p class="text">编辑资料</p>
           </div>
           
           </div>
           <div class="homepage-bg2">
              <p class="text1">Geek_866c2c</p> 
              <p class="text2">暂无简介</p>
              <div class="homepage-bg3">
                <p class="text3">0</p>
                <p class="text4">关注者</p>
                <p class="text5">|</p>
                
                <p class="text3-1">3</p>
                <p class="text4" @click="text">正在关注</p>
              </div>
              
           </div>
       <div class="homepage-bg4">
        </div>
        <div class="homepage-bg5">
            <p class="text6">学习时长</p>
            <img class="image4" src="../../assets/home/image9.png" alt="">
        </div>
           <div class="xian">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>
     <div class="homepage-bg6">
            <p class="text6">最近在学</p>
            <p class="text7">全部在学</p>
        </div>
        <div class="homepage-bg7">
          <van-swipe :loop="false"  :width="110" :show-indicators="false">
          <van-swipe-item>
            
          <img class="image5" src="../../assets/home/image10.png" alt="">
           <p class="text8-1">重学前端</p>   
             
           
          </van-swipe-item>
           <van-swipe-item>
          <img class="image5" src="../../assets/home/image11.png" alt="">
          <p class="text8">SQL必知必会</p>    
           </van-swipe-item>
           <van-swipe-item>
                 <img class="image5" src="../../assets/home/image12.png" alt="">
                 <p class="text8">软件测试52讲</p> 
           </van-swipe-item>
            <van-swipe-item>
                <div class="test1">
                 <img class="image5" src="../../assets/home/image13.png" alt="">
                  <p class="text8-2">程序员的数学基础课</p>      
                </div>
                 
            </van-swipe-item>
            <van-swipe-item>
                  <img class="image5" src="../../assets/home/image14.png" alt="">
                   <p class="text8">编辑训练营</p> 
            </van-swipe-item>
     </van-swipe>
        </div>
        
    </div>
     <div class="xian1">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>

        <div class="homepage-bg6">
            <p class="text6">关注的频道</p>
            <p class="text7-1">全部频道</p>
        </div>

        <van-swipe :loop="false" :width="160" :show-indicators="false" >
     <van-swipe-item>
           <img class="image6" src="../../assets/home/image15.png" alt="">
     </van-swipe-item>
    <van-swipe-item>
        <img class="image6" src="../../assets/home/image16.png" alt="">  
    </van-swipe-item>
    <van-swipe-item>
          <img class="image6" src="../../assets/home/image17.png" alt="">
    </van-swipe-item>
    <van-swipe-item>
          <img class="image6" src="../../assets/home/image18.png" alt="">
    </van-swipe-item>
       <van-swipe-item>
          <img class="image6" src="../../assets/home/image19.png" alt="">
    </van-swipe-item>
  </van-swipe>
      <div class="xian1">
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
        </div>
        <div class="homepage-bg9">
           <van-tabs v-model="active"  line-width="50px"
         title-inactive-color="#d2d2d2"
          title-active-color="#3d3d3d"
          :active="active"  :color="'#fa8818'">
       
          <van-divider :style="{ borderColor: '##f8f8f8' }" />
       
      <van-tab title="我发布的">
          <div class="homepage-bg10">
          
          </div>  <img class="image20" src="../../assets/home/image20.png" alt="">
      </van-tab>
      <van-tab title="我评论的">
      <img class="image20" src="../../assets/home/image21.png" alt="">
      </van-tab>
      <van-tab title="我点燃的">
            <img class="image20" src="../../assets/home/image22.png" alt="">
      </van-tab>
      </van-tabs>  
        </div>
       
  </div>
</template>

<script>
export default {
  methods:{
         text(){
            this.$router.push("/follow")
        } ,
        right(){
            this.$router.push("/me")
        }   
  }
}
</script>

<style>
.homepage-bg{
    display: flex;
    height: 7rem;
    background-image: url('../../assets/home/image7.png');
}
.image1{
     margin-top: 2rem;
    margin-left: 1rem;
    height: 25px;
}
.image2{
    margin-top: 2rem;
    margin-left: 20rem;
    height: 25px;
}
.homepage-bg1{
    
    background-color: #ffffff;
    margin-top: -1rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.homepage-image{
    display: flex;
    text-align: left;
    margin-left: 1rem;
}
.homepage-image1{
    display: flex;
    width: 7rem;
    height: 2rem;
    border-radius: 20px;
    border: #919191 solid 1px;
    margin-left: 11rem;
    margin-top: 1.5rem;
}
.van-image{
    margin-top: -1.5rem; 
}
.image3{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 15px;
}
.text{
    margin-top: 0.3rem;
    font-size: 17px;
    color: #888888;
}
.text1{
    font-size: 25px;
    font-weight: 700;
}
.homepage-bg2{
    text-align: left;
    margin-left: 1rem;
}
.text2{
    margin-top: -1rem;
    color: #888888;
    font-size: 15px;
}
.homepage-bg3{
    display: flex;
}
.text3{
  margin-top: 0rem;
  color: #f48a21; 
  font-size: 22px; 
}
.text4{
    letter-spacing: 1px;
    margin-top: 0.2rem;
    color: #888888;
    margin-left: 0.3rem;
    font-size: 15px;
}
.text5{
    margin-top: 0.3rem;
    color: #888888;
    margin-left: 0.5rem;
    font-size: 15px;
}
.text3-1{
  margin-left: 0.5rem;
  margin-top: 0rem;
  color: #f48a21; 
  font-size: 22px; 
}
.homepage-bg4{
    height: 1rem;
    background-color: #f6f7fb;
}
.homepage-bg5{
    margin-left: 1rem;
    text-align: left;
}
.text6{
     color: #000;
    font-size: 20px;
    letter-spacing: 1px;
}
.image4{
    height: 7.3rem;
}
.xian{
    margin-left: 1rem;
}
.text7{
    margin-top: 1.5rem;
    margin-left: 14rem;
    color: #888;
    font-size: 16px;
}
.homepage-bg6{
    margin-right: 1rem;
    display: flex;
    margin-left: 1rem;
    text-align: left;    
}
.homepage-bg7{
    height: 10rem;
}

.image5{
    height: 8rem;
}
.text8-1{
    margin-top: 0rem;
    margin-left: -1rem;
}
.text8{
    margin-top: 0rem;
    margin-left: 0rem;
}
.test1{
   text-align: left;   
}
.text8-2{
   
    margin-top: 0rem;
    margin-left: 0rem;
}
.xian{
    margin-top: 1rem;
    margin-left: 1rem;
}
.text7-1{
    margin-top: 1.5rem;
    margin-left: 13rem;
    color: #888;
    font-size: 16px;
}
.image6{
    width: 9rem;
}
.homepage-bg9{
    margin-left: 1rem;
    width: 15rem;
}
.homepage-bg10{
    width: 100vw;
}
.image20{
    height: 12rem;
 margin-left: 4rem;
 margin-top: 5rem;
 margin-bottom: 10rem;
}
</style>