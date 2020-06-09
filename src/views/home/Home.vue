<template>
  <div>
      <div class="title1">
       <div>
           <h3 class="faxian">发现</h3>
       </div>
       <div class="imgae">
           <img class="image-shake" src="../../assets/img/shake-icon.png"/>
       </div>
      </div>
      <div>
          <van-search shape="round" v-model="value" placeholder="搜索课程、课程的内容、每日一课等" />
      </div>
        <div>
           <img  src="../../assets/img/image1.png"/>
       </div>
       
       <div class="mac-talk">
           <div class="mac-background">
            <van-image class="mac-talk1" round 
           :src="require('../../assets/img/mac-talk.jpg')">
           </van-image>
           <p class="text-mai">卖桃着说</p>
           <van-icon class="icon-arrow" name="arrow" />
           </div>
           <div>
            <img class="image-bofang" src="../../assets/img/bofang.png"> 
            <p class="text-mac">第286期 | 如何从容德应对生产事故？</p>   
           </div>      
       </div>
      <div class="title-jike">
           <span class="text-color">|</span>
           <span class="text-jike">极客Live</span>
           <p class="text-zhibo">直播预告</p>
      </div>
      <div class="organization-bottom">
            <div class="organization-information">         
                <img class="icon-cal" src="../../assets/img/icon-cal.png" >
                <span class="time">2020年06月09日 20:00</span>
                <p  class="python">Python 有哪些酷炫的语言特</p>
                <p class="python1">性？</p>
                <p></p>
                <p class="people">尹会生现场手把手演示代码</p>
            </div>
            <div class="organization-image">
                <img class="organization-renwu" src="../../assets/img/mac-talk.jpg" >
            </div>
              
     </div>
     <div class="xian">
          <van-divider />
     </div>
     <div>
         <img class="guanggao" src="../../assets/img/guanggao.jpg" alt="">
     </div>
      <div class="title-jike">
           <span class="text-color">|</span>
           <span class="text-jike">极客视点</span>
           <p class="text-zhibo">查看全部</p>
      </div>
       <div>
            <div>
            <img class="image-bofang1" src="../../assets/img/bofang.png"> 
            <p class="text-jueding">决定中台成败的四个要素</p>   
           </div> 
           <div>
            <img class="image-bofang1" src="../../assets/img/bofang.png"> 
            <p class="text-wulian">对于物联网来说，区块链到底有什么用？</p>   
           </div> 
           <div>
            <img class="image-bofang1" src="../../assets/img/bofang.png"> 
            <p class="text-rencai">人才管理|如何把握10个涌流的新机遇?</p>   
           </div>  
             <div>
            <img class="image-bofang1" src="../../assets/img/bofang.png"> 
            <p class="text-zhongguo">中国开源世界中的重要玩家</p>   
           </div> 
       </div>
        <div class="xian">
          <van-divider />
        </div>
          <div>
         <img class="guanggao" src="../../assets/img/guanggao.jpg" alt="">
         </div>
        <div class="title-jike">
           <span class="text-color">|</span>
           <span class="text-jike">极客大学</span>
           <p class="text-zhibo">查看全部</p>
      </div> 
     
  <div>
    
       <div class="daxue-back0">
         <div class="daxue-back">
             <img class="xunlianying"  src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">前端进阶训练营</p>
             <p class="text-xunlianying2">70天刻意练习，彻底攻克算法</p>
             <p class="text-xunlianying2">覃超 前 Facebook 工程师</p>
             <p class="text-xunlianying3">第11期 6月22日 开课</p>
         </div>
             <div class="daxue-back1">
             <img class="xunlianying" src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying">前端进阶训练营</p>
             <p class="text-xunlianying2">5个月进阶资深前端工程师</p>
             <p class="text-xunlianying2">程眩非(winter)前手机淘宝...</p>
             <p class="text-xunlianying3">第2期 6月29日 开课</p>
         </div>
     </div>
       <div class="daxue-back0">
         <div class="daxue-back">
             <img class="xunlianying"  src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">前端进阶训练营</p>
             <p class="text-xunlianying2">70天刻意练习，彻底攻克算法</p>
             <p class="text-xunlianying2">覃超 前 Facebook 工程师</p>
             <p class="text-xunlianying3">第11期 6月22日 开课</p>
         </div>
             <div class="daxue-back1">
             <img class="xunlianying" src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying">前端进阶训练营</p>
             <p class="text-xunlianying2">5个月进阶资深前端工程师</p>
             <p class="text-xunlianying2">程眩非(winter)前手机淘宝...</p>
             <p class="text-xunlianying3">第2期 6月29日 开课</p>
           </div>
        </div>
  </div>
    <div>
         <div class="title-jike">
           <span class="text-color">|</span>
           <span class="text-jike">极客商店</span>
           <p class="text-zhibo">进入商店</p>
      </div>
      <div class="daxue-back0">
         <div class="daxue-back">
             <img class="shangdian"  src="../../assets/img/mac-talk.jpg" >
             <p class="text-shangdian">极客时间 X 印 ...</p>
             <p class="text-xunlianying2">购￥300极客时间...</p>
             <p class="text-xunlianying3">￥ 299</p>
         </div>
         <div class="daxue-back1">
             <img class="shangdian" src="../../assets/img/mac-talk.jpg" >
             <p class="text-shangdian">百万用户充值福利</p>
             <p class="text-xunlianying2">下单即增送爆款...</p>
             <p class="text-xunlianying3">￥ 500</p>
           </div>
            <div class="daxue-back1">
             <img class="shangdian" src="../../assets/img/mac-talk.jpg" >
             <p class="text-shangdian">极客时间VIP年卡</p>
             <p class="text-xunlianying2">畅学专栏视频微课</p>
             <p class="text-xunlianying3">￥ 2999</p>
           </div>
        </div>
    </div> 
      
        <div>
         <div class="xian">
          <van-divider />
          </div> 
          <div class="title-jike">
           <span class="text-color">|</span>
           <span class="text-jike">每日一课</span>
           <p class="text-zhibo">查看全部 </p> 
        </div> 
      <div class="daxue-back0">
         <div class="daxue-back">
             <img class="xunlianying"  src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">如何做服务端稳定性测试？</p>
             <p class="text-xunlianying2">丁向惠 贝壳找房资深测试...</p>
         </div>
             <div class="daxue-back1">
             <img class="xunlianying" src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">如何通过反垃圾邮件引擎来理解机器学习？</p>
             <p class="text-xunlianying2">朱维刚 微软人工智能金牌导师</p>
          </div>
     </div>  
       <div class="daxue-back0">
         <div class="daxue-back">
             <img class="xunlianying"  src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">如何采用“防御”思想提高服务端可用性？</p>
             <p class="text-xunlianying2">丁向惠 贝壳找房资深测试...</p>
         </div>
             <div class="daxue-back1">
             <img class="xunlianying" src="../../assets/img/mac-talk.jpg" >
             <p class="text-xunlianying1">微软务的SLA服务可用性等于4个9，我是怎么...</p>
             <p class="text-xunlianying2">黄信埃 易车技术总监</p>
          </div> 
                
     </div>
    </div>
    <div class="huan">
    
        <div>
            <img class="huanyi" src="../../assets/img/huan.png" >
        </div>        
              <div>
                   <p class="huanyihuan"> 换一换</p>
              </div>            
         </div>
    <div class="VIP">

    </div>
  
