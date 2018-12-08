<template>
  <div id="app">
    <nav-bar id = "nav"></nav-bar>
    <router-view class = "ro"></router-view>
  </div>
</template>

<script>

import navBar from "@/components/navBar.vue"
export default {
  components: {
    navBar
  },
  mounted(){
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
  }
}
</script>

<style scoped lang="scss">
#nav{
  width: 100%;
  position:fixed;
  z-index: 1;
   transition: top 0.3s;
}
.ro{
  z-index: -1;
}
</style>
