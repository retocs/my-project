<template>
  <div>
    <heads :title="'新闻列表'"></heads>
    <mt-navbar v-model="active">
      <mt-tab-item :id="tab.id" v-for="tab in tabList" :key="tab.id">{{tab.title}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="active">
      <mt-tab-container-item :id="item.id" v-for="item in tabList" :key="item.id">
        <mt-cell :title="data.cont" v-for="data in item.content" :key="data.id" @click.native="godetail(data.id)"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import heads from "@/components/header";
export default {
  name: "new",
  data() {
    return {
      active: "tab-container1",
      tabList: [
        {
          id: "tab-container1",
          title: "选项一",
          content: [
            { id: "id1", cont: "tab-container 1" },
            { id: "id2", cont: "tab-container 1" },
            { id: "id3", cont: "tab-container 1" }
          ]
        },
        {
          id: "tab-container2",
          title: "选项二",
          content: [{ id: "id2", cont: "tab-container 2" }]
        },
        {
          id: "tab-container3",
          title: "选项三",
          content: [{ id: "id3", cont: "tab-container 3" }]
        },
        {
          id: "tab-container4",
          title: "选项四",
          content: [{ id: "id4", cont: "tab-container 4" }]
        },
        {
          id: "tab-container5",
          title: "选项五",
          content: [{ id: "id5", cont: "tab-container 5" }]
        }
      ]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    godetail(id) {
      this.$router.push({
        name: 'newsDetail',
        params:{
          id:id
        }
      })
    }
  },
  components: {
    heads
  }
};
</script>

<style>
</style>
