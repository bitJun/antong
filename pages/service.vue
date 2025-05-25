<template>
  <div class="product_view">
    <div class="product_view_bg">
      <img
        src="/product/bg.png"
        class="product_view_bg_img"
      >
    </div>
    <div class="product_view_position">
      <div class="product_view_position_main">
        <img
          src="/product/img.png"
          class="product_view_position_img"
        >
        <div class="product_view_position_section">
          <h3 class="product_view_position_section_title">{{t('service.title')}}</h3>
          <p class="product_view_position_section_desc">{{t('service.desc')}}</p>
        </div>
      </div>
    </div>
    <div class="product_view_box">
      <h3 class="product_view_box_title">{{t('service.subTitle')}}</h3>
      <div class="product_view_box_list">
        <div class="product_view_box_list_item">
          <img
            src="/product/img1.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line1')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc1')}}</p>
        </div>
        <div class="product_view_box_list_item">
          <img
            src="/product/img2.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line2')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc2')}}</p>
        </div>
        <div class="product_view_box_list_item">
          <img
            src="/product/img3.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line3')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc3')}}</p>
        </div>
        <div class="product_view_box_list_item">
          <img
            src="/product/img4.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line4')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc4')}}</p>
        </div>
        <div class="product_view_box_list_item">
          <img
            src="/product/img5.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line5')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc5')}}</p>
        </div>
        <div class="product_view_box_list_item">
          <img
            src="/product/img6.jpeg"
            class="product_view_box_list_item_img"
          >
          <h4 class="product_view_box_list_item_title">{{t('service.line6')}}</h4>
          <p class="product_view_box_list_item_desc">{{t('service.desc6')}}</p>
        </div>
      </div>
    </div>
    <div class="product_view_line"></div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
</script>
<style lang="scss" scoped>
  @use './service.scss';
</style>
