<template>
  <section>
    <app-header />
    <city-list :cities="cities" />
    <event-list :events="events" ></event-list>
    <!-- <app-footer /> -->
  </section>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appDesc from "@/components/appDescreption.vue";
import topRated from "@/components/topRated.vue";
import cookList from "@/components/cookList.vue";
import eventList from "@/components/eventList.vue";
import appFooter from "@/components/footer.vue";
import searchBar from "@/components/searchBar.vue";
import cityList from "@/components/cityList.vue";

export default {
  name: "home",
  components: {
    appHeader,
    appDesc,
    topRated,
    cookList,
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


</style>
