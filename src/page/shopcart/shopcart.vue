<template>
  <div>
    购物车
    <tabnav :selactive="'shopcart'"/>
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
