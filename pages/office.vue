<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('office.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('office.desc') }}</p>
      </div>
    </div>
    <div class="product_view_main">
      <h4 class="product_view_main_title">{{ t('office.subtitle1') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/office/banner1.png"
          class="product_view_main_box_img"
        />
        
      </div>
      <div class="product_view_main_container">
        <div
          class="product_view_main_container_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10]"
        >
          <img
            :src="`/office/desk${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`office.desk${item}`) }}</p>
        </div>
      </div>
      <h4 class="product_view_main_title">{{ t('office.subtitle2') }}</h4>
      <div class="product_view_main_containers">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12]"
        >
          <img
            :src="`/office/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`office.chair${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref } from 'vue';
</script>
<style lang="scss" scoped>
  @use './office.scss';
</style>
