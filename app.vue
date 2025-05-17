<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const { locale, setLocale } = useI18n();
import { ref } from 'vue';
const isMobile = ref(false);
const show = ref(false);
const showMenu = ref(false);
const showLang = ref(false);
const bgColor = ref('transparent')
const lang = ref({
  'en': 'EN',
  'zh-cn': '简体中文',
  'zh-fanti': '繁體中文',
  'khmer': 'ខ្មែរ',
  'vietnamese': 'Tiếng Việt',
  'japanese': '日本語',
  'thai': 'แบบไทย',
  'korean': '한국인',
  'hindi': 'परंपरागत चीनी',
  'indonesian': 'Indonesia',
  'malay': 'Melayu',
  'lao': 'ພາສາລາວ'
});

useHead({
  script: [
     {
       src: 'https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
     }
  ]
})


const onShowLangMenu = () => {
  show.value = true;
}

const onShowMenuLang = (event) => {
  event.stopPropagation();
  console.log(123123)
  showLang.value = true;
  console.log('showLang.value', showLang.value)
}

const onShowMenu = () => {
  showMenu.value = true;
}


if (process.client) {
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  isMobile.value = isMobileDevice();

  window.addEventListener("resize", function () {
    isMobile.value = isMobileDevice();
  });

  document.addEventListener('scroll', (event) => {
    if (window.scrollY > 85) {
      bgColor.value = '#fff';
    } else {
      bgColor.value = 'transparent';
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.className.includes('langChange')) {
      show.value = false;
    }
  })
}

const onClose = () => {
  if (showLang.value) {
    showLang.value = false;
  } else {
    showMenu.value = false;
  }
}


