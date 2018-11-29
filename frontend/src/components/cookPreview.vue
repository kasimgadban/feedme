<template>
  <section class="displayed-cook">
    <router-link :to="'cook/'+ cookId">
      <img src="./../images/food1.jpg" alt srcset>
    </router-link>
        <div>Hosted by: {{cook.firstName}} {{cook.lastName}}</div>
        <img class="user-img"  alt="">
  </section>
</template>
<script>
export default {
  name: 'cookPreview',
  props: ['cook'],
  // data: {},
  components: {},
  computed: {
    cookId() {
      // return 98876765;
    }
  }
};
</script>

<style scoped lang="scss">
.user-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
