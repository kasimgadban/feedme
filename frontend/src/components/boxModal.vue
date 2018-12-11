<template>
  <section>
      <div class="modal-mask " @click="$emit('close')">
        <div class="modal-wrapper">
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
        </div>
      </div>
      
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
        eventId: '',
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
    this.eventId = this.$route.params.id
  },
  methods: {
  },

  computed: {},
  components: {
    requestModal,
    datePicker
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
    margin: 15px
}

.modal-wrapper {
  height: 100%;
  margin-top: 110px;
  
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

</style>


