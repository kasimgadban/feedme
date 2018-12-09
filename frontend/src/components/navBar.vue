<template>
  <section class="header">
    <div class="nav-container">
     <router-link to="/" class="logo">
     <div style="display:flex; align-items: center;" >
     <img class="img-logo" src="../images/logo40.png"><span class="logo-name">Feed Me</span>
     </div>
     </router-link>
      <div class="nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Login</router-link>
      </div>
    </div>

  <!-- <responsive-nav class="hamburger">    
  </responsive-nav> -->


  </section>

</template>
<script>
import responsiveNav from "@/components/responsiveNav.vue";

export default {
  name: "navBar",
  components: {
    responsiveNav
    // searchBar
  }
};
</script>

<style scoped lang="scss">
.logo{
  // width:50px;
  // height:50px;
  // border: 1px solid;
  // border-radius: 50%;
  text-decoration: none;
}

.img-logo{
  // width:50px;
  // height:50px;
  border: 1px solid;
  border-radius: 50%;
      position: absolute;
    top: 5px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
  background-color:#ffffff9c;
  top: 0;
  height: 50px;
}

.nav-bar,.hamburger {
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
}

.nav-bar > * {
  color: black;
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
  // font-weight: bold;
  right: 0px;
  text-decoration: none;
  font-family:Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  // font-size: 14px;
  line-height: 1.43;
}
.logo {
  color: white;
  
  padding: 10px;
  font-size: 1.2em;
}
.logo-name{
 margin-left: 5px;
    font-family: 'Damion', cursive;
    font-size: 1.2em;
    position: absolute;
    top: 17px;
    left: 65px;
    color: black;
}

@media only screen and (max-width: 800px) {
  .nav-bar{
    // display: none;
        // margin-right: 207px;
  }

  // .hamburger{
  //   display: block;
  // }
    
}
</style>
