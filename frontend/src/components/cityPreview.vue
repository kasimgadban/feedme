<template>
  <section class="displayed-city">
    <router-link :to="'city/'+city._id" :city="city" class="city-router">
    <!-- <div class="wrapper"> -->
      <div
      class="test1"
       v-bind:style="{ 'background-image': 'url(' + getSrc(city.city) + ')' }">
       </div>
      <!-- <img
        class="card-img"
        :src="getSrc(city.city)"
        alt
        srcset
      > -->
      <div class="name">{{city.city}}</div>
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
    this.$store.dispatch({ type: "loadCities" });
  },
  
  methods: {
    getCurCity() {
      this.city = this.$store.getters.getCurrCity;
    },
    getSrc(name) {
      var nameSplitted = name.split(' ');
      if(nameSplitted.length > 1) name = nameSplitted[0]+nameSplitted[1];
      // console.log('name',name)
      var images = require.context('../images', false, /\.png$/);
      return images('./' + name + ".png")
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
.name{
  position: relative;
  top: -170px;
    background: #e4d3d3;
  // background:#f5f5f5ad;
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
  object-fit:cover;
}
.card-img:hover{
  box-shadow: -9px -6px 14px -4px rgba(184, 173, 184, 1);
}

.test1{
  width: 100%;
  height: 300px;
  border-radius:20%;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  // object-fit: cover;
}

</style>
