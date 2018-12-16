<template>
  <section>
    <div class="container container-style">
      <!-- <h1>My Events</h1> -->
      <router-link tag="button" :to="'/event/edit/'+cook._id+'_'" class="add-event">
        <i class="material-icons">
          <i class="fas fa-plus-circle"></i>
        </i>
      </router-link>
      <div class="cook-events">
        <preview-edit v-for="event in events" @showO="showOrders" :key="event._id" :event="event"/>
      </div>
      <div v-show="isShowOrders" class="orders-container">
        <h3>Orders Details</h3>
        <div v-for="(day,index) in orders" :key="index" style="display:flex">
          <div class="detail">
            <span>
              <i class="far fa-calendar-check"></i>:&nbsp;
            </span>
            {{day.eventDate}}
          </div>
          <div class="detail">&nbsp;
            <span>Name:&nbsp;</span>
            {{day.guestName}}
          </div>
          <div class="detail-phone">&nbsp;
            <span>Phone#:&nbsp;</span>
            {{day.guestPhone}}
          </div>
          <div class="detail">&nbsp;
            <span>Guests:&nbsp;</span>
            {{day.guestsBooking}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eventPreview from "@/components/eventPreview.vue";
import previewEdit from "@/components/previewEdit.vue";
import swal from "sweetalert";

export default {
  name: "myEvents",
  data() {
    return {
      cook: {},
      events: [],
      isShowOrders: false,
      orders: []
    };
  },
  created() {
    var cookId = this.$route.params.id;
    this.$store
      .dispatch({ type: "getCookById", cookId })
      .then(cook => (this.cook = cook));

    this.$store.dispatch({ type: "getEventsByCook", cookId }).then(events => {
      console.log("events cook page", events);
      this.events = events;
    });
  },
  methods: {
    addEvent() {
      var queryParams = new URLSearchParams();
      queryParams.append("cookId", this.cookId);
      this.$router.push("event/edit");
    },
    showOrders(orders) {
      // var d = []
      // orders.forEach(date => {
      //   d.push(new Date(date.eventDate))
      // });
      // console.log("dates 61 before", d );
      orders.sort(function(a,b){
         return new Date(a.eventDate) - new Date(b.eventDate)
      }
      )
      console.log("dates 61", orders );
      this.orders = orders;
      this.isShowOrders = true;
    }
  },
  components: {
    previewEdit,
    swal
  }
};
</script>

<style scoped lang = "scss" >
@import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

* {
  box-sizing: border-box;
}

.add-event {
  border: none;
  background: none;
  margin-bottom: 20px;
  cursor: pointer;
  color: green;
}

.fa-plus-circle {
  font-size: 45px;
}

.cook-events {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  align-items: center;
  gap: 15px;
  row-gap: 15;
}

.container {
  border-radius: 5px;
  background-color: #aaceab14;
  padding: 20px;
  top: 70px;
}
h1 {
  text-align: center;
  font-size: 1.3em;
}

.orders-container {
  margin-top: 20px;
  padding: 15px;
  background: #e9f5ea;
}

.detail {
  width: 160px;
}

.detail-phone {
  width: 180px;
}

h3 {
  font-size: 1.5em;
  text-align: center;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}

span {
  font-weight: bolder;
}
</style>
