<template>
  <section class="topCities">
    <h2>Top Cities</h2>
    <div class="cmp-container">
      <li v-for="city_id in cities" :key="city_id">
        <city-preview :city_id="city_id"/>
      </li>
    </div>
    <pre>{{cities}}</pre>
  </section>
</template>
<script>
import cityPreview from "@/components/cityPreview.vue";

export default {
  name: "cityList",
  props: {
    cities: {}
  },
  components: {
    cityPreview
  }
};
</script>

<style scoped lang="scss">
</style>
