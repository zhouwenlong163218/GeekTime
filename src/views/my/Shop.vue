<template>
  <div>
      <div class="account-top">  
              <router-link  to="me">
                 <img  class="left-image" src="../../assets/message/左.png" alt="">  
               <img  class="cha" src="../../assets/my/daylesson/image6.png" alt=""> 
                </router-link>                          
              <p class="message-top-text">所有订单</p>    
             <img class="play-image" src="../../assets/my/play/image32.png" alt="">         
            </div>
            <div >
        <van-notice-bar
         left-icon="volume-o"
         text="618活动期间订单数量较大 ，快递配送可能存在延迟。"/>
            </div>
            <div class="shop1">
            <p class="shop-text">商品名</p>
             <img class="image" src="../../assets/my/play/image33.png" alt="">  
             <p class="shop-text1">请输入商品名</p>
            </div>
            <div class="shop2">
<van-tabs v-model="active">
  <van-tab title=" 全部">
      <div class="shop3">
          <div class="test1">
            
          </div>
          <div class="text-text-bg">
             <p class="text-text">居然还没有订单</p>
          <p class="text2">好东西，手慢无</p> 
          </div>
          <div class="shop4">
              <p class="text3">去逛逛</p>
          </div>
            <p class="text-text1">更多精选商品</p>
          <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>
           <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

               <p class="text6">店铺主页 | 个人中心  |  店铺信息</p>  
               <div class="shop8">
                    <img class="image2" src="../../assets/my/play/image36.png" alt=""> 
                    <p class="text7">极客时间商店</p>
                </div>
               <div class="shop9">
                    <img class="image3" src="../../assets/my/play/image37.png" alt=""> 
                    <p class="text8">有赞提供技术支持</p>
                </div>      
      </div>
  </van-tab>
  <van-tab title="待付款">
       <div class="shop3">
          <div class="test1">
            
          </div>
          <div class="text-text-bg">
             <p class="text-text">居然还没有订单</p>
          <p class="text2">好东西，手慢无</p> 
          </div>
          <div class="shop4">
              <p class="text3">去逛逛</p>
          </div>
            <p class="text-text1">更多精选商品</p>
          <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>
           <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

               <p class="text6">店铺主页 | 个人中心  |  店铺信息</p>  
               <div class="shop8">
                    <img class="image2" src="../../assets/my/play/image36.png" alt=""> 
                    <p class="text7">极客时间商店</p>
                </div>
               <div class="shop9">
                    <img class="image3" src="../../assets/my/play/image37.png" alt=""> 
                    <p class="text8">有赞提供技术支持</p>
                </div>      
      </div>
  </van-tab>
  <van-tab title="待发货">
       <div class="shop3">
          <div class="test1">
            
          </div>
          <div class="text-text-bg">
             <p class="text-text">居然还没有订单</p>
          <p class="text2">好东西，手慢无</p> 
          </div>
          <div class="shop4">
              <p class="text3">去逛逛</p>
          </div>
            <p class="text-text1">更多精选商品</p>
          <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>
           <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

               <p class="text6">店铺主页 | 个人中心  |  店铺信息</p>  
               <div class="shop8">
                    <img class="image2" src="../../assets/my/play/image36.png" alt=""> 
                    <p class="text7">极客时间商店</p>
                </div>
               <div class="shop9">
                    <img class="image3" src="../../assets/my/play/image37.png" alt=""> 
                    <p class="text8">有赞提供技术支持</p>
                </div>      
      </div>
  </van-tab>
  <van-tab title="待收货">
       <div class="shop3">
          <div class="test1">
            
          </div>
          <div class="text-text-bg">
             <p class="text-text">居然还没有订单</p>
          <p class="text2">好东西，手慢无</p> 
          </div>
          <div class="shop4">
              <p class="text3">去逛逛</p>
          </div>
            <p class="text-text1">更多精选商品</p>
          <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>
           <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

               <p class="text6">店铺主页 | 个人中心  |  店铺信息</p>  
               <div class="shop8">
                    <img class="image2" src="../../assets/my/play/image36.png" alt=""> 
                    <p class="text7">极客时间商店</p>
                </div>
               <div class="shop9">
                    <img class="image3" src="../../assets/my/play/image37.png" alt=""> 
                    <p class="text8">有赞提供技术支持</p>
                </div>      
      </div>
  </van-tab>
  <van-tab title="待评价"> <div class="shop3">
          <div class="test1">
            
          </div>
          <div class="text-text-bg">
             <p class="text-text">居然还没有订单</p>
          <p class="text2">好东西，手慢无</p> 
          </div>
          <div class="shop4">
              <p class="text3">去逛逛</p>
          </div>
            <p class="text-text1">更多精选商品</p>
          <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>
           <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

            <div class="shop5">
             <div class="shop6">
              <img class="image1" src="../../assets/my/play/image34.png" alt="">  
              <p class="text4">原创 | 极客时间充值卡（经典版）</p>
              <p class="text5">￥ 90</p>
             </div>
               <div class="shop7">
              <img class="image1" src="../../assets/my/play/image35.png" alt="">  
              <p class="text4">极客时间2020招财袋，最高得￥2999元VIP年卡</p>
              <p class="text5">￥ 199</p>
             </div>
          </div>

               <p class="text6">店铺主页 | 个人中心  |  店铺信息</p>  
               <div class="shop8">
                    <img class="image2" src="../../assets/my/play/image36.png" alt=""> 
                    <p class="text7">极客时间商店</p>
                </div>
               <div class="shop9">
                    <img class="image3" src="../../assets/my/play/image37.png" alt=""> 
                    <p class="text8">有赞提供技术支持</p>
                </div>      
      </div></van-tab>