</script>
<template>
  <div class="top_nav" v-if="isMobile">
    <div class="top_nav_logo">
      <img
        src="/logo.jpg"
        class="top_nav_logo_img"
      />
      MosApp
    </div>
    <img
      src="/menu.png"
      class="top_nav_icon"
      @click="onShowMenu()"
    />
  </div>
  <header
    id="header"
    :style="{background: bgColor}"
    v-else
  >
    <div class="header_container">
      <div class="header_logo">
        <img
          src="/logo.jpg"
          class="header_logo_img"
        />
      </div>
      <ul class="header_nav">
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/"
          >
            {{ t('nav.home') }}
          </NuxtLink>
        </li>
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/about"
          >
            {{ t('nav.AboutUs') }}
          </NuxtLink>
        </li>
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/about"
          >
            {{ t('nav.product') }}
          </NuxtLink>
        </li>
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/help"
          >
            {{ t('nav.service') }}
          </NuxtLink>
        </li>
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/post"
          >
            {{ t('nav.news') }}
          </NuxtLink>
        </li>
        <li class="header_nav_item">
          <NuxtLink
            class="header_nav_item_link"
            activeClass="active"
            to="/post"
          >
            {{ t('nav.concat') }}
          </NuxtLink>
        </li>
      </ul>
      <div class="header_action">
        <div class="header_action_lang langChange" @click="onShowLangMenu()">
          <img
            src="/global.png"
            class="header_action_lang_img langChange"
          />
          {{lang[locale]}}
          <img
            src="/drop.png"
            class="header_action_lang_icon"
          />
          <div class="header_action_lang_menu langChange" v-if="show">
            <div class="header_action_lang_menu_title langChange">{{ t('nav.Choose') }}</div>
            <div
              class="header_action_lang_menu_item langChange"
              :class="[locale == 'en' ? 'active' : '']"
              @click="setLocale('en')"
            >
              English
              <img
                src="/check.png"
                v-if="locale == 'en'"
              />
            </div>
            <div
              class="header_action_lang_menu_item langChange"
              :class="[locale == 'zh-cn' ? 'active' : '']"
              @click="setLocale('zh-cn')"
            >
              简体中文
              <img
                src="/check.png"
                v-if="locale == 'zh-cn'"
              />
            </div>
            <div
              class="header_action_lang_menu_item langChange"
              :class="[locale == 'khmer' ? 'active' : '']"
              @click="setLocale('khmer')"
            >
              ខ្មែរ
              <img
                src="/check.png"
                v-if="locale == 'khmer'"
              />
              <!-- 高棉语 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <NuxtPage />
  <footer id="footer">
    <div class="footer_box">
      <div class="footer_box_left">
        <div class="footer_box_main">
          <img
            src="/logo.png"
            class="footer_box_main_logo"
          />
          MosApp
        </div>
        <p>©2014-2023 MosApp. All Rights Reserved.</p>
      </div>
      <div class="footer_box_center">
        <div class="footer_box_center_item">
          <a class="footer_box_center_link">{{ t('nav.Feature') }}</a>
          <NuxtLink
            class="footer_box_center_link"
            to="/help"
          >
            {{ t('nav.Help') }}
          </NuxtLink>
          <NuxtLink
            class="footer_box_center_link"
            to="/post"
          >
            {{ t('nav.Post') }}
          </NuxtLink>
          <NuxtLink
            class="footer_box_center_link"
            to="/about"
          >
            {{ t('nav.AboutUs') }}
          </NuxtLink>
        </div>
        <div class="footer_box_center_item">
          <NuxtLink
            class="footer_box_center_link"
            to="/terms"
          >
            {{t('nav.Term')}}
          </NuxtLink>
          <NuxtLink
            class="footer_box_center_link"
            to="/policy"
          >
            {{t('nav.Privacy')}}
          </NuxtLink>
          <NuxtLink
            class="footer_box_center_link"
            to="/cookie"
          >
            {{t('nav.Cookie')}}
          </NuxtLink>
        </div>
      </div>
      <div class="footer_box_right">
        <div class="footer_box_right_msg">
          <img
            src="/email.png"
            class="footer_box_right_msg_email"
          />
          mosapp.app@gmail.com
        </div>
        <p class="footer_box_right_title">{{t('nav.Follow')}}</p>
        <div class="footer_box_right_list">
          <img
            src="/x.png"
            class="footer_box_right_list_item"
          />
          <img
            src="/IG.png"
            class="footer_box_right_list_item"
          />
          <img
            src="/wechat.png"
            class="footer_box_right_list_item"
          />
          <img
            src="/facebook.png"
            class="footer_box_right_list_item"
          />
          <img
            src="/Linked.png"
            class="footer_box_right_list_item"
          />
          <img
            src="/tiktok.png"
            class="footer_box_right_list_item"
          />
        </div>
      </div>
    </div>
  </footer>
  <div
    class="mask"
    v-if="showMenu"
    @click="onClose()"
  >
    <div class="menuList">
      <ul class="menuList_nav">
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/"
          >
            {{ t('nav.Features') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/help"
          >
            {{ t('nav.Help') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/post"
          >
            {{ t('nav.Post') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/about"
          >
            {{ t('nav.AboutUs') }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="https://dl.mosapp.app/" class="menuList_download">
        {{ t('nav.Download') }}
        <!-- <img
          src="/down_white.png"
          class="menuList_download_img"
        /> -->
      </NuxtLink>
      <button class="menuList_login">
        {{ t('nav.Login') }}
        <!-- <img
          src="/down_black.png"
          class="menuList_login_img"
        /> -->
      </button>
      <div class="menuList_lang langChange" @click="onShowMenuLang($event)">
        <img
          src="/global.png"
          class="menuList_lang_img langChange"
        />
        {{lang[locale]}}
        <img
          src="/down_black.png"
          class="menuList_lang_icon"
        />
      </div>
    </div>
    <div class="menuList_langList" v-if="showLang">
      <div class="menuList_langList_title">{{ t('nav.Choose') }}</div>
      <div class="menuList_langList_main">
        <div
          class="menuList_langList_item"
          :class="[locale == 'en' ? 'active' : '']"
          @click="setLocale('en')"
        >
          English
          <img
            src="/check.png"
            v-if="locale == 'en'"
          />
        </div>
        <div
          class="menuList_langList_item"
          :class="[locale == 'zh-cn' ? 'active' : '']"
          @click="setLocale('zh-cn')"
        >
          简体中文
          <img
            src="/check.png"
            v-if="locale == 'zh-cn'"
          />
        </div>
        <div
          class="menuList_langList_item"
          :class="[locale == 'khmer' ? 'active' : '']"
          @click="setLocale('khmer')"
        >
          ខ្មែរ
          <img
            src="/check.png"
            v-if="locale == 'khmer'"
          />
          <!-- 高棉语 -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
html {
  font-size: 10px; /* 默认 1920px 设计稿 */
}

@media screen and (max-width: 1600px) {
  html {
    font-size: 8px; /* 适配 1200px */
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 12px;
    width: 100vw;
  }
}
</style>
<style lang="scss">
  @use './app.scss';
</style>
