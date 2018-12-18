<template>
  <section class="notification-menu">
    <div class="item notifs-btn" @click="openNotiCenter">
      <el-badge v-if="notiCount > 0" :value="notiCount"></el-badge>
      <i size="small" class="fas fa-bell" ></i>
    </div>
    <div class="notifs-dropdown">
      <div
        v-for="(value, key) in bookNoti"
        :key="key"
      >
        <div class="notif-item" @click="notiRead(key)"  v-if="showNotifDrop">
          <h1>New event has been booked!</h1>
          {{bookNoti[key].name}} booked for {{bookNoti[key].guests}} guests at {{bookNoti[key].at}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// <i class="fas fa-times"></i>
import storageService from "@/services/storageService";

export default {
  props:['msgToShow'],
  data() {
    return {
      user: {},
      events: null,
      showNotifDrop: false,
      dates: [],
      unReadNoti: 0,
      bookNoti: [],
      // unReadNotiCount:[],
    };
  },
  created() {
    this.user = this.$store.getters.getLoggedCook;
    const cookId = this.user._id;
    // this.msgToShow.filter(el =>{ 
    //   if((el.userId === this.user._id) && (el.isRead === false))
    //   this.unReadNotiCount.push(el)
    //   })
    // console.log(this.unReadNotiCount);
    this.unReadNoti = this.unReadNotiCount.length
    this.$store.dispatch({ type: "getEventsByCook", cookId }).then(events => {
      events.forEach(element => {
        this.dates.push(...element.dates);
      });
    });
  },
  computed: {
    notiCount() {
      return this.unReadNoti;
    }
  },
  sockets: {
    gotBookNoti(obj) {
      if (this.user._id === obj.currCookId) {
        console.log(obj.msg);
        obj.msg.userId = this.user._id
        this.bookNoti.push(obj.msg);
        this.unReadNoti++;
        // storageService.saveToStorage('userMsgs',this.bookNoti)
      } 
      console.log(this.bookNoti);
    }
  },
  methods: {
    openNotiCenter() {
      this.showNotifDrop = !this.showNotifDrop;
      this.unReadNoti = 0
      // this.unReadNotiCount = []
    },
    notiRead(key) {
      // value.isRead = true;
      this.$router.push(`/myEvents/${this.user._id}`)
      this.bookNoti[key].isRead = true;
      this.showNotifDrop = false;
      this.unReadNoti--;
      // storageService.saveToStorage('userMsgs',this.bookNoti)
      // storageService.
      // console.log(this.dates[key].showNoti);
      // this.dates[key].showNoti = false;
  }
}
}
</script>

<style lang="scss" scoped>

.notification-menu {
  color: #35495e;
  position: relative;
}

.notifs-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 3px;
  height: 2.2em;
  // width: 2.2em;
}

.notifs-dropdown {
  position: fixed;
  width: max-content;
  right: 0;
  margin-top: 10px;
  padding: 2px;
  // background: gray;
  display: grid;
  gap: 1px;
}

.notif-item {
  cursor: pointer;
  margin-right: 5px;
  background-color: #ffffff;
  padding: 3px;
  margin-top: 1px;
  color: #35495e;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 0;
}

</style>


        