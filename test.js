// // const mongoService = require('./mongo.service')

// // const ObjectId = require('mongodb').ObjectId;

// // function query(filter = {}) {
// //     let byCityId = filter.cityId;
// //     let byCookId = filter.cookId;
// //     let byTxt = filter.txt;
// //     // let splitArray = filter.dateAddress
// //     // let date = splitArray.split(',')[0]
// //     // let address = splitArray.split(',')[1]+splitArray.split(',')[2]
// //     let date = filter.date
// //     if (byCityId) {
// //         byCityId = new ObjectId(byCityId)
// //         filter = { cityId: byCityId }
// //     }
// //     if (byCookId) {
// //         byCookId = new ObjectId(byCookId)
// //         filter = { cookId: byCookId }
// //     }
// //     if (date) {
// //         filter = { 
// //             date: date,
// //         }
// //     }
// //     if(byTxt){
// //         filter = {
// //             address: byTxt
// //         }
// //     }
// //     else filter = {}
// //     return mongoService.connectToDb()
// //         .then(db => {
// //             const collection = db.collection('event_db');
// //             if (byCityId)
// //                 var events = collection.find({ cityId: byCityId }).toArray()
// //             else if (byCookId)
// //                 var events = collection.find({ cookId: byCookId }).toArray()
// //             else if (byTxt){
// //                 var events = collection.aggregate({ 
// //                     $match : { 
// //                         'address' : {$regex: filter.address},
// //                     }
// //                 }).toArray()
// //             }
// //             else if (date) {
// //                 // var events = collection.find({"address":{$regex: filter.address}})
// //                 events = collection.aggregate(
// //                     [

// //                         {
// //                             $unwind: {
// //                                 path: '$dates'
// //                             }
// //                         },
// //                         { 
// //                             $match : { 
// //                                 // 'address' : {$regex: filter.address},
// //                                 'dates.eventDate': filter.date
// //                             }
// //                         },  
// //                         {
// //                             $group: {
// //                                 "_id": '$dates'
// //                             },
// //                         }

// //                     ],
// //                 ).toArray()
// //             }
// //             else
// //                 var events = collection.find({}).toArray()

// //             return events
// //         })
// // }
// // function getById(eventId) {
// //     eventId = new ObjectId(eventId)
// //     return mongoService.connectToDb()
// //         .then(db => {
// //             const collection = db.collection('event_db');
// //             return collection.findOne({ _id: eventId })
// //         })
// // }

// // function remove(eventId) {
// //     eventId = new ObjectId(eventId)
// //     return mongoService.connectToDb()
// //         .then(db => {
// //             const collection = db.collection('event_db');
// //             return collection.remove({ _id: eventId })
// //         })
// // }

// // function add(event) {
// //     return mongoService.connectToDb()
// //         .then(db => {
// //             const collection = db.collection('event_db');
// //             return collection.insertOne(event)
// //                 .then(result => {
// //                     event._id = result.insertedId;
// //                     return event;
// //                 })
// //         })
// // }

// // // function update(event){
// // //     event._id = new ObjectId(event._id)
// // //     return mongoService.connectToDb()
// // //         .then(db => {
// // //             const collection = db.collection('event_db');
// // //             return collection.updateOne({ _id: event._id }, { $push: event })
// // //                 .then(result => {
// // //                     return result;
// // //                 })
// // //         })
// // // }

// // // function addBook(book){
// // //     const eventId = new ObjectId(book.eventId)
// // //     delete book.eventId;
// // //     return mongoService.connectToDb()
// // //         .then(db => {
// // //             const collection = db.collection('event_db');
// // //             return collection.updateOne({ _id: eventId},{ $push :{dates: book}})
// // //                 .then(result => {
// // //                     return result;
// // //                 })
// // //         })
// // // }

// // function update(event) {
// //     event._id = new ObjectId(event._id)
// //     event.cookId = new ObjectId(event.cookId)
// //     // delete event.dates.eventId
// //     return mongoService.connectToDb()
// //         .then(db => {
// //             const collection = db.collection('event_db');
// //             return collection.updateOne({ _id: event._id }, { $set: event })
// //                 .then(result => {
// //                     return result;
// //                 })
// //         })
// // }

