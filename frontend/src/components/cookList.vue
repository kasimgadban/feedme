<template>
    <section class="topCooks">
        <div class="cmp-container">
            <li v-for="cook in cooks"
               :key="cook.id">
        <cook-preview :cook="cook" />
        </li>
            <!-- <pre>
                {{cooks}}
                </pre> -->
      </div>
    </section>
</template>
<script>
import cookPreview from '@/components/cookPreview.vue'

export default {
   name:'cookList',
   props: {
       cooks: {}
   },
   components: {
     cookPreview
   },
//    created() {
//         this.$store.dispatch({type: 'loadCooks'})
//     },
//    computed: {
//        cooks(){
//             return this.$store.getters.getCooks;
//         }
//    }
}
</script>

<style scoped lang="scss">
.topCooks{
    background: gray;
    margin-top: 10px;
}

.cmp-container{
width: 80%;
margin: 0 auto;
// margin-top: 10px;
display: flex;
// flex-direction: row;
// flex-wrap: wrap;
justify-content: space-between;
}


</style>
