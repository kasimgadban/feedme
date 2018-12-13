<template>
  <section>
  
<div class="container">
  <h1>{{(isEdit)?'Edit':'Add'}} Event</h1>
  <!-- <router-link :to="'/event/edit/'+event._id+'_'+event.cityId">Back</router-link> -->
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
      v-model="event.description">
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
    <div class="col-75">
      <input type="file" id="EventImage" 
      name="EventImage"
      @change="displayImage" accept="image/*"> 
      <div v-if="(event.image !== '')?event.image:imageData" class="imageHolder" style="width:400px;background-color:pink;">
      <img class="display" :src="(event.image !== '')?event.image:imageData" />
    </div>
    </div>
  </div>
   <div class="row">
    <div class="col-25">
      <label for="EventMenu">Event Menu</label>
    </div>
    <div class="col-75">
      <ul v-if="isEdit">
      <li  v-for="(meal,index) in event.menu" :key="index">
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
      <label for="EventPrice">Time
        <div style="display:flex;">
        <input required v-model="hours" value="" class="time-input">
        <span style="padding:5px; font-size:1.1em;">:</span>
        <input required v-model="mins" value="" class="time-input">
        </div>
      </label>
    </div>
    <div class="col-75">
      <!--:v-bind="timeEvent" value="timeEvent"-->
       <!-- <b-timepicker  v-model="event.time" :value="event.time" :time-parser="timeEvent()" 
       inline></b-timepicker> -->
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
     <!-- <div class="orders" style="display:flex; flex-direction:column;"> -->
       <!-- <li  v-for="(meal,index) in event.menu" :key="index"> -->
       <ul>
         <li v-for="(day,index) in event.dates" :key="index">
           <span> Date: {{day.eventDate}}</span>
           <span> Name: {{day.guestName}}</span>
      <span> Guests count: {{day.guestsBooking}}</span>
         </li>
       </ul>
     <!-- <span>{{event.dates[0].eventDate}}</span>
     <span>{{event.dates[0].guestName}}</span>
      <span>{{event.dates[0].guestsBooking}}</span> -->
      <!-- </div> -->

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
                price: 0,
                days:[],
                menu:[],
                maxGuests:'',
                image:'',
                dates:[]
            },
        cook:{},
        orders:[],
        hours:'',
        mins:'',
        // meals:[{name:'',desc:''},{name:'',desc:''},{name:'',desc:''},{name:'',desc:''}],
        meals:[],
      numberOfMeals:0,
      imageData:''

      }
  },
  components: {
    swal
  },
  created() {
    var urlParams = this.$route.params.id.split('_')
    if(urlParams[1] !== ""){
       this.$store.dispatch({ type: "getById", eventId:urlParams[1] })
       .then(resEvent => {
        this.event = resEvent
        console.log('event edit ',resEvent);
        
        this.orders = this.event.dates
        var time = this.event.time.split(':');
          this.hours = time[0];
          console.log('this.hours',this.hours)
          this.mins = time[1];
          this.event.time = this.hours +':'+ this.mins
          console.log('this.event.time',typeof this.event.time)
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
      
        },
  methods: {
    displayImage(event){
      var input = event.target
     if(input.files && input.files[0]){
       var reader = new FileReader()
       reader.onload = e => {
         this.imageData = e.target.result
         this.saveImage()
       }
       reader.readAsDataURL(input.files[0])
     }
    },
    saveImage(){
      var imageToSave = this.imageData
      this.$store.dispatch({type: "saveImage", imageToSave})
      .then( res => {
        console.log('the image was saved',res);
        this.event.image = res
      })
    },
    timeEvent(){
      return this.event.time;
    },
    editEvent() {
      if(!this.isEdit) {
        console.log('245 => cityId',this.cook.cityId);
        console.log('245 => cityId',this.cook._id);
        
        this.event.cityId = this.cook.cityId
        console.log('this.event.cityId',this.event.cityId);
        
        this.event.cookId = this.cook._id
        this.event.address = this.cook.address
        
        console.log('event to be added ',this.event);
      } 
      this.event.time = this.hours +':'+ this.mins
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
        res => this.$router.push("/myprofile/"+this.cook._id),
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
  //  updateInputs(){
  //    console.log('number of meals is:',this.numberOfMeals) 
  //  },
 
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
section{
  margin-top: 75px;
}
* {
  box-sizing: border-box;
}

.time-input{
  text-align: center;
  width:35px;
  height:35px;
  border: none;

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
