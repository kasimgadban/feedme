<template>
  <section>
    <app-header />
    <cook-list :cooks="cooks" />
    <app-desc style="background-color: pink"/>
    <top-rated />
    
    <app-footer />
  </section>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
import appDesc from '@/components/appDescreption.vue'
import topRated from '@/components/topRated.vue'
import cookList from '@/components/cookList.vue'
import appFooter from '@/components/footer.vue'
import searchBar from '@/components/searchBar.vue'

export default {
  name: 'home',
  components: {
    appHeader,
    appDesc,
    topRated,
    cookList,
    appFooter
  },
  created() {
        this.$store.dispatch({type: 'loadCooks'})
    },
   computed: {
       cooks(){
            return this.$store.getters.getCooks;
        }
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
