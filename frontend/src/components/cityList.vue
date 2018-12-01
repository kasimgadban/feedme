<template>
    <section class="topCities">
        <h2>Top Cities</h2>
        <div class="cmp-container">
        <!-- <pre>cities array: {{cities}}</pre> -->
         <city-preview v-for="city_id in cities" 
         :key="city_id"
         :city_id = "city_id"
         ></city-preview>

       
      </div>
    </section>
</template>
<script>
import cityPreview from '@/components/cityPreview.vue'

export default {
   name:'cityList',
   props: {
       cities: {}
   },
   components: {
     cityPreview
   },

}
</script>

<style scoped lang="scss">
.cmp-container{
   width: 80%;
margin: 0 auto;
// margin-top: 10px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
// justify-content: space-between;
text-decoration: none
}
</style>

