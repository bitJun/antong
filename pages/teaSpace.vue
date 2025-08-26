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
        <div class="m20">
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line1') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line2') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line3') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line4') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line5') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.line6') }}</p>
        </div>
        <div class="product_view_main_box_flex">
          <div class="product_view_main_box_flex_item">
            <img
              src="/teaSpace/banner2.png"
              class="product_view_main_box_img"
            />
          </div>
          <div class="product_view_main_box_flex_item">
            <img
              src="/teaSpace/banner3.png"
              class="product_view_main_box_img"
            />
          </div>
        </div>
        <div class="m20">
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc1') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc2') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc3') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc4') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc5') }}</p>
          <p class="product_view_main_box_line" :class="[locale == 'en' ? 'l3' : '']">{{ t('teaSpace.desc6') }}</p>
        </div>
        <div class="product_view_main_box_flex" style="margin-bottom: 0;">
          <div class="product_view_main_box_flex_item">
          <img
            src="/teaSpace/banner4.png"
            class="product_view_main_box_img"
            style="margin-bottom: 0;"
          />
          </div>
          <div class="product_view_main_box_flex_item">
          <img
            src="/teaSpace/banner5.png"
            class="product_view_main_box_img"
            style="margin-bottom: 0;"
          />
          </div>
        </div>
      </div>
      <h4 class="product_view_main_title" style="color: #323232">{{ t('teaSpace.subtitle2') }}</h4>
      <div class="product_view_main_container">
        <div
          class="product_view_main_container_item"
          v-for="item in [1,2]"
        >
          <img
            :src="`/teaSpace/table${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`teaSpace.table${item}`) }}</p>
        </div>
        <div
          class="product_view_main_container_item"
          v-for="item in [3,4]"
        >
          <img
            :src="`/teaSpace/table${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`teaSpace.table${item}`) }}</p>
        </div>
        <div
          class="product_view_main_container_item"
          v-for="item in [5,6]"
        >
          <img
            :src="`/teaSpace/table${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`teaSpace.table${item}`) }}</p>
        </div>
        <div
          class="product_view_main_container_item last"
          v-for="item in [7,8]"
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
          v-for="item in [1,2,3]"
        >
          <img
            :src="`/teaSpace/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`teaSpace.chair${item}`) }}</p>
        </div>
        <div
          class="product_view_main_containers_item"
          v-for="item in [4,5,6]"
        >
          <img
            :src="`/teaSpace/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`teaSpace.chair${item}`) }}</p>
        </div>
        <div
          class="product_view_main_containers_item"
          v-for="item in [7,8,9]"
        >
          <img
            :src="`/teaSpace/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`teaSpace.chair${item}`) }}</p>
        </div>
        <div
          class="product_view_main_containers_item last"
          v-for="item in [10,11,12]"
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
  <NuxtLink class="resource" to="/concat">
    <img
      :src="locale == 'en' ? '/resource_en.png' : '/resource.png'"
      class="resource_img"
    />
  </NuxtLink>
</template>
<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();
import { reactive, ref } from 'vue';
</script>
<style lang="scss" scoped>
  @use './teaSpace.scss';
</style>
