<template>
  <div class="about_view">
    <div class="about_view_section">
      <img
        src="/contact/bg_mb.png"
        class="about_view_section_img"
        v-if='isMobile'
      />
      <img
        src="/contact/bg.png"
        class="about_view_section_img"
        v-else
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
          <div class="about_view_main_info_item" style="font-size: 1.1rem;">Xiamen Antora Import and Export Co., LTD.</div>
          <div class="about_view_main_info_item" style="font-size: 1.1rem;">Antora Company Limited</div>
          <div class="about_view_main_info_item" style="font-size: 1.1rem;">ANTORA CAMBODIAN IMPORT EXPORT CO., LTD.</div>
        </div>
      </div>

      <img
        :src="locale == 'en' ? '/contact/map_mb_en.png' : '/contact/map_mb.png'"
        class="about_view_section_img"
        v-if='isMobile'
      />
      <img
        :src="locale == 'en' ? '/contact/map_en.png' : '/contact/map.png'"
        class="about_view_section_img"
        v-else
      />
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
import { ref, onMounted, nextTick } from 'vue';
const { t, locale } = useI18n();
const isMobile = ref(false);

onMounted(() => {
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
</script>
<style lang="scss" scoped>
  @use './concat.scss';
</style>
