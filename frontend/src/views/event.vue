<template>
  <section class='container'>
    <div class='images-container'></div>
    <div class='wrapper'>
      <div class='details'>
        <div class='top'>
          <div>🕐{{event.time}}</div>
<<<<<<< HEAD
          <div>{{event.address}}</div>
          <div>{{cook.fullName}}</div>
=======
          <div class="address">&#x1F4CD;{{event.address}}</div>
          <!-- <div>{{cook.fullName}}</div> -->
>>>>>>> db24b4593b6fd9220280109288ad6a552f233335
        </div>
        <hr>

        <div class='desc'>
          <!-- {{event.description}} -->
          <h2>Info abou the host</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum amet modi ipsa laboriosam aut laborum ab, cumque asperiores sed natus delectus exercitationem accusantium eligendi totam, optio obcaecati non quaerat!</p>
          <h2>Info abou the area</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum amet modi ipsa laboriosam aut laborum ab, cumque asperiores sed natus delectus exercitationem accusantium eligendi totam, optio obcaecati non quaerat!</p>
        </div>
        <hr>
        <h2 style="text-align:center;">Menu</h2>

<<<<<<< HEAD
        <div class='menu'>
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
=======
       <div class="menu" v-for="dish in event.menu" :key="dish.id">
         <h3>{{dish.name}}</h3>
          <p>{{dish.desc}}</p>
          
       </div>
       
>>>>>>> db24b4593b6fd9220280109288ad6a552f233335

        <div class='map-container'>
          <GmapMap
            ref='mapRef'
            :center='currentLocation'
            :zoom='15'
            map-type-id='terrain'
            style='width: 500px; height: 300px'
          >
            <GmapMarker :position='currentLocation'/>
          </GmapMap>
        </div>
      </div>
      <request-box :event = "event" ></request-box>
    </div>
  </section>
</template>

<script>
import requestBox from '@/components/requestBox.vue';
import eventService from '@/services/eventService';
import locationService from '@/services/locationService';
import cookService from '@/services/cookService';

export default {
  name: 'cookPage',
  data() {
    return {
      event: Object,
      cook: Object,
      currentLocation: {
        lat: 0,
        lng: 0
      },
      searchAddressInput: ''
    };
  },
  created() {
    const eventId = this.$route.params.id;
    eventService.getById(eventId).then(res => {
      this.event = JSON.parse(JSON.stringify(res));
      var cookId = this.event.cookId;
      this.$store.dispatch({ type: 'getCookById', cookId }).then(res => {
        this.cook = res;
      });
      locationService.getPositionByName(this.event.address).then(res => {
        this.currentLocation = res;
      });
    });
  },
  methods: {
    openModal() {
      return (this.isSend = true);
    }
  },
  // mounted: function() {
  //   this.geolocation();
  // },
  components: {
    requestBox
  }
};
</script>

<style scoped lang = 'scss'>
.images-container {
  width: 100%;
  background-image: url('https://www.shortlistdubai.com/sites/default/files/styles/article_small_picture/public/images/2017/07/31/main-shutterstock_518750773.jpg?itok=ZupB_n6k');
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
.rating {
  color: gold;
}
.voters {
  color: rgba(128, 128, 128, 0.584);
  font-size: 14px;
}
<<<<<<< HEAD
.map {
  background-image: url('https://nyoobserver.files.wordpress.com/2015/02/screen-shot-2015-02-06-at-3-27-06-pm.png');
  height: 300px;
}
=======
>>>>>>> db24b4593b6fd9220280109288ad6a552f233335
.map-container {
  width: 500px;
  height: 300px;
}
.menu>*{
  margin:13px
}
</style>
