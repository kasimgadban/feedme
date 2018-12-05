<template>
  <!-- <section class="displayed-cook wrapper">
    <router-link class="link" :to="'/event/'+ event._id">
      <div class="card">
        <img class="card-img" src="./../images/food1.jpg" alt srcset>
        <hr style="margin-left:10px; color:green">
        <div class="event-details">
          <h4>${{event.price}}</h4>
          <router-link class="link" :to="'/cook/'+ event.cookId">
            <div class="host-card">
              <h4 class="host-name">
                <span class="by">Hosted by:</span> Tamara
              </h4>
              <img
                class="user-img"
                :src="`https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg`"
              >
            </div>
          </router-link>
        </div>
      </div>
    </router-link>
  </section> -->
  <section class="cards">
<article class="card card--1">
  <div class="card__info-hover">
    <!-- <svg class="card__like"  viewBox="0 0 24 24"> -->
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
<!-- </svg> -->
    
  </div>
  <div class="card__img"></div>
  <router-link class="link" :to="'/event/'+ event._id" >
     <div class="card__img--hover"></div>
  </router-link>
  <div class="card__info">
    <h4>${{event.price}}</h4>
    <h3 class="card__title">Text about the event</h3>
    <span class="card__by">Hosted by <router-link class="link" :to="'/cook/'+ event.cookId"><a href="#" class="card__author" title="author">Tamara</a></router-link></span>
  </div>
</article>
  
  
  
  
  
  </section>
</template>
<script>
export default {
  name: "eventPreview",
  props: ["event"],
  components: {},
  created() {
    this.$store.dispatch({ type: "loadEvents" });
  }
};
</script>

<style scoped lang="scss">
// .card {
//   display: flex;
//   // flex-direction: column;
//   background: rgba(255, 255, 255, 0.329);
//   padding: 10px;
//   border: 1px solid rgba(128, 128, 128, 0.13);
//   border-radius: 5%;
//   box-shadow: -9px -6px 14px -4px rgba(184, 173, 184, 1);
// }
// .card:hover {
//   // box-shadow: -9px -6px 14px -4px rgba(184, 173, 184, 1);
//   margin-top: -5px;
// }

// .displayed-cook {
//   padding: 10px;
// }
// .user-img {
//   width: 50px;
//   height: 50px;
//   border-radius: 20%;
// }
// .card-img {
//   width: 100%;
//   border-radius: 5%;
// }
// .displayed-cook {
//   margin-top: 20px;
// }
// .event-details {
//   padding: 10px;
//   margin: 0 auto;
//   align-self: center;
// }
// .host-card {
//   padding: 2px;
// }

.link {
  text-decoration: none;
  // color: black;
}

// h4 {
//   margin: 0 auto;
// }
// .card {
//   // padding: 10px;
//   // border: 1px solid;
// }
// .host-name {
//   color: green;
// }
// .by {
//   color: black;
// }

.cards {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;
}

.card--1 .card__img, .card--1 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.card--2 .card__img, .card--2 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}
.card__img {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  
}

.card__info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
   border-top-right-radius: 12px;
  top: 0;
  
}
.card {
  margin: 0 auto;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  // width: 33.3%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
}
.card:hover {
  box-shadow: 0px 20px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.0, 1.0);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
}

article.card{
    width: 100%;
    border: 1px solid #80808029;
}

</style>
