<template>
  <div class="home_view" ref="homeViewRef">
    <div class="home_view_video">
      <video
        src="/video.mp4"
        class="home_view_video_src"
        controls
      />
    </div>
    <swiper-container
      ref="bannerRef"
      :style="{
        '--swiper-navigation-color': '#0a6250',
        '--swiper-pagination-color': '#0a6250'
      }"
      :autoplay="true"
    >
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="product/massage"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb2.png' : '/home/banner2.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box1">
            <!-- <h4 class="home_view_banner_box1_title">{{t('home.banner2_title')}}</h4> -->
            <p class="home_view_banner_box1_desc">{{t('home.banner2_desc1')}}</p>
            <p class="home_view_banner_box1_desc">{{t('home.banner2_desc2')}}</p>
            <div class="home_view_banner_box1_btn">{{t('home.btn')}}&nbsp;></div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="product/oxygen"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb1.png' : '/home/banner1.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box">
            <!-- <h4 class="home_view_banner_box_title">{{t('home.banner1_title')}}</h4> -->
            <p class="home_view_banner_box_desc">{{t('home.banner1_desc1')}}</p>
            <p class="home_view_banner_box_desc">{{t('home.banner1_desc2')}}</p>
            <div class="home_view_banner_box_btn">{{t('home.btn')}}&nbsp;></div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="service/home"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb3.png' : '/home/banner3.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box2">
            <!-- <h4 class="home_view_banner_box2_title">{{t('home.banner3_title')}}</h4> -->
            <p class="home_view_banner_box2_desc">{{t('home.banner3_desc1')}}</p>
            <p class="home_view_banner_box2_desc">{{t('home.banner3_desc2')}}</p>
            <div class="home_view_banner_box2_btn">{{t('home.btn')}}&nbsp;></div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="product/master"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb4.png' : '/home/banner4.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box3">
            <!-- <h4 class="home_view_banner_box3_title">{{t('home.banner4_title')}}</h4> -->
            <p class="home_view_banner_box3_desc">{{t('home.banner4_desc1')}}</p>
            <p class="home_view_banner_box3_desc">{{t('home.banner4_desc2')}}</p>
            <div class="home_view_banner_box3_btn">{{t('home.btn')}}&nbsp;></div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="product/master"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb5.png' : '/home/banner5.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box4">
            <!-- <h4 class="home_view_banner_box4_title">{{t('home.banner5_title')}}</h4> -->
            <p class="home_view_banner_box4_desc">{{t('home.banner5_desc1')}}</p>
            <p class="home_view_banner_box4_desc">{{t('home.banner5_desc2')}}</p>
            <div class="home_view_banner_box4_btn">{{t('home.btn')}}&nbsp;></div>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper-container>
    <div class="line"></div>
    <div class="home_view_forest">
      <img
        src="/home/forest.png"
        class="home_view_forest_img"
      />
      <div class="home_view_forest_mains">
        <div class="home_view_forest_main">
          <div class="home_view_forest_main_left">
            <div class="home_view_forest_main_left_bed">
              <p>{{t('home.bed')}}</p>
              <img
                src="/home/bed.png"
                class="bed"
              />
            </div>
            <div class="home_view_forest_main_left_keting">
              <p>{{t('home.keting')}}</p>
              <img
                src="/home/keting.png"
                class="keting"
              />
            </div>
          </div>
          <div class="home_view_forest_main_right">
            <img
              src="/home/shafa.png"
              class="shafa"
            />
            <div class="home_view_forest_main_right_desc">
              <p>{{t('home.shafa1')}}</p>
            </div>
          </div>
        </div>
        <div class="home_view_forest_mains_tip">{{t('home.shafa2')}}</div>
      </div>
    </div>
    <div class="home_view_product">
      <NuxtLink class="home_view_product_item" to="product/home">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t1')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d1')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          :src="isMobile ? '/home/pic_mb1.png' : '/home/pic1.png'"
          class="home_view_product_item_img"
        />
      </NuxtLink>
      <NuxtLink class="home_view_product_item" to="massage">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t2')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d2')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          :src="isMobile ? '/home/pic_mb2.png' : '/home/pic2.png'"
          class="home_view_product_item_img"
        />
      </NuxtLink>
      <NuxtLink to="/purifier" class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t3')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d3')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          :src="isMobile ? '/home/pic_mb3.png' : '/home/pic3.png'"
          class="home_view_product_item_img"
        />
      </NuxtLink>
      <NuxtLink to="/product/creativity" :external="true" class="home_view_product_item">
      <!-- <NuxtLink :to="{path: '/product', hash: '#creativity'}" class="home_view_product_item"> -->
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t4')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d4')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          :src="isMobile ? '/home/pic_mb4.png' : '/home/pic4.png'"
          class="home_view_product_item_img"
        />
      </NuxtLink>
    </div>
    <div class="home_view_service">
      <img
        :src="isMobile ? '/home/serviceBg_mb.png' : '/home/serviceBg.png'"
        class="home_view_service_img"
      />
      <div class="home_view_service_main">
        <h4 class="home_view_service_main_title">{{t('home.subtitle')}}</h4>
        <div class="home_view_service_main_line"></div>
        <p class="home_view_service_main_tip">{{t('home.dd1')}}</p>
        <p class="home_view_service_main_tip">{{t('home.dd2')}}</p>
        <p class="home_view_service_main_tip">{{t('home.dd3')}}</p>
        <NuxtLink 
          class="home_view_service_main_btn"
          to="/service/home"
        >
          {{t('home.btn')}}&nbsp;>
        </NuxtLink>
      </div>
    </div>
    <div class="line"></div>
    <NuxtLink to="/news" class="home_view_news">
      <h4 class="home_view_news_title">{{t('home.subtitle1')}}</h4>
      <div class="home_view_news_list">
        <swiper-container
          ref="containerRef"
          :slides-per-view="isMobile ? 2 : 4"
          :style="{
            '--swiper-navigation-color': '#0a6250',
            '--swiper-pagination-color': '#0a6250'
          }"
        >
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news1.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news2.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news3.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news4.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news5.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news6.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
          <swiper-slide
            class="home_view_news_list_item"
          >
            <img
              src="/home/news7.png"
              class="home_view_news_list_item_img"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </NuxtLink>
    <div class="line"></div>
    <div class="home_view_cooperate">
      <h4 class="home_view_cooperate_title">{{t('home.subtitle2')}}</h4>
      <div class="home_view_cooperate_list">
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate1.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate2.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate3.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate4.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate5.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
        <div class="home_view_cooperate_list_item">
          <img
            src="/home/cooperate6.png"
            class="home_view_cooperate_list_item_img"
          >
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
import QRCode from 'qrcode';
import { ref, onMounted, nextTick } from 'vue';
const isMobile = ref(true);
const windowsUrl = ref('');
const macUrl = ref('');
const containerRef = ref(null);
let num = ref(4);
const bannerRef = ref(null);
let number = 0;


