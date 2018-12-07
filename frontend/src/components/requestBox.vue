<template>
  <section>
    <div class="order-form">
      <h3 class="josefin-font">
        ${{event.price}}
        {{order.cookId}}
        <span class="title-span josefin-font">Price per person</span>
      </h3>
      <span class="title josefin-font">Date</span>
      <date-picker
        class="date requestBoxDate"
        :inline="true"
        v-model="order.eventDate"
        :disabledDates="disabledDates"
        :bootstrapStyling="true"
        :minimumView="'day'" :maximumView="'month'" :initialView="'day'"
      ></date-picker>
      <select name v-model="order.guests" class="select">
         <option value="" disabled selected>Guests</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <input type="text" class="buyer" v-model="order.guestName" placeholder="Enter your name">
      <input type="text" class="buyer" v-model="order.guestNumber" placeholder="Enter your number">
      
      <button @click="isShowModal = true" class="send josefin-font ">Book</button>
    </div>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      :order="order"
      :cookId="event.cookId"
      :event="event"
    ></request-modal>
  </section>
</template>


<script>
import requestModal from "@/components/requestModal.vue";
import datePicker from "vuejs-datepicker";

export default {
  name: "requestBox",
  props: ["event"],
  data() {
    return {
      order: {
        cookId: '',
        guestName: '',
        guestNumber: '',
        eventDate: '',
        guests: ''
      },
      isShowModal: false,
      disabledDates: {
        days: [2, 3],
        highlighted: {
          days: [0, 6]
        }
      },
    };
  },
  created() {
    this.order.cookId = this.event.cookId
    this.order.eventId = this.event._id;
    this.order.cookId = this.event.cookId;
  },
  methods: {
    // customFormatter(date) {
    //   // return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    //   // customFormatter() {
    //   //   return Date.now();
    // }
  },

  computed: {},
  components: {
    requestModal,
    datePicker
  }
};
</script>

<style scoped lang = "scss">


.images-container {
  width: 100%;
  background-image: url(https://www.shortlistdubai.com/sites/default/files/styles/article_small_picture/public/images/2017/07/31/main-shutterstock_518750773.jpg?itok=ZupB_n6k);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.container {
  display: grid;
  grid-template-rows: 250px 1fr;
}

.wrapper {
  display: grid;
  gap: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 300px;
  width: 90%;
  padding: 10px;
  position: relative;
  border: 2px solid black;
}
.top {
  display: flex;
}
.top > * {
  padding: 10px;
}
.desc,
.menu,
.order-form {
  display: flex;
  flex-direction: column;
}
.order-form {
  padding: 10px;
  margin-top: 10px;
  background: #b0aaaa1f;
  -webkit-box-shadow: 5px 7px #453e3e1f;
  box-shadow: 4px 4px 4px #453e;
}
.menu {
  align-items: center;
}
.title-span {
  font-size: 12px;
  color: #808080b0;
  padding: 5px;
}
.order-form > * {
  margin: 0px;
      font-size: 1.3em;
      margin-top: 10px;
}

input {
  padding: 7px;
  margin-bottom: 10px;
}
select>*{
  font-size: 16px;
  margin: 20px;
}
.title {
  font-size: 1em;
}

.send {
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 0 0 4px 4px;
  width: 100%;
  border: none;
  cursor: pointer;
  /* font-size: 1.6rem; */
  line-height: 19px;
  background-color:#88c888;
  color: #fff;
  padding: 15px;
  margin-top: 10px !important;
}
.buyer {
  padding: 7px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
}


.date:first-child {
  border: 1px solid gray !important; 
  width: 100% !important;
}

h3,span{
  padding: 5px;
  margin-bottom: 5px;
}

.select{
  padding: 20px;
  font-size: 16px;
  height: 30px;
  border-color: gainsboro;
}

.josefin-font{
  font-family: 'Josefin Sans', sans-serif;
}

</style>

