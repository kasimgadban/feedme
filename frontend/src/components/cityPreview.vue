<template>
  <section class="displayed-city">
    <router-link :to="'city/'+city._id" :city="city"> 
      <img class="card-img" src="https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg" alt srcset  >
      <h1>{{city.city}}</h1>
    </router-link>
      </section>
</template>

<script>

export default {
  name: 'cityPreview',
  props: ['city'],
  components: {},
  created() {
    var cityId = this.city
    this.$store.dispatch({type: 'loadCities'})
  },
  
  // computed:{
  //   city(){
  //     return this.$store.getters.getCurrCity
  //   }
  // },
  methods:{
    getCurCity() {
      this.city = this.$store.getters.getCurrCity
    }
  },
  };
</script>

<style scoped lang="scss">
.displayed-city{
  text-align: center;
  background-color:#8080801a;
  border: 1px solid #80808012;
  margin-top: 20px;
  height: 350px;
  margin-right: 20px;
  // display: flex;
}
.displayed-city:hover{
  box-shadow: -9px -6px 14px -4px rgba(184,173,184,1);
  position: relative; 
  top: -5px;
}


.card-img{
  width: 300px;
  height: 300px;
  // margin: 30px;
  
}

</style>
