<template>
    <section class="topCities">
        <h2>Top Cities</h2>
        <div class="cmp-container">
            <li v-for="city in cities"
               :key="city.id">
        <city-preview :city="city" />
        </li>
      </div>
    </section>
</template>
<script>
import cityPreview from '@/components/cityPreview.vue'

export default {
   name:'topCities',
   props: {
       cities: {}
   },
   components: {
     cityPreview
   },

}
</script>

<style scoped lang="scss">

</style>
