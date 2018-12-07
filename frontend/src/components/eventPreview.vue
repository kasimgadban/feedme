<template>
  <section class="cards">
<<<<<<< HEAD
<article class="card card--1">
  <div class="card__info-hover">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    
  </div>
  <div class="card__img"></div>
  <router-link class="link" :to="'/event/'+ event._id" >
     <div class="card__img--hover"></div>
  </router-link>
  <div class="card__info">
    <h4>${{event.price}}</h4>
    <h3 class="card__title">{{event.descrption}}</h3>
    <span class="card__by">Hosted by <router-link class="link" :to="'/cook/'+ event.cookId"><a href="#" class="card__author" title="author">Tamara</a></router-link></span>
  </div>
</article>
  
  
  
  
  
=======
    <article class="card card--1">
      <router-link class="link" :to="'/event/'+ event._id">
      <div class="card__img">
        <div class="card__img_holder" :style="bgImage"></div>
      </div>
      <div class="card__info">
        <h4 class="price">${{event.price}}</h4>
        <h3 class="card__title">{{event.description}}</h3>
        <span class="card__by">Hosted by
          <router-link class="link" :to="'/cook/'+ event.cookId">
            <a href="#" class="card__author" title="author">{{cook.fullName}}</a>
          </router-link>
        </span>
      </div>
      </router-link>
    </article>
>>>>>>> db24b4593b6fd9220280109288ad6a552f233335
  </section>
</template>
<script>
export default {
  name: "eventPreview",
  props: ["event"],
  data() {
    return {
      cook: Object
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
}

.card__img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;


}

.card {
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  .card__img_holder {
    height: 100%;
    transition: transform .3s;
  }
  &:hover {
    box-shadow: 0px 20px 18px -8px rgba(0, 0, 0, 0.1);
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

</style>
