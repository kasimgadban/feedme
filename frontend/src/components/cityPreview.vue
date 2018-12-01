<template>
  <section class="displayed-cook">
    <router-link :to="'city/'+city.id" :city="city">
      <img class="card-img" src="https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg" alt srcset  >
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'cityPreview',
  props: ['city'],
  components: {},
};
</script>

<style scoped lang="scss">

</style>
