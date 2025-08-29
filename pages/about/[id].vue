<template>
  <div class="about_view">
    <div class="about_view_section" id="mission">
      <img
        :src="isMobile ? '/about/bg_mb.png' : '/about/bg.png'"
        class="about_view_section_img"
      />
      <div class="about_view_section_main" v-if="isMobile">
        <h4 class="about_view_section_tip">{{t('about.tip')}}</h4>
        <p class="about_view_section_title">{{t('about.title')}}</p>
      </div>
      <div class="about_view_section_main" :class="[locale == 'zh-cn' ? 'w36' : 'w144', locale == 'en' ? 'left': '']" v-else>
        <h4 class="about_view_section_tip" style="margin-bottom: 0">{{t('about.tip')}}</h4>
        <h4 class="about_view_section_tip" v-if="locale == 'en'">{{t('about.tip1')}}</h4>
        <div v-if="locale == 'zh-cn'">
          <!-- <p class="about_view_section_title">{{t('about.title')}}</p> -->
          <p class="about_view_section_desc">{{t('about.desc')}}</p>
          <p class="about_view_section_desc">{{t('about.desc1')}}</p>
        </div>
        <div v-else>
          <p :class="['about_view_section_title', locale == 'en' ? 'f22' : '']">{{t('about.title')}}</p>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="about_view_boxmain" v-if="isMobile" id="antong">
      <img
        :src="locale == 'en' ? '/about/infobg_en.png' : '/about/infobg.png'"
        class="about_view_boxmain_img"
      />
      <div class="about_view_boxmain_contents">
        <h4 class="about_view_boxmain_contents_title">{{t('about.subTitle')}}</h4>
        <p class="about_view_boxmain_contents_tip">{{t('about.line1')}}</p>
        <p class="about_view_boxmain_contents_tip">{{t('about.line2')}}</p>
        <p class="about_view_boxmain_contents_tip">{{t('about.line3')}}</p>
      </div>
    </div>
    <div
      class="about_view_boxmain"
      v-else
    >
      <img
        src="/about/bg1.png"
        class="about_view_boxmain_img"
      />
      <div class="about_view_boxmain_content">
        <h4 class="about_view_boxmain_content_title">
          <!-- {{ t('about.name1') }}<span>{{ t('about.name2') }}</span>{{ t('about.name3') }} -->
        </h4>
        <div :class="['about_view_boxmain_content_info', locale == 'en' ? 'mb9' : '']">
          <div :class="['about_view_boxmain_content_info_item', locale == 'en' ? 'mb3' : '']">
            <img
              :src="locale == 'en' ? '/about/icon1_en.png' : '/about/icon1.png'"
              :class="['about_view_boxmain_content_info_item_icon', locale == 'en' ? 'h58' : '']"
            />
          </div>
          <div :class="['about_view_boxmain_content_info_item', locale == 'en' ? 'mb3' : '']">
            <img
              :src="locale == 'en' ? '/about/icon2_en.png' : '/about/icon2.png'"
              :class="['about_view_boxmain_content_info_item_icon', locale == 'en' ? 'h64' : '']"
            />
          </div>
          <div class="about_view_boxmain_content_info_item">
            <img
              :src="locale == 'en' ? '/about/icon3_en.png' : '/about/icon3.png'"
              :class="['about_view_boxmain_content_info_item_icon', locale == 'en' ? 'h62' : '']"
            />
          </div>
        </div>
        <div class="about_view_boxmain_content_main" id="antong">
          <h4 class="about_view_boxmain_content_main_title">{{t('about.subTitle')}}</h4>
          <p class="about_view_boxmain_content_main_tip">{{t('about.line1')}}</p>
          <p class="about_view_boxmain_content_main_tip">{{t('about.line2')}}</p>
          <!-- <p class="about_view_boxmain_content_main_tip">{{t('about.line3')}}</p> -->
        </div>
      </div>
    </div>
    <div class="about_view_boxs">
      <img
        :src="isMobile ? '/about/bg2_mb.png' : '/about/bg2.png'"
        class="about_view_boxs_img"
      />
      <div class="about_view_boxs_main" v-if="!isMobile">
        <p>{{t('about.line3')}}</p>
      </div>
    </div>
    <div class="about_view_box">
      <!-- <div class="about_view_box_main" id="antong">
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
      </div> -->
      <!-- <div class="about_view_box_section" id="advantages">
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
      </div> -->
      <!-- <div class="about_view_box_line"></div> -->
      <div class="about_view_box_introduce" id="advantages">
        <div class="about_view_box_introduce_main">
        <h4 class="about_view_box_introduce_main_title">{{t('about.subTitle2')}}</h4>
        <p class="about_view_box_introduce_main_tip">
          {{t('about.line4')}}
        </p>
        </div>
      </div>
      <div class="about_view_box_container" id="honor">
        <h4 class="about_view_box_container_title">{{t('about.honor')}}</h4>
        <div class="about_view_box_container_swiper">
          <swiper-container
            ref="containerRefs"
            :slides-per-view="isMobile ? 2 : 4"
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
const { t, locale, setLocale } = useI18n();
import { reactive, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const isMobile = ref(true);

const route = useRoute();

const lang = ref('');

onMounted(() => {
  console.log('locale', locale)
  scrollToHash()
  nextTick(()=>{
    isMobile.value = isMobileDevice();
    window.addEventListener("resize", function () {
      isMobile.value = isMobileDevice();
    });
    console.log('isMobile.value', isMobile.value)
  })
});

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const scrollToHash = () => {
  if (route.params.id && route.params.id != 'home') {
    setTimeout(()=>{
      const target = document.getElementById(route.params.id);
      console.log('target', target);
      target?.scrollIntoView({
        behavior: 'smooth',   // 平滑滚动
        block: 'start'
      });
    }, 100);
  }
}
watch(locale, (val, oldVal) => {
  console.log('val', val);
  lang.value = val;
})

watch(route, (to, from) => {
  
  nextTick(()=>{
    scrollToHash()
  })
},{ deep: true })

// watch(() => route.params.id, () => {
//   scrollToHash()
// },{ deep: true })

const pcRef = ref(null);
const containerRefs = ref(null);

const swiper = useSwiper(pcRef, {
  effect: 'creative',
  loop: true,
  autoplay: true,
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
});


const swipers = useSwiper(containerRefs, {
  effect: 'creative',
  loop: true,
  autoplay: true,
  slidesPerView: isMobile.value ? 2 : 4,
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
