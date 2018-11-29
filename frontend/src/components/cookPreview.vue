<template>
  <section class="displayed-cook">
    <router-link :to="'cook/'+cook.id" :cook="cook">
      <img src="./../images/food1.jpg" alt srcset  >
    </router-link>
        <div>Hosted by: {{cook.firstName}} {{cook.lastName}}</div>
                <img class="user-img"  :src = "`https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg`">

        <h2>{{cook.prevDesc}}</h2>
        <h6>{{cook.address.city}}</h6>
        <h4>{{cook.ratingAvg}}</h4>
  </section>
</template>
<script>
export default {
  name: 'cookPreview',
  props: ['cook'],
  // data: {
  //   cook: []
  // },
  components: {},
  // computed: {
  //   cookId() {
  //     return cook.id;
  //   }
  // }
};
</script>

<style scoped lang="scss">
.user-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
