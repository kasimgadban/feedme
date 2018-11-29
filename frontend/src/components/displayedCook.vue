<template>
  <section class="displayed-cook">
    <router-link :to="'cook/'+ cookId">
      <img src="./../images/food1.jpg" alt srcset>
    </router-link>
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis consequuntur voluptate ab sint facilis aspernatur? Nemo, libero odit eum cupiditate maxime laboriosam debitis aliquid commodi explicabo nisi hic optio.</div>
    <div>*********</div>
    <div class="cook-img">Cook img</div>
  </section>
</template>
<script>
export default {
  name: "displayedCook",
  data: {},
  components: {},
  computed: {
    cookId() {
      return 98876765;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
