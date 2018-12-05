<template>
  <section class="container">
    <div class="images-container"></div>
    <div v-if="events.length">
      <h1 class="title">Enjoy a delecious meal and fun company at</h1>
      <h3>Fresh meals and drinks, cozy homes and time well spent</h3>
    </div>
    <h1 class="no-events" v-else>No events were found at the current moment at</h1>
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
      events: []
    };
  },
  created() {
    const cityId = this.$route.params.cityId;
    this.$store.dispatch({ type: "loadEventsByCity", cityId }).then(events => {
      this.events = events;
      console.log("events 37", events);
      console.log(events.length);
    });
  },
 
    computed:{
          events(){
              return this.$store.getters.getEventsByCity
          }
      },
  components: {
    eventPreview,
  }
};
</script>
<style scoped lang = "scss">
.city-events {
  margin: 0 auto;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  gap: 20px;
  text-decoration: none;
  width: 80%;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none; */
}
@media only screen and (max-width: 800px) {
    .city-event {
    width: 100%;
    }
}
.city-event{
  padding: 10px
}
.images-container {
  background-image: url("https://sunshinecoastdietetics.com.au/wp-content/uploads/2018/02/ThinkstockPhotos-607887056_2.jpg");
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.title {
  text-align: center;
}
h3 {
  color: rgba(128, 128, 128, 0.728);
  text-align: center;
}
.no-events {
  text-align: center;
}
event-preview .city-event {
  width: 200px;
  height: 300px;
  margin: 10px;
  border: 5px gray solid;
}
</style>
