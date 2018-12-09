<template>
  <section class="container">
    <!-- <nav-bar></nav-bar> -->
    <!-- <div class="header-nav">
      <router-link to="/" class="logo">
        <img class="img-logo" src="../images/logo1.png">
      </router-link>
      <div class="nav">
        <router-link to="http://localhost:8080">Home</router-link>|
        <router-link to="http://localhost:8080/about">About</router-link>|
        <router-link to="http://localhost:8080/">Log In</router-link>
      </div>
    </div> -->
    <div class="host-images">
      <img class="coverL" src="../images/image1.jpg">
      <img class="coverM" src="../images/image3.jpg">
      <img class="coverR" src="../images/image2.jpg">
    </div>
    <div class="cook-info">
      <div class="pic-name">
        <div class="cook-profile-pic" :style="bgImage"></div>
        <span class="cook-name">{{cook.fullName}}</span>
        <div class="cook-rating">
          <star-rating
            v-model="cook.rating"
            v-bind:star-size="15"
            read-only="true"
            :show-rating="false"
          ></star-rating>
        </div>
      </div>
      <div class="cook-info-box">
        <div class="location">
          <span>📍{{cook.city}}, &nbsp;</span>
          <span>{{cook.country}}</span>
        </div>
        <span class="lang">Languages: {{cook.language}}</span>
        <!-- <a
          id="mail"
          href="https://mail.google.com/mail/
                      ?view=cm&fs=1&to=sawsan.elhade@gmail.com&su=new mail from feedMe
                      &body=Write your message here"
          target="_blank"
        >{{cook.email}}</a> -->
        <a class="mail"
          id="mail"
          :href="`mailto:${cook.email}`"
          target="_blank"
        >Contant the host</a>
      </div>
    </div>
<div class="cook-events-wrapper">
      <div class="cook-events container-style">
        <event-preview
          v-for="event in events"
          :key="event._id"
          :event="event"
          class="cook-events-list"
        />
      </div>
      </div>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";
import eventPreview from "@/components/eventPreview.vue";
import navBar from "@/components/navBar.vue"


export default {
  name: "cookPage",
  data() {
    return {
      cook: {},
      events: []
    };
  },
  created() {
    const cookId = this.$route.params.id;
    if (cookId) {
      this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
        this.cook = cook;
        this.$store
          .dispatch({ type: "getEventsByCook", cookId })
          .then(events => {
            this.events = events;
          });
      });
    }
  },
  methods: {},
  computed: {
    bgImage() {
      return (
        "background-image: url(" +
        this.cook.image +
        "); background-size: cover; display:block;"
      );
    }
  },
  components: {
    StarRating,
    eventPreview,
    navBar
  }
};
</script>

<style scoped lang = "scss">
.cook-info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
}
.cook-info-box > * {
  padding: 3px;
  font-size: 1em;
  color: #595959;
  font-family: 'Noto Sans KR', sans-serif;

}
.logo {
  width: 50px;
  height: 50px;
}

.mail{
  color:#0e0ec3b8;
}

.pic-name {
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
  padding-right: 10px;
}
.cook-name {
  margin-top: 10px;
  color: #595959;
  font-size: 1.2em;
  font-family: 'Noto Sans KR', sans-serif;

}

.cook-events {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  gap: 20px;
  text-decoration: none;
  margin-bottom: 30px;
  padding-top: 20px;
  
}
.cook-events-list {
  margin: 0;
  padding: 0;
}

.cook-events-wrapper{
  background-color:#afceb32b;
  height: 100%;
}

.img-logo {
  width: 50px;
  height: 50px;
}

.header-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 30px 5px 5px;
  height: 50px;
}

.nav {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 200px;
  align-self: flex-end;
}

.host-images {
  height: 270px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  flex-grow: 1 2 1;
}

.coverL,
.coverM,
.coverR {
  width: 25%;
}

.coverM {
  width: 50%;
}

.cook-info {
  display: flex;
  align-content: center;
  justify-items: center;
  justify-content: center;
  padding: 17px;
}

.cook-profile-pic {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid #80808045;
}

.cook-rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}

.location {
  display: flex;
  align-self: center;
  align-items: center;
  color: gray;
  margin-left: 11px;
  padding-right: 5px;
}

.location>*{
  color: #595959;
  font-family: 'Noto Sans KR', sans-serif;


}

.cook-btn-search-events {
  height: 35px;
  width: 100px;
  text-align: center;
  font-size: 0.75em;
}

.wrapperr {
  display: flex;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid black;
}

.desc {
  display: flex;
  flex-direction: column;
}
a{
  text-decoration: none;
}

@media only screen and (max-width: 800px) {
  .cook-events {
    display: grid;
    grid-template-columns: 12fr;
    gap: 20px;
  }
}
</style>