</div>

</template>

<script>
export default {
 data() {
    return {
      value: '',
    };
 }
}
</script>

<style>
.title1{
    display:flex;
}
.faxian{
    margin-top: 1.5rem;
  margin-left: 15px;
}
.imgae{
    margin-left: 315px;
}
.image-shake{
    margin-top: 1.5rem;
     width: 25px;
     height:25px;
}
.mac-talk{
    box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
    margin-top: 1rem;
    height: 5rem;
    width: 93%;
    margin-left: 15px;
}
.mac-talk1{
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
    margin-left: 1rem; 
}
.mac-background{
    display: flex;
}
.text-mai{
    font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
    margin-left: 1rem;
    font-weight: 500;
}
.icon-arrow{
  margin-top: 1.2rem;
  margin-left: 14rem;
}
.image-bofang{
  margin-top: -1rem;
  margin-left: -21rem;
}
.text-mac{
    font-size: 13px;
    margin-top: -1.4rem;
    margin-left: -5.6rem;
}
.title-jike{
    margin-top: 1rem;
}
.text-color{
    margin-left: -19rem;
   font-size: 1.5rem;
   color: #FFB90F;
}
.text-jike{
    margin-left: 1rem;
}
.text-zhibo{
  margin-top: -1.3rem;
  margin-left: 21rem;
  font-size: 13px;
   color: #bfbfbf;
}
.organization-bottom{
    width: 300px;
    height: 80px;
    margin-left: 10px;
    display: flex;
}
.icon-cal{
    margin-left: -2.3rem;
    width: 0.8rem;
    height: 0.8rem;
}
.python{
    margin-top: 0rem;
    margin-left: -0.5rem;
    text-align: left;
}
.python1{
    margin-left: -0.5rem;
    text-align: left;
    margin-top: -1rem;
}
.time{
    margin-left: -0.5rem;
    margin-left: 0.5rem;
    font-size: 14px;
    color: #bfbfbf;
}
.organization-information{
    margin-left: 10px;
}
.people{
    margin-left: -0.5rem;
    margin-top: -0.7rem;
    text-align: left;
    font-size: 14px;
    color: #bfbfbf;
}