</van-tabs>
            </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style>
.account-top{
  margin-top: 1rem;
  display: flex;
}
.cha{
  margin-left: 1rem;
  height: 1.5rem;
}
.left-image{
  height: 1.5rem;
  margin-left: 0.8rem;
}
.message-top-text{
  margin-top: 0rem;
  font-weight: 700;
  margin-left: 7rem;
}
.play-image{
    height: 1.5rem;
    margin-left: 7rem;
}
.shop1{
    display: flex;
    text-align: left;
    border-radius: 20px;
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 2rem;
    background-color: #f7f8fa;
}
.shop-text{
    margin-top: -0.2rem;
    letter-spacing: 1px;
    font-size: 15px;
    margin-left: 1rem;
    padding-top: 0.5rem;
}
.image{
    margin-left: 0.3rem;
    margin-top: 0.5rem;
    height: 1rem;
}
.shop-text1{
    color: #a6a7a9;
    margin-top: -0.2rem;
    letter-spacing: 1px;
    font-size: 13px;
    margin-left: 1rem;
    padding-top: 0.5rem;
}
.shop2{
    margin-top: 0..5rem;
}
.shop3{
    
    width: 100vw;
    background-color: #f7f7f9;
}
.test1{
    height: 2rem;
    background-color: f7f7f9;
}
.text-text-bg{
    
}
.text-text{ 
    margin-top: 3rem;
    font-size: 15px;
    letter-spacing: 1px;
}
.text2{
    color: #bababb;
    font-size: 10px;
    margin-top: 1rem;
}
.shop4{
    margin-left: 9rem;
    width: 7rem;
    height: 2.5rem;
    background-color: #fff;
    border: red solid 1px;
}
.text3{
    color: red;
    margin-top: 0.5rem;
}
.text-text1{ 
    margin-top: 3rem;
    font-size: 13px;
    letter-spacing: 1px;
}
.shop5{
   
    text-align: left;
    display: flex;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
}
.shop6{
    text-align: left;
    width: 11rem;
    background-color: #ffffff;
}
.image1{
    width: 11rem;
}
.shop7{
    text-align: left;
    margin-left: 1rem;
     width: 11rem; 
    background-color: #fff;
}
.text4{
    margin-left: 0.5rem;
    letter-spacing: 1px;
    font-size: 14px;
}
.text5{
 color: #f36766;
  margin-left: 0.5rem;
  
}
.text6{
    letter-spacing: 2px;
    color: #bababb;
    font-size: 10px;
    margin-top: 2rem;
}
.shop8{
    margin-top: 3rem;
    display: flex;
}
.image2{
    height: 25px;
    margin-left: 9rem;
}
.text7{
    font-weight: 700;
    margin-top: 0rem;
}
.shop9{
    margin-top: 1rem;
    display: flex;
}
.image3{
    height: 15px;
    margin-left: 9rem;
}
.text8{
    margin-left: 0.3rem;
    letter-spacing: 2px;
    color: #bababb;
    font-size: 10px;
    margin-top: 0.2rem;
}
</style>