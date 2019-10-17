<template>
  <div>
    会员页
    <tabnav :selactive="'vip'"/>
  </div>
</template>

<script>
import tabnav from '@/components/tabNav'
export default {
  components: {
    tabnav
  }
};
</script>

<style>
</style>
