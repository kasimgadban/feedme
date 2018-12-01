<template>
  <section class="displayed-cook">
    <!-- <router-link :to="'city/'+city.id" :city="city">
      <img class="card-img" src="https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg" alt srcset  >
    </router-link> -->
    city preview file=> city_id<pre>{{city_id}}</pre>
    <pre>{{city}}</pre>
  </section>
</template>
<script>
// import cityService
export default {
  // data(){
  //   return {
  //     city:null
  //   }
  // },
  name: 'cityPreview',
  props: ['city_id'],
  components: {},
  created() {
    // if(this.city_id) 
    console.log('I was created as a city preview the city_id is',this.city_id);
    var x = this.city_id
    this.$store.dispatch({type: 'getCityById',x})
  },
  computed:{
    city(){
      var bb = this.$store.getters.getCurrCity
      console.log('bb ',bb)
      
      return bb
    }
  }

};
</script>

<style scoped lang="scss">

</style>
