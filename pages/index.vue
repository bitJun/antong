<template>
  <div class="home_view">
    <img
      src="/home/banner.png"
      class="home_view_banner"
    />
    <div class="line"></div>
    <div class="home_view_forest">
      <img
        src="/home/forest.png"
        class="home_view_forest_img"
      />
      <div class="home_view_forest_main">
        <p class="home_view_forest_main_title">{{t('home.title')}}</p>
        <div class="home_view_forest_main_line">-</div>
        <p class="home_view_forest_main_tip">{{t('home.tip1')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip2')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip3')}}</p>
        <p class="home_view_forest_main_tip">{{t('home.tip4')}}</p>
        <div class="home_view_forest_main_btn">{{t('home.btn')}}&nbsp;></div>
      </div>
    </div>
    <div class="home_view_product">
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t1')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d1')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          src="/home/pic1.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t2')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d2')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          src="/home/pic2.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t3')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d3')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          src="/home/pic3.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">{{t('home.t4')}}</h4>
          <p class="home_view_product_item_main_desc">{{t('home.d4')}}</p>
          <div class="home_view_product_item_main_more">{{t('home.btn')}}&nbsp;></div>
        </div>
        <img
          src="/home/pic4.png"
          class="home_view_product_item_img"
        />
      </div>
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
        <div class="home_view_service_main_btn">{{t('home.btn')}}&nbsp;></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="home_view_news">
      <h4 class="home_view_news_title">{{t('home.subtitle1')}}</h4>
      <div class="home_view_news_list">
        <swiper-container ref="containerRef">
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
        </swiper-container>
      </div>
    </div>
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
import { ref, onMounted } from 'vue';
const isMobile = ref(false);
const windowsUrl = ref('');
const macUrl = ref('');
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 3,
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
  isMobileDevice();
  console.log(swiper.instance)
  onLoadData();
});

const onLoadData = async () => {
  windowsUrl.value = await QRCode.toDataURL('https://cdn-oss.mos.me/public/mosapp/pc/MosApp-Windows-Latest.exe');
  macUrl.value = await QRCode.toDataURL('https://cdn-oss.mos.me/public/mosapp/pc/MosApp-MacOS-Latest.dmg');
}

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
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