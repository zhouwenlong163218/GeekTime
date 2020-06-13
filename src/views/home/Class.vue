<template>
<div class="tribe">
  <div class="tribe-fen">
 <div class="tribe-title">
         <van-tabs
         title-inactive-color="#d2d2d2"
          title-active-color="#3d3d3d"
          :active="active"  :color="'#fa8818'">
           <van-tab title="课程">
          <div class="class-tab">
               <div class="learing-path">
                    <p class="learn-text">学习路劲</p>
                    <p class="learn-text1">查看全部</p>
               </div>
               <div>
                   <div class="bigd">
              <div class="swipe-image">
                <div class="swipe-image1" >
                  <img src="../../assets/classimg/classimge1.png" >
                </div>
                <div class="swipe-image1">
                  <img src="../../assets/classimg/classimge1.png" ></div>
                <div class="swipe-image1">
                  <img src="../../assets/classimg/classimge1.png" ></div>
                  <div class="swipe-image1">
                  <img src="../../assets/classimg/classimge1.png" ></div>
            </div>
        </div>
               </div>
                <div class="learing-path">
                    <p class="learn-text">课程方向</p>
                    <p class="learn-text1">查看全部</p>
               </div>
               <div class="course-direction">  
                 <div class="course-direction1">
                    <div class="course">
                     <p>计算机专业课</p>
                 </div>
                    <div class="course1">
                     <p>后端&加框</p>
                 </div>
                    <div class="course2">
                     <p>前端&移动</p>
                 </div>
                   </div>    
                   <div class="course-direction2">
                    <div class="course11">
                     <p>产品&运营</p>
                 </div>
                    <div class="course12">
                     <p class="course12-text">人工智能&大数据</p>
                 </div>
                    <div class="course13">
                     <p>运维&测试</p>
                 </div>
                   </div>  
                  
                    <div class="course-direction2">
                    <div class="course">
                     <p>管理 & 效率</p>
                 </div>
                    <div class="course1">
                     <p>职场软技能</p>
                 </div>
                    <div class="course2">
                     <p>面试专场</p>
                 </div>
                   </div>    
               </div>
               <div class="learing-path">
                    <p class="learn-text">全部课程</p>
               </div>
              <div>
                <div class="drop-down-box">
                  <div  class="drop-down-box1" >
                         <van-dropdown-menu active-color="#ee8a27"> 
                  <van-dropdown-item v-model="value1" :options="option1" />
                  <van-dropdown-item v-model="value2" :options="option2" />
                  </van-dropdown-menu>
                  </div >
                 
                   <p class="drop-text">上新</p>
                  <img  class="drop-text1" src="../../assets/classimg/classimage2.png" alt="">    
                </div>
                </div>

                <div class="class-people">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people1.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">罗剑锋的C++实战笔记</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">罗剑锋</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">高级研发工程师</p>
                        </div>
                    </div> 
                    <p class="info-text">48讲 | 2424人已学习</p> 
                    <div class="name-price">
                         <div  class="name-price-bord">
                            <p class="name-price-text">新人首单</p>
                         </div>
                         <p  class="name-price-text">￥9.9</p>
                         <img  class="price-back" src="../../assets/classimg/price.png" alt="">

                          <div class="info-follow">
                      <p class="info-pay-attention">试读</p>
                  </div> 
                    </div>              
                  </div> 
                </div>
                   <div class="class-people">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people2.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">互联网人的英语私教课</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">陈亦峰</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">同传译员，原北外高级翻...</p>
                        </div>
                    </div> 
                    <p class="info-text">48讲 | 5655人已学习</p> 
                    <div class="name-price">
                         <div  class="name-price-bord">
                            <p class="name-price-text">新人首单</p>
                         </div>
                         <p  class="name-price-text">￥9.9</p>
                         <img  class="price-back" src="../../assets/classimg/price.png" alt="">

                          <div class="info-follow">
                      <p class="info-pay-attention">试读</p>
                  </div> 
                    </div>              
                  </div> 
                </div>
                
                <div class="class-people">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people1.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">罗剑锋的C++实战笔记</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">罗剑锋</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">高级研发工程师</p>
                        </div>
                    </div> 
                    <p class="info-text">48讲 | 2424人已学习</p> 
                    <div class="name-price">
                         <div  class="name-price-bord">
                            <p class="name-price-text">新人首单</p>
                         </div>
                         <p  class="name-price-text">￥9.9</p>
                         <img  class="price-back" src="../../assets/classimg/price.png" alt="">

                          <div class="info-follow">
                      <p class="info-pay-attention">试读</p>
                  </div> 
                    </div>              
                  </div> 
                </div>
                   <div class="class-people">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people2.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">互联网人的英语私教课</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">陈亦峰</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">同传译员，原北外高级翻...</p>
                        </div>
                    </div> 
                    <p class="info-text">48讲 | 5655人已学习</p> 
                    <div class="name-price">
                         <div  class="name-price-bord">
                            <p class="name-price-text">新人首单</p>
                         </div>
                         <p  class="name-price-text">￥9.9</p>
                         <img  class="price-back" src="../../assets/classimg/price.png" alt="">

                          <div class="info-follow">
                      <p class="info-pay-attention">试读</p>
                  </div> 
                    </div>              
                  </div> 
                </div>
          </div>

       </van-tab>
      <van-tab>
        <div slot="title">训练营</div>
        <div class="class-tab">

        </div>
      </van-tab>
      <van-tab>
        <div slot="title">每日一课</div>
        <div class="time-class">
          <p>132</p>
          <p>123</p>
        </div>
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
      value1: 0,
      value2: 'a',
      option1: [
        { text: '课程形式', value: 0 },
        { text: '专栏', value: 1 },
        { text: '做课', value: 2 },
      ],
      option2: [
        { text: '订阅状态', value: 'a' },
        { text: '全部', value: 'b' },
        { text: '仅看未订阅', value: 'c' },
      ],
    };
  },
}
</script>

