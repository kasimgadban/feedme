<template>
  <section class="search-wrapper" v-if="comCurrLoc">
    <input
      ref="autocomplete"
      placeholder="Where you would like to dine?"
      class="search-location"
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
  props:['comCurrLoc'],
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
      console.log('test 1', this.filter);
      this.$emit("set-filter", this.filter);
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
border-right:2px solid #00000029;  width: 350px;
  font-size: 1em;
  padding: 15px;
  border-radius: 3px 0px 0px 3px;
}
input:focus {
  outline: none;
}

.search-btn {
  width: 25%;
  font-weight: bolder; 
  padding: 1px 7px 1px;
   background-color: #4CAF50;
   font-size: 0.8em;
   border: none;
   border-radius: 0px 3px 3px 0px;
   cursor: pointer;
}

.search-btn:focus {
  outline: none;
}

.search-btn {
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif; 
  justify-items: center; 
}

.search-wrapper{
  display: flex;
  height: 40px;
}

@media only screen and (max-width: 800px) {
  input {
    padding: 10px;
    margin-bottom: 3px;
    border: none;
  }
  .search-btn {
    margin-bottom: 3px;
    letter-spacing: 0px; 
    
  }

}
</style>
