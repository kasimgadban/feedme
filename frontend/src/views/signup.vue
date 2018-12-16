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
        <div class="col-75">
        <input type="file" id="avatarImage" 
          name="avatarImage"
          @change="displayImage" accept="image/*"> 
          <div v-if="(user.image !== '')?user.image:imageData" class="imageHolder" style="width:400px;background-color:pink;">
          <img class="display" :src="(user.image !== '')?user.image:imageData" />
          </div>
          </div>
        
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
        <input type="city" list="city" v-model="user.city" placeholder="City" name="city" required>
        <!-- <select type="city" v-model="user.city" required>
          <option value="5c02e1bef46cd1a83b208921">London</option>
          <option value="5c02e1bef46cd1a83b208923">Rome</option>
          
        </select>
         -->
        <textarea id="lang" v-model="user.language" placeholder="lang" name="lang" required></textarea>
        
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
        cityId:'',
        image: "",
      },
      example:'test',
      imageData:''
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
    },
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
        this.user.image = res
      })
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