<template>
  <div class>
      <div class="information">
        <div class="infor-title">
            <div>
                <div class="arrow-title">
              <van-icon class="arrow" name="arrow-left" />
              </div>
            <div class="information-text">
                <p >个人信息</p>
            </div>      
            </div>
             <div>
                <div class="head-title">
              <p class="head">头像</p>
              <van-image  class="head-image"
             round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"/>
              <van-icon class="head-arrow" name="arrow" />
            </div>
             </div>
        </div>
        <div  class="two-head">
            <div class="two-information">
                <p class="head-name">昵称</p>
                <p class="name-name">Geek_8662c2</p>
                <van-icon class="name-arrow" name="arrow" />
            </div>
               <div class="xian">
              <van-divider />
              </div>
            <div class="geshi">
                 <div class="two-information">
                <p class="head-name">性别</p>
                <p class="name-name1">男</p>
                <van-icon class="name-arrow1" name="arrow" />
            </div>
            <div class="xian">
              <van-divider />
              </div>
            </div>
             <div class="geshi">
                 <div class="two-information">
                <p class="head-name">生日</p>
                <p class="name-name2">1993-06-12</p>
                <van-icon class="name-arrow1" name="arrow" />
            </div>
            <div class="xian">
              <van-divider />
              </div>        
            </div>

             <div class="geshi">
                 <div class="two-information">
                <p class="head-name">简介</p>
                <p class="name-name3">未设置</p>
                <van-icon class="name-arrow1" name="arrow" />
            </div>          
            </div>
        </div>
        <div class="education">
            <div class="geshi">
                 <div class="two-information">
                <p class="head-name">学历</p>
                <p class="name-name4">专科</p>
                <van-icon class="name-arrow1" name="arrow" />
            </div>          
            </div>
        </div>
        <div class="education">
            <div class="geshi">
                 <div class="two-information">
                <p class="head-name">学生认证</p>
                <p class="name-name5">未认证</p>
                <van-icon class="name-arrow1" name="arrow" />
            </div>          
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
.information{
   height: 100vh;
   width: 100vw;
background-color: #f6f7fb;
}
.infor-title{
    width: 100vw;
   height: 8rem; 
   background-color: #ffffff;
}
.arrow-title{
    margin-left: 1rem;
    float: left;
}
.arrow{
    margin-top: 0.3rem;
}
.information-text{
    floats: left;
    
}
.head-title{
    margin-top: 2rem;
    display: flex;
    height: 4rem;
}
.head{
    text-align: left;
    margin-left: 1rem;
}
.head-image{
     margin-left: 16rem;
}
.head-arrow{
    margin-top: 1rem;
    margin-left: 0.8rem;
}
.two-head{
    margin-top: 0.5rem;
    background-color: #ffffff;
    width: 100vw;
    height: 17rem;
}
.two-information{
    display: flex;
}
.head-name{
    margin-left: 1rem;
    float: left;
    margin-top: 1rem;
}
.name-name{
    margin-left: 13rem;
    margin-top: 1.2rem;
}
.name-arrow{
    margin-left: 0.5rem;
    margin-top: 1.2rem;
}
.xian{
        margin-top: -0.5rem;
    margin-left: rem;
}
.geshi{
    margin-top: -1.5rem;
}
.name-name1{
    margin-left: 18.2rem;
    margin-top: 1.2rem;
}
.name-arrow1{
    margin-left: 0.5rem;
    margin-top: 1.3rem;
}
.name-name2{
    margin-left: 14rem;
    margin-top: 1.2rem;
}
.name-name3{
    margin-left: 16.2rem;
    margin-top: 1.2rem;
}
.education{
    background-color: #ffffff;
    margin-top: 2rem;
}
.name-name4{
    margin-left: 17rem;
    margin-top: 1.2rem;
}
.name-name5{
    margin-left: 14rem;
    margin-top: 1.2rem;
}
</style>