// // // function update(order){
// // //     const cookId = new ObjectId(order.cookId)
// // //     return mongoService.connectToDb()
// // //         .then(db => {
// // //             const collection = db.collection('cook_db');
// // //             return collection.updateOne({ _id: cookId },{$push:{orders: order }})
// // //                 .then(result => {
// // //                     return result;
// // //                 })
// // //         })
// // // }

// // module.exports = {
// //     query,
// //     getById,
// //     remove,
// //     add,
// //     update,
// //     // addBook
// // }


// /***event module**/

// // import eventService from '../services/eventService.js';

// // export default {
// //   state: {
// //     event: null ,
// //     events: null,
// //     currEvent: loadEvent(),
// //     FilterdEvent: null,
// //     itemsToDisplay: []
// //   },
// //   mutations: {
// //     setEvents(state, { events }) {
// //       state.events = events;
// //     },
// //     setEvent(state, { event }) {
// //       state.currEvent = event;
// //     },
// //     setFilterByEventDate(state,{FilterdEvent}){
// //       state.FilterdEvent = FilterdEvent;
// //     },
// //     setItemsToDisplay(state, {itemsToDisplay}) {
// //       state.itemsToDisplay=itemsToDisplay
// //   }
// //   },

// //   actions: {
// //     loadEvents(context) {
// //       // if(filter['cityId'] !== '') filter.cityId = filter['cityId'];
// //       // if(filter['cookId'] !== '') filter.cookId = filter['cookId']
// //       return eventService.query().then(events => {
// //         context.commit({ type: 'setEvents', events });
// //       });
// //     },
// //     loadEvent(context,{event}){
// //       return eventService.getById(event._id).then(event => {
// //         context.commit({ type: 'setEvent', event });
// //       });
// //     },
// //     getById(context, { eventId }) {
// //       return eventService.getById(eventId).then(event => {
// //         context.commit({ type: 'setEvent', event });
// //         return event;
// //       });
// //     },
// //     // [date,address]
// //     // {date,address}
// //     FilterByEventDate(context,[date,eventId]){
// //       console.log(eventId);
// //       return eventService.query({date}).then(FilterdEvent =>{
// //         context.commit({type:'setFilterByEventDate',FilterdEvent});
// //         console.log(FilterdEvent);
        
// //         return FilterdEvent;
// //       })
// //     },
// //     filterItems({ commit }, filter) {
// //       return eventService.query(filter)
// //           .then(itemsToDisplay => {
// //               commit({ type: 'setItemsToDisplay', itemsToDisplay })
// //               return itemsToDisplay
// //           })
// //   }
// //   },
// //   getters: {
// //     getEvents: state => {
// //       return state.events;
// //     },
// //     getEventById: state => {
// //       return state.eventId;
// //     },
// //     getEvent: state =>{
// //       return state.event;
// //     },
// //     getItemsToDisplay(state){
// //       return state.itemsToDisplay;
// //   }
// //   }
// // };


// // function loadEvent() {
// //     return {
// //       address: '',
// //       date: '',
// //       time: '',
// //       description: '',
// //       price: 0,
// //       image: '',
// //       menu: [
// //         {
// //           name: '',
// //           desc: '',
// //         }],
// //       bgImage: '',
// //       dates: [
// //         {
// //           guestsCount: 0,
// //           count: 0,
// //           eventDate: '',
// //           guests: [
// //             {
// //               guestName: '',
// //               guestPhone: ''
// //             }
// //           ],
// //           guestsBooking: 0
// //         }
// //       ],
// //       maxGuests: 0,
// //       guestsCount: 0
// //     }
// // }

// /****serach bar***/

// // <template>
// //   <section>
// //     <input
// //       ref="autocomplete"
// //       placeholder="Search for a city"
// //       class="search-location"
// //       onfocus="value = ''"
// //       type="text"
// //       v-model="filter.byTxt"
// //       @input="emitFilter"
// //       @change="searchLocation()">
// //   </section>
// // </template>

