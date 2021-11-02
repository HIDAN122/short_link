<template>
  <div class="bg-zircon flex flex-col min-h-screen bg-landing-bg bg-no-repeat bg-top md:bg-contain">
    <Header/>
    <main>
      <div class="pt-6 mb-[48px]">
        <div class="container">
          <div class="flex flex-col">
            <h1 class="sm:text-7xl text-5xl font-bold">Short links, high scores</h1>
            <h4 class="sm:text-xl text-lg text-black-50 mt-1">Shorten links and analyze your audience with an easy-to-use management system</h4>
          </div>
        </div>
      </div>
      <CutLinkBanner/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CutLinkBanner from '@/components/CutLinkBanner/CutLinkBanner.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    Header,
    CutLinkBanner,
    Footer,
  }
}
</script>
