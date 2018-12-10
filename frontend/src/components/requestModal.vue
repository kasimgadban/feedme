<template>
  <section>
      <div class="modal-mask " @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="modal-container " @click.stop>
            <div class="test">
              <h1>{{event.description}}</h1>
              <span>Price:</span>
              <span>Date: {{order.eventDate}}</span>
              <span>Guests: {{order.guests}}</span>
              <span>Location: {{event.address}}</span>
              <span>Name: {{order.guestName}}</span>
              <span>Phone#: {{order.guestNumber}}</span>
            </div>
            <div class="modal-footer">
            <button class="modal-btn cancel" @click="$emit('close')">✖</button>
            <button class="modal-btn send" @click="bookOrder()">✔</button>
            </div>
          </div>
        </div>
      </div>
      
  </section>
</template>

<script>

import cookService from '@/services/cookService'


export default {
  props: ['order','cookId','event'],
  data(){
    return {
      cook: null
    }
  },
  methods: {
    bookOrder() {
     cookService.update(this.order)
      this.$emit("close");
    },
  },
  created() {
    console.log(this.cookId);
    var cookId = this.cookId;
    this.$store.dispatch({ type: "getCookById", cookId})
            .then(cook => {
              this.cook = cook
            });
            var x = this.order.eventDate;
            console.log('date',x)
  },
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

// .modal-btn {
//     width: 45px;
//     height: 45px;
//     margin: 3px;
//     border-radius: 50%;
//     color: #f5f5f5;
//     text-align: center;
//     text-decoration: none;
//     background: #464646;
//     -webkit-box-shadow: 0 0 3px grey;
//     box-shadow: 0 0 3px grey;
//     font-size: 15px;
//     font-weight: bold;
//     border: 2px solid;
// }
// .modal-btn:hover {
//     background: #262626;
// }

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


