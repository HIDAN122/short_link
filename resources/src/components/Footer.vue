<template>
  <footer class="md:mt-12 mt-8 md:mb-8 mb-4">
        <div class="container">
          <div class="flex md:items-center md:flex-row flex-col">
            <div class="flex-grow">
              <a href="#" class="flex">
               <SvgIcon name='logo' class='text-4xl'/>
              </a>
            </div>
          </div>
        </div>
      </footer>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Footer',
  components: {
    SvgIcon
  }
}
</script>
