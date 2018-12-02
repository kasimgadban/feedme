<template>
  <section class="container">
    <div class="images-container"></div>
    <div class="cmp-container">
      <li v-for="cook in cooks" :key="cook._id">
        <cook-preview :cook="cook"/>
      </li>
    </div>
  </section>
</template>

<script>
import cookPreview from "@/components/cookPreview.vue";

export default {
  name: "cityPage",
  data() {
    return {
      cooks: {}
    };
  },
  //     created(){
  //       const cookId = this.$route.params.id
  //       console.log('cook id ',cookId)
  //       if(cookId){

  //         this.$store.dispatch({type: "getById",cookId}).then(cook => {
  //         this.cook = cook;
  //         console.log('cook ',cook);
  //         })
  //       }
  //     },
  //   methods:{
  //     openModal(){
  //       return this.isSend = true;
  //     },
  //     getCookById(){

  //     },

  //   },
  //   computed:{
  //         cooks(){
  //             return this.$store.getters.getCooks
  //         }
  //     },
  components: {
    // requestModal,
    // requestBox
  }
};
</script>

<style scoped lang = "scss">
</style>
