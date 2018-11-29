<template>
  <section class="container">
    <div class="images-container">
    </div>
   <div class="wrapper">
      <div class="details">
      <section style="display:inline-block;">
      <h2 style="display:inline-block;">Sentence about the food</h2>
      <button style="margin:5px;width:90px;height:30px;font-size:20px">Edit</button> 
      <button style="margin:5px;width:90px;height:30px;font-size:20px">Del</button>
      </section>

      <div class="top">
      <div>Menu</div>
      <div>*****</div>
      <div>location</div> 
      <div>rating</div> 
    </div>

      <div class="top">
      <div>time</div>
      <div>guest range</div>
    </div>

    <div class="desc">
      <h2>Info abou the host</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum amet modi ipsa laboriosam aut laborum ab, cumque asperiores sed natus delectus exercitationem accusantium eligendi totam, optio obcaecati non quaerat!</p>
      <h2>Info abou the area</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum amet modi ipsa laboriosam aut laborum ab, cumque asperiores sed natus delectus exercitationem accusantium eligendi totam, optio obcaecati non quaerat!</p>
    </div>

    <div class="menu">
      <h4>Dish name</h4>
      <p>some desc about the dish</p>
       <h4>Dish name</h4>
      <p>some desc about the dish</p>
       <h4>Dish name</h4>
      <p>some desc about the dish</p>
       <h4>Dish name</h4>
      <p>some desc about the dish</p>
       <h4>Dish name</h4>
      <p>some desc about the dish</p>
    </div>

    <div class="map">
      map goes here
    </div>
    <div >
    <input type="text" placeholder="Enter Your Address">
    </div>
    </div>
    <div class="order-form">
      <h3>70$<span class="title-span">Price per person</span></h3>
      <span class="title">Date</span>
      <input type="date">
     <!-- <date-picker class = "date"></date-picker> -->
      <span class="title">Guests</span>
      <select name="" id="">
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <input type="text" class="buyer" placeholder="Enter your name">
        <input type="text" class="buyer" placeholder="Enter your number">

        <button @click="isShowModal = true" class="send">Send request</button> 
    
    </div>
    
    </div>
    <request-modal v-if="isShowModal" 
        @close="isShowModal = false" >
  </request-modal>
    
  </section>
  
</template>

<script>
import requestModal from '@/components/requestModal.vue'
// import datePicker from 'vuejs-datepicker';
// import "vue-date-pick/dist/vueDatePick.css";

export default {
  name: 'cookPage',
  props: ['cook'],
  data: () => ({
      isShowModal : false,
      // isAdmin: false , //true
    }),
  methods:{
    openModal(){
      return this.isSend = true;
    },
    testlll(){
      this.isShowModal = true; 
      console.log('I was clicked',this.isShowModal)
    },
    created(){
      isShowModal = false;
      this.$store.dispatch({type: 'loadCooks'})
    },
  },
  computed:{
        cooks(){
            return this.$store.getters.getCooks
        }
    },
  components: {
    requestModal,
    // datePicker
  }
};
</script>

<style scoped lang = "scss">
.images-container{
  width: 100%;
  background-image: url(https://www.shortlistdubai.com/sites/default/files/styles/article_small_picture/public/images/2017/07/31/main-shutterstock_518750773.jpg?itok=ZupB_n6k);
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

}

.container{
  display: grid;
  grid-template-rows: 250px 1fr;
}

.wrapper{
  display: grid;
  gap: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 300px; 
  width: 90%;
  padding: 10px;
  position: relative;
  border: 2px solid black;
}
.top{
      display: flex;
}
.top>*{
  padding: 10px;
}
.desc,.menu,.order-form{
  display: flex;
  flex-direction: column;
}
.order-form{
    position: fixed;
    padding: 10px;
    right: 6%;
    width: 245px;
    margin-top: 10px;
    background: #8080801f;
    -webkit-box-shadow: 5px 7px #453e3e1f;
    box-shadow: 4px 4px 4px #453e;
    border-radius: 5px;
}
.menu{
  Align-items: center;
}
.title-span{
  font-size: 12px;
  color: #808080b0;
  padding: 5px;
}
.order-form>*{
  margin: 0px;
  padding: 10px;
  font-size: 1.3em
}

input{
  padding:5px;
  margin-bottom: 10px;
}
.title{
  font-size: 1em;
}

.send{
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 0 0 4px 4px;
    width: 100%;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 19px;
    background-color: #3bd57e;
    color: #fff;
    margin-top: 10px !important;
}
.buyer{
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}


</style>
