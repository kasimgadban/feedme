<template>
  <section class="header">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <div style="display:flex; align-items: center;">
          <img class="img-logo" src="../images/logo40.png">
          <svg>
          <span class="logo-name">Feed Me</span>
          <path d="M5 10.1c0-.8.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"></path>
          </svg>
        </div>
      </router-link>
      <div class="nav-bar">
        <div class="nav-btns" v-if="user">
          <div class="dad" style="position:relative;">
            <span >Hi,{{userName}} &nbsp;<span @click="toggleDropDown"
            class="drop"><i class="fas fa-caret-down"></i></span>
             <div class="dropDown" v-show="isDropDownOpen">
          <router-link :to="'/myprofile/' + user._id"  class="log-out"><span @click="isDropDownOpen=!isDropDownOpen">My Profile <i class="fas fa-user"></i></span></router-link>
          <router-link :to="'/myEvents/' + user._id"  class="log-out"><span @click="isDropDownOpen=!isDropDownOpen">My Events <i class="far fa-calendar-alt"></i></span></router-link>
          <span><button @click="logout" class="log-out">Log Out <i class="fas fa-sign-out-alt"></i></button></span>
            </div>
            </span>
            </div>
          <!-- <button @click="toggleDropDown">drop</button> -->
          <book-noti class="chat-icon" :user="user"></book-noti>
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
  border: 1px solid;
  border-radius: 50%;
  position: absolute;
  top: 5px;
}

.dropDown{
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 200px; 
  align-items: center;
  margin: 0 auto;
  margin-top: 12px;
  left: -50%;
  width: 200px;
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
