<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('teaSpace.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('teaSpace.desc') }}</p>
      </div>
    </div>
    <div class="product_view_main">
      <h4 class="product_view_main_title">{{ t('teaSpace.subtitle1') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/teaSpace/banner1.png"
          class="product_view_main_box_img"
        />
        <p class="product_view_main_box_line">{{ t('teaSpace.line1') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.line2') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.line3') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.line4') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.line5') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.line6') }}</p>
        <div class="product_view_main_box_flex">
          <img
            src="/teaSpace/banner2.png"
            class="product_view_main_box_img"
          />
          <img
            src="/teaSpace/banner3.png"
            class="product_view_main_box_img"
          />
        </div>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc1') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc2') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc3') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc4') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc5') }}</p>
        <p class="product_view_main_box_line">{{ t('teaSpace.desc6') }}</p>
        <div class="product_view_main_box_flex">
          <img
            src="/teaSpace/banner4.png"
            class="product_view_main_box_img"
          />
          <img
            src="/teaSpace/banner5.png"
            class="product_view_main_box_img"
          />
        </div>
      </div>
      <h4 class="product_view_main_title" style="color: #323232">{{ t('teaSpace.subtitle2') }}</h4>
      <div class="product_view_main_container">
        <div
          class="product_view_main_container_item"
          v-for="item in [1,2,3,4,5,6,7,8]"
        >
          <img
            :src="`/teaSpace/table${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`teaSpace.table${item}`) }}</p>
        </div>
      </div>
      <h4 class="product_view_main_title" style="color: #323232">{{ t('teaSpace.subtitle3') }}</h4>
      <div class="product_view_main_containers">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12]"
        >
          <img
            :src="`/teaSpace/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`teaSpace.chair${item}`) }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref } from 'vue';
</script>
<style lang="scss" scoped>
  @use './teaSpace.scss';
</style>
