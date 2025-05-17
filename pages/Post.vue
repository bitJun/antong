<template>
  <div class="post_view">
    <div class="post_view_section">
      <h4 class="post_view_section_title">
        {{t('post.post')}}
      </h4>
      <p class="post_view_section_desc">
        {{t('post.Stay')}}
      </p>
    </div>
    <div class="post_view_main">
      <div class="post_view_main_box">
        <h3 class="post_view_main_box_title">{{t('post.Get')}}</h3>
        <div class="post_view_main_box_section">
          <div class="post_view_main_box_section_head">
            <img
              src="/post/avator.png"
              class="post_view_main_box_section_head_img"
            />
            <div class="post_view_main_box_section_head_info">
              <h4 class="post_view_main_box_section_head_info_title">{{t('post.Phnom')}}</h4>
              <p class="post_view_main_box_section_head_info_value">{{t('post.Subscribers')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="post_view_main_list">
        <div
          v-for="item in list"
          :key="item.id"
          class="post_view_main_list_item"
          @click="showDetail(item)"
        >
          <div class="post_view_main_list_item_section">
            <img
              :src="item.img"
              v-if="item.img"
              class="post_view_main_list_item_img"
            />
            <p class="post_view_main_list_item_content">{{item.content}}</p>
          </div>
          <div class="post_view_main_list_item_box">
            <div class="post_view_main_list_item_box_info">
              <div class="post_view_main_list_item_box_info_zan">
                <img
                  src="/post/zan.png"
                  class="post_view_main_list_item_box_info_zan_icon"
                />
                {{item.zan}}
              </div>
              <div class="post_view_main_list_item_box_info_view">
                <img
                  src="/post/view.png"
                  class="post_view_main_list_item_box_info_view_icon"
                />
                <span class="post_view_main_list_item_box_info_view_value">{{item.view}}</span>
                <span class="post_view_main_list_item_box_info_view_value">{{item.time}}</span>
              </div>
            </div>
            <div class="post_view_main_list_item_box_other">
              <div class="post_view_main_list_item_box_other_user">
                <img
                  src="/post/avator.png"
                  class="post_view_main_list_item_box_other_user_img"
                />
                Leave a Comment
              </div>
              <img
                src="/post/share.png"
                class="post_view_main_list_item_box_other_img"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="post_view_main_action">
        {{t('post.more')}}
        <img
          src="/post/more.png"
          class="post_view_main_action_icon"
        />
      </div>
      <div class="post_view_main_box">
        <h3 class="post_view_main_box_title">{{t('post.Get')}}</h3>
        <div class="post_view_main_box_section">
          <div class="post_view_main_box_section_head">
            <img
              src="/post/avator.png"
              class="post_view_main_box_section_head_img"
            />
            <div class="post_view_main_box_section_head_info">
              <h4 class="post_view_main_box_section_head_info_title">{{t('post.Phnom')}}</h4>
              <p class="post_view_main_box_section_head_info_value">{{t('post.Subscribers')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="post_view_main_list">
        <div
          v-for="item in list"
          :key="item.id"
          class="post_view_main_list_item"
          @click="showDetail(item)"
        >
          <div class="post_view_main_list_item_section">
            <img
              :src="item.img"
              v-if="item.img"
              class="post_view_main_list_item_img"
            />
            <p class="post_view_main_list_item_content">{{item.content}}</p>
          </div>
          <div class="post_view_main_list_item_box">
            <div class="post_view_main_list_item_box_info">
              <div class="post_view_main_list_item_box_info_zan">
                <img
                  src="/post/zan.png"
                  class="post_view_main_list_item_box_info_zan_icon"
                />
                {{item.zan}}
              </div>
              <div class="post_view_main_list_item_box_info_view">
                <img
                  src="/post/view.png"
                  class="post_view_main_list_item_box_info_view_icon"
                />
                <span class="post_view_main_list_item_box_info_view_value">{{item.view}}</span>
                <span class="post_view_main_list_item_box_info_view_value">{{item.time}}</span>
              </div>
            </div>
            <div class="post_view_main_list_item_box_other">
              <div class="post_view_main_list_item_box_other_user">
                <img
                  src="/post/avator.png"
                  class="post_view_main_list_item_box_other_user_img"
                />
                Leave a Comment
              </div>
              <img
                src="/post/share.png"
                class="post_view_main_list_item_box_other_img"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="post_view_main_action">
        {{t('post.more')}}
        <img
          src="/post/more.png"
          class="post_view_main_action_icon"
        />
      </div>
    </div>
    <div
      class="mask"
      v-if="show"
      @click="onClose()"
    >
      <div class="modals" v-if="isMobileDevice()">
        <div class="modals_main">
          <img
            :src="detail.img"
            class="modals_img"
            v-if="detail.img"
          />
          <p class="modals_tip">{{ detail.content }}</p>
        </div>
        <div class="modals_box">
          <div class="modals_box_info">
            <div class="modals_box_info_zan">
              <img
                src="/post/zan.png"
                class="modals_box_info_zan_icon"
              />
              {{detail.zan}}
            </div>
            <div class="modals_box_info_view">
              <img
                src="/post/view.png"
                class="modals_box_info_view_icon"
              />
              <span class="modals_box_info_view_value">{{detail.view}}</span>
              <span class="modals_box_info_view_value">{{detail.time}}</span>
            </div>
          </div>
          <div class="modals_box_other">
            <div class="modals_box_other_user">
              <img
                src="/post/avator.png"
                class="modals_box_other_user_img"
              />
              Leave a Comment
            </div>
            <img
              src="/post/share.png"
              class="modals_box_other_img"
            />
          </div>
        </div>
      </div>
      <div class="modal" v-else>
        <div class="modal_main">
          <img
            :src="detail.img"
            class="modal_img"
          />
          <p class="modal_tip">{{ detail.content }}</p>
        </div>
        <div class="modal_box">
          <div class="modal_box_info">
            <div class="modal_box_info_zan">
              <img
                src="/post/zan.png"
                class="modal_box_info_zan_icon"
              />
              {{detail.zan}}
            </div>
            <div class="modal_box_info_view">
              <img
                src="/post/view.png"
                class="modal_box_info_view_icon"
              />
              <span class="modal_box_info_view_value">{{detail.view}}</span>
              <span class="modal_box_info_view_value">{{detail.time}}</span>
            </div>
          </div>
          <div class="modal_box_other">
            <div class="modal_box_other_user">
              <img
                src="/post/avator.png"
                class="modal_box_other_user_img"
              />
              Leave a Comment
            </div>
            <img
              src="/post/share.png"
              class="modal_box_other_img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '#imports';
import { ref, onMounted } from 'vue';
const { t } = useI18n();
const show = ref(false);
const detail = ref({});
const list = ref([
  {
    id: 0,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '/post/img1.jpg',
  },
  {
    id: 1,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '/post/img2.png',
  },
  {
    id: 2,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '',
  },
  {
    id: 3,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '',
  },
  {
    id: 4,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '/post/img1.jpg',
  },
  {
    id: 5,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '',
  },
  {
    id: 6,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '',
  },
  {
    id: 7,
    content: t('post.content'),
    zan: 1,
    view: 12,
    time: '12:00',
    name: 'Leave a Comment',
    img: '/post/img3.jpg',
  }
]);
const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

const showDetail = (obj) => {
  detail.value = obj;
  show.value = true;
}

const onClose = () => {
  detail.value = {};
  show.value = false;
}
</script>
<style lang="scss" scoped>
  @use './post.scss';
</style>
