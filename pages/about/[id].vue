<template>
  <div class="about_view">
    <div class="about_view_section" id="mission">
      <img
        src="/about/bg.png"
        class="about_view_section_img"
      />
      <div class="about_view_section_main">
        <h4 class="about_view_section_tip">{{t('about.tip')}}</h4>
        <p class="about_view_section_title">{{t('about.title')}}</p>
        <p class="about_view_section_desc">{{t('about.desc')}}</p>
      </div>
      <!--  -->
    </div>
    <div class="about_view_box">
      <div class="about_view_box_main" id="antong">
        <div class="about_view_box_main_desc">
          <h4 class="about_view_box_main_desc_title">{{t('about.subTitle')}}</h4>
          <p class="about_view_box_main_desc_tip">{{t('about.line1')}}</p>
          <p class="about_view_box_main_desc_tip">{{t('about.line2')}}</p>
          <p class="about_view_box_main_desc_tip">{{t('about.line3')}}</p>
        </div>
        <img
          src="/about/pic1.png"
          class="about_view_box_main_img"
        />
      </div>
      <div class="about_view_box_section" id="advantages">
        <div class="about_view_box_mains">
          <img
            src="/about/pic2.png"
            class="about_view_box_mains_img"
          />
          <div class="about_view_box_mains_desc">
            <h4 class="about_view_box_mains_desc_title">{{t('about.subTitle2')}}</h4>
            <p class="about_view_box_mains_desc_tip">
              {{t('about.line4')}}
            </p>
          </div>
        </div>
      </div>
      <div class="about_view_box_line"></div>
      <div class="about_view_box_container" id="honor">
        <h4 class="about_view_box_container_title">{{t('about.honor')}}</h4>
        <div class="about_view_box_container_swiper">
          <swiper-container
            ref="containerRef"
            :style="{
              '--swiper-navigation-color': '#0a6250',
              '--swiper-pagination-color': '#0a6250'
            }"
          >
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor1.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor2.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor3.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor4.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor5.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor6.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
            <swiper-slide
              class="about_view_box_container_swiper_item"
            >
              <img
                src="/about/honor7.png"
                class="about_view_box_container_swiper_item_img"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
      <div class="about_view_box_line"></div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  scrollToHash()
})


const scrollToHash = () => {
  console.log('route',route.params.id)
  if (route.params.id && route.params.id != 'home') {
    document.getElementById(route.params.id).scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'start' // 可选值：start, center, end, nearest
    })
  }
}

watch(route, (to, from) => {
  scrollToHash()
},{ deep: true })

// watch(() => route.params.id, () => {
//   scrollToHash()
// },{ deep: true })

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: true,
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
  @use './about.scss';
</style>
