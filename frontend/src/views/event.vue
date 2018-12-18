<template>
  <section class="container" v-if="event">
    <div class="event-page-container">
      <div class="images-container" :style="bgImage">
        <div class="name">{{event.description}}</div>
      </div>
      <div class="wrapper">
        <div class="details">
          <div class="top">
            <div class="josefin-font"><i class="far fa-clock"></i> {{event.time}}</div>
            <div class="address josefin-font"><i class="fas fa-map-marker-alt"></i> {{event.address}}</div>
            <router-link :to="'/cook/'+event.cookId" class="cook josefin-font">Host: {{cook.fullName}}</router-link>
          </div>
          <hr>
          <div class="menu-container">
            <h2 style="text-align:center; margin:15px;" class="josefin-font menu-title">To Be Served</h2>

            <div class="menu" v-for="dish in event.menu" :key="dish.id">
              <h3>{{dish.name}}</h3>
              <p>{{dish.desc}}</p>
              <span class="star">***</span>
            </div>
          </div>

          <div class="map-container">
            <GmapMap ref="mapRef" :center="currentLocation" :zoom="15" map-type-id="terrain">
              <GmapMarker
                :position="currentLocation"
                :icon="{ url: require('../images/marker2.png')}"
              />
            </GmapMap>
          </div>
        </div>
        <request-box :event="event" :cook="cook" class="request-box"></request-box>
      </div>
    </div>
  </section>
</template>

<script>
import requestBox from "@/components/requestBox.vue";
import eventService from "@/services/eventService";
import locationService from "@/services/locationService";
import cookService from "@/services/cookService";
import navBar from "@/components/navBar.vue";

export default {
  name: "eventPage",
  data() {
    return {
      event: null,
      cook: null,
      currentLocation: {
        lat: 0,
        lng: 0
      },
      searchAddressInput: ""
    };
  },
  created() {
    const eventId = this.$route.params.id;
    console.log(eventId);
    
    this.$store.dispatch({ type: "getById", eventId }).then(event => {
      this.event = event
      this.$store.dispatch({ type: "getCookById", cookId:this.event.cookId }).then(cook => {
      this.cook = cook});
      locationService.getPositionByName(this.event.address).then(res => {
        this.currentLocation = res;
      });
    });
    
    // eventService.getById(eventId).then(event => {
    //   // this.event = JSON.parse(JSON.stringify(event));
    //   this.event = event;
    //   // this.cook = this.event.cookId
    //   locationService.getPositionByName(this.event.address).then(res => {
    //     this.currentLocation = res;
    //   });
    // });

    
  },
  methods: {
    openModal() {
      return (this.isSend = true);
    },
    displayBox() {
      console.log("i am request button");
    },
    getCook(){
      var cookId = this.event.cookId
      this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
        this.cook = cook;

      });
    }
  },
  computed: {
    bgImage() {
      return (
        "background-image: url(" +
        this.event.image +
        "); background-size: contain; background-size: cover;"
      );
    }
  },

  components: {
    requestBox,
    navBar
  }
};
</script>

<style scoped lang = "scss">
.images-container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-map-container {
  height: 300px;
}

.mobile-book,
.box-modal {
  display: none;
}

.name {
  color: black;
  background-color: #ffffffb0;
  text-shadow: 10px 10px 10px white;
  text-align: center;
  margin: 0 auto;
  font-size: 1.7em;
  padding: 10px;
  /* font-family: 'Josefin Sans', sans-serif; */
  font-family: 'Roboto', sans-serif;
}
.event-page-container {
  display: grid;
  grid-template-rows: 300px 1fr;
}

.wrapper {
  display: grid;
  grid-template-columns: 65% 35%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
      width: 100%;
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
  margin-top: 10px;
  background: #8080801f;
  -webkit-box-shadow: 5px 7px #453e3e1f;
  box-shadow: 4px 4px 4px #453e;
  border-radius: 5px;
}
.menu {
  align-items: center;
  margin-bottom: 15px;
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
.map-container {
  height: 300px;
  margin: 0 auto;
}

h2 {
  color: #4d46468c;
  padding: 3px;
  margin: 0px;
}
h3 {
  font-family: fantasy;
  font-weight: bolder;
  margin: 3px;
  text-align: center;
}
.host-details {
  font-family: none;
  text-align: justify;
}
.details {
  margin-right: 20px;
}
hr {
  margin: 0px;
}

p {
  font-size: 1.1em;
  font-family: fantasy;
  text-align: center;
}
.star {
  color: gray;
}

.menu-container {
  margin-bottom: 10px;
  padding: 10px;
  /* background-color: #0096880d; */
}

.josefin-font {
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.1em;
  color: #000000b8;
}

.menu-title {
  font-size: 2em;
}
.far,.fas{
  color: #4CAF50;
}

@media only screen and (max-width: 800px) {
  .name {
    font-size: 1em;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

.mobile-book{
  display: block;
  background-color: red;
  padding: 20px;
  margin-bottom: 20px;
}
.menu-container{
    margin-bottom: 10px;
  }
  .menu {
    margin-bottom: 0px;
  }
  p {
    margin: 5px;
  }
  .menu-title {
    font-size: 1.5em;
  }
  .top {
    justify-content: center;
  }
  .details {
    margin-right: 0px;
  }
  .event-page-container {
    display: grid;
    grid-template-rows: 200px 1fr;
  }
  .vue-map-container,
  .map-container {
    height: 230px;
  }
  .josefin-font{
    font-size: 15px;
  }
}
</style>