// // <script>
// // /*global google*/ 
// // export default {
// //   name: "searchBar",
// //     data() {
// //     return {
// //       currentLocation : { lat : 0, lng : 0},
// //       searchAddressInput: '',
// //         filter: {
// //         byTxt: '',
// //       },
// //     }
// //   },
// //   mounted() {
// //     this.$gmapApiPromiseLazy().then(() => {
// //       this.autocomplete = new google.maps.places.Autocomplete(
// //         this.$refs.autocomplete,
// //         {
// //           types: ["geocode"]
// //         }
// //       );
// //     });
// //   },
// //   methods: {
// //     searchLocation: function() {
// //       var geocoder = new google.maps.Geocoder();
// //       geocoder.geocode(
// //         { address: this.searchAddressInput },
// //         (results, status) => {
// //           if (status === "OK") {
// //             this.currentLocation.lat = results[0].geometry.location.lat();
// //             this.currentLocation.lng = results[0].geometry.location.lng();
// //           }
// //         }
// //       );
// //     },
// //     emitFilter(){
// //       this.$emit('filterEvents',this.filter)
// //     }
// //   }
// // };
// // </script>

// // <style scoped lang = "scss">

// // input{
// //     background-color: rgba(204, 193, 193, 0.959);  
// //     border: none;
// //     border-right: 2px solid black;
// //     width: 300px;
// //     font-size: 1em;
// //     padding: 15px;
// // }
// // input:focus {
// //     outline:none;
// // }


// // @media only screen and (max-width: 800px) {
// // input{
// //   padding: 10px;
// //   margin-bottom: 3px;
// //   border:none;
// // }
// // }
// // </style>


// /****event Preview***/

// // <template>
// //   <section class="cards" v-if = "eventsToDisplay">
// //     <article class="card card--1">
// //       <router-link class="link" :to="'/event/'+ eventsToDisplay._id">
// //       <div class="card__img">
// //         <div class="card__img_holder" :style="bgImage"></div>
// //       </div>
// //       <div class="card__info">
// //         <h4 class="price">${{eventsToDisplay.price}}</h4>
// //         <h3 class="card__title">{{eventsToDisplay.description}}</h3>
// //         <span class="card__by">Hosted by
// //           <router-link class="link" :to="'/cook/'+ eventsToDisplay.cookId">
// //             <a href="#" class="card__author" title="author">{{cook.fullName}}</a>
// //           </router-link>
// //         </span>
// //       </div>
// //       </router-link>
// //     </article>
// //   </section>
// // </template>
// // <script>
// // export default {
// //   name: "eventPreview",
// //   props: ["eventsToDisplay"],
// //   data() {
// //     return {
// //       cook: {},
// //     };
// //   },
// //   components: {},
// //   created() {
// //     console.log(this.eventsToDisplay.cookId);
// //     var cookId = this.eventsToDisplay.cookId;
// //     this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
// //       this.cook = cook;
// //     });
// //   },
// //   methods: {},
// //   computed: {
// //     bgImage() {
// //       return (
// //         "background-image: url(" +
// //         this.eventsToDisplay.image +
// //         "); background-size: cover; display:block;"
// //       );
// //     }
// //   }
// // };
// // </script>

// // <style scoped lang="scss">
// // .link {
// //   text-decoration: none;
// // }

// // .cards {
// //   display: flex;
// //   display: -webkit-flex;
// //   justify-content: center;
// //   -webkit-justify-content: center;
// //   max-width: 820px;
// // }

// // .card__img {
// //   background-size: cover;
// //   background-position: center center;
// //   background-repeat: no-repeat;
// //   width: 100%;
// //   height: 235px;
// //   border-top-left-radius: 12px;
// //   border-top-right-radius: 12px;
// //   overflow: hidden;


// // }

// // .card {
// //   margin: 0 auto;
// //   transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
// //   background-color: #fff;
// //   position: relative;
// //   border-radius: 12px;
// //   overflow: hidden;
// //   box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
// //   .card__img_holder {
// //     height: 100%;
// //     transition: transform .3s;
// //   }
// //   &:hover {
// //     box-shadow: 0px 20px 18px -8px rgba(0, 0, 0, 0.1);
// //     .card__img {
// //       background-size: 105%;
// //     }
// //     .card__img_holder {
// //       transform: scale(1.1);
// //     }
// //   }
// // }

// // .card__info {
// //   z-index: 2;
// //   background-color: #fff;
// //   border-bottom-left-radius: 12px;
// //   border-bottom-right-radius: 12px;
// //   padding: 16px 24px 24px 24px;
// // }

// // .card__category {
// //   font-family: "Raleway", sans-serif;
// //   text-transform: uppercase;
// //   font-size: 13px;
// //   letter-spacing: 2px;
// //   font-weight: 500;
// //   color: #868686;
// // }

