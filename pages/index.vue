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
      <div class=""></div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
import QRCode from 'qrcode';
import { ref, onMounted } from 'vue';
const isMobile = ref(false);

const windowsUrl = ref('')
const macUrl = ref('')

onMounted(()=>{
  isMobileDevice();
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
</style>