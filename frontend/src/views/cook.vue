<template>
  <section class="container">
    <div class="images-container">
      <!-- <button>Back</button> -->
      
    </div>
   <div class="wrapper">
      <div class="details">
      <section style="display:inline-block;">
      <h2 style="display:inline-block;">{{cook.firstName}} Kitchen</h2>
      </section>

      <div class="top">
      <div>{{cook.food[0].name}}</div>
      <div>{{cook.food[0].description}}</div>
      <div>{{cook.address.city}}</div> 
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
    
    </div>
    <request-box :cook="cook">
    </request-box>
    
    </div>
   
  </section>
  
</template>

<script>
import requestModal from '@/components/requestModal.vue'
import requestBox from '@/components/requestBox.vue';

export default {
  name: 'cookPage',
  data(){
      return {
              cook : null
      }
    },
    created(){
      const cookId = this.$route.params.id
      console.log('cook id ',cookId)
      if(cookId){

        this.$store.dispatch({type: "getById",cookId}).then(cook => {
        this.cook = cook;
        console.log('cook ',cook);
        })
      }
    },
  methods:{
    openModal(){
      return this.isSend = true;
    },
    getCookById(){

    },
   
  },
  computed:{
        cooks(){
            return this.$store.getters.getCooks
        }
    },
  components: {
    requestModal,
    requestBox
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
    /* position: fixed; */
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
