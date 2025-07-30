<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('massage.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('massage.desc') }}</p>
      </div>
    </div>
    <div class="product_view_title">
      {{ t('massage.subtitle') }}
    </div>
    <NuxtLink to="/massagedetail/8638" class="product_view_section" style="background: #DDEBF6;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/massage/banner1.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title" style="margin-bottom: 0;">OG-8638</h4>
          <h4 class="product_view_section_box_title">{{t('massage.p1_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('massage.p1_desc1')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p1_desc2')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p1_desc3')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p1_desc4')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p1_desc5')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">{{t('massage.more')}}&nbsp;></div>
          </div>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/massagedetail/880" class="product_view_section" style="background: #ffffff;padding: 2rem 0;">
      <div class="box reverse">
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title" style="margin-bottom: 0;">M-880</h4>
          <h4 class="product_view_section_box_title">{{t('massage.p2_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc1')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc2')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc3')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc4')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc5')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p2_desc6')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">{{t('massage.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_section_info">
          <img
            src="/massage/banner2.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/massagedetail/7598" class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/massage/banner3.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title" style="margin-bottom: 0;">OG-7598X</h4>
          <h4 class="product_view_section_box_title">{{t('massage.p3_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc1')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc2')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc3')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc4')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc5')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p3_desc6')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">{{t('massage.more')}}&nbsp;></div>
          </div>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/massagedetail/2528" class="product_view_section" style="background: #ffffff;padding: 2rem 0;">
      <div class="box reverse">
        <div class="product_view_section_box">
          <h4 class="product_view_section_box_title" style="margin-bottom: 0;">OG-2528</h4>
          <h4 class="product_view_section_box_title">{{t('massage.p4_title')}}</h4>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc1')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc2')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc3')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc4')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc5')}}</p>
          <p class="product_view_section_box_desc">{{t('massage.p4_desc6')}}</p>
          <div class="flex">
            <div class="product_view_section_box_btn">{{t('massage.more')}}&nbsp;></div>
          </div>
        </div>
        <div class="product_view_section_info">
          <img
            src="/massage/banner4.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </NuxtLink>
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
  @use './massage.scss';
</style>
