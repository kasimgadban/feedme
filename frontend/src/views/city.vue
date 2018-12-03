<template>
  <section class="container">
    <div class="images-container"></div>
    <!-- <div class="cmp-container">
      I am city page {{city}}
    </div> -->
    <div v-if="events.length">
    <h1 class="title">Enjoy a delecious meal and fun company at {{city.city}}</h1>
    <h3>Fresh meals and drinks, cozy homes and time well spent</h3>
    </div>
     <h1 class="no-events" v-else> No events were found at the current moment at {{city.city}}</h1>
    <div class="city-events">
   <div class="city-event" v-for="event in events" :key="event._id">
        <event-preview :event="event"/>
   </div>
   </div>
  </section>
</template>

<script>
import eventPreview from "@/components/eventPreview.vue";

export default {
  name: "cityPage",
  data() {
    return {
      city: {}
      // events:[]
    };
  },
  created(){
    const cityId = this.$route.params.cityId
    console.log('cityName ',cityId)
    if(cityId){
      this.$store.dispatch({type: "loadEventsByCity",cityId }).then(events => {
      this.events = events;
      // console.log('events ',events);
      })

      this.$store.dispatch({type: "getCityById",cityId}).then(city => this.city = city)
    }
  },
  //   methods:{
  //     openModal(){
  //       return this.isSend = true;
  //     },
  //     getCookById(){

  //     },

  //   },
    computed:{
          events(){
              return this.$store.getters.getEventsByCity
          }
      },
  components: {
    eventPreview,
    // requestBox
  }
};
</script>

<style scoped lang = "scss">
/* .city-events{
display: flex;
flex-direction: row;
flex-wrap: wrap; */


.city-events {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
/* } */
}
.city-event{
  padding: 10px
}
.images-container{
  background-image: url("https://sunshinecoastdietetics.com.au/wp-content/uploads/2018/02/ThinkstockPhotos-607887056_2.jpg");
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
   background-position: center center;  
  
}
.title{
  text-align: center;
}
h3{
  color: rgba(128, 128, 128, 0.728);
  text-align: center;
}
.no-events{
  text-align: center;
}
event-preview .city-event{
  width:200px;
  height:300px;
  margin: 10px;
  border: 5px gray solid;
}
</style>
