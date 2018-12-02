<template>
  <section class="topCooks">
    <h2>Most Requested Events</h2>
    <div class="cmp-container">
      <!-- <li v-for="event in events" :key="event._id" :event="event">
      <event-preview/>
        </li> -->
         <event-preview v-for="event in events" 
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
  background: #80808036;
  margin-top: 10px;
}

.cmp-container {
  width: 80%;
  margin: 0 auto;
  // margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-decoration: none;
}

li {
  list-style-type: none;
  width: 30%;
}

h2 {
  text-align: center;
  padding: 5px;
  margin: 0;
}
</style>