const homeViewRef = ref(null);
let scale = 1;

onMounted(()=>{
  nextTick(()=>{
    isMobile.value = isMobileDevice();
    if (isMobileDevice()) {
      num.value = 2;
      number = 2;
    } else {
      num.value = 4;
      number = 4;
    }
    window.addEventListener("resize", function () {
      isMobile.value = isMobileDevice();
      if (isMobileDevice()) {
        num.value = 2;
        number = 2;
      } else {
        num.value = 4;
        number = 4;
      }
    });
  });

  window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      scale += delta;
      scale = Math.max(0.5, Math.min(3, scale));
      if (homeViewRef.value) {
        homeViewRef.value.style.transformOrigin = `${e.pageX}px ${e.pageY}px`;
        homeViewRef.value.style.transform = `scale(${scale})`;
      }
    }
  }, { passive: false });
});

const swipers = useSwiper(bannerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  navigation: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -200],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: true,
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
// if (process.client) {
//   const isMobileDevice = () => {
//     return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
//   }

//   isMobile.value = isMobileDevice();

//   window.addEventListener("resize", function () {
//     isMobile.value = isMobileDevice();
//   });
// }

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const data = reactive({
		qrcodeObj: ''
})


const { t } = useI18n();
</script>
<style lang="scss" scoped>
@use "./index.scss";
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>