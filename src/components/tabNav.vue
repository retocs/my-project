<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item v-for="(item,index) in listNav" :key="index" :id="item.id" @click.native="change(item.id)">
        <img slot="icon" :src="item.img_url" />
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabNav",
  props: [
    "selactive"
  ],
  data() {
    return {
      selected: this.selactive,
      listNav:[
        {id:'home',img_url:'../../static/images/index.png',title:'首页'},
        {id:'vip',img_url:'../../static/images/vip.png',title:'会员'},
        {id:'shopcart',img_url:'../../static/images/shopcart.png',title:'购物车'},
        {id:'search',img_url:'../../static/images/find.png',title:'查找'}
      ]
    };
  },
  methods: {
    change(id) {
      this.$router.push({
        name: id
      });
    }
  }
};
</script>

<style>
</style>
