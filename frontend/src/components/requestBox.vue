<template>
  <section>
    <div class="book-form" v-if="event">
      <h3>
        ${{event.price}}
        <span class="title-span">Price per person</span>
      </h3>
      <span class="title">Date</span>
      <date-picker 
        class="date requestBoxDate"
        :inline="false"
        v-model="book.eventDate"
        @input="selected"
        :disabledDates="disabledDates"
        :highlighted="highlighted"
        :bootstrapStyling="true"
        :minimumView="'day'" :maximumView="'month'" :initialView="'day'" :format="'dd/MM/yyyy'"
        ></date-picker>
        <!-- <input type = "date" v-model="book.eventDate" > -->
      <select name v-model="book.guestsBooking">
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <input type="text" class="buyer" v-model="dataGuests.guestName" placeholder="Enter your name">
      <input
        type="text"
        class="buyer"
        v-model="dataGuests.guestPhone"
        placeholder="Enter your phone number"
      >
      
      <button
        @click="isShowModal = true"
        class="send"
      >Send request</button>
    </div>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      @bookOrder="bookOrder"
      :book="book"
      :event="event"
      :dataGuests=" dataGuests"

    ></request-modal>
  </section>
</template>


<script>
import requestModal from "@/components/requestModal.vue";
import datePicker from "vuejs-datepicker";
import eventService from "@/services/eventService";
import moment from "moment";

export default {
  name: "requestBox",
  props: ["event"],
  data() {
    return {
      book: {
        eventId: "",
        eventDate: "",
        guests: [],
        guestsBooking: 0
      },
      dataGuests: {
        guestName: "",
        guestPhone: ""
      },
      isShowModal: false,
      disabledDates: {
        days:[]
      },
      highlighted: {
        days: []
      },
      // guestsCount
      FilterdEvent: {}
    };
  },
  created() {
    this.book.eventId = this.$route.params.id;
    // this.book = this.event.dates
    // console.log(this.book);
    
    /******************CHANGE********************/     
    var a = [], diff = [];
    var test = [0,1,2,3,4,5,6]
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
    for (var k in a) 
        diff.push(+k);
  this.disabledDates.days = diff
   /**************************************/    
  ////   var a  = 0;
  ////  for (var i = 0; i < this.event.dates.length; i++) {
  ////   a  +=  +(this.event.dates[i].guests.length);
  ////  }  
  },
  methods: {
    bookOrder() {
      this.book.eventDate = moment(this.book.eventDate).format("DD/MM/YYYY");
      for (var i = 0; i < this.book.guestsBooking; i++) {
        this.book.guests.push(this.dataGuests);
      }
      this.event.dates.push(this.book);
      eventService.update(this.event);
    },
    selected(){
      this.book.eventDate = moment(this.book.eventDate).format("DD/MM/YYYY");
      console.log('lala',this.book.eventDate);
      const date = this.book.eventDate
          this.$store
        .dispatch({ type: "FilterByEventDate", date })
        .then(FilterdEvent => {
          this.FilterdEvent = FilterdEvent;
          console.log('FilterdEvent',this.FilterdEvent);
          // for (let i = 0; i < this.FilterdEvent.length; i++) {
          //   console.log('a');
          // }
        });
    }
  },
  computed: {
    guestsCount() {
      return 
      // {const date = this.book.eventDate
      //     this.$store
      //   .dispatch({ type: "FilterByEventDate", date })
      //   .then(FilterdEvent => {
      //     this.FilterdEvent = FilterdEvent;
      //     console.log('FilterdEvent',this.FilterdEvent);
      //   });}
  }
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
.book-form {
  display: flex;
  flex-direction: column;
}
.book-form {
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
.book-form > * {
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
  background-color: #88c888;
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
    bbook: 1px solid #ccc;
    width: 100%
}
select {
    height: 2.5em;
}
.example {
    background: #f2f2f2;
    bbook: 1px solid #ddd;
    padding: 0em 1em 1em;
    margin-bottom: 2em;
}
code,
pre {
    margin: 1em 0;
    padding: 1em;
    bbook: 1px solid #bbb;
    display: block;
    background: #ddd;
    bbook-radius: 3px;
}
.settings {
    margin: 2em 0;
    bbook-top : 1px solid #bbb;
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

