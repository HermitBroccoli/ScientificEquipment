<template>
  <ul class="header-infoList pl-[30px] space-y-4">
    <li class="header-infoList-item" v-for="item in parm" :key="item">{{ item }}</li>
    <!-- <li class="header-infoList-item">Вес ~5 кг</li>
    <li class="header-infoList-item">Габариты 28 × 44 × 34 см.</li>
    <li class="header-infoList-item">Система охлаждения водяная.</li> -->
  </ul>
</template>

<script>
export default {
  props: {
    parm: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
    .header {
        &-infoList {
        &-item {
            position: relative;
            &::before {
                content: '';
                display: block;
                position: absolute;
                left: -30px;
                width: 20px;
                height: 20px;
                background: url('../assets/icons/lastochka.svg') center center/cover no-repeat;
            }
        }
    }
    }
</style>
