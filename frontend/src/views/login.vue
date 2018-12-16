<template>
<form class="login-form" @submit.prevent="checkUser">
  <div class="login-container">
    <label for="uname"><b>Username</b></label>
    <input type="text" 
    placeholder="Enter Username" v-model="username" name="username" required>

    <label for="password"><b>Password</b></label>
    <input type="password" 
    placeholder="Enter Password" v-model="password" name="password" required>
    <!-- {{username}} -->
    <!-- {{password}} -->
    <button type="submit">Login</button>
    <span>Not a user yet?
      <router-link to="/signup"> Create an account</router-link>
    </span>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <!-- <span class="psw">Forgot <a href="#">password?</a></span> -->
  </div>

</form>
</template>
<script>
// import EventBusService  from '../services/eventBus.js'

export default { 
  name:'login',
  data(){
    return {
      username:'',
      password:''
    }
  }
,
methods:{
  checkUser(){
    var loggedInUser = {
      username : this.username,
      password : this.password
    }
    console.log('page login',loggedInUser);
    
    this.$store.dispatch({type: "checkLoggedUser", loggedInUser})
    .then(user =>{
        console.log('I was checkd at the action and set as a user ',user)
        var n = -1
        //EventBusService.$emit('set_user', user)
        this.$router.go(n)
      })
    .catch(err => {console.log('err',err);
    })
    //
    // userService.checkUser(loggedInUser)
    // .then(user => {
    //   if(user) this.$router.push('/')
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }
}


}
</script>
<style scoped lang="scss">

form {
  // border: 3px solid #f1f1f1;
  border: 3px solid blue;
  // margin-top: 50px;

    // height: 300px;

}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 20px;
}

/* Set a style for all buttons */
button {
  background-color: #88c888;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.8;
  border-radius: 20px;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 1 ;
  
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f443369c;
  float: right;
}
.cancelbtn:hover{
  background-color: #f44336;


}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.login-container {
  padding: 16px;
  height: 100%;
  margin-top: 60px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
