<template>
  <section class="edit-cards">
    <div class="card" :dates="event.dates">
      <div class="testflex" style="display:flex; flex-direction:column; flex:1">
      <div class="card-img">
        <div class="card-img-holder" :style="bgImage"></div>
      </div>
      <div class="desc">Title: {{event.description}}</div>
      <div class="edit-sec" v-if="currGuests < event.maxGuests">
       {{currGuests}}/{{event.maxGuests}} places were booked
        </div>
        <div class="edit-sec" v-else>FULL</div>
 </div>
        <div class="edit-btn-icon" style="height:30px; margin-bottom:3px;">
        <router-link
          tag="button"
          :to="'/event/edit/'+event.cookId+'_'+event._id"
          class="edit-event"
        >
          <button class="edit-icon">
            <i class="far fa-edit"></i>
          </button>
        </router-link>
        </div>
      </div>
   
    
    <!-- <div v-show="isShowOrders" class="orders-container">
      <h3>Orders Details</h3>
        <div v-for="(day,index) in event.dates" :key="index">
          <span>Date: {{day.eventDate}}</span>
          <span>Name: {{day.guestName}}</span>
          <span>Guests count: {{day.guestsBooking}}</span>
        </div>
    </div> -->

  </section>
  
</template>
<script>
export default {
  name: "eventEdit",
  props: ["event",'value8','dates'],
  data() {
    return {
      cook: {},
      // currGuests: 0,
      currBookDate:[]
    };
  },
  components: {},
  created() {
    this.$store.dispatch({ type: "loadEvents" });
    var cookId = this.event.cookId;
    this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
      this.cook = cook;
    });
  },
  methods: {
  
  },
  computed: {
    bgImage() {
      return (
        "background-image: url(" +
        this.event.image +
        "); background-size: cover; display:block;"
      );
    },
    currGuests(){
      var i 
      i =  this.dates.filter(dato => dato.eventDate === this.value8);
       var j = 0;
       j = i.reduce(
        (acc, date) => acc + +date.guestsBooking,0);
        return j;
    }
  }
};
</script>

<style scoped lang="scss">
.card-img-holder {
  height: 100%;
}
.edit-cards {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card {
  // cursor: pointer;
  // height: 255px;
  // display: flex;
  // flex-direction: column;
   border: 1px solid #00000030;
  height: 100%;
  border-radius: 3px;
  position: relative;
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.testflex{
  flex: 1;
}
.edit-btn-icon{
  height: 50px;
}
.card-img {
  height: 100px;
  margin: 5px;
}
.card-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.edit-icon {
  border: none;
  float: right;
  background: none;
  cursor: pointer;
  border: none;
  background: none;
  padding-bottom: 5px;
  // font-size: 2em;
      font-size: 1.4em
}

.edit-event {
  float: right;
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
}

.desc,.edit-sec {
  text-align: center;
  padding: 3px;
  color: black;
}

.edit-sec {
  padding: 2px;
  color: red;
}

.orders-container{
  height: 300px;
  background-color: pink;
  margin-top: 30px;
}

.card:active{
  border: 5px solid;
}


</style>
