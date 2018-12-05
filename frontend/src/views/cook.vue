<template>
  <section class="container">
    <div class="header-nav">
    <div class="logo"><img class="img-logo" src="../images/logo1.png" /></div>
    <div class="nav">
      <router-link to="http://localhost:8080">Home</router-link >|
      <router-link to="http://localhost:8080/about">About</router-link>|
      <router-link to="http://localhost:8080/">Log In</router-link>
    </div>
    </div>
    <div class="host-images">
     
      <img class="coverL" src="../images/image1.jpg"/>
      <img class="coverM" src="../images/image3.jpg"/>
      <img class="coverR" src="../images/image2.jpg"/>
    </div>
    <div class="cook-info" style="display:flex;justify-content:center;">
      <img class="cook-profile-pic" :src="cook.image">
      <div class="location">
        <span>{{cook.city}}</span>
        <span>{{cook.country}}</span>
        <a  id='mail' href="https://mail.google.com/mail/
                      ?view=cm&fs=1&to=sawsan.elhade@gmail.com&su=new mail from feedMe
                      &body=Write your message here"
                      target="_blank"
                      >
                    {{cook.email}}
        </a>
      </div>
      <div class="cook-rating">
        <star-rating v-model="cook.rating" 
        v-bind:star-size = "15"
        read-only = "true" 
        :show-rating = "false"></star-rating>
        <div class="lang">
          {{cook.language}}
        </div>
      </div>
    </div>
   
    <div class="wrapper">
      <div class="details">
        <section style="display:inline-block;">
          <h2 style="display:inline-block;">
            {{cook.fullName}}
            </h2>
        </section>
        <div class="desc">
          <h2>Info abou the host</h2>
          <p>
            {{cook.description}}
          </p>
        </div>
        <div class="cook-events" v-for="event in events" :key="event._id">
          <event-preview :event="event"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";
import eventPreview from "@/components/eventPreview.vue";

export default {
  name: "cookPage",
  data() {
    return {
      cook: {},
      events:[]
    };
  },
  created() {
    const cookId = this.$route.params.id;
    if (cookId) {
        this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
        this.cook = cook
        this.$store.dispatch({type: "getEventsByCook", cookId}).then(events => {
          console.log('events cook page',events)
          this.events = events
        })
      });

    }

  },
  methods: {
  },
  computed: {
    
  },
  components: {
    StarRating,
    eventPreview,
  }
};
</script>

<style scoped lang = "scss">
.logo{
  width:50px;
  height:50px;
}
.img-logo{
  width:50px;
  height:50px;
}
.header-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 30px 5px 5px;
  height: 50px;
}

.nav{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width:200px;
  align-self: flex-end;  
}

.host-images{
  height: 250px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  flex-grow: 1 2 1;
}

.coverL,.coverM,.coverR{
  width:25%;
  height: 250px;
}
.coverM{
  width:50%;
}
.cook-info{
  display: flex;
  align-content: center;
  justify-items: center;
  height: 100px;
}

.cook-profile-pic{
  width:100px;
  height:100px;
  border-radius: 50%;
}
.cook-rating{
display: flex;
flex-direction:column;
justify-content: center;
padding-left: 10px;
}

.location{
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-self: center;
  color:gray;
  margin-left:11px;
  padding-right: 5px;
  
  height:90px;
  border-right: 1px solid gray;
}

.cook-search-events{
  display: flex;
  justify-content: center;
}

.cook-btn-search-events{
  height: 35px;
  width: 100px;
  text-align: center;
  font-size: .75em;
}

.wrapper {
  display: grid;
  gap: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 300px;
  padding: 10px;
  position: relative;
  border: 2px solid black;
}

.event-preview{
  width: 175px;
  height: 175px;
}

.top {
  display: flex;
}
.top > * {
  padding: 10px;
}
.desc,
.menu,
.order-form {
  display: flex;
  flex-direction: column;
}
.order-form { 
  padding: 10px;
  right: 6%;
  width: 245px;
  margin-top: 10px;
  background: #8080801f;
  -webkit-box-shadow: 5px 7px #453e3e1f;
  box-shadow: 4px 4px 4px #453e;
  border-radius: 5px;
}
.menu {
  align-items: center;
}
.title-span {
  font-size: 12px;
  color: #808080b0;
  padding: 5px;
}
.order-form > * {
  margin: 0px;
  padding: 10px;
  font-size: 1.3em;
}

input {
  padding: 5px;
  margin-bottom: 10px;
}
.title {
  font-size: 1em;
}

.send {
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
.buyer {
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}
</style>
