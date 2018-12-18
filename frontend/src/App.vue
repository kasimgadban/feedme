<template>
<section>
  <div id="app">
    <nav-bar id="nav" :user="user" :msgToShow="msgToShow"></nav-bar>
    <router-view ></router-view>
  </div>
  <notifications  group="foo" />
  </section>
</template>

<script>
import navBar from "@/components/navBar.vue";
import storageService, { LOGGEDIN_USER_KEY } from "./services/storageService";
// import {USER_MSGS} from './services/storageService'
export default {
  data() {
    return {
      user: {},
      msgToShow: [],
}
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    customEmit(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
    // renderMsg(msg) {
    //   this.msgToShow = msg;
    // }
  },
  mounted() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  },
  created() {
    const credentials = storageService.loadFromStorage(LOGGEDIN_USER_KEY);
    // const noti = storageService.loadFromStorage(USER_MSGS);
    // console.log('check Noti on login',noti);
    // this.msgToShow = noti;
    if (credentials) {
      this.$store
        .dispatch({ type: "checkLoggedUser", loggedInUser: credentials })
        .then(user => {
          this.user = user;
        });
    }
  },

   components: {
    navBar
  },
};
</script>

<style scoped lang="scss">
#nav {
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: top 0.3s;
}


// .my-style {
//   // Style of the notification itself 
 
//   .notification-title {
//     // Style for title line 
//     color:red;
//   }
 
//   // .notification-content {
//   //   // Style for content 
//   // }
 
//   &.my-type {
//     padding: 10px;
//   margin: 0 5px 5px;
 
//   font-size: 12px;
  
//   color: #b62020;
//   background: rgb(17, 179, 30);
//   border-left: 5px solid #187FE7;
 
//   }
// }


@media screen and (min-width: 1088px){
.container {
    max-width: 100%;
    width: 100%;
}
}

</style>

