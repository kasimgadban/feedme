<template>
  <section>
     <form @submit.prevent="isShowModal = true" >
    <div class="book-form" v-if="event">
      <h3 class="josefin-font price">
        ${{event.price}}
        <!-- {{book.cookId}} -->
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
          <div class="selecto">
         <el-input-number 
         required 
          v-if="currMaxGuests > 0"
         v-model="book.guestsBooking" 
           :min="1" 
           :max="currMaxGuests"
           size="small"
           >
           </el-input-number>
           </div>
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
import storageService from "@/services/storageService";
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
        isRead: false,
        eventId:'',
        userId: ''
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



      // this.book.guestName = ''
      // this.book.guestPhone = ''
      // this.book.guestsBooking = 0;

      swal({
            title: "Successfully booked",
            text: "See you soon!!",
            icon: "success",
             timer:2000,
          buttons:{
            cancel: false,
          confirm: false}
        }).then(
        // res => this.$router.push("/myprofile/"+this.cook._id),
         ()=> this.$router.go(-1),
        )
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
      this.msgInput.eventId = this.$route.params.id;
      this.msgInput.userId = '';
      const msg = this.msgInput;
      console.log(msg);
      const currCookId = this.event.cookId

      this.$socket.emit("newBookMsg", {msg,currCookId});
    },
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

.price{
  font-weight: bold;
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
  border: 1px solid #8080801c;
  background: #dfe4e229;
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
.title {
  font-size: 1em;
  
}
.title:not(:last-child){
  margin-bottom: 0rem;

}
.selecto{
  margin: 0 auto;
  margin-top: 6px;
}

.send {
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 0 0 4px 4px;
  width: 100%;
  border: none;
  cursor: pointer;
  line-height: 19px;
  background-color: #88c888;
  color: #fff;
  padding: 15px;
  margin-top: 10px !important;
      border-radius: 2px;
}
.buyer {
  padding: 7px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 5px;
  border:1px solid #00000061;
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
  
  .send {
    line-height: 10px;
  }
  
  .title:not(:last-child){
     margin-bottom: 0rem;
  }
  .book-form>*{
    margin-top: 0px
  }
}
</style>

