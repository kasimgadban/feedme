<template>
  <section>
    <div class="container container-style">
      <h1>My Events</h1>
      <!-- <router-link tag="button" :to="'/event/edit/'+cook._id+'_'" class="add-event">
        <i class="material-icons">
          <i class="fas fa-plus-circle"></i>
        </i>
      </router-link> -->
      <div class="block" style="display:flex; justify-content:space-between;margin-top:20px;">
        <!-- <span class="demonstration">Calander: </span> -->
        <el-date-picker
        class="date-picker"
          v-model="value8"
          ref="picker"
          type="date"
          placeholder="Pick a date"
          value-format="dd/MM/yyyy"
          format="dd/MM/yyyy"
        ></el-date-picker>
         <router-link tag="button" :to="'/event/edit/'+cook._id+'_'" class="add-event">
        <i class="material-icons">
          <i class="fas fa-plus-circle"></i>
        </i>
      </router-link>
      </div>
      <div class="grid">
        <div class="cook-events">
          <preview-edit :value8="value8" :dates="dates" v-for="event in events" :key="event._Id" :event="event"/>
        </div>
        <div>
          <el-collapse
            class="orders-container"
            v-for="(day,index) in dates"
            :key="index"
            v-model="activeName"
            accordion
          >
            <el-collapse-item :name="index" v-if="value8 === day.eventDate" >
              <template slot="title">
                <div class="detail">
                  <span>
                    <i class="far fa-calendar-check"></i>:&nbsp;
                  </span>
                  {{day.eventDate}}
                </div>
              </template>
              <div class="el-collapse-item__content">
                <div class="detail">
                  &nbsp;
                  <span>Name:&nbsp;</span>
                  {{day.guestName}}
                </div>
                <div class="detail-phone">
                  &nbsp;
                  <span>Phone#:&nbsp;</span>
                  {{day.guestPhone}}
                </div>
                <div class="detail">
                  &nbsp;
                  <span>Guests:&nbsp;</span>
                  {{day.guestsBooking}}
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <!-- <div class="orders-container">
        <h3>Orders Details</h3>
        <div v-for="(day,index) in dates" :key="index" style="display:flex">
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
      </div>-->
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import eventPreview from "@/components/eventPreview.vue";
import previewEdit from "@/components/previewEdit.vue";
import swal from "sweetalert";
import moment from "moment";

export default {
  name: "myEvents",
  data() {
    // var vm = this;
    return {
      cook: {},
      events: [],
      isShowOrders: false,
      dates: [],
      activeName: "1",
      value8: '',
    };
  },
  created() {
    var cookId = this.$route.params.id;
    this.$store
      .dispatch({ type: "getCookById", cookId })
      .then(cook => (this.cook = cook));

    this.$store.dispatch({ type: "getEventsByCook", cookId }).then(events => {
      this.events = events;
      events.forEach(element => {
        this.dates.push(...element.dates);
        // this.dat.push(...element.days);
        // this.$refs.picker.unmountPicker();
        // this.$refs.picker.mountPicker();
      });
      this.showOrders(this.dates);
    });
    // this.val = this.events.days
    // console.log(this.dat);
  
        
  },
  // computed:{
  //   disabledDates(){
  //     return this.dat
  //   }
  // },
  methods: {
    addEvent() {
      var queryParams = new URLSearchParams();
      queryParams.append("cookId", this.cookId);
      this.$router.push("event/edit");
    },
    appendDate () {
			this.disabledDates.push(this.val);
        this.$refs.picker.unmountPicker();
        this.$refs.picker.mountPicker();
		},
    showOrders(orders) {
      // var d = []
      // orders.forEach(date => {
      //   d.push(new Date(date.eventDate))
      // });
      // console.log("dates 61 before", d );
      // orders.sort(function(a, b) {
      //   return new Date(a.eventDate) - new Date(b.eventDate);
      // });
      // orders.forEach(element => {
      // console.log(element);
      // console.log(new Date(element.eventDate).toJSON())
      // var dato = [];
      // dato.push(element.eventDate);
      // console.log(this.dato);
      // });
      // orders.eventDate = new Date().toISOString()

      console.log("dates 61", orders);
      this.dates = orders;
      // this.isShowOrders = true;
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
  /* margin-bottom: 20px; */
  cursor: pointer;
  color: #245e09;
}

.fa-plus-circle {
  font-size: 45px;
}

.cook-events {
  /* display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  align-items: center;
  gap: 15px;
  row-gap: 15; */
}

.container {
  border-radius: 5px;
  border-top: none;
  /* background-color: #aaceab14; */
  padding: 20px;
  top: 70px;
}

.grid {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 10px;
}

h1 {
  text-align: center;
  font-size: 1.3em;
}

.orders-container {
  /* display: flex; */
  /* display: block; */

  /* margin-top: 20px;
  padding: 15px;
  background: #e9f5ea; */
}

/* .el-collapse{

border-bottom:none;
display: block;
} */
.el-collapse-item__content {
  display: flex;
  padding-bottom: 0px;
}
.date-picker{
  margin-top: 5px;
}

.detail {
  width: 160px;
}

.detail-phone {
  width: 200px;
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

@media only screen and (max-width: 800px) {
  .grid{
    grid-template-columns: 1fr;
  }
  .detail{
        width: 40%;
  }
}
</style>
