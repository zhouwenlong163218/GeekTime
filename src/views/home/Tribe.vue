<template>
<div class="tribe">
  <div class="tribe-fen">
 <div class="tribe-title">
         <van-tabs
         title-inactive-color="#d2d2d2"
          title-active-color="#3d3d3d"
          :active="active"  :color="'#fa8818'">
           <van-tab title="关注">
           <div class="guanzhu" >
              <div class="info-title">
                <div class="info-title-info-me">
                  <div class="info-image">
                  <van-image
                  class="info-head"
                       round
                       width="40px"
                       height="40px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />
                 </div>
                 <div class="info-name-time">
                    <p class="info-name">每天晒刷牙</p>
                    <p class="info-time">1分钟前</p>
                </div>
                  <div class="info-follow">
                      <p class="info-pay-attention">+ 关注</p>
                  </div>                
                    <img class="info-more" src="../../assets/tribeimg/更多.png" alt="">                
                </div>
                <div class="info-news">
                       <p>最后把我的体验报告要回来了</p> 
                       <div class="info-forward">
                           <div class="forward-head">
                             <van-image
                       class="forward-info-head"
                       round
                       width="30px"
                       height="30px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />  
                        <p class="forward-name">每天晒白牙</p>
                            <div class="forward-follow">
                      <p class="forward-attention">+ 关注</p>
                             </div> 
                      </div>
                      <div class="forward-news-title">
                         <p class="forward-news">只干过一天外包，就辞职了，之前接了一个
                        外包到移动的offer，面试的时候说做Java开发，
                        第一天去了后，让我学下安卓测试，我也没吱声，
                        第二天就辞职了,后..
                      </p>
                      </div>               
                      <div class="forward-background">
                        <div>
                           <img class="forward-backrground1" src="../../assets/tribeimg/Snipaste1.png" > 
                        </div>
                          <div class="infos"><p>外包不也是写程序吗？有什么..</p></div>
                      </div>
                       </div>
                </div>  
              </div>
                <div class="job-want">
                   <img class="snipaste2" src="../../assets/tribeimg/Snipaste2.png">
                   <p class="snipaste2-text"> 招聘求职</p>   
                </div>
                <div class="new-image">
                   <img class="news-image" src="../../assets/tribeimg/消息.png">
                   <p class="news-number">0</p>
                    <img class="news-image1" src="../../assets/tribeimg/火焰.png">
                   <p class="news-number">2</p>
                    <img class="news-image2" src="../../assets/tribeimg/3.1转发.png">
                 
                </div>
                <div class="news-image3">
                 <img class="snipaste4"  src="../../assets/tribeimg/Snipaste4.png">
                 <p class="snipaste4-text">46, Phoenix</p>
                </div>
                <van-divider class="van-divider" :style="{ color: '#dbdbdb' }"> </van-divider>

                
              </div>
