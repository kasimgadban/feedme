<template>
  <section class="header" :style="bgImage">
      <h1>Unforgettable Tastes</h1>
    <div class="search-bar">
      <search-bar @setFilter="setFilter"></search-bar>
      <!-- <input type="date" placeholder="When?" class="date"> -->
      
    </div>
    <router-view/>
  </section>

</template>
<script>
import searchBar from "@/components/searchBar.vue";
import navBar from "@/components/navBar.vue"

export default {
  name: "appHeader",
  methods:{
    setFilter(filter){
      this.$emit('setFilter',filter)
      // this.filter.byAddress = ''
    }
  },  
  computed:{
     bgImage() {
      return (
        "background-image: url('https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); background-size: cover; display:block; opacity:0.9; background-position: 50%;"
      );
    },

  },
  components: {
    searchBar,
    navBar

  }
};
</script>

<style scoped lang="scss">
.logo{
  width:50px;
  height:50px;
}

.img-logo{
  width:50px;
  height:50px;
}
// .search-btn{
//   font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
// }
.header {
  background: blue;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-image: url("https://cdn.shopify.com/s/files/1/2206/4495/articles/main-image_0e2e0e40-2fd0-4c18-a0eb-343072fa341f_2048x.jpg?v=1510690904");
  background-repeat: no-repeat;
  background-size: cover;

}
.date{
  background-color: rgba(204, 193, 193, 0.959);
    border: none;
    border-right: 2px solid black;
    width: 300px;
    font-size: 1em;
    height: 48px;
    padding-left: 5px;
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
  margin-bottom: 70px;
  opacity: 1;
}

.search-bar > *{
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
// button{
//     width: 15%;
//     background-color: #88c888;
//     border: none;
//     cursor: pointer;
//     font-size: 1.1em;
//     color: black;
//     font-weight: bolder;
//     letter-spacing: 2px;
//     height: 48px;
// }

// button:focus {
//     outline:none;
// }

h1{
      text-align: center;
    padding-top: 115px;
    /* margin-top: 75px; */
    margin-bottom: 90px;
    font-size: 45px;
    color: black;
    font-family: 'Ultra', serif;
}
@media only screen and (max-width: 800px) {
    h1{
    margin-bottom: 70px;
    margin-top: 80px;
    font-size: 1.5em;
    }

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  flex-direction: column;
}
// button{
//   width: 25%;
//   font-size: 1em;
//   padding: 10px 1px 28px 3px;
// }

.search-bar>*{
  border:none;
}
.date{
  padding: 10px;
    padding-bottom: 22px;
    margin-bottom: 3px;
}
.header{
  height: 250px;
}
}
</style>
