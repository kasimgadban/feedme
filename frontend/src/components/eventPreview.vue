<template>
  <section class="cards">
    <div class="card" style="display:flex; flex-direction:column;">
      <div class="details-wrapper" style="display:flex; flex:1;">
      <router-link class="link" :to="'/event/'+ event._id">
      <div class="card__img">
        <div class="card__img_holder" :style="bgImage"></div>
      </div>
      <div class="card__info">
        <div class="test1">
        <h4 class="price">${{event.price}}</h4>
        <h3 class="card__title">{{event.description}}</h3>
        <div class="host-img" :style="hostImage"></div>
        </div>
      </div>
         </router-link>
         </div>
        <div class="host-wrapper" style="display:flex; height:50px; padding:15px;">
        <span class="card__by">Hosted by
          <router-link class="link" :to="'/cook/'+ event.cookId">
            <a href="#" class="card__author" title="author">{{cook.fullName}} </a>
             <!-- <div class="host-img" :style="hostImage"></div> -->
          </router-link>
          <span>in {{cook.city}}</span>
        </span>
        </div>
      </div>
    
  </section>
</template>
<script>
export default {
  name: "eventPreview",
  props: ["event"],
  data() {
    return {
      cook: {}
    };
  },
  components: {},
  created() {
    this.$store.dispatch({ type: "loadEvents" });
    var cookId = this.event.cookId;
    this.$store.dispatch({ type: "getCookById", cookId }).then(cook => {
      this.cook = cook;
    });
  },
  methods: {},
  computed: {
    bgImage() {
      return (
        "background-image: url(" +
        this.event.image +
        "); background-size: cover; display:block;"
      );
    },
    hostImage(){
      return (
        "background-image: url(" +
        this.cook.image +
        "); background-size: cover; display:block;     opacity: 0.78;"
      );
    }
  }
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
}

.cards {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  max-width: 820px;
  width: 100%;
}

.host-img{
    width: 60px;
    height: 60px;
    border: 1px solid;
    border-radius: 50%;
    position: absolute;
    /* top: 200px; */
    /* left: 130px; */
    top: 45%;
    left: 40%;
    border:3px solid white;
}

.card__img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;


}

.card {
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  // box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  .card__img_holder {
    height: 100%;
    transition: transform .3s;
  }
  &:hover {
    // box-shadow: 0px 20px 18px -8px rgba(0, 0, 0, 0.1);
    .card__img {
      background-size: 105%;
    }
    .card__img_holder {
      transform: scale(1.1);
    }
  }
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
}

.card__category {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}

.card__title {
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: "Roboto Slab", serif;
}

.card__by {
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}

.card__author {
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
}


article.card {
  width: 100%;
  border: 1px solid #80808029;
}

.price,.card__title,.card__by{
  color: #00000085;
}
.price{
    margin: 0;
    font-size: 1.3em;
}

@media only screen  and (max-width: 800px){
  .host-img{
top: 48%;
}
}

</style>
