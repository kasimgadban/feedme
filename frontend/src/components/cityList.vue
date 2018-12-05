<template>
  <section class="topCities">
    <h2>Enjoy a delicious experience at our popular destinations</h2>
    <div class="cmp-container grid">
      <city-preview 
      v-for="city in cities" 
      :key="city._id" 
      :city="city"
      class="grid__item">
      </city-preview>
    </div>
    <!-- <div>{{cities}}</div> -->
  </section>
</template>
<script>
import cityPreview from "@/components/cityPreview.vue";

export default {
  name: "cityList",
  props: {
    cities: Array
  },
  components: {
    cityPreview
  }
};
</script>

<style scoped lang="scss">
.cmp-container {
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  gap: 15px;
  grid-row-gap: 0;
  // display: flex;
  text-decoration: none;
}
@media only screen and (max-width: 800px) {
   .cmp-container {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12fr;
  gap: 5px;
}
}
h2{
  text-align: center;
  color: rgba(56, 53, 53, 0.822);
}

.topCities{
  padding-top: 20px;
  padding-bottom: 20px;
    /* margin-top: 23px; */
    /* padding: 20px; */
    background: #80808017;
}

</style>

