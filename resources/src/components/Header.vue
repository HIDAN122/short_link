<template>
  <header class="pt-4">
        <div class="container">
          <div class="md:justify-between md:items-center flex flex-1 md:flex-row flex-col">
            <div class="flex items-center justify-between md:flex-0 flex-1">
              <a href="#" class="flex">
                <SvgIcon name='logo' class='text-7xl'/>
              </a>
              <button v-if="mobileView" @click="showNav = !showNav" type="button" id="toggleMenu" class="flex items-center">
                <SvgIcon name='burger' class='text-5xl text-blue'/>
              </button>
            </div>
          </div>
        </div>
      </header>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Header',
  components: {
    SvgIcon
  },
  data: () => {
    return {
      mobileView: false,
      showNav: false
    }
  },
  methods: {
    handleMenu(){
      this.mobileView = window.innerWidth <= 767;
    }
  },
  created(){
    this.handleMenu()
    window.addEventListener('resize' , this.handleMenu)
  }
}
</script>
