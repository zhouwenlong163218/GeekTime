<template>
<div>
    <div class="top">
        <div class="top-back">
            <img src="../../assets/img/实习返回.png" alt="">
        </div>
        <p class="top-title">设置</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <div class="num">
        <p class="num-title">账号与安全</p>
        <div class="num-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

    <div class="bg"></div>

     <div class="send">
        <p class="send-title">推送</p>
        <div class="send-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

    <div class="bg1"></div>

    <div class="clean">
        <p class="clean-title">清理存储空间</p>
        <p class="clean-title1">8.6M</p>
        <div class="clean-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

     <div class="bg2"></div>

     <div class="help">
        <p class="help-title">帮助与反馈</p>
        <div class="help-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
     <div class="net">
        <p class="net-title">网络诊断</p>
        <div class="net-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

    <div class="bg3"></div>

    <div class="talk">
        <p class="talk-title">给应用评分</p>
        <div class="talk-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
     <div class="about">
        <p class="about-title">关于</p>
        <div class="about-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

    <div class="bg4"></div>

      <div class="do">
        <p class="do-title">实验室</p>
        <div class="do-image"><img src="../../assets/img/豆瓣更多.png" alt=""></div>
    </div>

    <div class="bg5"></div>

      <div class="button">
        <p class="button-title">退出登录</p>
    </div>

    <div class="bg6"></div>

</div>
</template>

<script>
export default {
    
}
</script>

<style>
.top{
    width: 100%;
    height: 40px;
    display: flex;
}    
.top-back{
    margin-top: 5px;
}
.top-title{
    font-size: 15px;
    margin-left: 140px;
    margin-top: 7px;
}
.xian{
    margin-top: -15px;
}
.num{
    width: 100%;
    margin-top: -10px;
    height: 40px;
    display: flex;

}
.num-title{
    margin-top: 5px;
    font-size: 13px;
    margin-left: 10px;
}
.num-image{
    margin-left: 270px;
}
.bg{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.send{
    width: 100%;
    height: 40px;
    display: flex;

}
.send-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.send-image{
    margin-top: 10px;
    margin-left: 308px;
}
.bg1{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.clean{
    width: 100%;
    height: 40px;
    display: flex;

}
.clean-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.clean-title1{
    font-size: 13px;
    margin-left: 228px;
}
.clean-image{
    margin-top: 10px;
}
.bg2{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.help{
    width: 100%;
    height: 40px;
    display: flex;

}
.help-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.help-image{
    margin-top: 10px;
    margin-left: 270px;
}
.net{
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: -15px;

}
.net-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.net-image{
    margin-top: 10px;
    margin-left: 283px;
}
.bg3{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.talk{
    width: 100%;
    height: 40px;
    display: flex;

}
.talk-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.talk-image{
    margin-top: 10px;
    margin-left: 270px;
}
.about{
    width: 100%;
    height: 40px;
    margin-top: -15px;
    display: flex;

}
.about-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.about-image{
    margin-top: 10px;
    margin-left: 310px;
}
.bg4{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.do{
    width: 100%;
    height: 40px;
    display: flex;

}
.do-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
}
.do-image{
    margin-top: 10px;
    margin-left: 297px;
}
.bg5{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.button{
    width: 100%;
    height: 40px;
    display: flex;
}
.button-title{
    margin-top: 10px;
    font-size: 13px;
    margin-left: 165px;
}
.bg6{
    width: 100%;
    height: 190px;
    background-color: #ededed;
}
</style>