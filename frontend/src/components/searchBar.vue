<template>
  <section>
    <input
      ref="autocomplete"
      placeholder="Search"
      class="search-location"
      onfocus="value = ''"
      type="text"
    >
  </section>
</template>

<script>
export default {
  name: "searchBar",
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.$refs.autocomplete,
        {
          types: ["geocode"],
          componentRestrictions: {
            country: "IL"
          }
        }
      );
    });
  }
};
</script>

<style lang = "scss">
</style>
