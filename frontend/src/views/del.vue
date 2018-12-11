


<template>
  <section>
   
<div id="form" class="container-style">


<form id="waterform" @submit.prevent="addNewCook">
<h1>Sign Up</h1>
<div class="formgroup" id="name-form">
    <input type="text" id="fullName" name="fullName" 
            v-model="user.fullName" 
            placeholder="Enter You Full Name" required/>
</div>

<div class="formgroup" id="name-form">
    <input type="password" id="password" name="password" 
            v-model="user.password" 
            placeholder="Enter Password" required/>
</div>

<div class="formgroup" id="email-form">
    <input type="email" 
    id="email" v-model="user.email" 
               placeholder="Enter You email"
    name="email" required/>
</div>

<div class="formgroup" id="address-form">
    <input type="address" 
    id="address" v-model="user.address" 
               placeholder="Enter You address"
    name="address"  required/>
</div>

<div class="formgroup" id="country-form">
    <input type="country" 
    id="country" v-model="user.country" 
               placeholder="Country"
    name="country" required/>
</div>

<div class="formgroup" id="city-form">
    <input type="city" 
    id="city" v-model="user.city" 
               placeholder="City"
    name="city" required/>
</div>

<div class="formgroup" id="lang-form">
    <textarea 
    id="lang" v-model="user.lang" 
    placeholder="lang"
    name="lang" required>
    </textarea>
</div>

<div class="formgroup" id="description-form">
    <textarea 
    id="description" v-model="user.description" 
    placeholder="Enter A Description"
    name="description" required>
    </textarea>
</div>

<div class="formgroup" id="image-form">
    <input type="text" 
    id="image" v-model="user.image" 
               placeholder="Enter Url image (for now)"
    name="image" />
</div>
<input type="submit" value="Sign Up!" @click="addNewCook" />

</form>
</div>
</section>
</template>

<script>
import cityList from "@/components/cityList.vue";
import swal from 'sweetalert';


export default {
  name: "SignUp",
  data(){
      return {
          user:{
                fullName:'',
                password:'',
                email:'',
                address:'',
                city:'',
                country:'',
                description:'',
                language:'',
                image:''
                }
      }
  },
  components: {
      swal
    //   userMsg
    // appHeader,
  },
  created() {
    console.log('Sign Up Was Created!');
    
  },
  methods: {
    addNewCook() {
        console.log('I was clicked, to add a new cook',this.user)
        this.$store.dispatch({ type: "addCook" ,cook:this.user}).then(res =>{
            swal({
            title: "Sign Up",
            text: "Welcome to our team",
            icon: "success",
            button: "Go Home!",
        }).then(value =>{
            if(value)   this.$router.push("/");
        })
      })
        // eventBus.$emit(SHOW_USER_MSG, {type: 'success', txt: 'Welcome'});
    

        // this.$store.addCook(newCook)
    //   return this.$store.getters.getCooks;
    },
  }
};
</script>

<style scoped lang = "scss" >
@import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);


body, html{
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Sniglet', cursive;
}
.logo{
  width:50px;
  height:50px;
}

.img-logo{
  width:50px;
  height:50px;
}
h1{
    font-weight: normal;
    font-size: 4em;
    font-family: 'Raleway', sans-serif;
    margin: 0 auto;
    margin-top: 40px;
    width: 500px;
    color: #88c888;
    text-align: center;

}

/* Animation webkit */
@-webkit-keyframes myfirst
{
    0% {margin-left: -235px}
    90% {margin-left: 100%;}
    100% {margin-left: 100%;}
}

/* Animation */
@keyframes myfirst
{
    0% {margin-left: -235px}
    70% {margin-left: 100%;}
    100% {margin-left: 100%;}
}

header{
    /* height: 160px; */
    /* background: url('http://www.geertjanhendriks.nl/codepen/form/golf.png') repeat-x bottom; */
}

#form{
    height: 100%;   
    /* background-color: #98d4f3; */
    overflow: hidden;
    position: relative;
    
}
form{
    margin: 0 auto;
    width: 100%;
    /* padding-top: 40px; */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
}
label, input, textarea{
    display: block; 
}
input, textarea{
        width: 100%; 
    border: none;
    border-radius: 20px;
    outline: none;
    padding: 10px;
    font-family: 'Sniglet', cursive;
    font-size: 1em;
    color: #676767;
    transition: border 0.5s;
    -webkit-transition: border 0.5s;
    -moz-transition: border 0.5s;
    -o-transition: border 0.5s;
    border: solid 3px #6f7376;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-bottom: 15px;
    
}
input:focus, textarea:focus{
    border: solid 3px #953737;
}

textarea{
    height: 100px;  
    resize: none; 
    overflow: auto;
}
input[type="submit"]{
    background-color: #88c888;
    color: white;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
    font-size: 1.29em;
    font-family: 'Sniglet', cursive;
    -webkit-transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -o-transition: background-color 0.5s;
    transition: background-color 0.5s;
}
input[type="submit"]:hover{
    background-color: #88c888;
    
}
label{
    font-size: 1.5em;
    margin-top: 20px;
    /* padding-left: 20px; */
}
.formgroup, .formgroup-active, .formgroup-error{
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 10.5%;
    transition: background-image 0.7s;
    -webkit-transition: background-image 0.7s;
    -moz-transition: background-image 0.7s;
    -o-transition: background-image 0.7s;
    width: 566px;
    padding-top: 2px;
}


@media only screen and (max-width: 800px) {
   .test{
     display: none;
   }
}
</style>
