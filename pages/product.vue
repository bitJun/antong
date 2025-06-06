<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('product.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('product.desc') }}</p>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/product/p1.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title">{{t('product.p1_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('product.p1_desc')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #ffffff;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title">{{t('product.p2_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('product.p2_desc')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_section_info">
          <img
            src="/product/p2.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/product/p3.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title">{{t('product.p3_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('product.p3_desc')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
      </div>
    </div>
    <div class="product_view_box2">
      <div class="product_view_box2_main">
        <h4 class="product_view_box2_main_title">{{ t('product.title1') }}</h4>
        <p class="product_view_box2_main_desc">{{ t('product.desc1') }}</p>
      </div>
    </div>
    <div class="product_view_main" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_main_info">
          <h4 class="product_view_main_info_title">{{t('product.p4_title')}}</h4>
          <div class="flex">
            <div class="product_view_main_info_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_main_detail">
          <img
            src="/product/p4.png"
            class="product_view_main_detail_img"
          />
          <img
            src="/product/p5.png"
            class="product_view_main_detail_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_main" style="background: #EAEBF0;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_main_info">
          <h4 class="product_view_main_info_title">{{t('product.p5_title')}}</h4>
          <div class="flex">
            <div class="product_view_main_info_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_main_detail">
          <img
            src="/product/p6.png"
            class="product_view_main_detail_imgs"
          />
        </div>
      </div>
    </div>
    <div class="product_view_main" style="background: #FFFFFF;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_main_info">
          <h4 class="product_view_main_info_title">{{t('product.p6_title')}}</h4>
          <div class="flex">
            <div class="product_view_main_info_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_main_detail">
          <img
            src="/product/p7.png"
            class="product_view_main_detail_imgs"
          />
        </div>
      </div>
    </div>
    <div class="product_view_main" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_main_info">
          <h4 class="product_view_main_info_title">{{t('product.p7_title')}}</h4>
          <div class="flex">
            <div class="product_view_main_info_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_main_detail">
          <img
            src="/product/p8.png"
            class="product_view_main_detail_imgs"
          />
        </div>
      </div>
    </div>
    <div class="product_view_main" style="background: #EAEBF0;padding: 16em 0;">
      <div class="box">
        <div class="product_view_main_info">
          <h4 class="product_view_main_info_title">{{t('product.p8_title')}}</h4>
          <div class="flex">
            <div class="product_view_main_info_btn">Read more {{t('product.more')}}&nbsp;></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref } from 'vue';

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 4,
  spaceBetween: 20,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

</script>
<style lang="scss" scoped>
  @use './product.scss';
</style>
