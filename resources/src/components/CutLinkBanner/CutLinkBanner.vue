<template>
  <div class="mb-4">
    <div class="container">
      <div class="bg-white shadow p-2.5 pb-0.8 rounded-lg">
        <h2 class="sm:text-6xl xs:text-4xl text-2xl mb-5">Link shortening</h2>
        <form action="/" class="flex md:flex-row flex-col">
          <label class="flex flex-col relative flex-grow">
            <span class="text-sm text-black-80 absolute -top-1.8">
              Original link</span>
            <input
              v-model="original_link"
              class="input"
            />
          </label>
          <button @click.prevent.stop="shortLink" type="submit" class="btn md:ml-2.5 lg:mr-1.6 md:mt-0 mt-1">
            Shorten link
          </button>
        </form>
        <div class="flex flex-col pt-2" v-if="items.length">
          <CutLinkItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @handleCopy="handleCopy"
          />
        </div>
      </div>
    </div>
  </div>
  <NotificationCopy :notifications="notifications" />
</template>

<script>
import CutLinkItem from "@/components/CutLinkBanner/CutLinkItem.vue";
import NotificationCopy from "@/components/Notifications/NotificationCopy.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import axios from 'axios'
import API_URL from "../../enviroment/env";

let itemId = 1;

export default {
  name: "CutLinkBanner",
  components: {
    SvgIcon,
    CutLinkItem,
    NotificationCopy,
  },
  props: {},
  data() {
    return {
      isModalQrVisible: false,
      original_link: '',
      shorten_link: '',
      notifications: [],
      items: [
        {
          id: itemId++,
          fullLink: localStorage.getItem('fullLink'),
          shortLink: localStorage.getItem('shortLink'),
        }
      ],
    };
  },
  methods: {
    handleCopy(data) {
      let notificationId = 1;
      this.notifications.unshift({ id: notificationId++ });
      setTimeout(() => {
        this.notifications.pop();
      }, 3000);
    },
    shortLink() {
      axios.post(`${API_URL}/api/link`, {link: this.original_link})
        .then((data) => {
          this.shorten_link = data.data.url;
          localStorage.fullLink = this.original_link;
          localStorage.shortLink = this.shorten_link;
          this.items = [
            {
              id: itemId++,
              fullLink: localStorage.getItem('fullLink'),
              shortLink: localStorage.getItem('shortLink'),
            },
          ]
        })
    }
  }
};
</script>
