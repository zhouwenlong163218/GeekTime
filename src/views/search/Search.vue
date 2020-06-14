<template>
  <div>
      <div>
    <form action="/">
    <van-search
    v-model="value"
    show-action
    shape="round"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    />
</form>
      </div>
      <div class="history-title">
          <p class="history-text">历史搜索</p>
          <img class="garbage" src="../../assets/tribeimg/垃圾.png" alt="">
      </div>
      <div class="record-title">
          <p class="record-text">vue静态界面开发</p>
          <img  class="garbage1" src="../../assets/tribeimg/差号.png" alt="">
      </div>
        <div class="xian">
          <van-divider :style="{color: '#dbdbdb'}" />
        </div>
          <div class="record-title">
          <p class="record-text">Android Studio</p>
          <img  class="garbage2" src="../../assets/tribeimg/差号.png" alt="">
      </div>
        <div class="xian">
          <van-divider :style="{color: '#dbdbdb'}" />
        </div>
          <div class="record-title">
          <p class="record-text">移动应用开发</p>
          <img  class="garbage3" src="../../assets/tribeimg/差号.png" alt="">
      </div>
        <div class="xian">
          <van-divider :style="{color: '#dbdbdb'}" />
        </div>
        <div class="record-title">js
          <p class="record-text"></p>
          <img  class="garbage4" src="../../assets/tribeimg/差号.png" alt="">
      </div>
        <div class="xian">
          <van-divider :style="{color: '#dbdbdb'}" />
        </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
     this.$router.push('/find');
    },
  },
};
</script>

<style>
.search{

}
.history-title{
    display: flex;
}
.history-text{
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
}
.garbage{
    margin-left: 17.5rem;
    margin-top: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    
}
.record-title{
    margin-left: 1rem;
    display: flex;
}
.record-text{
    font-size: 15px;
}
.garbage1{
    margin-left: 15.5rem;
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;  
}
.xian{  
    margin-left: 0.8rem;
}
.garbage2{
    margin-left: 16.5rem;
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;  
}
.garbage3{
    margin-left: 17rem;
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;  
}
.garbage4{
    margin-left: 22rem;
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;  
}
</style>