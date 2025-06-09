<template>
  <div class="help_view">
    <div class="help_view_box">
      <img
        class="help_view_img"
        :src="`/massage/${id}.png`"
      />
    </div>
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