<div class="guanzhu" >
              <div class="info-title">
                <div class="info-title-info-me">
                  <div class="info-image">
                  <van-image
                  class="info-head"
                       round
                       width="40px"
                       height="40px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />
                 </div>
                 <div class="info-name-time">
                    <p class="info-name">希望</p>
                    <p class="info-time">20分钟前</p>
                </div>
                  <div class="info-follow">
                      <p class="info-pay-attention">+ 关注</p>
                  </div>                
                    <img class="info-more" src="../../assets/tribeimg/更多.png" alt="">                
                </div>
                <div class="info-news">
                       <div class="info-forward1">
                           <div class="forward-head">
                             <van-image
                       class="forward-info-head"
                       round
                       width="30px"
                       height="30px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />  
                        <p class="forward-name">冰激凌化了吗</p>
                            <div class="forward-follow">
                      <p class="forward-attention">+ 关注</p>
                             </div> 
                      </div>
                      <div class="forward-news-title">                    
                      </div>               
                      <div class="forward-background11">
                        <div>
                           <img class="forward-backrground1" src="../../assets/tribeimg/Snipaste5.png" > 
                        </div>
                          <div class="infos"><p>买桃者说第290|期先做成一件事</p></div>
                      </div>
                       </div>
                </div>  
              </div>
                <div class="job-want11">
                   <img class="snipaste2" src="../../assets/tribeimg/Snipaste2.png">
                   <p class="snipaste2-text"> 卖桃者说</p>   
                </div>
                <div class="new-image">
                   <img class="news-image" src="../../assets/tribeimg/消息.png">
                   <p class="news-number">0</p>
                    <img class="news-image1" src="../../assets/tribeimg/火焰.png">
                   <p class="news-number">2</p>
                    <img class="news-image2" src="../../assets/tribeimg/3.1转发.png">
                 
                </div>

                <van-divider class="van-divider" :style="{ color: '#dbdbdb' }"> </van-divider>    
              </div>

              <div class="guanzhu" >
              <div class="info-title">
                <div class="info-title-info-me">
                  <div class="info-image">
                  <van-image
                  class="info-head"
                       round
                       width="40px"
                       height="40px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />
                 </div>
                 <div class="info-name-time">
                    <p class="info-name">每天晒刷牙</p>
                    <p class="info-time">1分钟前</p>
                </div>
                  <div class="info-follow">
                      <p class="info-pay-attention">+ 关注</p>
                  </div>                
                    <img class="info-more" src="../../assets/tribeimg/更多.png" alt="">                
                </div>
                <div class="info-news">
                       <p>最后把我的体验报告要回来了</p> 
                       <div class="info-forward">
                           <div class="forward-head">
                             <van-image
                       class="forward-info-head"
                       round
                       width="30px"
                       height="30px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg" />  
                        <p class="forward-name">每天晒白牙</p>
                            <div class="forward-follow">
                      <p class="forward-attention">+ 关注</p>
                             </div> 
                      </div>
                      <div class="forward-news-title">
                         <p class="forward-news">只干过一天外包，就辞职了，之前接了一个
                        外包到移动的offer，面试的时候说做Java开发，
                        第一天去了后，让我学下安卓测试，我也没吱声，
                        第二天就辞职了,后..
                      </p>
                      </div>               
                      <div class="forward-background">
                        <div>
                           <img class="forward-backrground1" src="../../assets/tribeimg/Snipaste1.png" > 
                        </div>
                          <div class="infos"><p>外包不也是写程序吗？有什么..</p></div>
                      </div>
                       </div>
                </div>  
              </div>
                <div class="job-want">
                   <img class="snipaste2" src="../../assets/tribeimg/Snipaste2.png">
                   <p class="snipaste2-text"> 招聘求职</p>   
                </div>
                <div class="new-image">
                   <img class="news-image" src="../../assets/tribeimg/消息.png">
                   <p class="news-number">0</p>
                    <img class="news-image1" src="../../assets/tribeimg/火焰.png">
                   <p class="news-number">2</p>
                    <img class="news-image2" src="../../assets/tribeimg/3.1转发.png">
                 
                </div>
                <div class="news-image3">
                 <img class="snipaste4"  src="../../assets/tribeimg/Snipaste4.png">
                 <p class="snipaste4-text">46, Phoenix</p>
                </div>
                <van-divider class="van-divider" :style="{ color: '#dbdbdb' }"> </van-divider>

                
              </div>
       </van-tab>
      <van-tab>
        <div slot="title">全部</div>
        <div>详情内容</div>
      </van-tab>
      <van-tab>
        <div slot="title">精华</div>
        <div>评论内容</div>
      </van-tab>
    </van-tabs>
        </div>
  <!-- <div class="trible-title-image">
     <img class="tribe-me" src="../../assets/tribeimg/我的.png" alt="">
     <img class="tongji" src="../../assets/img/统计.png" alt="">
  </div> -->

  </div>
</div>
 
</template>

<script>
export default {
 data() {
    return {
      active: 2,
    };
  },
}
</script>

