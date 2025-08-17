<template>
  <div class="about_view">
    <div class="about_view_section">
      <img
        src="/contact/bg.png"
        class="about_view_section_img"
      />
      <div class="about_view_section_box">
        <div class="about_view_section_box_main" v-if='isMobile'>
          <div class="about_view_section_title">
            {{t('contact.title')}}
          </div>
          <p class="about_view_section_vip">
            <img
              src="/contact/icon.png"
              class="about_view_section_vip_img"
            />{{t('contact.notice')}}&nbsp;public@antoralife.com
          </p>
        </div>
        <div class="about_view_section_title" v-else>
          {{t('contact.title')}}
          <p class="about_view_section_title_vip">
            <img
              src="/contact/icon.png"
              class="about_view_section_title_vip_img"
            />{{t('contact.notice')}}&nbsp;public@antoralife.com
          </p>
        </div>
        <div class="about_view_main_contact">
          <div class="about_view_main_contact_img">
            <img
              src="/contact/phone.png"
              class="about_view_main_contact_img_icon"
            />
            <p>WhatsApp</p>
          </div>
          <div class="about_view_main_contact_img">
            <img
              src="/contact/tg.png"
              class="about_view_main_contact_img_icon"
            />
            <p>Telegram</p>
          </div>
          <div class="about_view_main_contact_img">
            <img
              src="/contact/wechat.png"
              class="about_view_main_contact_img_icon"
            />
            <p>Wechat</p>
          </div>
        </div>
        <div class="about_view_main_info" v-if='isMobile'>
          <div class="about_view_main_info_item">厦门安桐进出口有限公司</div>
          <div class="about_view_main_info_item">安桐有限公司</div>
          <div class="about_view_main_info_item">安桐柬埔寨进出口有限公司</div>
        </div>
        <!-- <div class="about_view_main_info">
          <div class="about_view_main_info_item">
            <div class="about_view_main_info_item_name">厦门安桐进出口有限公司</div>
            <div class="about_view_main_info_item_desc">+86 186 0692 2333(中国大陆)</div>
          </div>
          <div class="about_view_main_info_item">
            <div class="about_view_main_info_item_name">安桐有限公司</div>
            <div class="about_view_main_info_item_desc">+852 770 57 929(中国香港)</div>
          </div>
          <div class="about_view_main_info_item">
            <div class="about_view_main_info_item_name">安桐柬埔寨进出口有限公司</div>
            <div class="about_view_main_info_item_desc">+855 188 56 9999(柬埔寨)</div>
          </div>
        </div> -->
      </div>

      <img
        src="/contact/map.png"
        class="about_view_section_img"
      />
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
