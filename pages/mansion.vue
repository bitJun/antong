<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('mansion.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('mansion.desc') }}</p>
      </div>
    </div>
    <div class="product_view_main">
      <h4 class="product_view_main_title">{{ t('mansion.subtitle1') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/mansion/sofa_banner.png"
          class="product_view_main_box_img"
        />
        <p class="product_view_main_box_tip">{{ t('mansion.sofa_title') }}</p>
      </div>
      <div class="product_view_main_container">
        <div
          class="product_view_main_container_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]"
        >
          <img
            :src="`/mansion/sofa${item}.png`"
            class="product_view_main_container_item_img"
          />
          <p class="product_view_main_container_item_desc">{{ t(`mansion.sofa${item}`) }}</p>
        </div>
      </div>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle2') }}</h4>
      <div class="product_view_main_containers third">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8,9]"
        >
          <img
            :src="`/mansion/coffeetable${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.coffeetable${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle3') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/mansion/desk_banner.png"
          class="product_view_main_box_img"
        />
        <p class="product_view_main_box_tip">{{ t('mansion.desk_title') }}</p>
      </div>
      <div class="product_view_main_containers second">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10]"
        >
          <img
            :src="`/mansion/desk${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.desk${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle4') }}</h4>
      <div class="product_view_main_containers">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8]"
        >
          <img
            :src="`/mansion/chair${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.chair${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle5') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/mansion/writingDesk_banner.png"
          class="product_view_main_box_img"
        />
      </div>
      <div class="product_view_main_containers third">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12]"
        >
          <img
            :src="`/mansion/writingDesk${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.writingDesk${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle6') }}</h4>
      <div class="product_view_main_box">
        <img
          src="/mansion/bed_banner.png"
          class="product_view_main_box_img"
        />
      </div>
      <div class="product_view_main_containers second">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8]"
        >
          <img
            :src="`/mansion/bed${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.bed${item}`) }}</p>
        </div>
      </div>
      <p class="tip">
        <NuxtLink to="concat">
          {{t('mansion.tip')}}
        </NuxtLink>
      </p>
      <h4 class="product_view_main_title">{{ t('mansion.subtitle7') }}</h4>
      <div class="product_view_main_containers">
        <div
          class="product_view_main_containers_item"
          v-for="item in [1,2,3,4,5,6,7,8]"
        >
          <img
            :src="`/mansion/bedside${item}.png`"
            class="product_view_main_containers_item_img"
          />
          <p class="product_view_main_containers_item_desc">{{ t(`mansion.bedside${item}`) }}</p>
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
  @use './mansion.scss';
</style>
