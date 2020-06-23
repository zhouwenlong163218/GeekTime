<template>
<div class="tribe">
  <div class="tribe-fen">
 <div class="tribe-title">
         <van-tabs
         line-width="20px"
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
            <div class="swipe-background">
               <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  :show-indicators="false">
  <van-swipe-item>
    <img class="swipe-image101" src="../../assets/classimg/swipe-image2.png" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img class="swipe-image101" src="../../assets/classimg/swipe-image3.png" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img class="swipe-image101" src="../../assets/classimg/swipe-image1.png" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img class="swipe-image101" src="../../assets/classimg/swipe-image4.png" alt="">
  </van-swipe-item>
</van-swipe>
            </div>
            <div class="training-camp-text">
                   <p class="training-text1">训练营</p>
                   <p class="training-text2">去我的教室学习</p>
            </div>
            <div>
              <div class="class-people101">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people.101.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">Python 进阶训练营</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">尹会生</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">金山西山居运维总监</p>
                        </div>
                    </div> 
                    <p class="info-text">最近开营: 第1期·6月22日</p> 
                    <div class="name-price">
                        
                         <p  class="name-price-text101">￥1299</p>
                         <p class="name-price-text101-1">￥1299</p>

                          <div class="info-follow101">
                      <p class="info-pay-attention">立即报名</p>
                  </div> 
                    </div>              
                  </div>   
                </div>
                  <div class="class-people101">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people.102.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">算法训练营</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">谭超</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">前 Facebook 工程师</p>
                        </div>
                    </div> 
                    <p class="info-text">最近开营: 第1期·6月22日</p> 
                    <div class="name-price">
                        
                         <p  class="name-price-text101">￥1299</p>
                         <p class="name-price-text101-1">￥2499</p>

                          <div class="info-follow101">
                      <p class="info-pay-attention">立即报名</p>
                  </div> 
                    </div>              
                  </div>   
                </div>

                 <div class="class-people101">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people.101.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">Python 进阶训练营</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">尹会生</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">金山西山居运维总监</p>
                        </div>
                    </div> 
                    <p class="info-text">最近开营: 第1期·6月22日</p> 
                    <div class="name-price">
                        
                         <p  class="name-price-text101">￥1299</p>
                         <p class="name-price-text101-1">￥1299</p>

                          <div class="info-follow101">
                      <p class="info-pay-attention">立即报名</p>
                  </div> 
                    </div>              
                  </div>   
                </div>
                  <div class="class-people101">
                  <div class="class-people1">
                     <img  class="people1" src="../../assets/classimg/people.102.png" alt="">   
                  </div>
                  <div class="information-background">
                    <p class="info-text-z">算法训练营</p>
                    <div class="name-title">
                        <div class="class-name">
                         <p class="name-text">谭超</p>
                        </div>
                         <div class="class-name1">
                         <p class="name-text">前 Facebook 工程师</p>
                        </div>
                    </div> 
                    <p class="info-text">最近开营: 第1期·6月22日</p> 
                    <div class="name-price">
                        
                         <p  class="name-price-text101">￥1299</p>
                         <p class="name-price-text101-1">￥2499</p>

                          <div class="info-follow101">
                      <p class="info-pay-attention">立即报名</p>
                  </div> 
                    </div>              
                  </div>   
                </div>
                <div class="training-camp-text">
                   <p class="training-text1">体验课</p>         
            </div>
            </div>
        
                <div >
                  <van-swipe :loop="false" :width="300"  :show-indicators="false">
                   <van-swipe-item>
                <img class="swipe-image101-5" src="../../assets/classimg/swipe-image5.png" >
               </van-swipe-item>
               <van-swipe-item>
                <img class="swipe-image101-5" src="../../assets/classimg/swipe-image6.png" >
              </van-swipe-item>
               </van-swipe>
                </div>
                 <div class="training-camp-text">
                   <p class="training-text1">选课服务</p></div>
                   <img class="lesson-lesson" src="../../assets/classimg/lesson1.png" alt="">
                 <!-- <div>
                     <div class="heji1">
                <div class="nainshao">
                 <div   class="nainshao-image1">
               <img class="boshi-image" src="../../assets/classimg/icon-lesson.png" alt="">
                </div>
                <div style="margin-left:16px"> 
                 <p style="margin-top:1.5rem">咨询选课</p>            
                </div>  
            </div >
             
                 <img class="lesson-lesson" src="../../assets/classimg/lesson.png" alt=""> 

              </div>  
              
                 </div> -->
             <div class="training-camp-text">
                   <p class="training-text1">Offer榜</p></div>
                 <img class="lesson-lesson1" src="../../assets/classimg/offer-image.png" alt="">
                <div class="huan">
                   <div>
                    <img class="huanyi" src="../../assets/img/huan.png" >
                 </div>        
              <div>
                   <p class="huanyihuan"> 换一换</p>
              </div>
                </div>
                  <div class="xian">
          <van-divider  :style="{ color: '#dbdbdb' }" />
             </div>
             <div class="training-camp-text">
                   <p class="training-text1">学员故事</p></div>
                
                <div class="nainshao1">
                 <div class="nainshao2">
                   <p class="nainshao3">程序员养成记 | 如何用2个月攻克算法？</p>
                   <div class="nainshao101-1">
                     <van-image round  width="2rem" height="2rem"
                     src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                     <p  class="info-text1"> 笙南 算法训练营 1、2期学员</p>
                     
                   </div>
                   <p class="story-text">以前日刷一题想都不敢想，但打好扎实得数据结构基础之后，
                       我曾用两周时间，刷了大学40道题，覆盖数组、链表、动态规则等....
                     </p>
                </div>   
                </div>

                <div class="nainshao1">
                 <div class="nainshao2">
                   <p class="nainshao3">程序员养成记 | 如何用2个月攻克算法？</p>
                   <div class="nainshao101-1">
                     <van-image round  width="2rem" height="2rem"
                     src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                     <p  class="info-text1"> 笙南 算法训练营 1、2期学员</p>
                     
                   </div>
                   <p class="story-text">以前日刷一题想都不敢想，但打好扎实得数据结构基础之后，
                       我曾用两周时间，刷了大学40道题，覆盖数组、链表、动态规则等....
                     </p>
                </div>   
                </div>
                <div class="nainshao1">
                 <div class="nainshao2">
                   <p class="nainshao3">程序员养成记 | 如何用2个月攻克算法？</p>
                   <div class="nainshao101-1">
                     <van-image round  width="2rem" height="2rem"
                     src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                     <p  class="info-text1"> 笙南 算法训练营 1、2期学员</p>
                     
                   </div>
                   <p class="story-text">以前日刷一题想都不敢想，但打好扎实得数据结构基础之后，
                       我曾用两周时间，刷了大学40道题，覆盖数组、链表、动态规则等....
                     </p>
                </div>   
                </div>
                
                <div class="nainshao1">
                 <div class="nainshao2">
                   <p class="nainshao3">程序员养成记 | 如何用2个月攻克算法？</p>
                   <div class="nainshao101-1">
                     <van-image round  width="2rem" height="2rem"
                     src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                     <p  class="info-text1"> 笙南 算法训练营 1、2期学员</p>
                     
                   </div>
                   <p class="story-text">以前日刷一题想都不敢想，但打好扎实得数据结构基础之后，
                       我曾用两周时间，刷了大学40道题，覆盖数组、链表、动态规则等....
                     </p>
                </div>   
                </div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">每日一课</div>
        <div class="time-class">
          <div>
            <div class="class-tab">
               <div><router-link to="search">
          <van-search shape="round" v-model="value"
           placeholder="搜索每日一课" />         
      </router-link>      
      </div>
      <div class="box">
        <div class="day-lesson-image1">
           <van-image
          round
          width="3rem"
        height="3rem"
         src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </div>
          <div  class="day-lesson-name1">
           <div class="day-lesson-name">
               <p>Geek_8662c2</p>
               <div class="day-lesson-vip">
                   <p class="day-lesson-vip1">VIP</p>                 
               </div>
               <p class="day-lesson-vip2">未开通</p>
             </div>
             <p class="day-lesson-text">我的每日一课 ></p>
          </div>
            <div class="vip-kaitong">
              <p class="vip-kaitong1">开通</p>
            </div>
           </div>
           <div class="day-lesson-height">
              <div class="training-camp-text">
                   <p class="training-text1">推荐分类</p>
                   <img class="day-lesson-right" src="../../assets/img/right.png" alt="">
            </div>
            
           </div>
           
           <div class="course-direction">  
                 <div class="course-direction1">
                    <div class="course">
                     <p>Linux</p>
                 </div>
                    <div class="course1">
                     <p>架构设计</p>
                 </div>
                    <div class="course2">
                     <p>性能优化</p>
                 </div>
                   </div>    
                  <div class="course-direction2">
                    <div class="course11">
                     <p>微服务</p>
                 </div>
                    <div class="course12">
                     <p class="course12-text">编程语言</p>
                 </div>
                    <div class="course13">
                     <p>中台</p>
                 </div>
                   </div>  
            </div> 

              <div class="day-lesson-height">
              <div class="training-camp-text">
                   <p class="training-text1">最近更新</p>
                   <img class="day-lesson-right" src="../../assets/img/right.png" alt="">
            </div>
           </div>
               <div class="day-lesson-video1">
                 <img class="video-image1" src="../../assets/classimg/shiping-image1.png" alt="">
               </div>
                 <div class="day-lesson-viedo2">
                <P class="day-lesson-viedo2-text">如何从蛛丝马迹中分析系统空间···</P>
                <div  class="day-lesson-viedo3">
                   <p  class="info-text">李竹杨 平安壹钱包架构师</p>
                     <div class="info-follow-day2">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                </div>     
              </div >
              <div  >
                 <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/video1.png" alt=""> 
                </div> 
                <div class="video-2">
                  <div class="video-3">
                      <p  class="video-2-text">如何开发一个App Crash测试平台？</p>   
                     <p class="info-text-video">朱宏宝 贝壳找房资深工程师</p> 
                     <div class="info-follow-day1">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>               
              </div>

              <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/video2.png" alt=""> 
                </div> 
                <div class="video-2">
                  <div class="video-3">
                      <p  class="video-2-text">IOS卡顿分析万油金</p>  
                      <div class="day-info-bg">
                          <p class="info-text-video">屠丹 贝壳找房资深工程师</p> 
                      </div> 
                   
                     <div class="info-follow-day1">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>               
              </div>

              <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/viedo3.png" alt=""> 
                </div> 
                <div class="video-2">
                  <div class="video-3">
                      <p  class="video-2-text">如何做好容量评估？</p>  
                          <div class="day-info-bg">
                          <p class="info-text-video">黄信俊 易车技术总监</p>
                      </div>
                      
                     <div class="info-follow-day1">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>               
              </div>         
              </div>

              <div class="day-lesson-height">
              <div class="training-camp-text">
                   <p class="training-text1">精选合辑</p>
                   <img class="day-lesson-right" src="../../assets/img/right.png" alt="">
            </div> 
            </div>
              <div class="day-lesson-video1">
                 <img class="video-image1" src="../../assets/classimg/shiping-image2.png" alt="">
               </div>
               <div class="short-video">
                             <div class="video-2">
                  <div class="video-3">
                      <p  class="video-2-text">新版短视频？</p>   
                     
                     <div class="info-follow-day3">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>  
               </div>
       
                 <div  >
                 <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/video5.png" alt=""> 
                </div> 
                <div class="video-2">
                  <div class="video-3">
                      <p  class="video-2-text">全栈稳定性提升必备</p>   
                     <div class="info-follow-day11">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>               
              </div>

              <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/video6.png" alt=""> 
                </div> 
                <div class="video-2">
                 <div class="video-3">
                      <p  class="video-2-text">MySQL 难点解析</p>   
                     <div class="info-follow-day11">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>   
                </div>               
              </div>

              <div class="video4">
                <div class="video4-1">
                  <img class="video4-1-bg" src="../../assets/classimg/video7.png" alt=""> 
                </div> 
                <div class="video-2">
                   <div class="video-3">
                      <p  class="video-2-text">和田田一起学健身</p>   
                     <div class="info-follow-day11">
                      <p class="info-pay-attention">试看</p>
                  </div> 
                  </div>  
                </div>               
              </div>         
              </div> 
              <div class="day-lesson-height">
              <div class="training-camp-text">
                   <p class="training-text1">大会视频</p>
                   <img class="day-lesson-right" src="../../assets/img/right.png" alt="">
            </div> 
            </div >
            <div class="video8-bg"> 
                <img class="video8" src="../../assets/classimg/video9.png" alt="">
                
            </div>
          
            </div> 
               
           

          </div>
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
  width: 8rem;
  height: 3rem;
}
.course1{
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 1rem;
  background-color: #f6f7fc;
  width: 7rem;
  height: 3rem;
}
.course2{
  font-size: 13px;
  text-align: center;
  color: #ae7145;
  border-radius: 5px;
  margin-left: 1rem;
  background-color: #fcf5ed;
  width: 8rem;
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
  width: 8rem;
  height: 3rem;
}
.course12{
  color: #ae7145;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 1rem;
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
  margin-left: 1rem;
  background-color: #f6f7fc;
  width: 8rem;
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
  text-align: left;
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
  margin-top: 00.3rem;
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
.swipe-background{
  margin-top: 1rem;
  width: 90%;
  margin-left: 0.8rem;
  border-radius: 5px;
}
.swipe-image101{
  width: 100%;
  height: 7rem;
}
.training-camp-text{
  display: flex;
  widows: 90%; 
  margin-left: 0.8rem;

}
.training-text1{
  font-weight: 600;
  font-size: 18px;
}
.training-text2{
  margin-right: 0rem;
  margin-left: 14.5rem;
  font-size: 13px;
  color: #888888;
  margin-top: 1.5rem;
}
.class-people101{
  margin-top: 2rem;
  display: flex;
  margin-left: 0.8rem;
  width: 90%;
 
}
.info-follow101{
  text-align: center;
  border-radius: 50px;
  margin-left: 5.5rem;
  width: 80px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.name-price-text101{
  
  margin-left: 0rem;
  margin-right: 0.2rem;
  margin-top: 0rem;
  text-align: center;
  font-size: 15px;
  color: #fb8819;
}
.name-price-text101-1{
  text-decoration: line-through;
  margin-left: 0.5rem;
  margin-top: 0rem;
  text-align: left;
  color: #a0a0a0;
  font-size: 13px;
}

ceshi{
  height: 5rem;
  background-color: blue;
  
}
.swipe-image101-5{
  height: 10rem;
}
.heji1{
    height: 5rem;
    display: flex;
}
.nainshao{
  text-align: center;
    display: flex;
   box-shadow:#dbdbdb 0px 0px 5px;;
    margin-top: 1rem;
    width: 9rem;
    
    margin-left: 15px;
}
.nainshao-image1{
    margin-top: 1.5rem;
    margin-left: 1rem;
    height: 2rem;
    width: 2rem;
}
.boshi-image{
   height: 1.5rem;
    width: 1.5rem; 
}

.lesson-lesson{
  height: 5.5rem;
}
.lesson-lesson1{
  height: 20rem;
}
.huanyi{
    margin-top: 1rem;
}
.huanyihuan{
    margin-left: 1rem;
    font-size: 14px;
    color: #FFB90F;   
}
.huan{
 
  margin-left: 10rem;
  display: flex;
}
.xian{  
    margin-top: 0rem;
    margin-left: 0.8rem;
}
.nainshao1{    
   width: 90%;
   box-shadow:#dbdbdb 0px 0px 5px;;
    margin-top: 1rem;
 height: 11rem;
    margin-left: 15px;
    margin-right: 15px;
    
}
.nainshao2{ 
  margin-left: 1rem;
  text-align: left;
}
.nainshao3{
  
  font-weight: 550;
  letter-spacing:1px;
  padding-top: 1rem;
}
.nainshao101-1{
  width: 14rem;
  border-radius: 30px;
  background-color: #f6f7fb;
  display: flex;
  
}
.info-text1{
  margin-top: 00.5rem;
  margin-left: 0.5rem;
  color: #a0a0a0;
  font-size: 13px;
}
.story-text{
  font-size: 14px;
    letter-spacing:3px;
}
  .box
  { display: flex;
    border-radius: 5px;
    height: 5rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
   background: linear-gradient(to bottom, #fffbf4 , #f4daab); 
  }
.day-lesson-image1{
  margin-left: 0.5rem;
  margin-top: 1rem;
}
.day-lesson-name{
  display: flex;
 
}
.day-lesson-name1{
  text-align: left;
  margin-left: 0.5rem;
}
.day-lesson-vip{
  border-radius: 30px;
   margin-top: 1rem;
  background-color: #f3f3f3;
  text-align: center;
  width: 30px;
  height: 16px;
  margin-left: 0.3rem;
  display: flex;
}
.day-lesson-vip1{
  margin-top: -0rem;
  font-size: 14px;
  color: #d3d3d3;
}
.day-lesson-vip2{
  margin-left: 0.5rem;
  font-size: 14px;
  color: #d3d3d3;
}
.day-lesson-text{
  margin-top: -0.2rem;
  font-size: 14px;
  color: #ac8926;
}
.vip-kaitong{
  text-align: center;
  margin: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 3rem;
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
.day-lesson-height{
  margin-top: 2rem;
}
.day-lesson-right{
 height: 20px; 
 margin-left: 18.5rem;
 margin-top: 1.5rem;
 
}
.day-lesson-video1{
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
.video-image1{
  height: 14rem;
}
.day-lesson-viedo2{
  text-align: left;
  margin-left: 0.8rem;
}
.day-lesson-viedo2-text{
 font-weight: 700;

}
.day-lesson-viedo3{
  display: flex;
}
.info-follow-day1{
  text-align: center;
  border-radius: 50px;
  margin-left: 12rem;
 margin-right: 0.8rem;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.video4{
  display: flex;
 margin-top: 1rem;

margin-left: 0.8rem;
margin-right: 0.8rem;
}
.video4-1{
  
  width: 50%;

}
.video4-1-bg{
  width: 12rem;
}
.video4-2{
text-align: left;
margin-left: 1rem;
}
.video-2-text{
  font-size: 15px;
  font-weight: 700;
  margin-top: 0px;
  margin-right: 0.2rem;
  text-align: left;
  letter-spacing:1px;
}
.video-3{
margin-left: 0.5rem;
}
.info-follow-day2{
  text-align: center;
  border-radius: 50px;
  margin-left: 11.5em;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.info-follow-day1{
  text-align: center;
  border-radius: 50px;
  margin-left: 8.4em;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.info-text-video{

  text-align: left;
  margin-top: -0.5rem;
  color: #a0a0a0;
  font-size: 13px;
}
.day-info-bg{
  
  height: 2rem;
  margin-top: 2.5rem;
}
.info-follow-day3{
  text-align: center;
  border-radius: 50px;
  margin-left: 21em;
  width: 50px;
  height: 1.5rem;
  background-color: #fcf5ed;
}
.short-video{
  margin-top: 1rem;
}
.info-follow-day11{
  text-align: center;
  border-radius: 50px;
  margin-left: 8.4em;
  width: 50px;
  height: 1.5rem;
  margin-top: 4rem;
  background-color: #fcf5ed;
}
.video8-bg{
  display: flex;
}
.video8{
  width: 25rem;
 
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}

</style>