// // .card__title {
// //   margin-top: 5px;
// //   margin-bottom: 10px;
// //   font-family: "Roboto Slab", serif;
// // }

// // .card__by {
// //   font-size: 12px;
// //   font-family: "Raleway", sans-serif;
// //   font-weight: 500;
// // }

// // .card__author {
// //   font-weight: 600;
// //   text-decoration: none;
// //   color: #ad7d52;
// // }


// // article.card {
// //   width: 100%;
// //   border: 1px solid #80808029;
// // }

// // .price,.card__title,.card__by{
// //   color: #00000085;
// // }
// // .price{
// //     margin: 0;
// //     font-size: 1.3em;
// // }

// // </style>



// /****eventList***/

// {/* <template>
//   <section class="topCooks">
//     <h2>Top Events</h2>
//     <div class="cmp-container container-style">
//          <event-preview class="card-prev" v-for="event in eventsToDisplay" 
//          :key="event._id"
//          :eventsToDisplay = "eventsToDisplay" 
//          ></event-preview>

//       </div>
//     </section>
// </template>
// <script>
// import eventPreview from "@/components/eventPreview.vue";

// export default {
//    name:'eventList',
//    props: {
//      eventsToDisplay: Array
//    },
//    components: {
//      eventPreview
//    },
// }
// </script>

// <style scoped lang="scss">
// .topCooks {
//   margin-top: 10px;
// }

// .cmp-container {
//   display: grid;
//   grid-template-columns: 4fr 4fr 4fr;
//   gap: 20px;
//   text-decoration: none;
// }
// @media only screen and (max-width: 800px) {
//    .cmp-container {
//   // width: 90%;
//   // margin: 0 auto;
//   display: grid;
//   grid-template-columns: 12fr;
//   gap: 5px;
// }
// }
// li {
//   list-style-type: none;
// }

// h2 {
//   text-align: center;
//   color: rgba(56, 53, 53, 0.822);
//    font-family: 'Josefin Sans', sans-serif;
//    text-transform: uppercase;
//    font-size: 1.5em;
//    padding: 15px;

// }

// .card-prev{
//   margin-bottom:20px;
// }


// </style> */}



// /****HOME****/

// {/* <template>
//   <section>
//     <app-header class="app-header"></app-header>
//     <city-list :cities="cities" />
//     <event-list :eventsToDisplay="eventsToDisplay" @filterEvents="setFilter" ></event-list>
//     <app-footer />
//   </section>
// </template>

// <script>
// import appHeader from "@/components/appHeader.vue";
// import appDesc from "@/components/appDescreption.vue";
// import eventList from "@/components/eventList.vue";
// import appFooter from "@/components/appFooter.vue";
// import cityList from "@/components/cityList.vue";

// export default {
//   name: "home",
//   data(){
//     return {
//        filter: {},
//        eventsToDisplay: null
//     }
//   },
//   components: {
//     appHeader,
//     appDesc,
//     // topRated,
//     // cookList,
//     appFooter,
//     cityList,
//     eventList
//   },
//   methods:{
//     setFilter(filter) {
//       filter = this.filter;
//       this.$store
//         .dispatch({ type: "filterItems", filter })
//         .then(eventsToDisplay => {
//           this.eventsToDisplay = eventsToDisplay;
//           console.log(eventsToDisplay);
          
//         });
//     },
//   },
//   created() {
//     this.$store.dispatch({ type: "loadCooks" });
//     this.$store.dispatch({ type: "filterItems"})
//     .then(eventsToDisplay => {
//           this.eventsToDisplay = eventsToDisplay;
//           console.log(eventsToDisplay);
          
//         });
//     this.$store.dispatch({ type: "loadCities" });
//   },
//   computed: {
//     cooks() {
//       return this.$store.getters.getCooks;
//     },
//     events() {
//       return this.$store.getters.getEvents;
//     },
//     cities() {
//       return this.$store.getters.getCities;
//     }
//   }
// };
// </script>

// <style scoped lang = "scss" >
// .cmp-container {
//   width: 90%;
// }
// h2{
//   text-align: center;
//   margin: 0px;
//   padding: 0px;
//   background-color: rgba(17, 107, 17, 0.219);
//   padding-top: 15px;
// }
// .test{
//   justify-content: center;
//   /* background: yellow; */
//   /* margin: 0 auto */
// // }


