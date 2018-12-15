<template>
  <section class="edit-cards">
    <div class="card" @click="$emit('showO',event.dates)">
      <div class="card-img">
        <div class="card-img-holder" :style="bgImage"></div>
      </div>
      <div class="desc">Title: {{event.description}}</div>
      <div class="edit-sec">
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
  props: ["event"],
  data() {
    return {
      cook: Object,
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
  cursor: pointer;
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
  // height: 30px;
  font-size: 2.3em;
  border: none;
  background: none;
  padding-bottom: 5px;
}

.edit-event {
  float: right;
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
}

.desc {
  text-align: center;
  padding: 3px;
  color: black;
}

.edit-sec {
  padding: 2px;
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
