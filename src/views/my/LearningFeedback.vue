<template>
  <div class="account-bg">
      <div class="feedback">
           <div class="account-top">
              <div class="account-top1">
              <router-link to="me">
              <img class="top-right" src="../../assets/my/gift/right.png" alt="">
                </router-link> 
                <p class="top-text">反馈问题</p>
                <p class="text">提交</p>
              </div>  
                       
        </div>
           <div class="feedback1">
                  <p class="text1">请描述您的问题或建议（必填）</p>
             </div> 
             <div class="feedback2">
                  <p class="text1">您的邮箱（必填）</p>
             </div> 
             <div class="feedback2">
                  <p class="text1">您的称呼（选填）</p>
             </div>

             <div class="feedback3">
                 <div class="text2">
                     <p>或通过以下方式联系我们：</p>
                     <p>公众号： 极客时间</p>
                     <p>联系电话： 64128142</p>
                 </div>
                <img class="image1" src="../../assets/my/play/image18.png" alt=""> 
            </div>   
         </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.account-bg{
    width: 100vw;
    background-color: #f5f5f5;
    height: 100vh;
}
.feedback{
   background-color: #ffffff; 
}
.account-top{
    display: flex;


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
.text{   
    color: #ec8b2b;
    margin-left: 7rem;
    font-size: 14px;
    margin-top: 1.1rem;
}
.feedback1{
    text-align: left;
    background-color: #f5f5f5;
    height: 5rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
}
.text1{
    padding-top: 1rem;
    margin-left: 1rem;
    color: #898989;
    font-size: 10px; 
}
.feedback2{
    margin-top: 1rem;
    text-align: left;
    background-color: #f5f5f5;
    height: 2rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
}
.feedback3{
    margin-top: 2rem;
    display: flex;
}
.text2{
    text-align: left;
    margin-left: 1rem;
    color: #898989;
    font-size: 10px; 
}
.image1{
    margin-top: 0.2rem;
    margin-left: 12.5rem;
   height: 4rem;
}
</style>