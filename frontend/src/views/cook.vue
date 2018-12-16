<template>
  <section class="container">
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
          <router-link tag="button" :to="'/cook/review/'+cook._id">Write Your Own Review</router-link>
        </div>
      </div>
      <div class="cook-info-box">
        <div class="location">
          <span><i class="fas fa-map-marker-alt"></i> {{cook.city}}, &nbsp;</span>
          <span>{{cook.country}}</span>
        </div>
        <span class="lang"><i class="fas fa-globe"></i> {{cook.language}}</span>
        <a class="mail" id="mail" :href="`mailto:${cook.email}`" target="_blank">Contant the host</a>
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

      <div class="cook-events-reviews">
      <div class="cook-reviews container-style">
        <!-- <ul> -->
          <div v-for="(review,idx) in reviews" :key="idx" class="review">
            {{review}}
            <div class="review-img" style="height:50px;width:50px;">{{review.image}}</div>
            <div>Name: {{review.name}}</div>
            <!-- <span>{{review.name}}</span> -->
            </div>
          <!-- </ul> -->

        <!-- <cook-review
          v-for="(review,idx) in reviews"
          :key="idx"
          :review="review"
          class="cook-reviews-list"
        /> -->

      </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";
import eventPreview from "@/components/eventPreview.vue";
import navBar from "@/components/navBar.vue";
import eventEdit from "@/components/eventEdit.vue";

export default {
  name: "cookPage",
  data() {
    return {
      cook: {},
      events: [],
      reviews:[]
    };
  },
  created() {
    const cookId = this.$route.params.id;
    if (cookId) {
      this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
        this.cook = cook;
        console.log('this.cook.reviews',this.cook.reviews);
        console.log('this.cook',this.cook);
        
        this.reviews = this.cook.review
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
    navBar,
    eventEdit
  }
};
</script>

<style scoped lang = "scss">
li{
  border:2px solid gray;
}
.cook-events-reviews{
  margin-top: 30px;
  background-color: pink;
  height:700px;
}
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
  font-family: "Noto Sans KR", sans-serif;
}
.logo {
  width: 50px;
  height: 50px;
}

.mail {
  color: #0e0ec3b8;
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
  font-family: "Noto Sans KR", sans-serif;
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

.cook-events-wrapper {
  background-color: #afceb32b;
  height: 100%;
}
.events-to-edit {
  display: flex;
  justify-content: center;
  padding: 20px;
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

.location > * {
  color: #595959;
  font-family: "Noto Sans KR", sans-serif;
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
a {
  text-decoration: none;
}

.review{
  border: 1px solid blue;
  height: 70px;
}

@media only screen and (max-width: 800px) {
  .cook-events {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .location{
    margin-left: 0px
  }
  .cook-name{
    font-size: 1em
  }
  .pic-name{
    align-items: center;
  }
  
}


</style>
