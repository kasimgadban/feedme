<template>
  <section class="header">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <div style="display:flex; align-items: center;">
          <img class="img-logo" src="../images/logo8.png">
          <span class="logo-name">FeedMe</span>
        </div>
      </router-link>
      <div class="nav-bar">
        <div class="nav-btns" v-if="user">
          <div class="dad" style="position:relative;">
            <span >Hi, {{userName}} &nbsp;<span @click="toggleDropDown"
            class="drop"><i class="fas fa-caret-down"></i></span>
             <div class="dropDown" v-show="isDropDownOpen">
          <router-link :to="'/myprofile/' + user._id"  class="log-out"><span @click="isDropDownOpen=!isDropDownOpen">My Profile <i class="fas fa-user"></i></span></router-link>
          <router-link :to="'/myEvents/' + user._id"  class="log-out"><span @click="isDropDownOpen=!isDropDownOpen">My Events <i class="far fa-calendar-alt"></i></span></router-link>
          <span><button @click="logout" class="log-out">Log Out <i class="fas fa-sign-out-alt"></i></button></span>
            </div>
            </span>
            </div>
          <!-- <button @click="toggleDropDown">drop</button> -->
          <book-noti class="chat-icon" :user="user" :msgToShow="msgToShow"></book-noti>
        </div>
        <router-link to="/login" v-else>Sign In</router-link>
      </div>
    </div>
   
  </section>
</template>
<script>
// import responsiveNav from "@/components/responsiveNav.vue";
import bookNoti from "@/components/bookNoti.vue";

export default {
  name: "navBar",
  props: ['msgToShow'],
  data() {
    return {
      fullName: "",
      isDropDownOpen: false
    };
  },
  created() {
    // this.$socket.emit('getRoomCounts')
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout" }).then(() => {
        this.$router.push("/");
       this.isDropDownOpen = false
      });
    },
    toggleDropDown(){
      this.isDropDownOpen = !this.isDropDownOpen
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
    },
     
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
  text-decoration: none;
}


.img-logo {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0.5px;
}

.dropDown{
  display: flex;
  flex-direction: column;
  position: absolute;
  // height: 200px; 
  align-items: center;
  margin: 0 auto;
  margin-top: 12px;
  // left: -50%;
  width: 200px;
  width: 196px;

  background: #ffffffeb;
  border: 1px solid gainsboro;
 
}

.drop{
  cursor: pointer;
}

.log-out {
  cursor: pointer;
  background:none;
  border: none;
  padding-bottom: 5px;
  padding-top: 10px;
  width: 185px;
    border-bottom: 1px solid;
    text-align: center;
    color: black;
    font-size: 0.8em;
     border-color: #80808087;
}


.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  // overflow: hidden;
  background-color: #ffffff9c;
  top: 0;
  height: 50px;
}

.nav-btns {
  display: grid;
  padding: 3px;
  grid-template-columns: 1fr 0.5fr 0fr;
  gap: 2px;
  align-items: center;
}

.nav-bar,
.hamburger {
  display: flex;
  align-items: flex-end;
  // margin-right: 20px;
}

.nav-bar > * {
  color: black;
  padding: 5px;
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
  margin-left: 50px;
  font-family: 'Overpass', sans-serif;
  font-size: 1.5em;
  position: absolute;
  top: 3px;
  font-weight: bold;
  // left: 65px;
  color: black;
}

@media only screen and (max-width: 800px) {
  .nav-bar > * {
    font-size: 1em;
    padding: 0px;
    margin-bottom: 7px;
  }
  .nav-container{
    padding-left: 10px;
    padding-right: 0px;
  }
  .logo-name{
    font-size: 1em;
    margin-left: 42px;
    top: 12px;
   
  }
   .img-logo{
    width: 40px;
    height: 40px;
    top: 5px;
  }
  .dropDown{
    left: -34%;
  }
}
</style>
