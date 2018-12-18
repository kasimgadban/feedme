<template>
  <section class="header">
    <div class="text">
      <h1>Home Dining Experience</h1>
      <h3>Enjoy different flavors, meet new people</h3>
    </div>
    <div class="search-bar">
      <search-bar @set-filter="setFilter" :comCurrLoc="comCurrLoc"></search-bar>
    </div>
    <router-view/>
  </section>
</template>
<script>
import searchBar from "@/components/searchBar.vue";
import navBar from "@/components/navBar.vue";

export default {
  name: "appHeader",
  props: ["comCurrLoc"],
  methods: {
    setFilter(filter) {
      this.$emit("set-filter", filter);
    }
  },
  computed: {
    bgImage() {
      return "background-image: url(images/bg.jpg);";
    }
  },
  components: {
    searchBar,
    navBar
  }
};
</script>

<style scoped lang="scss">
.logo {
  width: 50px;
  height: 50px;
}

.img-logo {
  width: 50px;
  height: 50px;
}
.header {
  background: blue;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(../images/bg2.jpg);
  display:block; 
  opacity:0.9; 
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.date {
  background-color: rgba(204, 193, 193, 0.959);
  border: none;
  border-right: 2px solid black;
  width: 300px;
  font-size: 1em;
  height: 48px;
  padding-left: 5px;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
}

.search-bar {
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 1;
  margin-top: 45px;
}

.search-bar > * {
  justify-items: center;
}

.nav-bar {
  display: flex;
  align-items: center;
}

.nav-bar > * {
  color: #878b8f;
  padding: 10px;
  font-size: 1.2em;
  right: 0px;
  text-decoration: none;
}
.logo {
  color: white;

  padding: 10px;
  font-size: 1.2em;
}

h1,h3 {
  text-align: center;
  padding-top: 100px;
  font-size: 45px;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-shadow: 1px 1px 10px black;
}
h1{
  font-size: 4.5em;
}

h3 {
  font-size: 2.8em;
  // margin-bottom: 55px;
  padding-top: 0px;
}
@media only screen and (max-width: 800px) {
  h1 {
    // margin-bottom: 15px;
    padding-top: 75px;
    font-size: 2.2em;
  }
  h3{
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 70px
  }
  .search-btn {
    font-size: 0.9em;
  }
  .search-bar > * {
    border: none;
  }
  .date {
    padding: 10px;
    padding-bottom: 22px;
    margin-bottom: 3px;
  }
  .header {
    height: 250px;
  }
  .search-wrapper{
        width: 80%;
  }
 
  
}
</style>
