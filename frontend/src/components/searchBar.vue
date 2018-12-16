<template>
  <section class="a">
    <input
      ref="autocomplete"
      placeholder="Search for a city"
      class="search-location"
      value =""
      type="text"
      v-model="filter.byAddress"
     
    >
    <button class="search-btn"  @click="setFilter()" >Search</button>
  </section>
</template>

<script>
/*global google*/

export default {
  name: "searchBar",
  data() {
    return {
      currentLocation: { lat: 0, lng: 0 },
      searchAddressInput: "",
      filter: { byAddress: '' },
      handleInput: ""
    };
  },
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.$refs.autocomplete,
        {
          types: ["geocode"]
        }
      );
    });
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", this.filter);
    }
    // searchLocation: function() {
    //   var geocoder = new google.maps.Geocoder();
    //   geocoder.geocode(
    //     { address: this.searchAddressInput },
    //     (results, status) => {
    //       if (status === "OK") {
    //         this.currentLocation.lat = results[0].geometry.location.lat();
    //         this.currentLocation.lng = results[0].geometry.location.lng();
    //       }
    //     }
    //   );
    // }
  }
};
</script>

<style scoped lang = "scss">
input {
  background-color: white;
  border: none;
  border-right: 2px solid black;
  width: 300px;
  font-size: 1em;
  padding: 15px;
}
input:focus {
  outline: none;
}

button {
  width: 15%;
  background-color: #88c888;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  color: black;
  font-weight: bolder;
  letter-spacing: 2px;
  height: 48px;
}

button:focus {
  outline: none;
}

.search-btn {
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: inherit;
  justify-items: center;
}


@media only screen and (max-width: 800px) {
  input {
    padding: 10px;
    margin-bottom: 3px;
    border: none;
  }
  button {
    width: 25%;
    font-size: 1em;
    padding: 10px 1px 28px 3px;
  }

/* .search-btn {
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: inherit;
} */
  /* .a>*{
  border:none;
} */
}
</style>
