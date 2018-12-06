<template>
  <section class="topCooks">
    <h2>Most Requested Events</h2>
    <div class="cmp-container">
         <event-preview class="card-prev" v-for="event in events" 
         :key="event._id"
         :event = "event" 
         ></event-preview>

      </div>
    </section>
</template>
<script>
import eventPreview from "@/components/eventPreview.vue";

export default {
   name:'eventList',
   props: {
     events: Array
   },
   components: {
     eventPreview
   },
}
</script>

<style scoped lang="scss">
.topCooks {
  margin-top: 10px;
}

// .cmp-container {
//   width: 90%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   text-decoration: none;
//   justify-content: center;
//   // margin-bottom: 10px;
// }
.cmp-container {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  gap: 20px;
  text-decoration: none;
}
@media only screen and (max-width: 800px) {
   .cmp-container {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12fr;
  gap: 5px;
}
}
li {
  list-style-type: none;
  // width: 30%;
}

h2 {
  text-align: center;
  margin: 0;
  padding: 15px;
}

.card-prev{
  margin-bottom:20px;
}


</style>
