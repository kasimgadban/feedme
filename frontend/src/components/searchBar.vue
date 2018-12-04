<template>
  <section>
    <input
      ref="autocomplete"
      placeholder="Search"
      class="search-location"
      onfocus="value = ''"
      type="text"
      v-model="searchAddressInput"
      v-on:change="searchLocation()">
  </section>
</template>

<script>
export default {
  name: "searchBar",
    data() {
    return {
      currentLocation : { lat : 0, lng : 0},
      searchAddressInput: ''
    }
  },
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.$refs.autocomplete,
        {
          types: ["geocode"]
          // componentRestrictions: {
          //   country: "IL"
          // }
        }
      );
    });
  },
  methods: {
    searchLocation: function() {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: this.searchAddressInput },
        (results, status) => {
          if (status === "OK") {
            this.currentLocation.lat = results[0].geometry.location.lat();
            this.currentLocation.lng = results[0].geometry.location.lng();
          }
        }
      );
    }
  }
};
</script>

<style lang = "scss">
.search-location {
  padding: 15px;
}
</style>
