<template>
  <div class="help_view">
    <div class="help_view_section">
      <h4 class="help_view_section_title">{{t('help.help')}}</h4>
      <p class="help_view_section_desc">{{t('help.Explore')}}</p>
    </div>
    <div class="help_view_box">
      <p class="help_view_box_tip">
        {{t('help.Support')}} <span>></span> {{t('help.Started')}}
      </p>
      <h4 class="help_view_box_name">{{t('help.Started')}}</h4>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.platforms')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.secure')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.calls')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.MosApp')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.share')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.customize')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.messages')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.report')}}
      </NuxtLink>
      <NuxtLink to="/helpdetail/2" class="help_view_box_link">
        {{t('help.Translate')}}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';

const { t } = useI18n();
</script>
<style lang="scss" scoped>
  @use './index.scss';
</style>
