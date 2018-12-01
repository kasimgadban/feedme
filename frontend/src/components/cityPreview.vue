<template>
  <section class="displayed-cook">
    <!-- <router-link :to="'city/'+city.id" :city="city">
      <img class="card-img" src="https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg" alt srcset  >
    </router-link> -->
    city : {{city}} 
    <!-- <pre>{{city}}</pre> -->
  </section>
</template>
<script>

export default {
  data(){
    return{
      city:null
    }
  },
  name: 'cityPreview',
  props: ['city_id'],
  components: {},
  created() {
    var cityId = this.city_id
    console.log('cityId city preview created',cityId);
     this.$store.dispatch({type: 'getCityById',cityId})
     this.getCurCity()
  },
  methods:{
    getCurCity() {
      this.city = this.$store.getters.getCurrCity
      console.log('the city is line 30',this.city)
    }
  },
  // mounted() {
  //   console.log('I am in here',this.city);
    
  //   this.getCurCity()
  // },
  };
</script>

<style scoped lang="scss">

</style>
