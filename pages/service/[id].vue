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
        <p class="product_view_position_section_desc" style="text-align: left;">{{t('service.desc')}}</p>
        <img
          src="/service/2.png"
          class="product_view_position_main_img"
        />
        <h3 class="product_view_box_subtitle">{{t('service.subTitles1')}}</h3>
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
        <h3 class="product_view_box_subtitle">{{t('service.subTitles2')}}</h3>
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
        <h3 class="product_view_box_subtitle">{{t('service.subTitles3')}}</h3>
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
    </div>
    <div class="other" id="other">
      <h3 class="product_view_box_subtitle">{{t('service.t1')}}</h3>
      <p class="product_view_box_desc">{{t('service.d1')}}</p>
      <img
        src="/service/21.png"
        class="product_view_box_img"
        style="margin-top: 1rem;"
      />
      <h3 class="product_view_box_subtitle">{{t('service.t2')}}</h3>
      <p class="product_view_box_desc">{{t('service.d2')}}</p>
      <div class="other_list">
        <div class="other_list_item">
          <img
            src="/service/22.png"
            class="other_list_item_img"
          />
        </div>
        <div class="other_list_item">
          <img
            src="/service/23.png"
            class="other_list_item_img"
          />
        </div>
        <div class="other_list_item">
          <img
            src="/service/24.png"
            class="other_list_item_img"
          />
        </div>
      </div>
      <h3 class="product_view_box_subtitle">{{t('service.t3')}}</h3>
      <p class="product_view_box_desc">{{t('service.d3')}}</p>
      <div class="other_list second">
        <div class="other_list_item">
          <img
            src="/service/25.png"
            class="other_list_item_img"
          />
        </div>
        <div class="other_list_item">
          <img
            src="/service/26.png"
            class="other_list_item_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_box1_main">
      <h4 class="product_view_box1_main_title">{{t('service.step')}}</h4>
      <div class="step">
        <div class="step_item">
          <h4 class="step_item_title">{{t('service.step1')}}</h4>
          <h5 class="step_item_subtitle"></h5>
          <p class="step_item_desc">{{ t('service.step1desc') }}</p>
          <img
            src="/service/27.png"
            class="step_item_img"
          />
        </div>
        <div class="step_item">
          <h4 class="step_item_title">{{t('service.step2')}}</h4>
          <h5 class="step_item_subtitle">{{ t('service.step2desc1') }}</h5>
          <p class="step_item_desc">{{ t('service.step2desc2') }}</p>
          <p class="step_item_desc">{{ t('service.step2desc3') }}</p>
          <img
            src="/service/28.png"
            class="step_item_img"
          />
        </div>
        <div class="step_item">
          <h4 class="step_item_title">{{t('service.step3')}}</h4>
          <h5 class="step_item_subtitle">{{ t('service.step3desc1') }}</h5>
          <p class="step_item_desc">{{ t('service.step3desc2') }}</p>
          <p class="step_item_desc">{{ t('service.step3desc3') }}</p>
          <img
            src="/service/29.png"
            class="step_item_img"
          />
        </div>
        <div class="step_item">
          <h4 class="step_item_title">{{t('service.step4')}}</h4>
          <h5 class="step_item_subtitle"></h5>
          <p class="step_item_desc">{{ t('service.step4desc1') }}</p>
          <p class="step_item_desc">{{ t('service.step4desc2') }}</p>
          <img
            src="/service/30.png"
            class="step_item_img"
          />
        </div>
      </div>
      <div class="step_more">
        <h4 class="step_more_title">{{t('service.step5')}}</h4>
        <div class="step_more_list">
          <div class="step_more_list_box">
            <div class="step_more_list_item">
              <img
                src="/service/31.png"
                class="step_more_list_item_img"
              />
            </div>
            <div class="step_more_list_item">
              <img
                src="/service/32.png"
                class="step_more_list_item_img"
              />
            </div>
          </div>
          <div class="step_more_list_box">
            <div class="step_more_list_item">
              <img
                src="/service/33.png"
                class="step_more_list_item_img"
              />
            </div>
            <div class="step_more_list_item">
              <img
                src="/service/34.png"
                class="step_more_list_item_img"
              />
            </div>
          </div>
        </div>
        <div class="step_more_tip">
          <p>{{t('service.tip5')}}</p>
          <p>{{t('service.tip6')}}</p>
        </div>
      </div>
      <div class="step_tip">
        {{t('service.tip7')}}
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
