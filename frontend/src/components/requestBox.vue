<template>
  <section>
     <form @submit.prevent="isShowModal = true" >
    <div class="book-form" v-if="event">
      <h3 class="josefin-font">
        ${{event.price}}
        {{book.cookId}}
        <span
          class="title-span josefin-font"
        >Price per person</span>
        <span v-if="!flag">{{currMaxGuests}} left</span>
      </h3>
      <span class="title josefin-font">Date</span>
      <date-picker
        class="date requestBoxDate"
        :inline="true"
        @input="dateSelected"
        v-model="book.eventDate"
        :disabledDates="disabledDates"
        :highlighted="highlighted"
        :minimumView="'day'"
        :maximumView="'month'"
        :initialView="'day'"
      ></date-picker>
      <!-- <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
      />-->
      <!-- <v-date-picker
        :is-inline='true'
        v-model="book.eventDate"
        :animated='true'
        @input="dateSelected"
        :disabledDates="disabledDates"
      ></v-date-picker>-->
      <select v-model="book.guestsBooking" class="select" v-if="currMaxGuests > 0">
        <option disabled value="Guests" selected>{{currMaxGuests}} left</option>
        <option v-for="guests in currMaxGuests" :key="guests">{{guests}}</option>
      </select>
      <input type="text" class="buyer" v-model="book.guestName" placeholder="Enter your name" required>
      <input
        type="text"
        class="buyer"
        v-model="book.guestPhone"
        placeholder="Enter your phone number"
        required
      >
      <input type="submit" class="send josefin-font" v-if="currMaxGuests>0" value="Book">
      <button class="send josefin-font full" v-else disabled>full</button> 
     
    </div>
    </form>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      @bookOrder="bookOrder"
      :book="book"
      :event="event"
    ></request-modal>
    
    <!-- <button @click="sendBookMsg">TEST</button> -->
   
  </section>
</template>


<script>
import requestModal from "@/components/requestModal.vue";
import datePicker from "vuejs-datepicker";
import eventService from "@/services/eventService";
import cookService from "@/services/cookService";
import moment from "moment";
import swal from "sweetalert"


export default {
  name: "requestBox",
  props: ["event",'cook'],
  data() {
    return {
      book: {
        eventId: "",
        eventDate: "",
        guestName: "",
        guestPhone: "",
        guestsBooking: 0,
        showNoti: true,
      },
      currGuestsCount: 0,
      currBookDate: [],
      flag: true,
      isShowModal: false,
      disabledDates: {
        days: []
      },
      highlighted: {
        days: []
      },
      msgInput:{
        txt: 'New event has been booked!',
        name: '',
        guests: 0,
        at: '',
        isRead: false
      } 
    };
  },
  created() {
    this.book.eventId = this.$route.params.id;
    this.$socket.emit("joinRoom", this.$route.params.id);


    /******************CHANGE********************/
    var a = [],
      diff = [];
    var test = [0, 1, 2, 3, 4, 5, 6];
    for (let i = 0; i < test.length; i++) {
      a[test[i]] = true;
    }
    for (var i = 0; i < this.event.days.length; i++) {
      if (a[this.event.days[i]]) {
        delete a[this.event.days[i]];
      } else {
        a[this.event.days[i]] = true;
      }
    }
    for (var k in a) diff.push(+k);
    this.disabledDates.days = diff;
    /**************************************/
  },
  methods: {
    bookOrder() {
      this.book.eventDate = moment(this.book.eventDate).format("DD/MM/YYYY");
      console.log(this.book);
      this.event.dates.push(this.book);
      this.event.guestsCount += +this.book.guestsBooking;
      eventService.saveEvent(this.event);
      this.isShowModal = false;



      this.book.guestName = ''
      this.book.guestPhone = ''
      this.book.guestsBooking = 0;

      swal({
            title: "Successfully booked",
            text: "See you soon!!",
            icon: "success",
             timer:2000,
          buttons:{
            cancel: false,
          confirm: false}
        })
        this.sendBookMsg()
    },
    dateSelected() {
      this.flag = false;
      var date = moment(this.book.eventDate).format("DD/MM/YYYY");
      this.currBookDate = this.event.dates.filter(
        dato => dato.eventDate === date
      );
      this.currGuestsCount = this.currBookDate.reduce(
        (acc, date) => acc + +date.guestsBooking,
        0
      );
      this.event.currMaxGuests = this.event.maxGuests - this.currGuestsCount;
    },
    sendBookMsg() {
      this.msgInput.name = this.book.guestName;
      this.msgInput.guests = this.book.guestsBooking;
      this.msgInput.at = this.book.eventDate;
      const msg = this.msgInput;
      console.log(msg);
      const currCookId = this.event.cookId
      this.$socket.emit("newBookMsg", {msg,currCookId});
    }
  },
  computed: {
    currMaxGuests() {
      return this.event.maxGuests - this.currGuestsCount;
    },
  },
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

button.full {
  background-color: gray;
  cursor: unset;
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
/* .open{
  bottom: 0;
  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
} */
.desc,
.menu,
.book-form {
  display: flex;
  flex-direction: column;
}
.book-form {
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
.book-form > * {
  margin: 0px;
  font-size: 1.3em;
  margin-top: 10px;
}

input {
  padding: 7px;
  margin-bottom: 10px;
}
select > * {
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
  background-color: #88c888;
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

h3,
span {
  padding: 5px;
  margin-bottom: 5px;
}

.select {
  /* padding: 20px; */
  font-size: 16px;
  height: 30px;
  border-color: gainsboro;
}

.josefin-font {
  font-family: "Josefin Sans", sans-serif;
}

@media only screen and (max-width: 800px) {
  .order-form > * {
    margin: 0px;
    font-size: 1em;
  }
  .buyer {
    margin: 3px;
  }
  .select {
    padding: 0px;
    margin-top: 3px;
  }
  .send {
    line-height: 10px;
  }
}
</style>