// // @media only screen and (max-width: 800px) {
// //    .test{
// //      display: none;
// //    }
// // }
// // </style> */}


// /***Header****/


// // <template>
// //   <section class="header">
// //     <!-- <div> -->
// //       <h1>Unforgettable Tastes</h1>
// //     <div class="search-bar">
// //       <search-bar @filterEvents="emitFilter" ></search-bar>
// //       <!-- <input type="date" placeholder="When?" class="date"> -->
// //       <button class="search-btn" @click="emitFilter">Search</button>
// //     <!-- </div> -->
// //     </div>
// //     <router-view/>
// //   </section>

// // </template>
// // <script>
// // import searchBar from "@/components/searchBar.vue";
// // import navBar from "@/components/navBar.vue"

// // export default {
// //   name: "appHeader",
// //   data(){
// //     return{
// //     filter: {
// //         byTxt: "",
// //       },
// //     }
// //   },
// //   methods:{
// //     emitFilter(){
// //       this.$emit('filterEvents',this.filter)
// //     }
// //   },
// //   components: {
// //     //  appHeader,
// //     searchBar,
// //     navBar

// //   }
// // };
// // </script>

// // <style scoped lang="scss">
// // .logo{
// //   width:50px;
// //   height:50px;
// // }

// // .img-logo{
// //   width:50px;
// //   height:50px;
// // }
// // .search-btn{
// //   font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
// // }
// // .header {
// //   background: blue;
// //   width: 100%;
// //   height: 400px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: space-between;
// //   background-image: url("https://cdn.shopify.com/s/files/1/2206/4495/articles/main-image_0e2e0e40-2fd0-4c18-a0eb-343072fa341f_2048x.jpg?v=1510690904");
// //   background-repeat: no-repeat;
// //   background-size: cover;
  
// // }
// // .date{
// //   background-color: rgba(204, 193, 193, 0.959);
// //     border: none;
// //     border-right: 2px solid black;
// //     width: 300px;
// //     font-size: 1em;
// //     height: 48px;
// //     padding-left: 5px;
// // }
// // .nav-container {
// //   display: flex;
// //   flex-direction: row;
// //   justify-content: space-between;
// //   background-color: white;
// // }

// // .search-bar {
// //   display: flex;
// //   width: 100%;
// //   justify-content: center;
// //   margin-bottom: 70px;
// // }

// // .search-bar > *{
// //   justify-items: center;
// // }

// // .nav-bar {
// //   display: flex;
// //   align-items: center;
// // }

// // .nav-bar > * {
// //   color: #878b8f;
// //   padding: 10px;
// //   font-size: 1.2em;
// //   right: 0px;
// //   text-decoration: none;
// // }
// // .logo {
// //   color: white;

// //   padding: 10px;
// //   font-size: 1.2em;
// // }
// // button{
// //     width: 15%;
// //     background-color: #88c888;
// //     border: none;
// //     cursor: pointer;
// //     font-size: 1.1em;
// //     color: black;
// //     font-weight: bolder;
// //     letter-spacing: 2px;
// //     height: 48px;
// // }

// // button:focus {
// //     outline:none;
// // }

// // h1{
// //   text-align: center;
// //     margin-bottom: 90px;
// //     margin-top: 140px;
// //     font-size: 45px;
// //     color: white;
// //     font-family: 'Ultra', serif;
// // }
// // @media only screen and (max-width: 800px) {
// //     h1{
// //   // text-align: center;
// //   // margin-bottom: 0px;

// //     // text-align: center;
// //     margin-bottom: 70px;
// //     margin-top: 80px;
// //     font-size: 1.5em;
// //     // color: white;
// //     // font-family: 'Ultra', serif;
// //     }

// // .search-bar {
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   margin-bottom: 70px;
// //   flex-direction: column;
// // }
// // button{
// //   width: 25%;
// //   font-size: 1em;
// //   padding: 10px 1px 28px 3px;
// // }

// // .search-bar>*{
// //   border:none;
// // }
// // .date{
// //   padding: 10px;
// //     padding-bottom: 22px;
// //     margin-bottom: 3px;
// // }
// // .header{
// //   height: 250px;
// // }
// // }
// // </style>

