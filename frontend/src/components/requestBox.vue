<template>
  <section>
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
      <!-- <div v-else class="full">FULL</div> -->
      <input type="text" class="buyer" v-model="book.guestName" placeholder="Enter your name">
      <input
        type="text"
        class="buyer"
        v-model="book.guestPhone"
        placeholder="Enter your phone number"
      >
      
<<<<<<< HEAD
      <button @click="k" class="send josefin-font" v-if="currMaxGuests>0">Book</button>
      <button class="send josefin-font full" v-else disabled >full</button>
=======
      <button @click="isShowModal = true" class="send josefin-font" v-if="currMaxGuests>0">Book</button>
      <button class="send josefin-font" v-else disabled>full</button>
>>>>>>> bc91b92b1a67d6fb26090c8e4b44d3931c3d0a0b
    </div>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      @bookOrder="bookOrder"
      :book="book"
      :event="event"
    ></request-modal>


     <section >
                    <section >
                        <!-- <ul >
                            <li  v-for="msg in msgs" :key="msg.at">
                                {{msg.from}}: {{msg.txt}}
                            </li>
                        </ul> -->
                        {{msg}}
                    </section>
                        <form @submit.prevent="sendMsg" ref="chat" >
                            <input ref="newMsgInput" type="text" v-model="msgInput">
                            <button>send</button>
                        </form>
                </section>

  </section>
</template>


<script>
import requestModal from "@/components/requestModal.vue";
import datePicker from "vuejs-datepicker";
// import DatePicker from 'vue2-datepicker'
import eventService from "@/services/eventService";
import moment from "moment";
import socketService from "@/services/socketService";

export default {
  name: "requestBox",
  props: ["event"],
  data() {
    return {
      book: {
        eventId: "",
        eventDate: "",
        guestName: "",
        guestPhone: "",
        guestsBooking: 0
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
      // msg: '',
      msgInput: ''
    };
  },
  created() {
    // var self = this;
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
      this.event.dates.push(this.book);
      this.event.guestsCount += +this.book.guestsBooking;
      eventService.saveEvent(this.event);
<<<<<<< HEAD
      this.isShowModal= false
=======
      this.isShowModal = false;
>>>>>>> bc91b92b1a67d6fb26090c8e4b44d3931c3d0a0b
    },
    dateSelected() {
      this.flag = false;
      var date = moment(this.book.eventDate).format("DD/MM/YYYY");
      this.currBookDate = this.event.dates.filter(
        dato => dato.eventDate === date
      );
      // console.log(this.currBookDate);
      this.currGuestsCount = this.currBookDate.reduce(
        (acc, date) => acc + +date.guestsBooking,
        0
      );
      this.event.currMaxGuests = this.event.maxGuests - this.currGuestsCount;
      // console.log(this.event.currMaxGuests);
    },
    sendMsg() {
      // this.isShowModal = true;
      // GET MSG
      // const msgInput = this.$refs.newMsgInput;
      // console.log(msgInput.value);
      // this.msg = msgInput.value
      // const txt = msgInput.value;
      // if (!txt.trim()) return;
      // DECLARATIONcd f  cd
      // const eventId = this.$route.params.id;
      // const currUserId = this.$store.getters.getUser;
      // const from = this.event.time
      // const userId = currUser ? currUser._id : "";
      // const msg = {
        // userId,
        // txt,
        // at: Date.now(),
        // from
      // };
      // LET THE WORLD KNOW
      const ms = this.msgInput
      this.$socket.emit("newChatMsg", ms);
      // ms = "";
    }
  },
  sockets: {
    gotNewChatMsg(msg) {
      // if (!this.event.msgs) this.event.msgs = [msg];
      // else this.event.msgs.push(msg);
      return this.msgInput = msg
    },
  },
  computed: {
    currMaxGuests() {
      return this.event.maxGuests - this.currGuestsCount;
    },
    msg() {
            return this.msgInput;
        },
  },
  components: {
    requestModal,
    datePicker
    // DatePicker
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

button.full{
  background-color: gray;
  cursor:unset;
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

