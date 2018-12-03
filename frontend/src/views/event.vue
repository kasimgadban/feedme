<template>
  <section class="container">
    <div class="images-container">
      <!-- <button>Back</button> -->
    </div>
    <div class="wrapper">
      <div class="details">
        <!-- <section style="display:inline-block;">
         {{event}}
        </section> -->
        <div class="top">
          <div>	&#128197;{{event.date}}</div>
          <div>🕐{{event.time}}</div>
          <div class="rating">★★★★<span class="voters">(12)</span></div>
        </div>
        <hr>

        <!-- <div class="top">
          <div>time</div>
          <div>guest range</div>
        </div> -->

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

        <div class="map">map goes here</div>
      </div>
      
      <request-box :cook="cook"></request-box>
    </div>
  </section>
</template>

<script>
import requestModal from "@/components/requestModal.vue";
import requestBox from "@/components/requestBox.vue";

export default {
  name: "cookPage",
  data() {
    return {
      event: null,
      cook:{
    // _id : ObjectId("5c02d70ef46cd1a83b20872d"),
    fullName : "Katherine Flament",
    email : "kflament1@sourceforge.net",
    country : "Indonesia",
    city : "Tarikolot",
    address : "7461 Meadow Valley Court",
    language : "Malayalam",
    description : "enable impactful partnerships",
    rating : 3.0,
    image : "https://robohash.org/errormodiquia.png?size=50x50&set=set1"
}

    };
  },
  created() {
    // const cookId = this.$route.params.id;
    // if (cookId) {
    //   this.$store.dispatch({ type: "getById", cookId }).then(cook => {
    //     this.cook = cook;
    //   });
    // }
    const eventId = this.$route.params.id;
    console.log('when event page is created :',eventId);
    
    if (eventId) {
      this.$store.dispatch({ type: "getById", eventId }).then(event => {
        this.event = event;
      
      });
    }
  },
  methods: {
    openModal() {
      return (this.isSend = true);
    },
    // getCookById() {}
  },
  computed: {
    // cook() {
    //   return this.$store.getters.getCook;
    // }
  },
  components: {
    requestModal,
    requestBox
  }
};
</script>

<style scoped lang = "scss">
.images-container {
  width: 100%;
  background-image: url(https://www.shortlistdubai.com/sites/default/files/styles/article_small_picture/public/images/2017/07/31/main-shutterstock_518750773.jpg?itok=ZupB_n6k);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.container {
  display: grid;
  grid-template-rows: 250px 1fr;
}

.wrapper {
  display: grid;
  gap: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 300px;
  width: 90%;
  padding: 10px;
  position: relative;
  border: 2px solid black;
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
.rating{
  color: gold
}
.voters{
  color: rgba(128, 128, 128, 0.584);
  font-size: 14px;
}
.map{
  background-image: url("https://nyoobserver.files.wordpress.com/2015/02/screen-shot-2015-02-06-at-3-27-06-pm.png");
  height: 300px;
}
</style>
