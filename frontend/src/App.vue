<template>
  <div id="app">
    <nav-bar id="nav" :user="user"></nav-bar>
    <router-view class="ro"></router-view>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import storageService, { LOGGEDIN_USER_KEY } from "./services/storageService";
// import eventBus, {GET_MSG} from "./services/eventBus.js";

export default {
  data() {
    return {
      user: {},
      msgToShow: null,
    };
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
    renderMsg(msg) {
      this.msgToShow = msg;
    }
  },
  components: {
    navBar
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
    if (credentials) {
      // console.log('I am from app vue and my user is',credentials);
      this.$store
        .dispatch({ type: "checkLoggedUser", loggedInUser: credentials })
        .then(user => {
          // this.$store.commit({type: "connectSocket",userId: this.$store.getters.getLoggedUser._id});
          this.user = user;
          // console.log('I was return 42 ',user);
          // console.log('I was return 43 ',this.user);
        });
    }
  },
  computed: {
    // user(){
    //   return this.$store.getters.getLoggedCook
    // }
  }
};
</script>

<style scoped lang="scss">
#nav {
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: top 0.3s;
}
</style>
