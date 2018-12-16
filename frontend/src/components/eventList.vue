<template>
  <section class="topCooks">
    <h2>Top Events</h2>
    <div class="cmp-container container-style">
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

.cmp-container {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-column-gap: 20px;
  text-decoration: none;
}
@media only screen and (max-width: 800px) {
   .cmp-container {
  display: grid;
    grid-template-columns: 6fr 6fr;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
}
}
li {
  list-style-type: none;
}

h2 {
  text-align: center;
  color: rgba(56, 53, 53, 0.822);
   font-family: 'Josefin Sans', sans-serif;
   text-transform: uppercase;
   font-size: 1.5em;
   padding: 15px;

}

.card-prev{
  margin-bottom:20px;
}


</style>
