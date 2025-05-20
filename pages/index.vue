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
        <p class="home_view_forest_main_title">Antora安桐</p>
        <div class="home_view_forest_main_line">-</div>
        <p class="home_view_forest_main_tip">把健康与美学融入日常</p>
        <p class="home_view_forest_main_tip">创作"可感知的美好体验"</p>
        <p class="home_view_forest_main_tip">构建"智能硬件+数据生态+内容服务"</p>
        <p class="home_view_forest_main_tip">全场景健康平台</p>
        <div class="home_view_forest_main_btn">了解更多&nbsp;></div>
      </div>
    </div>
    <div class="home_view_product">
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">高压氧舱</h4>
          <p class="home_view_product_item_main_desc">高智能集成·高奢配置·安全耐用</p>
          <div class="home_view_product_item_main_more">了解更多&nbsp;></div>
        </div>
        <img
          src="/home/pic1.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">高端按摩椅</h4>
          <p class="home_view_product_item_main_desc">5D智感机芯·全周期AI健康管家·Lifex灵动导轨</p>
          <div class="home_view_product_item_main_more">了解更多&nbsp;></div>
        </div>
        <img
          src="/home/pic2.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">空气消毒净化器</h4>
          <p class="home_view_product_item_main_desc">高智能集成·高奢配置·安全耐用</p>
          <div class="home_view_product_item_main_more">了解更多&nbsp;></div>
        </div>
        <img
          src="/home/pic3.png"
          class="home_view_product_item_img"
        />
      </div>
      <div class="home_view_product_item">
        <div class="home_view_product_item_main">
          <h4 class="home_view_product_item_main_title">创意生活家具</h4>
          <p class="home_view_product_item_main_desc">创意设计·匠新打造·品质天然</p>
          <div class="home_view_product_item_main_more">了解更多&nbsp;></div>
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
        <h4 class="home_view_service_main_title">定制服务</h4>
        <div class="home_view_service_main_line"></div>
        <p class="home_view_service_main_tip">资深团队全程服务,专业咨询无忧</p>
        <p class="home_view_service_main_tip">顶级材质精工智选,细节无暇</p>
        <p class="home_view_service_main_tip">个性定制空间美学,精准适配</p>
        <div class="home_view_service_main_btn">了解更多&nbsp;></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="home_view_news">
      <h4 class="home_view_news_title">行业资讯</h4>
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
      <h4 class="home_view_cooperate_title">战略合作品牌</h4>
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