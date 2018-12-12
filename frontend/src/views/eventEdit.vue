<template>
  <section>
    <header>
        <h1>{{(isEdit)?'Edit':'Add'}} Event</h1>
    </header>
<div class="container">
  <form @submit.prevent="editEvent">
    <div v-if="isEdit" class="row">
     <div class="del" @click="deleteEvent">Delete</div>
    </div>
  <div class="row">
    <div class="col-25">
      <label for="EventDescriptiont">Event Descriptiont</label>
    </div>
    <div class="col-75">
      <input type="text" id="EventDescriptiont" 
      name="EventDescriptiont"  required
      placeholder="Enter Event description"  
      v-model="event.description" >
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="EventPrice">Event Price Per Person</label>
    </div>
    <div class="col-75">
      <input type="text" id="EventPrice" 
      name="EventPrice" 
      placeholder="Enter Event Price per person" required
      v-model="event.price" >
    </div>
  </div>
   <div class="row">
    <div class="col-25">
      <label for="EventMaxGuest">Event Guests Count</label>
    </div>
    <div class="col-75">
      <input type="text" id="EventMaxGuest" 
      name="EventMaxGuest"  required
      placeholder="Enter Event Maximum Guests quatity"  
      v-model="event.maxGuests" > 
    </div>
  </div>
   <div class="row">
    <div class="col-25">
      <label for="EventMenu">Event Menu</label>
    </div>
    <div class="col-75">
      <ul v-if="isEdit">
      <li  v-for="meal in event.menu" :key="meal">
      <input type="text" 
      name='EventMealTitle' placeholder="Enter Meal Title "  
      v-model="meal.name" >
      <textarea
      name="EventMealTitle" placeholder="Enter Meal content "  
      v-model="meal.desc" >test
      </textarea>
      </li>
      </ul>

      <ul v-else>
      <li v-for="n in 4" :key="n">
      
      <input type="text" 
      name="EventMealTitle" placeholder="Enter Meal Title "  
      v-model="event.menu[n-1].name" />

      <textarea 
      name="EventMealTitle" placeholder="Enter Meal content "  
      v-model="event.menu[n-1].desc" >
      </textarea>

      </li>

      </ul>
    </div>
  </div>
   
   <div class="row">
    <div class="col-25">
      <label for="EventDay">Days</label>
    </div>
    <div class="col-75">
      <label><input type="checkbox" id="0"  
      v-model="event.days" v-bind:value=0>Sunday</label>

      <label><input type="checkbox" id="1"
      v-bind:value=1 v-model="event.days">Monday</label>

      <label><input type="checkbox" id="2"  
      v-bind:value=2 v-model="event.days">Tuesday</label>

      <label><input type="checkbox" id="3"
      v-bind:value=3 v-model="event.days">Wendsday</label>

      <label><input type="checkbox" id="4" 
      v-bind:value=4 v-model="event.days">Thursday</label>

      <label><input type="checkbox" id="5" 
      v-bind:value=5 v-model="event.days">Friday</label>

      <label><input type="checkbox" id="6"
      v-bind:value=6 v-model="event.days">Saturday</label>
    </div>
  </div>
 
   <div class="row">
    <div class="col-25">
      <label for="EventPrice">Time</label>
    </div>
    <div class="col-75">
      <!--:v-bind="timeEvent" value="timeEvent"-->
       <b-timepicker  v-model="event.time" :value="event.time" :time-parser="timeEvent()" 
       inline></b-timepicker>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Save"> 
  </div>
  </form>
</div>
<div class="container">
   <div class="row">
     <h3>Orders Details</h3>
     <div class="orders" style="display:flex; flex-direction:column;">
       <ul>
         <!-- <li v-for="day in event" :key="day"> -->
           <!-- <span>{{event.dates[day].eventDate}}</span> -->
           <!-- <span>{{day.guestName}}</span> -->
      <!-- <span>{{day.guestsBooking}}</span> -->
         <!-- </li> -->
       </ul>
     <!-- <span>{{event.dates[0].eventDate}}</span>
     <span>{{event.dates[0].guestName}}</span>
      <span>{{event.dates[0].guestsBooking}}</span> -->
      </div>


    <!-- <span>Under Construction</span> -->
