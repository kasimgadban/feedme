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
        v-if="showNotifDrop "
      >
        <div class="notif-item" @click="notiRead(key)">
          <h1>New event has been booked! <i class="fas fa-times"></i></h1>
          {{bookNoti[key].name}} booked for {{bookNoti[key].guests}} guests at {{bookNoti[key].at}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eventService from '@/services/eventService'
export default {
  data() {
    return {
      user: {},
      events: null,
      showNotifDrop: false,
      dates: [],
      unReadNoti: 0,
      bookNoti: []
      // notiCount:0
    };
  },
  created() {
    this.user = this.$store.getters.getLoggedCook;
    const cookId = this.user._id;
    // console.log(this.user);
    this.$store.dispatch({ type: "getEventsByCook", cookId }).then(events => {
      events.forEach(element => {
        this.dates.push(...element.dates);
      });
      // this.dates = this.dates.filter(count => count.showNoti === true);
      // this.unReadNoti = this.dates.length;
    });
  },
  computed: {
    notiCount() {
      return this.unReadNoti;
    }
  },
  methods:{
    lhitsa(){
      console.log('i am datos', this.datos)
    }
  },
  sockets: {
    gotBookNoti(obj) {
      if (this.user._id === obj.currCookId) {
        console.log(obj.msg);
        this.bookNoti.push(obj.msg);
        this.unReadNoti++;
      }
      console.log(this.bookNoti);
    }
  },
  methods: {
    openNotiCenter() {
      this.showNotifDrop = !this.showNotifDrop;
      // const cookId = this.user._id;
      this.unReadNoti = 0
      // this.dates.forEach(element => element.showNoti = false)
      // this.$store.dispatch({ type: "getEventsByCook", cookId }).then(events => {
      // events.forEach(element => {
      //   element.dates.push(...this.dates);
      //   console.log(element);
      // eventService.saveEvent(element);
      // });
      // })
    },
    notiRead(key) {
      // value.isRead = true;
      this.$router.push(`/myEvents/${this.user._id}`)
      this.bookNoti[key].isRead = true;
      this.unReadNoti--;
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


        