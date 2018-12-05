<template>
  <section class="header">
    <div class="nav-container">
      <div class="logo">Logo</div>
      <div class="nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Login</router-link>
      </div>
    </div>
    <div class="search-bar">
      <search-bar></search-bar>
      <input type="date" placeholder="When?" class="date">
      <button>Search</button>
    </div>
    <router-view/>
  </section>

</template>
<script>
import searchBar from "@/components/searchBar.vue";

export default {
  name: "appHeader",
  components: {
    //  appHeader,
    searchBar
  }
};
</script>

<style scoped lang="scss">
.header {
  background: blue;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://foodrevolution.org/wp-content/uploads/2018/10/blog-featured-thanksgiving-20181029-3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
}
.date{
  background-color: rgba(204, 193, 193, 0.959);
    border: none;
    border-right: 2px solid black;
    padding: 8px;
    width: 300px;
    font-size: 1em;
}
.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search-bar {
  display: flex;
  // margin: 0 auto;
  width: 100%;
  // justify-content: space-between;
  justify-content: center;
  margin-bottom: 70px;
  // display: flex;
    // flex-direction: column;
}

.search-bar > *{
  justify-items: center;
}

.nav-bar {
  display: flex;
}

.nav-bar > * {
  color: white;
  padding: 10px;
  font-size: 1.2em;
  right: 0px;
}
.logo {
  color: white;

  padding: 10px;
  font-size: 1.2em;
}
button{
      width: 15%;
      background-color: #88c888;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    color: black;
    font-weight: bolder;
    letter-spacing: 2px;
}

button:focus {
    outline:none;
}
</style>
