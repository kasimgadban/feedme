<template>
  <section>
      <div class="modal-mask " @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="test">
              <h1>{{event.description}}</h1>
              <span>Total Price:{{totalPrice}}</span>
              <span>Date: {{getFormattedDate}}</span>
              <span>Guests: {{book.guestsBooking}}</span>
              <span>Location: {{event.address}}</span>
              <span>Name: {{book.guestName}}</span>
              <span>Phone#: {{book.guestPhone}}</span>
            </div>
            <div class="modal-footer">
            <button class="modal-btn cancel" @click="$emit('close')">Cancel</button>
            <button class="modal-btn send" @click="$emit('bookOrder')">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      
  </section>
</template>

<script>
import eventService from "@/services/eventService";
import moment from "moment";
import swal from "sweetalert"

export default {
 name: "requestModal",
  props: ['book','event', 'dataGuests'],
  data(){
    return {
      totalPrice: 0
    }
  },
  created(){
    this.totalPrice = +this.event.price * +this.book.guestsBooking
  },
 computed: {
    getFormattedDate() {
      return moment(this.book.eventDate).format('DD/MM/YYYY');
      // return this.book.eventDate;
    },
 }
};
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  
}

.test>*{
    font-family: 'Josefin Sans', sans-serif;
    margin: 7px
}

.modal-wrapper {
  height: 100%;
  margin-top: 110px;
  // animation: fade-in-pulse-08 .3s forwards cubic-bezier(.8,.02,.45,.91);

  
  
}
h1{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5em;
  text-align: center;
  border-bottom: 2px solid;
  color: #30353091;

}
.test{
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}

.modal-container {
  
  width: 50%;
  height: 70%;
  margin: 0px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  
  
}

.modal-footer{
    height: 50px;
    background-color:#0080007a;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

span{
  font-size: 1.1em;
}

.modal-btn{
  width: 50%;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.send{
  background-color: #88c888;
  
&:hover {
    background-color: #008000b8;
    font-size: 2em;
}
}

.cancel{
  background-color: #e63030b5;
  &:hover{
    background-color: #cb0a0ac2;
    font-size: 2em;
  }

}

@media only screen and (max-width: 800px){
  .modal-container{
    width: 95%;
  }
}

</style>


