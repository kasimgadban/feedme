<template>
  <section class="displayed-cook">
    <router-link :to="'cook/'+cook.id" :cook="cook">
      <img class="card-img" src="./../images/food1.jpg" alt srcset>
    </router-link>
    <div class="host-card"> 
        <div >Hosted by {{cook.firstName}} in {{cook.address.city}}</div>
        <img class="user-img"  :src = "`https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg`">
        <h3>{{cook.prevDesc}}</h3>
        <h4>{{cook.ratingAvg}}</h4>
        </div>
  </section>
</template>
<script>
export default {
  name: "cookPreview",
  props: ["cook"]
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
  margin-top: 20px;
}

.host-card {
  padding: 2px;
}
</style>
