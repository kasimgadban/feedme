<template>
  <section class="topCities">
    <h2>ENJOY A DELICIous experience at our popular destinations</h2>
    <div class="cmp-container grid container-style">
      <city-preview 
      v-for="city in cities" 
      :key="city._id" 
      :city="city"
      class="grid__item">
      </city-preview>
    </div>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  grid-row-gap: 0;
  text-decoration: none;
  width:80%;
  justify-content: center;
}
.grid__item:nth-child(9n+0) {
  grid-column: span 2;
}
.grid__item:nth-child(9n+1) {
  grid-column: span 2  ;
}
.grid__item:nth-child(9n+5) {
  grid-column: span 2;
}
@media only screen and (max-width: 800px) {
  .cmp-container {
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
    padding: 0px;

}
.grid__item:nth-child(9n+0) {
  grid-column: span 1;
}
.grid__item:nth-child(9n+1) {
  grid-column: span 1 ;
}
.grid__item:nth-child(9n+5) {
  grid-column: span 2;
}
}
h2{
  text-align: center;
  color: rgba(56, 53, 53, 0.822);
   font-family: 'Josefin Sans', sans-serif;
   text-transform: uppercase;
   font-size: 1.5em;

}

.topCities{
  padding-top: 20px;
  padding-bottom: 20px;
  background: #80808017;
}

</style>