</div>
</div>
</section>
</template>

<script>
import swal from 'sweetalert';
import moment from "moment"
export default {
  name: "myprofile",
  data(){
    return {
      event:{
                time: '',
                description:'',
                price:'',
                days:[],
                menu:[],
                maxGuests:''
            },
        cook:{},
        orders:[],
        // meals:[{name:'',desc:''},{name:'',desc:''},{name:'',desc:''},{name:'',desc:''}],
        meals:[],
      numberOfMeals:0

      }
  },
  components: {
    swal
  },
  created() {
    var urlParams = this.$route.params.id.split('_')
    if(urlParams[1] !== ""){
       this.$store.dispatch({ type: "getById", eventId:urlParams[1] })
       .then(event => {
        this.event = event
        console.log('event edit ',event);
        
        this.orders = this.event.dates
       })
    }
    else{
      this.event.menu = [{name:'',desc:''},{name:'',desc:''},{name:'',desc:''},{name:'',desc:''}]
    }
    this.$store.dispatch({ type: "getCookById", cookId:urlParams[0] })
    .then(cook => {
      this.cook = cook
      })
  },
  computed: {
      isEdit(){
        return this.$route.params.id.split('_')[1]?true:false
      },
       
  // timeEvent(){
          // if(this.isEdit)  var y = '2018-12-10 ' + this.event.time;
          // else var y = new Date();

          // console.log('y is:',y);
          
          // var x = new Date(y)
          // // x = x.getTime()
          // console.log('x time is',x);
          // this.event.time = x
        //   this.event.time = "10:40:12";
        //   console.log('moment(this.event.time).format(HHMM)',moment(this.event.time).format('HH:MM'));
          
        //  return (this.event.time)
        // },
        },
  methods: {
    timeEvent(){
      return this.event.time;
    },
    editEvent() {
      if(!this.isEdit) {
        this.event.cityId = this.cook.cityId
        this.event.cookId = this.cook._id
        this.event.address = this.cook.address
        console.log('event to be added ',this.event);
      } 
      
      this.$store.dispatch({ type: "editEvent" ,event: this.event}).then(res =>{
        swal({
          title: "Edit",
          text: "edit was done succefuly",
          icon: "success",
          timer:2000,
          buttons:{
            cancel: false,
          confirm: false}
      }).then(
        res => this.$router.push("/myprofile"+this.cook._id),
        )
    })
    },
     deleteEvent(){
       console.log('I should delete some events',this.event._id);
       this.$store.dispatch({ type: "removeEvent" ,event:this.event}).then(res =>{
        swal({
          title: "Deleting Event",
          text: "deleting was done succefuly",
          icon: "success",
          timer:2000,
          buttons:{
            cancel: false,
          confirm: false}
      }).then(
        res => this.$router.push("/myprofile/"+this.cook._id),
        )
    })
       
     },
   updateInputs(){
     console.log('number of meals is:',this.numberOfMeals) 
   },
 
  }
};
</script>

<style scoped lang = "scss" >
  @import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

.img-logo{
  width: 50px;
  height: 50px;
}
* {
  box-sizing: border-box;
}
.add-event{
  /* width: 70px; */
  /* height: 70px; */
  color: #ffffff;
  background-color: #4CAF50;
}
h3{
  text-align: center;
}
.cook-events{
  display:flex;
  flex-direction: row;
  height: 400px;
}

.myprofile-event-cook{
  width: 120px;
  height: 200px;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.del{
  background-color: #a94747;
  color: white;
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.del:hover {
  background-color: #d24444;;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 25px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
@media only screen and (max-width: 800px) {
   .test{
     display: none;
   }
}
</style>
