<template>
  <div class="home_view">
    <swiper-container
      ref="bannerRef"
      :style="{
        '--swiper-navigation-color': '#0a6250',
        '--swiper-pagination-color': '#0a6250'
      }"
    >
      <swiper-slide
        class="home_view_banner"
      >
        <NuxtLink
          to="/product/oxygen"
          :external="true"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb1.png' : '/home/banner1.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box">
            <h4 class="home_view_banner_box_title">{{t('home.banner1_title')}}</h4>
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
          to="/product/massage"
          :external="true"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb2.png' : '/home/banner2.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box1">
            <h4 class="home_view_banner_box1_title">{{t('home.banner2_title')}}</h4>
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
          to="/service"
          :external="true"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb3.png' : '/home/banner3.jpg'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box2">
            <h4 class="home_view_banner_box2_title">{{t('home.banner3_title')}}</h4>
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
          to="/product/master"
          :external="true"
          class="home_view_banner"
        >
          <img
            :src="isMobile ? '/home/banner_mb4.png' : '/home/banner4.png'"
            class="home_view_banner_img"
          />
          <div class="home_view_banner_box3">
            <h4 class="home_view_banner_box3_title">{{t('home.banner4_title')}}</h4>
            <p class="home_view_banner_box3_desc">{{t('home.banner4_desc1')}}</p>
            <p class="home_view_banner_box3_desc">{{t('home.banner4_desc2')}}</p>
            <div class="home_view_banner_box3_btn">{{t('home.btn')}}&nbsp;></div>
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
      <div class="home_view_forest_main">
        <p class="home_view_forest_main_title">{{t('home.title')}}</p>
        <!-- <div class="home_view_forest_main_line">-</div> -->
        <p class="home_view_forest_main_tip">{{t('home.tip1')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip2').replace(/'/g, '"')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip3').replace(/'/g, '"')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip4')}}</p>
        <NuxtLink 
          class="home_view_forest_main_btn"
          to="/about"
        >
          {{t('home.btn')}}&nbsp;>
        </NuxtLink>
      </div>
    </div>
    <div class="home_view_product">
      <NuxtLink class="home_view_product_item" to="product/oxygen">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t1')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d1')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          src="/home/pic1.png"
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
          src="/home/pic2.png"
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
          src="/home/pic3.png"
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
          src="/home/pic4.png"
          class="home_view_product_item_img"
        />
      </NuxtLink>
    </div>
    <div class="home_view_service">
      <img
        src="/home/serviceBg.png"
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
          to="/service"
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
const bannerRef = ref(null);
const swipers = useSwiper(bannerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 1,
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
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 4,
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

onMounted(()=>{
  nextTick(()=>{
    isMobile.value = isMobileDevice();
    window.addEventListener("resize", function () {
      isMobile.value = isMobileDevice();
    });
    console.log('isMobile.value', isMobile.value)
  })
  onLoadData();
});

// if (process.client) {
//   const isMobileDevice = () => {
//     return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
//   }

//   isMobile.value = isMobileDevice();

//   window.addEventListener("resize", function () {
//     isMobile.value = isMobileDevice();
//   });
// }

const onLoadData = async () => {
  windowsUrl.value = await QRCode.toDataURL('https://cdn-oss.mos.me/public/mosapp/pc/MosApp-Windows-Latest.exe');
  macUrl.value = await QRCode.toDataURL('https://cdn-oss.mos.me/public/mosapp/pc/MosApp-MacOS-Latest.dmg');
}

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const data = reactive({
		qrcodeObj: ''
})


const { t } = useI18n();
</script>
<style>

.swiper-button-next,
.swiper-button-prev {
  color: #0a6250 !important; /* ← 修改为你想要的颜色，比如 red, #fff, etc. */
}
</style>
<style lang="scss" scoped>
@use "./index.scss";
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>