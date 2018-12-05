  <!-- <section class="container">
<template>
    <div class="images-container"></div>

    <button style="margin:5px;width:90px;height:30px;font-size:20px">Back</button>

    <div class="content">
      <h2>Village</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum urna,
        finibus volutpat leo sit amet, vulputate posuere orci.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Pellentesque non massa sed augue iaculis blandit sed id leo.
        Integer facilisis ex scelerisque urna efficitur interdum.
        Curabitur tincidunt leo iaculis risus convallis vulputate.
        Fusce imperdiet mollis eros vel sodales. In tempor diam et blandit porta.
        Suspendisse sed enim eget elit aliquam pulvinar. Etiam porta lacinia nunc, a mattis diam.
        Curabitur porttitor felis vitae elit interdum ullamcorper.
        Vestibulum ornare, sapien vel finibus cursus, justo sapien imperdiet mi, eget porttitor neque
        erat eu tortor.
      </p>
      <p>
        Suspendisse eu rhoncus erat, quis vestibulum tellus.
        Integer porta nibh quis mauris mattis convallis.
        In nunc nisl, bibendum id augue ac, tristique rhoncus libero.
        Donec ut ante ultricies, ullamcorper ipsum eleifend, eleifend nulla.
        In mattis venenatis massa, vitae ornare dolor malesuada sed.
        Mauris condimentum blandit est. Sed cursus mauris est, at sagittis enim mollis ac.
        Maecenas in mauris ipsum. Proin vel aliquam libero, nec vehicula velit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum libero magna, semper et nisl ut, facilisis dapibus dui.
      </p>

      <p>
        Vivamus convallis, metus eu varius iaculis, lorem nisl fermentum quam, quis suscipit leo erat
        quis massa. Quisque id turpis eget eros placerat condimentum. Ut in faucibus arcu. Aenean digni
        ssim finibus dui, maximus tempor metus pretium a. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Vestibulum dui ex, vehicula vel fermentum a, suscipit
        ut ipsum. Cras efficitur velit arcu, in venenatis massa mollis ut. Integer eget ligula magna.
        Sed pulvinar condimentum dui at laoreet. Curabitur volutpat finibus sapien id vulputate.
        Sed at cursus orci. Suspendisse maximus, nulla vestibulum auctor fringilla, nisi metus elementum
        eros, non sollicitudin ex enim et odio. Nunc lacinia velit sit amet vehicula iaculis.
        Donec eget aliquet lorem, vitae viverra arcu. Vivamus mauris arcu, placerat eu ullamcorper sit
        amet, convallis semper lectus. Cras eget luctus libero, consectetur efficitur libero.
      </p>
    </div>

    <div class="cooks">
      <h3>Cooks who serve this kind of hosting</h3>
      <section class="cooks-images-container">
        <div class="user-card">
          <img src="../images/cook1.jpg" class="cook_image" alt>
          <span class="user-name">Kasim Tabach</span>
          <star-rating v-model="rating" v-bind:star-size="20" read-only="true" :show-rating="false"></star-rating>
        </div>
        <div class="user-card">
          <img src="../images/cook5.jpg" class="cook_image" alt>
          <sapn class="user-name">Sawsan Tabachet</sapn>
          <star-rating v-model="rating" v-bind:star-size="20" read-only="true" :show-rating="false"></star-rating>
        </div>
        <div class="user-card">
          <img src="../images/cook4.jpg" class="cook_image" alt>
          <span class="user-name">Tamara tabacha</span>
          <star-rating v-model="rating" v-bind:star-size="20" read-only="true" :show-rating="false"></star-rating>
        </div>
      </section>
    </div>
</template>
  </section> -->
<script>

// import requestModal from "@/components/requestModal.vue";
// import StarRating from "vue-star-rating";

// export default {
//   name: "cookPage",
//   props: ["hosting"],
//   data: () => ({
//     isShowModal: false,
//     isAdmin: false,
//     rating: 3
//   }),
//   methods: {
//     openModal() {
//       return (this.isSend = true);
//     },
//     testlll() {
//       this.isShowModal = true;
//     },
//     created() {
//       isShowModal = false;
//     }
//   },
//   components: {
//     requestModal,
//     StarRating
//   }
// };
// </script>

// <style scoped lang = "scss">
// .images-container {
//   width: 100%;
//   height: 300px;
//   background-image: url(../images/host_village.jpg);
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 10px;
// }

// .container {
//   display: grid;
//   grid-template-rows: 250px 1fr;
// }

// .cooks {
//   display: flex;
//   flex-direction: column;
// }

// .cook_image {
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
// }

// .cooks-images-container {
//   display: flex;
//   margin-top: 10px;
// }

// .user-card {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 120px;
//   margin-right: 20px;
// }

// .user-name {
//   font-size: 15px;
//   font-weight: bold;
//   margin-top: 10px;
//   margin-bottom: 10px;
// }

// .wrapper {
//   display: grid;
//   gap: 20px;
//   margin: 0 auto;
//   grid-template-columns: 1fr 300px;
//   width: 90%;
//   padding: 10px;
//   position: relative;
//   border: 2px solid black;
// }
// </style>