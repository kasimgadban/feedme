<template>
  <section>
    <app-header /> 
    <city-list :cities="cities" />
    <!-- <h2>How it works</h2> -->
    <!-- <app-desc class="test"/> -->
    <event-list :events="events" ></event-list>
    <app-footer />
  </section>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appDesc from "@/components/appDescreption.vue";
import eventList from "@/components/eventList.vue";
import appFooter from "@/components/appFooter.vue";
import cityList from "@/components/cityList.vue";

export default {
  name: "home",
  components: {
    appHeader,
    appDesc,
    // topRated,
    // cookList,
    appFooter,
    cityList,
    eventList
  },
  created() {
    this.$store.dispatch({ type: "loadCooks" });
    this.$store.dispatch({ type: "loadEvents" });
    this.$store.dispatch({ type: "loadCities" });
  },
  computed: {
    cooks() {
      return this.$store.getters.getCooks;
    },
    events() {
      return this.$store.getters.getEvents;
    },
    cities() {
      return this.$store.getters.getCities;
    }
  }
};
</script>

<style scoped lang = "scss" >
.cmp-container {
  width: 90%;
}
h2{
  text-align: center;
  margin: 0px;
  padding: 0px;
  background-color: rgba(17, 107, 17, 0.219);
  padding-top: 15px;

}
.test{
  justify-content: center;
  /* background: yellow; */
  /* margin: 0 auto */
}


@media only screen and (max-width: 800px) {
   .test{
     display: none;
   }
}
</style>
