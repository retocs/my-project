<template>
  <div>
    <heads :title="'新闻详情'"></heads>
  </div>
</template>

<script>
import heads from "@/components/header";
export default {
  components: {
    heads
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style>
</style>
