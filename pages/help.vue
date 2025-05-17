<template>
  <div class="help_view">
    <div class="help_view_section">
      <h4 class="help_view_section_title">{{t('help.help')}}</h4>
      <p class="help_view_section_desc">{{t('help.solutions')}}</p>
    </div>
    <div class="help_view_box">
      <div class="help_view_box_main">
        <NuxtLink to="/helpdetail/0" class="help_view_box_main_item">
          <img
            src="/help/icon1.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Started')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/1" class="help_view_box_main_item">
          <img
            src="/help/icon2.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Instant')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/2" class="help_view_box_main_item">
          <img
            src="/help/icon3.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Channel')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/3" class="help_view_box_main_item">
          <img
            src="/help/icon4.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Voice')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/4" class="help_view_box_main_item">
          <img
            src="/help/icon5.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Encrypted')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/5" class="help_view_box_main_item">
          <img
            src="/help/icon6.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Privacy')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/6" class="help_view_box_main_item">
          <img
            src="/help/icon7.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Video')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/7" class="help_view_box_main_item">
          <img
            src="/help/icon8.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Account')}}</p>
        </NuxtLink>
        <NuxtLink to="/helpdetail/8" class="help_view_box_main_item">
          <img
            src="/help/icon9.png"
            class="help_view_box_main_item_img"
          />
          <p class="help_view_box_main_item_text">{{t('help.Security')}}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const router = useRouter();

const { t } = useI18n();
</script>
<style lang="scss" scoped>
  @use './help.scss';
</style>
