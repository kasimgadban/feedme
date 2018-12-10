<template>
  <section >
    <div class="book-form" v-if="event">
      <h3 class="josefin-font">
        ${{event.price}}
        {{book.cookId}}
        <span class="title-span josefin-font">Price per person</span>
      </h3>
      <span class="title josefin-font">Date</span>
      <date-picker
        class="date requestBoxDate"
        :inline="true"
        @input="selected"
        v-model="book.eventDate"
        :disabledDates="disabledDates"
        :highlighted="highlighted"
        :bootstrapStyling="true"
        :minimumView="'day'" :maximumView="'month'" :initialView="'day'"
      ></date-picker>
      <select name v-model="book.guestsBooking" class="select">
         <!-- <option value="" selected>Guests</option> -->
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option disabled>4</option>
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
      
      <button @click="isShowModal = true" class="send josefin-font ">Book</button>
    </div>
    <request-modal
      v-if="isShowModal"
      @close="isShowModal = false"
      @bookOrder="bookOrder"
      :book="book"
      :event="event"
      :dataGuests="dataGuests"
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
      guestsCount: 0,
      FilterdEvent: {}
    };
  },
  created() {
    this.book.eventId = this.$route.params.id;
    // this.book = this.event.dates
    
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
  },
  methods: {
    bookOrder() {
      this.book.eventDate = moment(this.book.eventDate).format("DD/MM/YYYY");
      for (var i = 0; i < this.book.guestsBooking; i++) {
        this.book.guests.push(this.dataGuests);
      }
      this.event.dates.push(this.book);
      eventService.update(this.event);
      // this.isShowModal= false
    },
    selected(){
      const date= moment(this.book.eventDate).format("DD/MM/YYYY")
      const filter = [date,this.book.eventId]
      console.log(date);
      
          this.$store.dispatch( 'FilterByEventDate',[filter[0],filter[1]]).then(FilterdEvent => {
            for (let i = 0; i < FilterdEvent.length; i++) {
              console.log(FilterdEvent[i]._id.eventId);
              if(FilterdEvent[i]._id.eventId === this.book.eventId)
             this.guestsCount = FilterdEvent[i]._id.guests.length;   
            }
          console.log('FilterdEvent',this.guestsCount);
        });
    }
  },
  computed: {
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



@media only screen and (max-width: 800px) {
  .order-form > *{
    margin: 0px;
    font-size: 1em;
}
.buyer{
  margin: 3px;
}
.select{
  padding: 0px;
  margin-top: 3px;
}
.send{
      line-height: 10px;
}

}
</style>

