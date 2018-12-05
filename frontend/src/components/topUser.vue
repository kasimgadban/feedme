<template>
  <section class="top-user">
    <img src="./../images/food1.jpg" alt srcset>
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis consequuntur voluptate ab sint facilis aspernatur? Nemo, libero odit eum cupiditate maxime laboriosam debitis Aliquid commodi explicabo nisi hic optio.</div>
    <div>*********</div>
    <div class="cook-img">Cook img</div>
  </section>
</template>
<script>
export default {
  name: "topUser",
  components: {}
};
</script>

<style scoped lang="scss">
.cook-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.top-user {
  background: blue;
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-around;
}
.cmp-container {
  width: 90%;
}
</style>
