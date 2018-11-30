<template>
  <section>
    <app-header />
    <city-list></city-list>
    <cook-list :cooks="cooks" />
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
import cityList from '@/components/cityList.vue'

export default {
  name: 'home',
  components: {
    appHeader,
    appDesc,
    topRated,
    cookList,
    appFooter,
    cityList
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
.cmp-container{
width: 80%;
}
</style>
