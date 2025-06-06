<template>
  <div class="help_view">
    <img
      class="help_view_img"
      :src="`/product/pd${id}.png`"
    />
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
import { ref } from 'vue';
const route = useRoute();
let id = route.params.id;
</script>
<style lang="scss" scoped>
  @use './index.scss';
</style>
