<template>
  <div class="fixed flex flex-col-reverse right-2 md:right-6  bottom-7">
    <div v-for="notification in notifications" :key='notification.id' class="notify--green  mt-2 flex bg-white items-center shadow-light rounded-lg notify py-1.6 pl-3.5 pr-7 relative">
      <SvgIcon name='circle-check' class='text-xl'/>
      <span class="flex ml-1 leading-none">Link was copied</span>
    </div>
  </div>
</template>

<script>


import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'NotificationCopy',
  components: {
    SvgIcon
  },
  props: {
    notifications: {
      type: Array,
      default: () => {
        return []
      }
    },
  }
}
</script>
