<template>
  <section class="topCooks">
    <div class="cmp-container">
      <displayed-cook></displayed-cook>
      <displayed-cook></displayed-cook>
      <displayed-cook></displayed-cook>
      <displayed-cook></displayed-cook>
      <displayed-cook></displayed-cook>
    </div>
  </section>
</template>
<script>
import displayedCook from "@/components/displayedCook.vue";

export default {
  name: "displayedCooks",
  components: {
    displayedCook
  }
};
</script>

<style scoped lang="scss">
.topCooks {
  background: yellow;
  margin-top: 10px;
}

.cmp-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