<style>
.class-tab{
  margin-bottom: 5rem;
  width: 100vw;
 
}
.learing-path{
  display: flex;
}
.learn-text{
  margin-left: 1.5rem;
  font-weight: bold;
  font-size: 18px;
}
.learn-text1{

  margin-left: 15rem;
  font-size: 13px;
   color: #bfbfbf;
}
 .bigd{
       margin-left: 0.5rem;
        height: 10%;
        width: 100%;
        overflow-x: scroll;
        box-sizing: border-box;
      
    }
.swipe-image{
     width: 220%;
     height: 80%;
 
}
.swipe-image1{
 width: 25%;
 height: 75%;
  float: left;
   box-sizing: border-box;
}
.course-direction{

  margin-left: 1.5rem;
  width: 90%;
}
.course-direction1{
  display: flex;
}
.course{
  font-size: 13px;
  text-align: center;
  color: #ae7145;
  border-radius: 5px;
  background-color: #fcf5ed;
  width: 7rem;
  height: 3rem;
}
.course1{
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 2rem;
  background-color: #f6f7fc;
  width: 7rem;
  height: 3rem;
}
.course2{
  font-size: 13px;
  text-align: center;
  color: #ae7145;
  border-radius: 5px;
  margin-left: 2rem;
  background-color: #fcf5ed;
  width: 7rem;
  height: 3rem;
}
.course-direction2{
  margin-top: 1rem;
  display: flex;
}
.course11{
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  background-color: #f6f7fc;
  width: 7rem;
  height: 3rem;
}
.course12{
  color: #ae7145;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 2rem;
  background-color: #fcf5ed;
  width: 7rem;
  height: 3rem;
}
.course12-text{
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  text-align: center;
}
.course13{
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  margin-left: 2rem;
  background-color: #f6f7fc;
  width: 7rem;
  height: 3rem;
}
.drop-down-box{

   height: 3rem;
 
  display: flex;
  margin-left: 1.5rem;
}
.drop-down-box1{
width: 15rem;
}
.drop-text{
  color: #ee8a27;
  font-size: 14px;
margin-left: 4rem;
}
.drop-text1{
height: 0.7rem;
margin-left: 0.5rem;
margin-top: 1.2rem;
}
.class-people{
  margin-top: 2rem;
  display: flex;
  margin-left: 1.5rem;
  width: 90%;
 
}

.people1{
  height: 6.5rem;
  width: 6rem;
}
.information-background{
  margin-left: 0.8rem;
}
.class-name{
  height: 1.5rem;
  background-color: #f1f1f1;
}
.name-title{
  margin-top: -0.5rem;
  display: flex;
}
.name-text{
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  margin-top: 0rem;
color: #777777;
font-size: 14px;
}
.class-name1{
  text-align: center;
  margin-left: 1rem;
  height: 1.5rem;
  background-color: #f1f1f1;
}
.info-text{
  margin-top: 0rem;
  text-align: left;
  color: #a0a0a0;
  font-size: 13px;
}
.info-text-z{
  text-align: left;
  margin-top: 0rem;
}
.name-price{
  display: flex;
  margin-top: -0.3rem;
}
.name-price-bord{
  margin-top: 0rem;
  border-radius: 5px;
  height: 1.2rem;
 text-align: center;
  border:1px solid #fb8819;
}
.name-price-text{
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0rem;
  text-align: center;
  font-size: 13px;
  color: #fb8819;
}
.price-back{
  margin-top: 0.3rem;
  height: 0.8rem;
}
.info-follow{
  text-align: center;
  border-radius: 50px;
  margin-left: 4.5rem;
 
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.info-pay-attention{
  margin-top: 0rem;
  margin-left: 0.3rem;
  text-align: center;
  font-size: 14px;
  color: #fa8818;
}
</style>