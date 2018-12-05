<template>
  <section class="container">
    <div class="header-nav">
    <!-- <div class="logo"><img class="img-logo" src="../images/logo1.png" /></div> -->
    <router-link to="/" class="logo"><img class="img-logo" src="../images/logo1.png" /></router-link>
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
    <div class="cook-info">
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
    <hr />

    <div>
      <section style="display:inline-block;">
        <h2 style="display:inline-block;">{{cook.fullName}}</h2>
      </section>
      <div class="desc"><h2>{{cook.name}}</h2>
        <p>
          {{cook.description}}
        </p>
      </div>
      
      <div class="cook-events">
        <event-preview  
        v-for="event in events" 
        :key="event._id"
        :event="event"/>
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
  justify-content:center;
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

.cook-events{
  display: flex;
  flex-direction: row;
  background-color: pink;
}

.cook-btn-search-events{
  height: 35px;
  width: 100px;
  text-align: center;
  font-size: .75em;
}

.wrapperr {
  display: flex;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid black;
}

.desc{
  display: flex;
  flex-direction: column;
}

</style>
