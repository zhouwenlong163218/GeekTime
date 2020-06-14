<template>
<div> 
    <!-- 顶部标签 -->
    <div class="nav">
        <p :class="{ co: isShow }" @click="isShow = true" style="margin-left: 10px;">广场</p>
        <p :class="{ co: !isShow }" @click="isShow = false" style="margin-left: 20px;">我的</p>
        <p style="margin-left:20px;">动态</p>
    </div>

    <div v-if="isShow">
    <!-- 通知 -->
    <div class="notice">
        <div class="notice-image">
            <img src="../../assets/image/通知.png" alt="">
        </div>
        <div class="notice-information">
            <p class="notice-title">系统通知</p>
            <p class="notice-content">您没有消息!</p>
        </div>
    </div>
    <div class="school">
        <div class="school-image">
            <img src="../../assets/image/喇叭.png" alt="">
        </div>
        <div class="school-information">
            <p class="school-title">校园通知</p>
            <p class="school-content">2017届省级魅力团支书投票</p>
        </div>
        <div class="school-time">
            <p>2017-11-29  11:29</p>
        </div>
    </div>
    <div class="announcement">
        <div class="announcement-image">
            <img src="../../assets/image/公告.png" alt="">
        </div>
        <div class="announcement-information">
            <p class="announcement-title">PU公告</p>
            <p class="announcement-content">PU6.7.3版本更新说明</p>
        </div>
        <div class="announcement-time">
            <p>2020-04-01  00:00</p>
        </div>
    </div>
    <div class="game">
        <div class="game-image">
            <img src="../../assets/image/奖杯.png" alt="">
        </div>
        <div class="game-information">
            <p class="game-title">斯坦福CGCP学生写作竞赛</p>
        </div>
    </div>
    <div class="talk" @click="talk">
        <div class="talk-image">
            <img src="../../assets/image/人物.png" alt="">
        </div>
        <div class="talk-information">
            <p class="talk-title">超管niit</p>
            <p class="talk-content">你好！</p>
        </div>
        <div class="talk-time">
            <p>2019-03-25  09:50</p>
        </div>
    </div>
    </div>

    <div v-if="!isShow">
        <div class="activity">
        <p class="activity-title">活动</p>
        <div class="a">
        <div class="audit">
            <div class="audit-logo">
                <img class="audit-image" src="../../assets/image/审核.png" alt="报名审核中"><br>
            </div>
            <div class="audit-title">
                <p>报名审核中</p>
            </div>
        </div>
        <div class="ready">
            <div class="ready-logo">
                <img class="ready-image" src="../../assets/image/进入.png" alt="待签到"><br>
            </div>
            <div class="ready-title">
                <p>待签到</p>
            </div>
        </div>
        <div class="away">
            <div class="away-logo">
                <img class="away-image" src="../../assets/image/离开.png" alt="待签退"><br>
            </div>
            <div class="away-title">
                <p>待签退</p>
            </div>
        </div>
        <div class="evaluation">
            <div class="evaluation-logo">
                <img class="evaluation-image" src="../../assets/image/评价记录.png" alt="活动评价"><br>
            </div>
            <div class="evaluation-title">
                <p>活动评价</p>
            </div>
        </div>
        </div>
    </div>

    <!-- 申请 -->
    <div class="application">
        <p class="application-title">申请</p>
        <div class="audit">
            <div class="audit-logo">
                <img class="audit-image" src="../../assets/image/课程报名.png" alt="申请审核中"><br>
            </div>
            <div class="audit-title">
                <p>申请审核中</p>
            </div>
        </div>
    </div>

    <!-- 部落 -->
    <div class="tribe">
        <p class="tribe-title">部落</p>
        <div class="a">
            <div class="join">
            <div class="join-logo">
                <img class="join-image" src="../../assets/image/加入.png" alt="申请加入"><br>
            </div>
            <div class="join-title">
                <p>申请加入</p>
            </div>
        </div>
        <div class="allow">
            <div class="allow-logo">
                <img class="allow-image" src="../../assets/image/准入.png" alt="准入审核"><br>
            </div>
            <div class="allow-title">
                <p>准入审核</p>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
     data() {
    return {
      isShow: true
    };
  },
  methods: {
      talk(){
          this.$router.push("/talk")
      }
  }
}
</script>

