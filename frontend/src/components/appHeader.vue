<template>
  <!-- <section class="header-container"> -->
    <section class="header">
      <div class="nav-container">
      <div class="logo">Logo</div>
      <div class="nav-bar">
        <router-link to = "/">Home</router-link>
        <router-link to = "/">About</router-link>
        <router-link to = "/">Login</router-link>
      </div>
      </div>
      <div class="search-bar">
        <searchBar></searchBar>
        <input type="date" placeholder="Date" />
        <select name="" id="">
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <button>Search</button>
      </div>
      <router-view/>
      </section>
    
  <!-- </section> -->
</template>
<script>

import searchBar from '@/components/searchBar.vue'

export default {
   name:'appHeader',
   components: {
    //  appHeader,
    searchBar

   }
}
</script>

<style scoped lang="scss">

.header{
  background: blue;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('https://www.shape.com/sites/shape.com/files/u896/wide-middle-eastern-food.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}

.nav-container{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search-bar{
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  // width: 80%;
}

.nav-bar{
  display: flex;
}

.nav-bar>*{
   color: white;
   padding: 10px;
   font-size: 1.2em;
   right: 0px;
}
.logo{
 color: white;
  
  padding: 10px;
  font-size: 1.2em;
}

.input{
  // padding: 17px
}
</style>
