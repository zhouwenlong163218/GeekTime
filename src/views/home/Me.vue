<template>
  <div class="me-background">
    <div class="me-image-background">
       <div class="me-image">
        <div>
          <router-link to="messagecenter">
          <img class="letter-image" src="../../assets/my/信.png" alt="">
        </router-link>
          
        </div>
      <div>
        <img  class="tongji" src="../../assets/img/统计.png" alt="">
      </div> 
      </div>
       <div class="me-head">
          <div>
         <van-image round width="4rem" height="4rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </div>
        <div class="name-info-back">
          <p class="name-text">Geek_8662c2</p>
          <p class="name-tel">137****2062</p>
        </div>
        <div class="personal">
          <p class="personal-text">个 人 主 页</p>
           <img class="personal-right"  src="../../assets/my/右.png" alt="">
        </div>
      </div>
       <div class="swipe">
         <van-swipe  :autoplay="3000"  :show-indicators="false">
         <van-swipe-item>
           <img class="guangbao"  src="../../assets/my/guanggao1.png" alt="">
         </van-swipe-item>
         <van-swipe-item>
           <img  class="guangbao"  src="../../assets/my/guanggao2.png" alt="">
         </van-swipe-item>
         <van-swipe-item>
             <img class="guangbao"  src="../../assets/my/guanggao1.png" alt="">
         </van-swipe-item>
        
         </van-swipe>
         </div>   
    </div>
     <div class="me-information-background10">
        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/账户.png">
          </div>
          <div class="account-background">
              <p>账户</p>
          </div>
         <div class="xiaoxi">
           <p class="xiaoxi-text">0.0</p>
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 

        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/课程.png">
          </div>
          <div class="account-background">
              <p>我的课程</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div>

          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/订 单.png">
          </div>
          <div class="account-background">
              <p>我的订单</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>            
     </div>

     <div class="me-information-background10">
        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/商店.png">
          </div>
          <div class="account-background">
              <p>商店订单</p>
          </div>
         <div class="xiaoxi">
          
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 

        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/拼团.png">
          </div>
          <div class="account-background">
              <p>我的拼团</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div>

          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/证书.png">
          </div>
          <div class="account-background">
              <p>我的证书</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>            
     </div>
         
       

      <div class="me-information-background11">
          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/日历.png">
          </div>
          <div class="account-background">
              <p>我的每日一课</p>
          </div>
         <div class="xiaoxi">
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>                   
     </div>

     <div class="me-information-background12">
        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/礼券.png">
          </div>
          <div class="account-background">
              <p>礼券</p>
          </div>
         <div class="xiaoxi">
          <p class="text-4">4</p>
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div> 

        <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/礼物.png">
          </div>
          <div class="account-background">
              <p>课程赠送</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div>

          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/红包管理.png">
          </div>
          <div class="account-background">
              <p>分享有赏</p>
          </div>
         <div class="xiaoxi">
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div>     
          
          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/邀请.png">
          </div>
          <div class="account-background">
              <p>邀请好友</p>
          </div>
         <div class="xiaoxi">
           <P class="xiaoxi-text">得30元</P>
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   
          <div class="xian">
          <van-divider :style="{borderColor: '#bfbfbf'}" />
          </div>
         <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/钱.png">
          </div>
          <div class="account-background">
              <p>关注服务号领币</p>
          </div>
         <div class="xiaoxi">
           
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>   

     </div>

           <div class="me-information-background11">
          <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/帮助与反馈.png">
          </div>
          <div class="account-background">
              <p>帮助与反馈</p>
          </div>
         <div class="xiaoxi">
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
         </div>
        </div>  
        <div class="xiaoxi">
         </div>
         <div class="my-image-background">
          <div class="me-image11">
           <img class="image1" src="../../assets/my/设 置.png">
          </div>
          <div class="account-background">
              <p>设置</p>
          </div>
         <div class="xiaoxi">
         </div>
         <div>
        <img class="right" src="../../assets/img/right.png"> 
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
.me-background{
  
 height: 77rem;
  width: 100vw;
  background-color: #f8f8f8;
}
.me-image-background{
  background-color: #ffffff;
  height: 13rem;
}
.me-image{
  width: 100vw;
  margin-top: 1rem;
  display: flex;
}
.letter-image{
 margin-left: 20rem;
 margin-top: 0.1rem;
}
.tongji{
  margin-left: 1rem;
}
.me-head{
  background-color: #ffffff;
  margin-top: 1rem;
  display: flex;
  margin-left: 1.5rem;
  float: left;
}
.name-info-back{
margin-left: 1rem;
text-align: left;
}
.name-text{
  margin-top: 0rem;
  font-weight: 700;
  font-size: 18px;
}
.name-tel{
  font-size: 13px;
  color: #8f8f8f;
}
.personal{
display: flex;
}
.personal-text{
   margin-top: 2rem;
  margin-left: 6.5rem;
  font-size: 13px;
  color: #fcab5a;
}
.personal-right{
  margin-top: 2.2rem;
  height: 13px;
}
.swipe{
  margin-left: 1.5rem;
  margin-top: 6rem;
  width: 90%;
  height: 3rem;
}
.guangbao{
  border-radius: 10px;
}
.me-information-background10{
  margin-top: 1rem;
  background-color: #ffffff;
  height: 12rem;
}
.my-image-background{
  width: 90%;
  margin-left: 1.5rem;
  display: flex;
}
.me-image11{
  width: 3rem;
}
.image1{
  margin-top: 0.8rem;
 
}
.account-background{
  text-align: left;
  width: 16rem;
}
.xiaoxi{
  text-align: center;
  width: 4rem;
}
.xiaoxi-text{
 margin-top: 1.2rem;
  font-size: 12px;
}
.right{
  margin-top: 1rem;
}
.xian{  
    margin-top: -1rem;
    margin-left: 1.8rem;
}
.me-information-background11{
  margin-top: 1rem;
  background-color: #ffffff;
 
}
.me-information-background12{
  margin-top: 1rem;
    background-color: #ffffff;

}
.text-4{
  margin-top: 1.2rem;
  font-size: 12px;
  margin-left: 2rem;
}
</style>