<template>
  <section>
    <app-header class="app-header" @set-filter="setFilter" :comCurrLoc="comCurrLoc"></app-header>
    <city-list :cities="cities"/>
    <event-list :events="events"></event-list>
    <app-footer/>
    <!-- <pre>{{events}}</pre> -->
  </section>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appDesc from "@/components/appDescreption.vue";
import eventList from "@/components/eventList.vue";
import appFooter from "@/components/appFooter.vue";
import cityList from "@/components/cityList.vue";
import locationService from "@/services/locationService";

export default {
  name: "home",
  data() {
    return {
      filter: {
        byAddress: ""
      },
      currLoc: ""
    };
  },

  created() {
    this.currLoc = locationService
      .getCurrAddress()
      .then(res => (this.currLoc = res));
    // this.$store.dispatch({ type: "loadCooks" });
    this.$store.dispatch({ type: "loadCities" });
    // this.$store.dispatch({ type: "loadByFilter", filter }).then(res => this.events = res);
    // var filter = this.filter
    // this.$store.dispatch({ type: "loadByFilter" ,filter});
    // setFilter(filter){
    // this.$store.dispatch({type: "loadByFilter",filter})
    // },
  },
  methods: {
    setFilter(filter) {
      console.log("filter sets", filter.byAddress);
      this.$store
        .dispatch({ type: "loadByFilter", filter })
    }
  },
  computed: {
    comCurrLoc() {
      return this.currLoc;
    },
    cooks() {
      return this.$store.getters.getCooks;
    },
    events() {
      return this.$store.getters.getEvents;
    },
    cities() {
      return this.$store.getters.getCities;
    }
  },
  components: {
    appHeader,
    appDesc,
    appFooter,
    cityList,
    eventList
  }
};
</script>

<style scoped lang = "scss" >
.cmp-container {
  width: 90%;
}
h2 {
  text-align: center;
  margin: 0px;
  padding: 0px;
  background-color: rgba(17, 107, 17, 0.219);
  padding-top: 15px;
}
.test {
  justify-content: center;
  /* background: yellow; */
  /* margin: 0 auto */
}

@media only screen and (max-width: 800px) {
  .test {
    display: none;
  }
}
</style>
