<template>
  <!-- template for the modal component -->
  <section type="text/x-template" id="modal-template">
    <transition name="modal">
      <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <!-- <slot name="header"> -->
              {{order.guestName}}
              <!-- </slot> -->
            </div>

            <div class="modal-body">{{order.guestNumber}}</div>

            <div class="modal-body">{{order.eventDate}}</div>

            <div class="modal-body">{{order.guests}}</div>

            <div class="modal-footer">
              <!-- <slot name="footer"> -->
              <hr>
              <button class="modal-default-button" @click="bookOrder()">OK</button>
              <button class="modal-default-button" @click="$emit('close')">cancel</button>
              <!-- </slot> -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>

import cookService from '@/services/cookService'

export default {
  props: ['order','cookId'],
  // created() {
  //   console.log("order is: ", this.order);
  // },
  data(){
    return {
      cook: null
    }
  },
  methods: {
    bookOrder() {
     cookService.update(this.order)
      this.$emit("close");
      // console.log("i am pretty console log",cook);
    }
  },
  created() {
    console.log(this.cookId);
    var cookId = this.cookId;
    this.$store.dispatch({ type: "getCookById", cookId})
            .then(cook => {
              this.cook = cook
            });
  //   this.$store.dispatch({ type: "loadEvents" });
  //   this.$store.dispatch({ type: "loadCities" });
  },
  // computed: {
    // created() {
    //   return this.$store.getters.getCookById(this.event.cookId);
    // }
  // }
};
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  //   height: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


