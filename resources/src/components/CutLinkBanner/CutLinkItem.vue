<template>
  <div class="flex lg:items-center lg:flex-row flex-col pt-2 pb-1.8 border-b border-black-10 border-1 md:pr-2.5 last:border-0 justify-between">
    <span class="flex text-black-60 max-w-60 mr-2">{{item.fullLink}}</span>
    <div class="flex lg:mt-0 mt-2 lg:items-center 	">
      <span ref="textToCopy" class="badge--green md:mr-4.5 mr-auto inline-flex font-medium border-2 rounded px-1.8 py-0.5  items-center">{{item.shortLink}}</span>
      <button @click="handleCopy" type="button" class="flex items-center">
        <SvgIcon name='copy'/>
      </button>
    </div>
  </div>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'CutLinkItem',
  components: {
    SvgIcon
  },
  props: {
    item: {
      type: Object,
      required: true,
      default() {
          return {}
        }
    }
  },
  data() {
      return {};
    },
  methods: {

    selectText(element) {
      var range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
    handleCopy() {
     this.selectText(this.$refs.textToCopy);
     document.execCommand("copy");
     this.$emit('handleCopy', this.item);
    },
    showModalQr(){
      this.$emit('showModalQr');
    }
  },
}

</script>
