<template>
  <section>
    <div></div>
    <div class="order-form">
      <h3 >
        ${{event.price}}
        {{order.cookId}}
        <span class="title-span">Price per person</span>
      </h3>
      <span class="title">Date</span>
      <!-- <input type="date" v-model="order.date">  -->
      <date-picker
        class="date requestBoxDate"
        :inline="false"
        v-model="order.eventDate"
        :disabledDates="disabledDates"
        :bootstrapStyling="true"
        :minimumView="'day'" :maximumView="'month'" :initialView="'day'"
      ></date-picker>
      <!-- <date-picker :option="option" :date="date"></date-picker> -->
      <span class="title">Guests</span>
      <select name v-model="order.guests">
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
      
      <button @click="isShowModal = true" class="send">Send request</button>
    </div>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      :order="order"
      :cookId="event.cookId"
    ></request-modal>
  </section>
</template>


<script>
import requestModal from "@/components/requestModal.vue";
import datePicker from "vuejs-datepicker";
// import moment from "moment";

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
        guests: 2
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

/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'); */

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
  /* position: fixed; */
  /* display: block; */
  padding: 10px;
  right: 6%;
  width: 245px;
  /* height: 100vh; */
  margin-top: 10px;
  background: #8080801f;
  -webkit-box-shadow: 5px 7px #453e3e1f;
  box-shadow: 4px 4px 4px #453e;
  border-radius: 5px;
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
}

input {
  padding: 5px;
  margin-bottom: 10px;
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
  font-size: 1.6rem;
  line-height: 19px;
  background-color: #3bd57e;
  color: #fff;
  margin-top: 10px !important;
}
.buyer {
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}

/* .date-picker { */
/* height: 300px; */
/* position: relative; */
/* position: absolute; */
/* display: block; */
/* } */

.date:first-child {
  border: 1px solid gray !important; 
  width: 100% !important;
}

/*******************************************************************/
/* body {
    font-family: 'Helvetica Neue Light', Helvetica, sans-serif;
    padding: 1em 2em 2em;
}
input, select {
    padding: .75em .5em;
    font-size: 100%;
    border: 1px solid #ccc;
    width: 100%
}
select {
    height: 2.5em;
}
.example {
    background: #f2f2f2;
    border: 1px solid #ddd;
    padding: 0em 1em 1em;
    margin-bottom: 2em;
}
code,
pre {
    margin: 1em 0;
    padding: 1em;
    border: 1px solid #bbb;
    display: block;
    background: #ddd;
    border-radius: 3px;
}
.settings {
    margin: 2em 0;
    border-top : 1px solid #bbb;
    background: #eee;
}
h5 {
    font-size:100%;
    padding: 0;
}
.form-group {
    margin-bottom: 1em;
}
.form-group label {
    font-size: 80%;
    display: block;
} */
</style>

