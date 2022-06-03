<template>
  <button :class="styles[style]" :style="alsoStyle"><slot></slot></button>
</template>

<script>
export default {
  name: "ui-button",
  props: {
    style: {
      type: Number,
      required: true
    },
    alsoStyle: {
      type: String,
      required: true
    }
  },
  data() {
    return{
      styles: {
        0: 'btn w-[300px] h-[60px] bg-[#147E45] text-white rounded font-bold text-[17px] hover:bg-[#1FB765] active:bg-[#147E45]',
        1: 'border border-[#147E45] rounded w-[300px] h-[60px] border-[2px]  mt-[45px] text-[#147E45] font-bold text-[17px] hover:bg-[#1FB765] hover:text-white hover:border-0 active:bg-[#147E45]'
      }
    }
  }
};
</script>

<style lang="scss">

</style>