<style>
.tribe-fen{
  display: flex;
}
.tribe-title{
    margin-top: 1rem;
    width: 300px;
    height: 3rem;
}
.guanzhu{
    width: 100vw;
    
}
.trible-title-image{
  margin-top: 1rem;
  margin: 20px;
}
.tribe-me{
  margin-top: 0.5rem;
}
.tongji{
  margin-left: 20px;
}
.info-title{
  margin-left: 1rem;
  width: 90%;
  margin-top: 2rem;
  height: 20rem;
}
.info-title-info-me{
  display: flex;
  height: 50px;
  width:100%;
}
.info-image{
  width: 80px;
  height: 10rem;
}
.info-head{
  margin-top: 0.5rem;
}
.info-name-time{
  text-align: left;
  height: 50px;
  width: 200px;
}
.info-name{
  margin-top: 0.5rem;
  font-size: 15px;
}
.info-time{
  margin-top: -1rem;
  font-size: 13px;
  color: #d2d2d2;
}
.info-follow{
  display: flex;
  border-radius: 50px;
  margin-left: 0.5rem;
  margin-top: 0.8rem;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.info-pay-attention{
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 14px;
  color: #fa8818;
}
.info-more{
  float: right;
  margin-left: 1rem;
  margin-top: 0.8rem;
  height: 20px;
}
.info-news{
  margin-top: -1rem;
  margin-left: 80px;
  text-align: left;
}
.info-forward{
  border-radius: 5px;
  height: 13rem;
  background-color: #f5f6fa;
}
.forward-head{ 
  display: flex;
  height: 3rem;

}
.forward-info-head{
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.forward-name{
  color: #717880;
  font-size: 15px;
  margin-left: 0.5rem;
  margin-top: 0.7rem;
}
.forward-follow{
  display: flex;
  border-radius: 50px;
  margin-left: 6.5rem;
  margin-top: 0.6rem;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.forward-attention{
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 14px;
  color: #fa8818;
}
.forward-news-title{
  height: 5rem;
}
.forward-news{
  color: #717880;
  font-size: 15px;
  margin-left: 0.5rem;
  margin-top: -0.5rem;
}
.forward-background{

  margin-top: 1rem;
  margin-left: 1rem;
  width: 90%;
  height: 4rem;
  background-color: #ffffff;
}
.forward-backrground1{
  float: left;
  border-radius: 2px;
   margin-top: 0.5rem;
   margin-left: 0.5rem;
}
.infos{
  margin-left: 0.2rem;
  margin-top: 0.5rem;
 float: left;
 font-size: 13px;
}
.job-want{
   display: flex;
  border-radius: 50px;
  margin-left: 6rem;
  margin-top: -.5rem;
  width: 80px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.snipaste2{
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  width: 10px;
  height: 1rem;
}
.snipaste2-text{
  color: #fa8818;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  font-size: 10px;
}
.new-image{
  margin-top: 1rem;
  display: flex;
  margin-left: 6rem;
  width: 90%;
  height: 2rem;
}
.news-image{
  height: 25px;
  width: 25px;
}
.news-number{
  color: #717880;
  font-size: 15px;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.news-image1{
  margin-left: 100px;
  height: 25px;
  width: 25px;
}
.news-image2{
  margin-left: 100px;
  height: 25px;
  width: 25px;
}
.news-image3{
  display: flex;
  margin-left: 6rem;
  width: 90%;
  height: 2rem; 
}
.snipaste4{
  width: 40px;
  height: 1rem;
}
.snipaste4-text{
  margin-top: 0rem;
  margin-left: 0.5rem;
  font-size: 14px;
}
.van-divider{
  margin-top: 0rem;
}
.info-forward1{
  margin-top: 2rem;
  border-radius: 5px;
  height: 8rem;
  background-color: #f5f6fa;
}
.forward-background11{
  margin-top: -5rem;
  margin-left: 1rem;
  width: 90%;
  height: 4rem;
  background-color: #ffffff;
}
.job-want11{
   display: flex;
  border-radius: 50px;
  margin-left: 6rem;
  margin-top: -7rem;
  width: 80px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
</style>