.organization-renwu{
    margin-top: 0.5rem;
    margin-right: -19rem;
    width: 5rem;
    height: 5rem;
}
.xian{  
    margin-top: 2rem;
    margin-left: 0.8rem;
}
.guanggao{
    width: 97%;
    height: 5rem;
}
.shidian{
   display: flex;
}
.image-bofang1{
    margin-right: 23.9rem;
}
.text-jueding{
font-size: 13px;
    margin-top: -1.3rem;
    margin-right: 13rem;
}
.text-wulian{
    font-size: 13px;
    margin-top: -1.3rem;
    margin-right: 7.5rem;
}
.text-rencai{
    font-size: 13px;
    margin-top: -1.3rem;
    margin-right: 8.7rem;
}
.text-zhongguo{
    font-size: 13px;
    margin-top: -1.3rem;
    margin-right: 12.75rem;
}
.jikedaxue{
    display: flex;
}
.daxue-image{
    margin: 15px;
    width: 11rem;
    height: 6rem;
}
.xunlianying1{
    margin-left: 5rem;
}
.daxue-back0{
    margin-top: 2rem;
     display:flex;
}
.daxue-back{
    margin-left: 0.9rem;
    width: 180px;
    height: 200px;
}
.daxue-back1{
    margin-left: 1.6rem;
    width: 180px;
    height: 200px;
}
.xunlianying{
    width: 11rem;
    height: 6rem;  
}
.text-xunlianying{
text-align: left;
}
.text-xunlianying1{
text-align: left;
}
.text-xunlianying2{
text-align: left;
margin-top: -0.5rem;
font-size: 13px;
color: #bfbfbf;
}
.text-xunlianying3{
text-align: left;
margin-top: -0.5rem;
font-size: 13px;
color: #FFB90F;
}
.shangdian{
    text-align: left;
   width: 6.5rem;
    height: 5rem; 
}
.text-shangdian{
text-align: left;
margin-top: 0.5rem;
font-size: 13px;
}
.huan{
    margin-left: 10rem;
    display:flex;

}
.huanyi{
    margin-top: 1rem;
}
.huanyihuan{
    margin-left: 1rem;
    font-size: 14px;
    color: #FFB90F;   
}
.VIP{
    margin: 1rem;
    background-color: seagreen;
    width: 93%;
    height: 3rem;
}
</style>