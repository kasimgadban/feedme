<template>
  <section class="container" >
    <div
      class="images-container"
      v-bind:style="{ 'background-image': 'url(' + getSrc(city.city) + ')' }"
    >
      <div class="name">{{city.city}}</div>
    </div>
    <div v-if="events.length">
      <h1 class="title">Enjoy a delecious meal and fun company at</h1>
      <h3>Fresh meals and drinks, cozy homes and time well spent</h3>
    </div>
    <h1 class="no-events" v-else>No events were found at the current moment in {{city.city}}</h1>
    <div class="city-events container-style">
      <div class="city-event" v-for="event in events" :key="event._id">
        <event-preview :event="event"/>
      </div>
    </div>
  </section>
</template>

<script>
import eventPreview from "@/components/eventPreview.vue";
import navBar from "@/components/navBar.vue"


export default {
  name: "cityPage",
  data() {
    return {
      events: [],
      city: {}
    };
  },
  created() {
    const cityId = this.$route.params.cityId;
    this.$store.dispatch({ type: "getCityById", cityId }).then(city => {
      this.city = city;
      return city;
    });
    this.$store.dispatch({ type: "loadEventsByCity", cityId }).then(events => {
      this.events = events;
    });
  },
  methods: {
    getSrc(name) {
      var nameSplitted = name.split(" ");
      if (nameSplitted.length > 1) name = nameSplitted[0] + nameSplitted[1];
      var images = require.context("../images", false, /\.png$/);
      return images("./" + name + ".png");
    }
  },
  components: {
    eventPreview,
    navBar
  }
};
</script>
<style scoped lang = "scss">
.city-events {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  text-decoration: none;
}
.cards {
  height: 100%;
}
.city-event {
  padding: 10px;
}

.images-container {
  margin: 0 auto;
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  color: black;
  background-color: #ffffffb0;
  /* width: 50%; */
  text-align: center;
  margin: 0 auto;
  font-size: 4em;
  padding: 10px;
  font-family: "Ultra", serif;
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


@media only screen and (max-width: 800px) {
  .city-event {
    width: 100%;
    padding: 0px;
  }
  .city-events {
    display: grid;
    grid-template-columns: 6fr 6fr;
    /* grid-template-columns: 12fr; */
    gap: 17px;
  }
  .name {
    font-size: 2.5em;
  }
}

</style>
