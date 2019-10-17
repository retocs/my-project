<template>
  <div>
    <mt-header title="信息分享"></mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <ul>
      <li class="grid" v-for="(item,index) in modules" :key="index">
        <router-link :to="item.route">
          <span :class="item.className"></span>
          <div>{{item.title}}</div>
        </router-link>
      </li>
    </ul>
    <!-- <div>当前时间：{{date}}</div> -->
    <div>{{this.$store.state.count}}</div>
    <tabnav :selactive="'home'"></tabnav>
  </div>
</template>

<script>
import tabnav from '@/components/tabNav'
export default {
  name: "Home",
  data() {
    return {
      modules:[{
        title:'新闻资讯',className:'back-news',route:{name:'newsList'}
       },{
        title:'图文分享',className:'back-picShare',route:{name:'home'}
       },{
        title:'商品展示',className:'back-goodsShow',route:{name:'home'}
       },{
        title:'留言反馈',className:'back-feedback',route:{name:'home'}
       },{
        title:'搜索咨询',className:'back-search',route:{name:'home'}
       },{
        title:'联系我们',className:'back-callme',route:{name:'home'}
       }],
       date: new Date()
    };
  },
  components: {
    tabnav
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    });
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display: flex;
  flex-wrap: wrap
}
li {
  list-style: none;
  text-align: center;
  width: 33.3%;
  margin-bottom: 5px;
}
a{
  text-decoration: none;
  color: #000
}
.mint-swipe{
  height: 200px;
  background-color: #c5c4c4
}
.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}
.back-news{
  background: url("../../../static/images/news.png") no-repeat;
}
.back-picShare{
  background: url("../../../static/images/picShare.png") no-repeat;
}
.back-goodsShow{
  background: url("../../../static/images/goodsShow.png") no-repeat;
}
.back-feedback{
  background: url("../../../static/images/feedback.png") no-repeat;
}
.back-search{
  background: url("../../../static/images/search.png") no-repeat;
}
.back-callme{
  background: url("../../../static/images/callme.png") no-repeat;
}
</style>
