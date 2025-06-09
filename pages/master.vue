<template>
  <div class="product_view">
    <div class="product_view_box1">
      <div class="product_view_box1_main">
        <h4 class="product_view_box1_main_title">{{ t('master.title') }}</h4>
        <p class="product_view_box1_main_desc">{{ t('master.desc') }}</p>
      </div>
    </div>
    <div class="product_view_subtitle">{{t('master.subtitle')}}</div>
    <div class="product_view_section" style="background: #DDEBF6;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/master/pic1.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p1_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p1_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p1_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p1_design')}}：</p>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #ffffff;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p2_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p2_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p2_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p2_design')}}：</p>
        </div>
        <div class="product_view_section_info">
          <img
            src="/master/pic2.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/master/pic3.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p3_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p3_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p3_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p3_design')}}：</p>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #D9DADF;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p4_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p4_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p4_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p4_design')}}：</p>
        </div>
        <div class="product_view_section_info">
          <img
            src="/master/pic4.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/master/pic5.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p5_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p5_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p5_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p5_design')}}：</p>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #ffffff;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p6_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p6_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p6_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p6_design')}}：</p>
        </div>
        <div class="product_view_section_info">
          <img
            src="/master/pic6.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/master/pic7.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p7_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p7_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p7_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p7_design')}}：</p>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #D9DADF;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p8_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p8_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p8_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p8_design')}}：</p>
        </div>
        <div class="product_view_section_info">
          <img
            src="/master/pic8.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #DDEBF6;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_info">
          <img
            src="/master/pic9.png"
            class="product_view_section_img"
          />
        </div>
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p9_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p9_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p9_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p9_design')}}：</p>
        </div>
      </div>
    </div>
    <div class="product_view_section" style="background: #D9DADF;padding: 2rem 0;">
      <div class="box">
        <div class="product_view_section_box">
          <p class="product_view_section_box_desc">{{t('master.name')}}：{{t('master.p10_name')}}</p>
          <p class="product_view_section_box_desc">{{t('master.time')}}：{{t('master.p10_time')}}</p>
          <p class="product_view_section_box_desc mb20">{{t('master.designer')}}：{{t('master.p10_designer')}}</p>
          <p class="product_view_section_box_desc">{{t('master.design')}}：</p>
          <p class="product_view_section_box_desc">{{t('master.p10_design')}}：</p>
        </div>
        <div class="product_view_section_info">
          <img
            src="/master/pic10.png"
            class="product_view_section_img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive, ref } from 'vue';
</script>
<style lang="scss" scoped>
  @use './master.scss';
</style>
