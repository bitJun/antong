<template>
  <div class="about_view">
    <div class="about_view_section">
      <img
        src="/contact/bg.png"
        class="about_view_section_img"
      />
      <div class="about_view_section_box">
        <h4 class="about_view_section_title">{{t('contact.title')}}</h4>
      </div>
    </div>
    <div class="about_view_line"></div>
    <div class="about_view_main">
      <h4 class="about_view_main_title">{{t('contact.subtitle')}}</h4>
      <div class="about_view_main_box">
        <p class="about_view_main_subtitle">ANTORA COMPANY LIMITED</p>
        <p class="about_view_main_desc">安桐（香港）有限公司</p>
        <p class="about_view_main_tips">UNIT 2208, 22/F YAN'S TOWER, 25-27 WONG CHUK HANG ROAD, WONG CHUK HANG, HK.</p>
      </div>
      <div class="about_view_main_box">
        <p class="about_view_main_subtitle">XIAMEN ANTORA IMPORT AND EXPORT CO., LTD.</p>
        <p class="about_view_main_desc">厦门安桐进出口有限公司</p>
        <p class="about_view_main_tips">Unit 604, No. 291, Bingcheng Road, Huli District, Xiamen City, Fujian Province, China.</p>
      </div>
      <div class="about_view_main_box">
        <p class="about_view_main_subtitle">ANTORA CAMBODIAN IMPORT EXPORT CO., LTD.</p>
        <p class="about_view_main_desc">安桐柬埔寨进出口有限公司</p>
        <p class="about_view_main_tips">#263, St NR6, Phum Kien Khleang, Sangkat Prek leap, Khan Chroy Chongva, Phnom Penh, Cambodia.</p>
      </div>
      <div v-if='isMobile'>
        <p class="about_view_main_vip">
          <img
            src="/contact/tel.png"
            class="about_view_main_vip_img"
          />&nbsp;
          {{t('contact.VIP')}}
        </p>
        <p class="about_view_main_vip">+86 186 0692 2333&nbsp;&nbsp;+855 188 56 9999</p>
      </div>
      <p class="about_view_main_vip" v-else>
        {{t('contact.VIP')}}&nbsp;
        <img
          src="/contact/tel.png"
          class="about_view_main_vip_img"
        />
        &nbsp;&nbsp;+86 186 0692 2333&nbsp;&nbsp;+855 188 56 9999
      </p>
      <div class="about_view_main_contact">
        <img
          src="/contact/phone.png"
          class="about_view_main_contact_img"
        />
        <img
          src="/contact/tg.png"
          class="about_view_main_contact_img"
        />
        <img
          src="/contact/wechat.png"
          class="about_view_main_contact_img"
        />
      </div>
      <p class="about_view_main_tip">{{t('contact.tip')}}</p>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const isMobile = ref(false);

if (process.client) {
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }
  isMobile.value = isMobileDevice();
  window.addEventListener("resize", function () {
    isMobile.value = isMobileDevice();
  });
}
</script>
<style lang="scss" scoped>
  @use './concat.scss';
</style>
