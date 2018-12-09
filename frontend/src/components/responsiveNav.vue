<template>
    <div class="responsive-nav visible-xs visible-sm" v-bind:class="{collapsed: collapsed}">
  <a class="hamburger pull-right" v-on:click="toggleActive(!collapsed)">
    <span @click="toggleMenu()">{{triggerText}} </span>
  </a>
  <ul class="nav">
     <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Login</router-link>
    </ul>
  <slot v-on:click="toggleActive(false)"></slot></div>
</template>



<script>
export default { 
  name: 'responsiveNav',
data () {
    return {
      collapsed: true
    };
},
computed: {
    triggerText () {
      // var menu = document.querySelector('.nav');
      // if(menu.style.display === 'none') menu.style.display = 'block'
      // else menu.style.display = 'none'

      return this.collapsed && 'Menu' || 'Close'
    },
    toggleMenu(){
      console.log('this.collapsed',this.collapsed)
       if(this.collapsed === true) document.querySelector('.nav').style.display = 'block';
      else if (this.collapsed === false) document.querySelector('.nav').style.display = 'none';
    }
  },
  methods: {
    toggleActive (flag) {
      this.collapsed = flag
    }
  },
 

}
</script>

<style scoped lang = "scss">
responsive-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  background: #f8f8f8;
  transition: margin 0.2s ease-out;
  border: 1px solid #cccccc;
}


.hamburger {
  /* display: block; */
      margin-right: 207px;
  height: 30px;
  width: 30px;
  padding: 15px;
  text-align: center;
  position: relative;
  left: 30px;
}

.nav{
  display: flex;
  flex-direction: column;
}

/* here */

/* .nav-container{
    background: black;
    color:white;
} */

/* .top-nav{
    width: 100%;
    height: 20%;

} */


/* .mobile-nav{
    z-index: 1;
    top: 100px;
    position: fixed;
    height: 83%;
    right: 0;
    transform: translate(100%);
    transition: all 0.9s;
    background-color: antiquewhite;
}

.mobile-nav.open{
    transform: translate(0);
   } */

   /* .main-nav-item{
    color: #ffffff;
    letter-spacing: 0.8px;
    text-decoration: none;
    width: 250px;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: all .3s;
    font-size: 1.454rem;
    width: 250px;
   }

   .hambunger{
    width: 90px;
    cursor: pointer;
    transition: all .6s;
    }
    */

   /* .hambunger:hover{
    color:rgb(149, 233, 66);
    box-shadow: inset 0 -3px 0 rgb(187, 148, 148);;
   }
   
   .btn-close{
    position: absolute;
    left: 54%;
    font-size: 1.25rem;
    color: #fff;
    border: none;
    transition:all .3s;
} */

/* .btn-close:hover{
    cursor: pointer;
    color: wheat;
}

   .mobile-nav .main-nav-item{
    color: #ffffff;
    letter-spacing: 0.8px;
    width: 250px;
    height: 125px;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    text-shadow: 0 1px 0 #1e1e1e;
    box-shadow: inset 0 -6px 0 black;
    opacity: 0.5;
    transition: all .3s;
    font-size: 1.454rem;
    width: 250px;
} */

/* .main-nav :not(:last-child){
    display: none;
} */

/* .hambunger{
    height: 100%;
} */


/* @media (min-width:680px){
    .main-nav .hambunger{
        display: none;
    }

    .main-nav :not(:last-child){
        display: block;
    }

    .main-nav{
        width: 60%;
        text-align: center;
        align-items: center;
    }
    .main-nav-item{
        line-height: 50px;
    }


    .main-nav-item:hover{
        cursor: pointer;
        color:rgb(149, 233, 66);
    } */
/* } */
</style>