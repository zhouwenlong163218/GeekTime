<template>
  <div>
        <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">我的课程</p>
              <img class="invite-image" src="../../assets/my/play/image13.png" alt="">
              </div>  
              <div>
                 <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
                </van-dropdown-menu>                 
             </div>             
        </div>
        <div class="mylesson-bg">
            <div>
                 <img class="invite-image1" src="../../assets/my/play/image14.png" alt="">
            </div>
            <div class="mylesson-text-bg">
                <p class="text1">重学前端</p>
                <p class="text2">共58讲 | 已学1讲</p>
                <div>
                   <img class="invite-image2" src="../../assets/my/play/image15.png" alt="">   
                  <span class="text3">3天后过期</span>
                </div>           
            </div>
        </div>
          <div class="text4-bg">
             <p class="text4">没有更多了</p>
             <p class="text5">查看过期视频</p>
          </div>
        <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'd',
      option1: [
        { text: '课程形式', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '学习状态', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
       option3: [
        { text: '最近学习', value: 'd' },
        { text: '好评排序', value: 'f' },
        { text: '销量排序', value: 'g' },
      ],
    };
  },
};
</script>

<style>
.account-top{
  
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
    margin-top: 0.8rem;
    margin-left: 130px;
    font-weight: 700;
}
.invite-image{
    margin-top: 1rem;
    margin-left: 8rem;
    height: 25px;
}
.mylesson-bg{
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
}
.invite-image1{
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    height: 6rem;
    
}
.mylesson-text-bg{
    text-align: left;
    margin-left: 0.5rem;
}
.text1{
    letter-spacing: 2px;
    font-weight: 700;
}
.text2{
    color: #919191;
    font-size: 13px;
    letter-spacing: 1px;
}
.invite-image2{
    margin-top: 0.5rem;   
    width: 6rem;  
}
.text3{
    letter-spacing: 1px;
    margin-top: -0.1px;
    margin-left: 6rem;
    color: #b2b2b2;
    font-size: 12px;
}
.text4-bg{
    display: flex;
}
.text4{
    margin-left: 7rem;
    padding-top: 2rem;
    letter-spacing: 2px;
    color: #b2b2b2;
    font-size: 12px;
}
.text5{
    margin-left: 0.2rem;
    padding-top: 2rem;
    letter-spacing: 2px;
    color: #d6914c;
    font-size: 12px;
}
</style>