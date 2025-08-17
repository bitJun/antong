<script setup>
import { NuxtLink } from '#components';
import { useI18n } from '#imports';
const { t } = useI18n();
const { locale, setLocale } = useI18n();
import { ref } from 'vue';
const isMobile = ref(false);
const show = ref(false);
const showMenu = ref(false);
const showLang = ref(false);
const bgColor = ref('transparent');
const type = ref('');
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
  console.log(23)
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

const onChangeLocal = (key) => {
  setLocale(key);
  show.value = false;
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

const scrollToTop = (smooth = true) => {
  if (smooth && 'scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}

const onChangeType = (key) => {
  type.value = key;
}

</script>
<template>
  <div class="top_nav" v-if="isMobile">
    <NuxtLink to="/" class="top_nav_logo">
      <img
        src="/logo.jpg"
        class="top_nav_logo_img"
      />
    </NuxtLink>
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
      <NuxtLink to="/" class="header_logo">
        <img
          src="/logo.jpg"
          class="header_logo_img"
        />
      </NuxtLink>
      <div class="header_box">
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
              to="/about/home"
            >
              {{ t('nav.AboutUs') }}
            </NuxtLink>
            <!-- {{ t('nav.AboutUs') }}
            <div class="header_nav_item_box">
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/about/mission"
              >
                {{t('footer.shiming')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/about/antong"
              >
                {{t('footer.intro')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/about/advantages"
              >
                {{t('footer.advantages')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/about/honor"
              >
                {{t('footer.honor')}}
              </NuxtLink>
            </div> -->
          </li>
          <li class="header_nav_item">
            <NuxtLink
              class="header_nav_item_link"
              activeClass="active"
              to="/product/home"
            >
              {{ t('nav.product') }}
            </NuxtLink>
            <!-- {{ t('nav.product') }} -->
            <div class="header_nav_item_box">
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/home"
              >
                {{t('product.p1_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/massage"
              >
                {{t('product.p9_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/purifier"
              >
                {{t('purifier.p1_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/master"
              >
                {{t('product.p4_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/mansion"
              >
                {{t('product.p5_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/office"
              >
                {{t('product.p6_title')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/product/teaSpace"
              >
                {{t('product.p7_title')}}
              </NuxtLink>
            </div>
          </li>
          <li class="header_nav_item">
            <NuxtLink
              class="header_nav_item_link"
              activeClass="active"
              to="/service/home"
            >
              {{ t('nav.service') }}
            </NuxtLink>
            <!-- {{ t('nav.service') }} -->
            <div class="header_nav_item_box">
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/service/position"
              >
                {{t('service.subTitles')}}
              </NuxtLink>
              <NuxtLink
                class="header_nav_item_box_item"
                activeClass="active"
                to="/service/massage"
              >
                {{t('service.massage')}}
              </NuxtLink>
            </div>
          </li>
          <li class="header_nav_item">
            <NuxtLink
              class="header_nav_item_link"
              activeClass="active"
              to="/news"
            >
              {{ t('nav.news') }}
            </NuxtLink>
          </li>
          <li class="header_nav_item">
            <NuxtLink
              class="header_nav_item_link"
              activeClass="active"
              to="/concat"
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
                @click.stop="onChangeLocal('en')"
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
                @click.stop="onChangeLocal('zh-cn')"
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
                @click.stop="onChangeLocal('khmer')"
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
    </div>
  </header>
  <NuxtPage />
  <img
    src="/top.png"
    v-if="!isMobile"
    class="top"
    @click="scrollToTop()"
  />
  <footer id="footer">
    <div class="footer_box">
      <div class="footer_box_main">
        <div class="footer_box_main_nav">
          <div class="footer_box_main_nav_item">
            <NuxtLink
              class="footer_box_main_nav_item_title links"
              to="/"
            >
              {{t('nav.home')}}
            </NuxtLink>
            <div class="footer_box_main_nav_item_box" :class="[type == 'about' ? 'block' : '']">
            </div>
          </div>
          <div class="footer_box_main_nav_item">
            <NuxtLink
              class="footer_box_main_nav_item_title links"
              to="/about/antong"
            >
              {{t('footer.intro')}}
            </NuxtLink>
            <div class="footer_box_main_nav_item_box" :class="[type == 'about' ? 'block' : '']">
            </div>
          </div>
          <div class="footer_box_main_nav_item">
            <p class="footer_box_main_nav_item_title">
              <NuxtLink
                to="/product/home"
                style="color: #ffffff;"
              >
                {{t('footer.product')}}
              </NuxtLink>
              <img
                v-if="isMobile"
                @click="onChangeType('product')"
                :src="type == 'product' ? '/minus.png' : '/add.png'"
                class="footer_box_main_nav_item_title_img"
              />
            </p>
            <div class="footer_box_main_nav_item_box" :class="[type == 'product' ? 'block' : '']">
              <NuxtLink 
                class="footer_box_main_nav_item_link"
                to="/product/oxygen"
              >
                {{t('footer.health')}}
              </NuxtLink>
              <NuxtLink 
                class="footer_box_main_nav_item_link"
                to="/product/master"
              >
                {{t('footer.creativity')}}
              </NuxtLink>
            </div>
          </div>
          <div class="footer_box_main_nav_item">
            <p class="footer_box_main_nav_item_title">
              <NuxtLink
                to="/service/home"
                style="color: #ffffff;"
              >
                {{t('footer.service')}}
              </NuxtLink>
              <img
                v-if="isMobile"
                @click="onChangeType('service')"
                :src="type == 'product' ? '/minus.png' : '/add.png'"
                class="footer_box_main_nav_item_title_img"
              />
            </p>
            <div class="footer_box_main_nav_item_box" :class="[type == 'service' ? 'block' : '']">
              <NuxtLink 
                class="footer_box_main_nav_item_link"
                to="/service/position"
              >
                {{t('service.subTitles')}}
              </NuxtLink>
              <NuxtLink 
                class="footer_box_main_nav_item_link"
                to="/service/massage"
              >
                {{t('service.massage')}}
              </NuxtLink>
            </div>
          </div>
          <div class="footer_box_main_nav_item">
            <NuxtLink
              class="footer_box_main_nav_item_title links"
              to="/news"
            >
              {{t('footer.news')}}
            </NuxtLink>
          </div>
          <div class="footer_box_main_nav_item">
            <NuxtLink
              class="footer_box_main_nav_item_title links"
              to="/concat"
            >
              {{t('footer.concat')}}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="footer_box_content">
        <div class="footer_box_content_info">
          <img
            src="/email1.png"
            class="footer_box_content_info_icon"
          />
          <p class="footer_box_content_email">public@antoralife.com</p>
        </div>
        
        <div class="footer_box_content_list">
          <img
            src="/footer/whatsapp.png"
            class="footer_box_content_list_img"
          />
          <img
            src="/footer/tg.png"
            class="footer_box_content_list_img"
          />
          <img
            src="/footer/wechat.png"
            class="footer_box_content_list_img"
          />
        </div>
      </div>
    </div>
    <div class="footer_box reverse">
      <div class="footer_box_main">
        <p class="footer_box_main_tip">
          {{t('footer.tip')}}
        </p>
      </div>
      <div class="footer_box_content">
        <h4 class="footer_box_content_title">{{t('footer.tip1')}}</h4>
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
            {{ t('nav.home') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/about/home"
          >
            {{ t('nav.AboutUs') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/product/home"
          >
            {{ t('nav.product') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/service/home"
          >
            {{ t('nav.service') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/news"
          >
            {{ t('nav.news') }}
          </NuxtLink>
        </li>
        <li class="menuList_nav_item">
          <NuxtLink
            class="menuList_nav_item_link"
            activeClass="active"
            to="/concat"
          >
            {{ t('nav.concat') }}
          </NuxtLink>
        </li>
      </ul>
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
