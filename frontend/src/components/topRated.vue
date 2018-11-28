<template>
    <section class="topRated">
      <div class=" cmp-container">
      <top-user /> 
      <top-user />
      <top-user />
      </div>
    </section>
</template>
<script>
import topUser from '@/components/topUser.vue'

export default {
   name:'appHeader',
   components: {
     topUser
   }
}
</script>

<style scoped lang="scss">

.topRated{
  background: #e9b8a4c2;
  margin-top: 10px;
  // width: 100%;
  // height: 400px;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around
  
}
.cmp-container{
width: 80%;
margin: 0 auto;
// margin-top: 10px;
display: flex;
justify-content: space-between;
}

</style>
