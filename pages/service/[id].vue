<template>
  <div class="product_view">
    <div class="product_view_bg">
      <img
        :src="isMobile ? '/product/bg_mb.png' : '/service/bg.png'"
        class="product_view_bg_img"
      >
      <p class="product_view_bg_desc">VIP {{t('home.subtitle')}}</p>
    </div>
    <div class="product_view_position" id="position">
      <div class="product_view_position_main">
        <h3 class="product_view_box_title">{{t('service.subTitles')}}</h3>
        <p class="product_view_position_section_desc">{{t('service.desc')}}</p>
        <img
          src="/service/2.png"
          class="product_view_position_main_img"
        />
        <h3 class="product_view_box_title">{{t('service.subTitles1')}}</h3>
        <p class="product_view_position_section_desc">{{t('service.desc1')}}</p>
        <div class="product_view_position_section_list three">
          <img
            src="/service/3.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/4.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/5.png"
            class="product_view_position_section_list_img"
          />
        </div>
        <h3 class="product_view_box_title">{{t('service.subTitles2')}}</h3>
        <p class="product_view_position_section_desc">{{t('service.desc2')}}</p>
        <div class="product_view_position_section_list">
          <img
            src="/service/6.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/7.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/8.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/9.png"
            class="product_view_position_section_list_img"
          />
        </div>
        <h3 class="product_view_box_title">{{t('service.subTitles3')}}</h3>
        <p class="product_view_position_section_desc">{{t('service.desc3')}}</p>
        <div class="product_view_position_section_list">
          <img
            src="/service/10.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/11.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/12.png"
            class="product_view_position_section_list_img"
          />
          <img
            src="/service/13.png"
            class="product_view_position_section_list_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_box1" id="process">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{t('service.tip4')}}</h4>
        <div class="product_view_box1_main_list">
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/14.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line1')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc1')}}</p>
            </div>
          </div>
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/15.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line2')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc2')}}</p>
            </div>
          </div>
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/16.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line3')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc3')}}</p>
            </div>
          </div>
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/17.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line4')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc4')}}</p>
            </div>
          </div>
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/18.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line5')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc5')}}</p>
            </div>
          </div>
          <div class="product_view_box1_main_list_item">
            <div class="product_view_box1_main_list_item_info">
              <img
                src="/service/16.png"
                class="product_view_box1_main_list_item_info_img"
              >
              <h4 class="product_view_box1_main_list_item_info_title">{{t('service.line6')}}</h4>
              <p class="product_view_box1_main_list_item_info_desc">{{t('service.desc6')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="massage" id="massage">
      <h3 class="product_view_box_title">{{t('service.massage')}}</h3>
      <img
        src="/service/20.png"
        class="massage_banner"
      />
      <p class="massage_title">{{t('service.step')}}</p>
      <div class="massage_box flex">
        <div class="massage_box_main">
          <h4>{{t('service.step1')}}</h4>
          <p>{{t('service.sub1')}}</p>
        </div>
        <div class="massage_box_small">
          <img
            src="/service/img1.png"
            class="massage_box_small_img"
          />
        </div>
      </div>
      <div class="arrow">
        <img
          src="/service/arrow.png"
          class="arrow_img"
        />
      </div>
      <div class="massage_box">
        <div class="massage_box_flex">
          <div class="massage_box_main">
            <h4>{{t('service.step2')}}</h4>
            <img
              src="/service/icon2.png"
              class="massage_box_main_icon"
            />
            <p>{{t('service.sub2')}}</p>
            <p>{{t('service.sub2_1')}}</p>
          </div>
          <div class="massage_box_small">
            <img
              src="/service/img2.png"
              class="massage_box_small_img"
            />
          </div>
        </div>
        <p class="massage_box_tips">{{t('service.sub3')}}</p>
        <p class="massage_box_tip">{{t('service.sub4')}}</p>
        <div class="massage_box_three">
          <img
            src="/service/img3.png"
            class="massage_box_three_img"
          />
          <img
            src="/service/img4.png"
            class="massage_box_three_img"
          />
          <img
            src="/service/img5.png"
            class="massage_box_three_img"
          />
        </div>
      </div>
      <div class="arrow">
        <img
          src="/service/arrow.png"
          class="arrow_img"
        />
      </div>
      <div class="massage_box">
        <div class="massage_box_flex">
          <div class="massage_box_main">
            <img
              src="/service/icon1.png"
              class="massage_box_main_icon"
            />
            <p>{{t('service.sub5')}}</p>
            <p>{{t('service.sub6')}}</p>
          </div>
          <div class="massage_box_big">
            <img
              src="/service/img6.png"
              class="massage_box_big_img"
            />
          </div>
        </div>
        <p class="massage_box_tips">{{t('service.sub7')}}</p>
        <p class="massage_box_tip">{{t('service.sub8')}}</p>
        <div class="massage_box_single">
          <img
            src="/service/img7.png"
            class="massage_box_single_img"
          />
        </div>
      </div>
      <div class="arrow">
        <img
          src="/service/arrow.png"
          class="arrow_img"
        />
      </div>
      <div class="massage_box">
        <div class="massage_box_flex">
          <div class="massage_box_main">
            <img
              src="/service/icon.png"
              class="massage_box_main_icon"
            />
            <p>{{t('service.sub9')}}</p>
          </div>
          <div class="massage_box_small">
            <img
              src="/service/img8.png"
              class="massage_box_small_img"
            />
          </div>
        </div>
        <p class="massage_box_tip">{{t('service.sub10')}}</p>
        <div class="massage_box_imgs">
          <img
            src="/service/img9.png"
            class="massage_box_imgs_item"
          />
          <img
            src="/service/img10.png"
            class="massage_box_imgs_item"
          />
        </div>
        <div class="massage_tip">{{t('service.tip')}}</div>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobile = ref(false);

onMounted(() => {
  scrollToHash();
  nextTick(()=>{
    isMobile.value = isMobileDevice();
    window.addEventListener("resize", function () {
      isMobile.value = isMobileDevice();
    });
  })
});


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

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

watch(route, (to, from) => {
  
  nextTick(()=>{
    scrollToHash()
  })
},{ deep: true })

// watch(() => route.params.id, () => {
//   scrollToHash()
// },{ deep: true })
</script>
<style lang="scss" scoped>
  @use './service.scss';
</style>
