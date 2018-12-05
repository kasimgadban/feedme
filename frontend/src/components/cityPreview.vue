<template>
  <section class="displayed-city">
    <router-link :to="'city/'+city._id" :city="city" class="city-router">
    <!-- <div class="wrapper"> -->
      <img
        class="card-img"
        src="https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg"
        alt
        srcset
      >
      <span>{{city.city}}</span>
      <!-- </div> -->
    </router-link>
  </section>
</template>

<script>
export default {
  name: "cityPreview",
  props: ["city"],
  components: {},
  created() {
    var cityId = this.city;
    this.$store.dispatch({ type: "loadCities" });
  },
  
  methods: {
    getCurCity() {
      this.city = this.$store.getters.getCurrCity;
    }
  }
};
</script>

<style scoped lang="scss">
.displayed-city {
  text-align: center;
  margin-top: 20px;
  // height: 350px;
}
.displayed-city:hover {
  // position: relative;
  // top: -5px;
}
span{
  position: relative;
  top: -135px;
  background:#f5f5f5ad;
  color: black;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  font-size: 1.3em;
  padding: 10px;
}
.city-router{
  text-decoration: none;
}
.card-img {
  width: 100%;
  height: 85%;
  border-radius:20%;
}
.card-img:hover{
  box-shadow: -9px -6px 14px -4px rgba(184, 173, 184, 1);
}


</style>
