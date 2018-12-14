<template>
  <section class="header">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <div style="display:flex; align-items: center;">
          <img class="img-logo" src="../images/logo40.png">
          <span class="logo-name">Feed Me</span>
        </div>
      </router-link>
      <div class="nav-bar">
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>-->
        <div class="nav-btns" v-if="user">
          <!-- <span>Hi,{{userName}}</span> -->
          <router-link :to="'/myprofile/' + user._id" class="hi-user">
            <span>Hi,{{userName}}</span>
          </router-link>
          <span @click="logout" class="log-out">Log Out</span>
          <!-- <router-link class="chat-icon" to="/chat">
          </router-link>-->
          <book-noti class="chat-icon" :user="user"></book-noti>
        </div>
        <router-link to="/login" v-else>Sign In</router-link>
      </div>
    </div>
    <!-- <responsive-nav class="hamburger">    
    </responsive-nav>-->
  </section>
</template>
<script>
// import responsiveNav from "@/components/responsiveNav.vue";
import bookNoti from "@/components/bookNoti.vue";

export default {
  name: "navBar",
  data() {
    return {
      fullName: ""
    };
  },
  created() {
    // this.$socket.emit('getRoomCounts')
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout" }).then(() => {
        this.$router.push("/");
      });
    }
  },
  computed: {
    user() {
      return this.$store.getters.getLoggedCook;
    },
    userName() {
      var name = this.user.fullName;
      var firstName = name.split(" ")[0];
      return firstName;
    }
  },
  sockets: {
    // gotBookNoti(obj) {
    //   if (this.user._id === obj.currCookId) {
    //     this.$notify({
    //       group: "foo",
    //       title: "You've got new message",
    //       text: (this.msgInput = obj.txt)
    //     });
    //   }
    // }
  },
  components: {
    // responsiveNav
    bookNoti
  }
};
</script>

<style scoped lang="scss">
.logo {
  // width:50px;
  // height:50px;
  // border: 1px solid;
  // border-radius: 50%;
  text-decoration: none;
}

// .chat-icon {
//   background: none;
//   border: none;
//   font-size: 1.2em;
// }

.img-logo {
  // width:50px;
  // height:50px;
  border: 1px solid;
  border-radius: 50%;
  position: absolute;
  top: 5px;
}

.log-out {
  cursor: pointer;
  margin-left: 15px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
  background-color: #ffffff9c;
  top: 0;
  height: 50px;
}

.nav-btns {
  display: grid;
  padding: 3px;
  grid-template-columns: 1fr 1fr 0fr;
  gap: 2px;
  align-items: center;
}

.nav-bar,
.hamburger {
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
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  // font-size: 14px;
  line-height: 1.43;
}
.logo {
  color: white;

  padding: 10px;
  font-size: 1.2em;
}
.logo-name {
  margin-left: 5px;
  font-family: "Damion", cursive;
  font-size: 1.2em;
  position: absolute;
  top: 17px;
  left: 65px;
  color: black;
}

@media only screen and (max-width: 800px) {
  .nav-bar > * {
    font-size: 1em;
  }
}
</style>
