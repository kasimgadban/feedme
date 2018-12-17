<template>
  <section class="review-container">
  <div class="container">
  <form @submit.prevent="saveReview">

    <label for="name">Name</label>
    <input type="text" v-model="review.name"
    id="name" name="name" placeholder="Enter Your name">

    <label for="email">Email</label>
    <input type="text" v-model="review.email"
    id="email" name="email" placeholder="Enter Your email">


    <div class="image-container" style="display:flex;flex-direction:column;">
    <label for="image" class="imageHolder">Image</label>
      <input type="file" id="EventImage" 
      name="EventImage" placeholder="Choose Image"
      @change="displayImage" accept="image/*">
      <div  class="imageHolder">
      <img class="display" style="width:300px;" 
      :src="(review.image !== '')?review.image:imageData" />
    </div>
    </div>

    <star-rating class="star" v-model="review.rating" 
    :star-size="20"  :show-rating="false">

    </star-rating>

    <label for="subject">Review</label>
    <textarea id="subject" v-model="review.subject"
    name="subject" placeholder="Share Details Of Your Experience" 
    style="height:150px"></textarea>

    <input type="submit" value="Send">

  </form>
</div>
  
  </section>
</template>

<script>

import StarRating from "vue-star-rating";

export default {
  name: "reviewPage",
  data() {
    return {
        review:{
            name:'',
            email:'',
            rating:0,
            subject:'',
            image:'',
            cookId:''

        },
        imageData:''
    
    };
  },
  created() {
        this.review.cookId = this.$route.params.id
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
        this.review.image = res
      })
    },
    saveReview(){
        const fullReview = JSON.parse(JSON.stringify(this.review))
        this.$store.dispatch({type: 'saveReview',fullReview})
        .then(() => this.$router.go(-1))
    }
  },
  computed: {
   
  },
  components: {
    StarRating,
  StarRating
  }
};
</script>

<style scoped lang = "scss">

.review-container{
  position: relative;  
  top:40px;
  margin: 0 auto;
  /* background-color:#e2d5d5; */
  display: flex;
  padding: 30px;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px; 
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px; 
  margin-bottom: 7px; 
  resize: vertical;
  border-radius: 3px;
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

.container {
  border-radius: 5px;
  background-color: #4886522e;
  padding: 20px;
}


.image-container{
  margin-bottom: 10px
}

.star{
  margin-bottom: 5px
}

label{
  font-size:0.9em;
  font-family: 'Times New Roman', Times, serif
}

::-webkit-input-placeholder {
    font-family: 'Times New Roman', Times, serif
}


</style>