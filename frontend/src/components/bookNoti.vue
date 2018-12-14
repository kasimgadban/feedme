<template>
    <section class="notification-menu" >
      <div class="item notifs-btn" @click="showNotifDrop = !showNotifDrop">
      <!-- <div class="notifs-btn" @click="showNotifDrop = !showNotifDrop">
        <i ></i>
      </div> -->
      <el-badge :value="5" >
            <i size="small" class="fas fa-bell" ></i>
          </el-badge>
          </div>
      <div class="notifs-dropdown">
       <div class="cmnt-ntfs" 
        v-for="(value, key) in user.bookNoti" 
        :key="key" 
        v-if="showNotifDrop && user.bookNoti">
              <div class="notif-item">
                  <h1>New event has been booked!</h1>
                  {{ev.msg.name}} booked {{ev.msg.guests}} at {{ev.msg.at}}
              </div>
        </div>
      </div>
    </section>  
</template>

<script>

export default {
  data() {
    return {
      user: {},
      events: null,
      showNotifDrop: false,
      dates: [],
      datos: [],
      e:{},
      notiCount:0
    };
  },
  created() {
    this.user = this.$store.getters.getLoggedCook;
    const cookId = this.user._id
    // console.log(this.user);
    this.$store.dispatch({ type: 'getEventsByCook', cookId }).then(events => {
      events.forEach(element => {
        this.dates.push(...element.dates)       
      })
      return this.events
      });
        console.log("this user dates",this.dates)
      this.datos = this.dates.filter(count => count.showNoti === true)
        console.log("this user datos",this.datos)
        console.log('this notiCount',this.notiCount);
    
  },
  computed: {
    notifsBtnClassObj() {
      return {
        'notifs-dot':
        this.user.bookNoti > 0
      };
    },
    ev(){
        return this.e;
    },
    // notiCount(){
    //   return 
    // }
  },
  sockets: {
    gotBookNoti(obj) {
      if (this.user._id === obj.currCookId) {
        this.e = obj
        console.log('Line 82 Socket on',this.e);
        
        // console.log(e);
        
        // this.$notify({
        //   group: "foo",
        //   title: "You've got new message",
        //   text: (this.msgInput = obj.msg)
        // });
      }
    }
  },
};
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
  width: 2.2em;
}

.notifs-dot::after {
  content: '•';
  color: red;
  position: relative;
  position: relative;
  bottom: 0.5em;
}

.notifs-dropdown {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: max-content;
  margin-top: 6px;
  right: 0;
}

.notif-item {
  cursor: pointer;
  background-color: #ffffff;
  padding: 3px;
  margin-top: 1px;
  color: #35495e;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.notif-item:hover {
  background-color: #d4d4d4b0;
}

</style>
