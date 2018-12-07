<template>
  <section class="displayed-city">
    <router-link :to="'city/'+city._id" :city="city" class="city-router">
      <div
      class="city-link container-style"
       v-bind:style="{ 'background-image': 'url(' + getSrc(city.city) + ')' }">
          <div class="name">{{city.city}}</div>
       </div>
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
}
.name{
  background: #e4d3d3;
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

.city-link{
    height: 230px;
    border-radius: 9px;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media only screen and (max-width: 800px) {
  .name{
    width: 100%;
  }
}

</style>
