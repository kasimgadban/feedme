<template>
  <section>
<div class="container">
  <form @submit.prevent="editCook">
  <div class="row">
    <div class="col-25">
      <label for="fullName">Full Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fullName" name="fullName" placeholder="Enter Your Name"  v-model="cook.fullName" >
    </div>
  </div>
 <div class="row">
    <div class="col-25">
      <label for="password">Password</label>
    </div>
    <div class="col-75">
      <input type="text" id="password" name="password" placeholder="Enter Your password" v-model="cook.password" >
    </div>
 </div>
 <div class="row">
    <div class="col-25">
      <label for="email">email</label>
    </div>
    <div class="col-75">
      <input type="text" id="email" name="email" placeholder="Enter Your email" v-model="cook.email" >
    </div>
 </div>
 <div class="row">
    <div class="col-25">
      <label for="country">country</label>
    </div>
    <div class="col-75">
      <input type="text" id="country" name="country" placeholder="Enter Your email" v-model="cook.country" >
    </div>
 </div>
 <div class="row">
    <div class="col-25">
      <label for="city">City</label>
    </div>
    <div class="col-75">
      <input type="text" id="city" name="city" placeholder="Enter city" v-model="cook.city" >
    </div>
 </div>
 <div class="row">
    <div class="col-25">
      <label for="address">Address</label>
    </div>
    <div class="col-75">
      <input type="text" id="address" name="address" placeholder="Enter address" v-model="cook.address" >
    </div>
 </div>
 
  <div class="row">
    <div class="col-25">
      <label for="description">Description</label>
    </div>
    <div class="col-75">
      <textarea id="description" name="description" 
      placeholder="Let everyone to get to know you a little better.." v-model="cook.description"
      style="height:200px"></textarea>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Save">
  </div>
  </form>
</div>

<div class="container events">
  <h3>Events</h3>
   <router-link tag="button" :to="'/event/edit/'+cook._id+'_'" class="add-event">
   <i class='material-icons' style="font-size: 50px;">add</i>
   </router-link>
   <!-- <button @click="addEvent">
     <i class='material-icons' style="font-size: 50px;">add</i>
      </button>-->
      <div class="cook-events">
        <preview-edit v-for="event in events" :key="event._id" :event="event"/>
      </div>
    </div>
  </section>
</template>

<script>
import eventPreview from "@/components/eventPreview.vue";
import previewEdit from "@/components/previewEdit.vue";
import swal from "sweetalert";

export default {
  name: "myprofile",
  data() {
    return {
      // cook: {
      //   fullName: "",
      //   password: "",
      //   email: "",
      //   address: "",
      //   city: "",
      //   country: "",
      //   description: "",
      //   language: "",
      //   image: "",
      // },
      // loggedCook:{},
      cook: {},
      events: []
    };
  },
  created() {
    var cookId = this.$route.params.id
    this.$store.dispatch({type: 'getCookById',cookId}).then(cook => this.cook = cook)
    // this.cook = this.$store.getters.getLoggedCook
    
    this.$store
      .dispatch({ type: "getEventsByCook", cookId})
      .then(events => {
        console.log("events cook page", events);
        this.events = events;
      });

    // console.log('Sign Up Was Created!');
    // const cookId = this.$route.params.id;
    // console.log('the id of the cook is:',cookId);

    // if (cookId) {
    //   this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
    //     // console.log('the cook returned to the profile is:',cook);
    //     this.cook = cook;

    //     this.$store.dispatch({type: "getEventsByCook", cookId}).then(events => {
    //       // console.log('events cook page',events)
    //       this.events = events
    //     })
    //   });
    // }
  },
  methods: {
    editCook() {
      console.log("I was clicked, to edit a cook", { ...this.cook });
      this.$store.dispatch({ type: "editCook", cook: this.cook }).then(res => {
        swal({
          title: "Edit",
          text: "edit was done succefuly to our team",
          icon: "success",
          timer: 2000,
          buttons: {
            cancel: false,
            confirm: false
          }
        }).then(res => this.$router.push("/"));
      });
    },
    addEvent() {
      var queryParams = new URLSearchParams();
      queryParams.append("cookId", this.cookId);
      this.$router.push("event/edit");
    }
  },
  // computed:{
  //   cook(){
  //     return this.$store.getters.getLoggedCook;
  //   }
  // },
  components: {
    previewEdit,
    swal
  }
};
</script>

<style scoped lang = "scss" >
@import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

.img-logo {
  width: 50px;
  height: 50px;
}
* {
  box-sizing: border-box;
}
.add-event {
  width: 70px;
  height: 70px;
  color: #ffffff;
  background-color: #4caf50;
}

.cook-events {
  display: flex;
  flex-direction: row;
  /* height: 400px; */
}

.myprofile-event-cook {
  width: 120px;
  height: 200px;
}

input[type="text"],
select,
textarea {
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

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 25px;
  top: 50px;
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
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
@media only screen and (max-width: 800px) {
  .test {
    display: none;
  }
}
</style>
