<template>
  <section class="displayed-cook">
    <router-link class="link" :to="'/event/'+ event._id" >
      <img class="card-img" src="./../images/food1.jpg" alt srcset  >
      <div class="event-details">
       <h3>{{event.date}}</h3>
        <h4>{{event.time}}</h4>
         <h4>${{event.price}}</h4>
         </div>
    </router-link>
    <hr>
    <router-link class="link" :to="'/cook/'+ event.cookId" >
    <div class="host-card"> 
     <img class="user-img"  :src = "`https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg`">
       <h4 class="host-name"><span class="by">Hosted by:</span> {{event.cookId}}</h4>
        </div> 
        </router-link>
  </section>
</template>
<script>
export default {
  name: 'eventPreview',
  props: ['event'],
  components: {},
   created() {
     var eventId = this.event._id
     this.$store.dispatch({type: 'loadEvents'})
  }, 
};
</script>

<style scoped lang="scss">
.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-img {
  width: 100%;
}
.displayed-cook {
  text-align: center;
  background-color: #8080801a;
  border: 1px solid #80808012;
  margin-top: 20px;
}
.displayed-cook:hover {
  box-shadow: -9px -6px 14px -4px rgba(184, 173, 184, 1);
  position: relative;
  top: -5px;
}

.host-card {
  padding: 2px;
}

.link{
 text-decoration: none;
 color: black;
}
.event-details>*{
  margin:8px;
}

.host-name{
  color: green;
}
.by{
  color: black
}
</style>
