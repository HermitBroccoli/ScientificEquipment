<template>
  <NavBar></NavBar>
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";



export default {
  components: { NavBar, FooterComponent },
  

};
</script>

<style lang="scss">
@import 'scss/media.scss';
* {
  box-sizing: border-box;
}

</style>