<style>
.nav{
    width: 330px;
    height: 50px;
    display: flex;
    margin-left: 15px;
}
.notice{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.notice-image{
    width: 40px;
    height: 40px;
    background-color: #bce4f9;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.notice-information{
    margin-top: -3px;
    margin-left: 10px;
}
.notice-title{
    font-size: 13px;
}
.notice-content{
    font-size: 10px;
    color: #bfbfbf;
}
.school{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.school-image{
    width: 40px;
    height: 40px;
    background-color: #fae8c7;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.school-information{
    margin-top: -3px;
    margin-left: 10px;
}
.school-title{
    font-size: 13px;
    margin-left: -70px;
}
.school-content{
    font-size: 10px;
    color: #bfbfbf;
}
.school-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 65px;
    color: #bfbfbf;
}
.announcement{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    display: flex;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.announcement-image{
    width: 40px;
    height: 40px;
    background-color: #fce1de;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.announcement-information{
    margin-top: -3px;
    margin-left: 10px;
}
.announcement-title{
    font-size: 13px;
    margin-left: -50px;
}
.announcement-content{
    font-size: 10px;
    color: #bfbfbf;
}
.announcement-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 90px;
    color: #bfbfbf;
}
.game{
    margin-top: 10px;
    width: 330px;
    height: 70px;
    margin-left: 15px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.game-image{
    width: 40px;
    height: 40px;
    background-color: #fcfccc;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.game-information{
    margin-top: -3px;
    margin-left: 10px;
}
.game-title{
    font-size: 13px;
}
.talk{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.talk-image{
    width: 40px;
    height: 40px;
    background-color: #f2dbe6;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.talk-information{
    margin-top: -3px;
    margin-left: 10px;
}
.talk-title{
    font-size: 13px;
    margin-left: 0px;
}
.talk-content{
    font-size: 10px;
    margin-left: -10px;
    color: #bfbfbf;
}
.talk-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 145px;
    color: #bfbfbf;
}
.activity{
    width: 330px;
    height: 90px;
    margin-left: 15px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.activity-title{
    font-weight: bold;
    margin-left: -280px;
}
.a{
    display: flex;
}
.audit{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 3px;
}
.audit-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f9eced;
}
.audit-image{
    margin-top: 11px;
}
.audit-title{
    font-size: 1px;
    margin-top: 5px;
}
.ready{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 40px;
}
.ready-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#faf8dc;
}
.ready-image{
    margin-top: 11px;
}
.ready-title{
    font-size: 1px;
    margin-top: 5px;
}
.away{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 40px;
}
.away-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f8e0eb;
}
.away-image{
    margin-top: 11px;
}
.away-title{
    font-size: 1px;
    margin-top: 5px;
}
.evaluation{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 40px;
}
.evaluation-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#cae9f9;
}
.evaluation-image{
    margin-top: 11px;
}
.evaluation-title{
    font-size: 1px;
    margin-top: 5px;
}
.application{
    width: 330px;
    height: 90px;
    margin-top: 13px;
    margin-left: 15px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.application-title{
    font-weight: bold;
    margin-left: -280px;
}
.tribe{
    width: 330px;
    height: 90px;
    margin-top: 13px;
    margin-left: 15px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.tribe-title{
    font-weight: bold;
    margin-left: -280px;
}
.join{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 3px;
}
.join-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f9eced;
}
.join-image{
    margin-top: 11px;
}
.join-title{
    font-size: 1px;
    margin-top: 5px;
}
.allow{
    width: 50px;
    height: 60px;
    margin-top: -8px;
    margin-left: 40px;
}
.allow-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#faf8dc;
}
.allow-image{
    margin-top: 11px;
}
.allow-title{
    font-size: 1px;
    margin-top: 5px;
}
.co{
    color: black;
    font-size: 15px;
    font-weight: bold;
}
</style>