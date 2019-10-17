<template>
  <div>
    <mt-header :title="title">
      <div slot="left" @click="goback">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "heads",
  props: ["title"],
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
