<template>
  <section class="form-container container-style">
    <form @submit.prevent="addNewCook">
      <div class="input-container">
          <h1>Sign Up</h1>
        <input
          type="text"
          id="fullName"
          name="fullName"
          v-model="user.fullName"
          placeholder="Enter You Full Name"
          required
        >
        
        <input
          type="password"
          id="password"
          name="password"
          v-model="user.password"
          placeholder="Enter Password"
          required
        >
        
        <input
          type="email"
          id="email"
          v-model="user.email"
          placeholder="Enter You email"
          name="email"
          required
        >
        
        <input
          type="address"
          id="address"
          v-model="user.address"
          placeholder="Enter You address"
          name="address"
          required
        >
        
        <input
          type="country"
          id="country"
          v-model="user.country"
          placeholder="Country"
          name="country"
          required
        >
        
        <input type="city" id="city" v-model="user.city" placeholder="City" name="city" required>
        
        <textarea id="lang" v-model="user.lang" placeholder="lang" name="lang" required></textarea>
        
        <textarea
          id="description"
          v-model="user.description"
          placeholder="Enter A Description"
          name="description"
          required
        ></textarea>
        
        <input
          type="text"
          id="image"
          v-model="user.image"
          placeholder="Enter Url image (for now)"
          name="image"
        >
      </div>

      <input type="submit" value="Sign Up!" class="submit-btn">
    </form>
  </section>
</template>

<script>
import cityList from "@/components/cityList.vue";
import swal from "sweetalert";

export default {
  name: "SignUp",
  data() {
    return {
      user: {
        fullName: "",
        password: "",
        email: "",
        address: "",
        city: "",
        country: "",
        description: "",
        language: "",
        image: ""
      }
    };
  },
  components: {
    swal
  },
  created() {
    console.log("Sign Up Was Created!");
  },
  methods: {
    addNewCook() {
      console.log("I was clicked, to add a new cook", this.user);
      this.$store.dispatch({ type: "addCook", cook: this.user }).then(res => {
        swal({
          title: "Sign Up",
          text: "Welcome to our team",
          icon: "success",
          button: "Go Home!"
        }).then(value => {
          if (value) this.$router.push("/");
        });
      });
    }
  }
};
</script>

<style scoped lang = "scss" >
@import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);

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
.input-container{
    display: flex;
    flex-direction: column;
}
input, textarea{
    padding: 15px;
    margin-bottom: 10px;
    border: 3px solid #887e7e82;
    border-radius: 20px;
}

input:focus{
    border-color: #0000008a;
    outline: 0;
}

.submit-btn{
    float: right;
    background-color:#88c888; 
    opacity: 0.8;
    cursor: pointer;
    border: none;
    font-size: 1.1em;
}

.submit-btn:hover{
    opacity: 1;
}
</style>