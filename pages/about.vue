<template>
  <div class="about_view">
    <div class="about_view_section">
      <h4 class="about_view_section_title">{{t('about.AboutUs')}}</h4>
      <p class="about_view_section_desc">{{t('about.Secure')}}</p>
    </div>
    <div class="about_view_box">
      <div class="about_view_box_main">
        <div class="about_view_box_main_desc">
          <h4 class="about_view_box_main_desc_title">{{t('about.HIGHLANDER')}}</h4>
          <p class="about_view_box_main_desc_tip">{{t('about.messaging')}}</p>
          <ul class="about_view_box_main_desc_list">
            <li>{{t('about.instantly')}}</li>
            <li>{{t('about.Share')}}</li>
            <li>{{t('about.Create')}}</li>
            <li>{{t('about.Make')}}</li>
            <li>{{t('about.Channel')}}</li>
            <li>{{t('about.Ratchet')}}</li>
          </ul>
        </div>
        <img
          src="/about/pic1.png"
          class="about_view_box_main_img"
        />
      </div>
      <div class="about_view_box_mains">
        <img
          src="/about/pic2.png"
          class="about_view_box_mains_img"
        />
        <div class="about_view_box_mains_desc">
          <h4 class="about_view_box_mains_desc_title">{{t('about.TEAM')}}</h4>
          <p class="about_view_box_mains_desc_tip">
            {{t('about.Behind')}}
          </p>
        </div>
      </div>
      <p class="about_view_box_tip">
        {{t('about.available')}}
      </p>
    </div>
    <div class="about_view_form">
      <div class="about_view_form_main">
        <div class="about_view_form_main_concact">
          <h4 class="about_view_form_main_concact_title">{{t('about.Contact')}}</h4>
          <img
            src="/about/email.png"
            class="about_view_form_main_concact_icon"
          />
          <p class="about_view_form_main_concact_email">{{t('about.Email')}}</p>
          <p class="about_view_form_main_concact_value">mosapp.app@gmail.com</p>
        </div>
        <div class="about_view_form_main_section">
          <h4 class="about_view_form_main_section_title">{{t('about.Email')}}</h4>
          <p class="about_view_form_main_section_tip">{{t('about.Email')}}</p>
          <div class="about_view_form_main_section_control">
            <input
              class="about_view_form_main_section_control_value"
              placeholder="Name"
              v-model="state.nickname"
            />
            <input
              class="about_view_form_main_section_control_value"
              placeholder="E-mail"
              v-model="state.email"
            />
          </div>
          <div class="about_view_form_main_section_control">
            <input
              class="about_view_form_main_section_control_value"
              placeholder="Phone Number"
              v-model="state.telephone"
            />
            <input
              class="about_view_form_main_section_control_value"
              placeholder="Subject"
              v-model="state.subject"
            />
          </div>
          <textarea
            class="about_view_form_main_section_note"
            placeholder="Message"
            v-model="state.feedbackContent"
          />
          <div class="about_view_form_main_section_action">
            <button
              class="about_view_form_main_section_action_btn"
              @click="submitFeedback()"
            >
              {{t('about.SEND')}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { useI18n } from '#imports';
const { t } = useI18n();
import { reactive } from 'vue';
const state = reactive({
  telephone: '',
  feedbackContent: '',
  email: '',
  nickname: '',
  subject: '',
});

const submitFeedback = async () => {
  const reg = /^1[3-9]\d{9}$/;
  const reg1 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!state.nickname) {
    ElMessage.error('Name is Empty');
    return;
  }
  if (!reg1.test(state.email)) {
    ElMessage.error('email is Error');
    return;
  }
  if (!state.telephone) {
    ElMessage.error('telephone is Error');
    return;
  }
  if (!state.subject) {
    ElMessage.error('telephone is Empty');
    return;
  }
  if (!state.feedbackContent) {
    ElMessage.error('feedbackContent is Empty');
    return;
  } else {
    const todo = await $fetch('https://mos-test.mos.me/feedback/sendMessage', {
      method: 'POST',
      body: {
        name: state.nickname,
        email: state.email,
        subject: state.subject,
        message: state.feedbackContent,
        mobileNumber: state.telephone,
      }
    })
    if (todo.code === 200) {
      ElMessage.success('success');
    }
  }
}

</script>
<style lang="scss" scoped>
  @use './about.scss';
</style>
