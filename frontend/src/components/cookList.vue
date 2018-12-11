<template>
  <section class="topCooks">
    <h2>Top rated hosts</h2>
    <div class="cmp-container container-style">
      <li v-for="cook in cooks" :key="cook._id">
        <cook-preview :cook="cook"/>
      </li>
    </div>
  </section>
</template>
<script>
import cookPreview from "@/components/cookPreview.vue";

export default {
  name: "cookList",
  props: {
    cooks: Object
  },
  components: {
    cookPreview
  }
};
</script>

<style scoped lang="scss">
.topCooks {
  margin-top: 10px;
}

.cmp-container {
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
