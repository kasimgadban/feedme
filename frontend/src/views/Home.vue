<template>
  <section>
    <app-header />
    <displayed-cooks />
    <app-desc style="background-color: pink"/>
    <top-rated />
    
    <app-footer />
  </section>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
import appDesc from '@/components/appDescreption.vue'
import topRated from '@/components/topRated.vue'
import displayedCooks from '@/components/displayedCooks.vue'
import appFooter from '@/components/footer.vue'
import searchBar from '@/components/searchBar.vue'

export default {
  name: 'home',
  components: {
    appHeader,
    appDesc,
    topRated,
    displayedCooks,
    appFooter
  }
}
</script>

<style scoped lang = "scss" >
/* header {
  background: blue;
  width: 100%;
  height: 600px;
} */
.cmp-container{
width: 80%;
}
</style>
