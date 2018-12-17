<template>
  <section class="cards">
    <router-link class="link" :to="'/event/'+ event._id">
      <div class="event-card">
        <div class="event-img-holder">
          <div class="event-img" :style="bgImage"></div>
        </div>
        <div class="event-details">
          <router-link class="link" :to="'/cook/'+ event.cookId">
            <div class="host-img" :style="hostImage"></div>
          </router-link>
          <div class="host-desc">
            <span class="host">
              <router-link class="link" :to="'/cook/'+ event.cookId">Hosted by
                <span class="host-name">{{hostName}}</span>
                in {{cook.city}}
              </router-link>
            </span>
            <h3 class="desc">{{event.description}}</h3>
          </div>
          <div class="event-price">
            <div class="rating-wrapper">
              <span class="fa fa-star checked event-star"></span>
              <span class="rating-fix">{{(cook.rating).toFixed(1)}}</span>
              <span class="rating-count">({{cook.review.length}})</span>
            </div>
            <span>${{event.price}}</span>
          </div>
        </div>
      </div>
    </router-link>
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
    hostImage() {
      return (
        "background-image: url(" +
        this.cook.image +
        "); background-size: cover; display:block;"
      );
    },
    hostName() {
      var name = this.cook.fullName;
      var firstName = name.split(" ")[0];
      return firstName;
    }
  }
};
</script>

<style scoped lang="scss">
.cards {
  height: 100%;
}

.event-img-holder {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 130px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
}

.event-img-holder:hover {
  background-size: 105%;
}

.event-img:hover {
  transform: scale(1.1);
}

.event-card {
  border: 1px solid #00000030;
  height: 100%;
  border-radius: 3px;
  position: relative;
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.event-img {
  height: 100%;
  transition: transform 0.3s;
}
.event-details {
  height: 100px;
}
.host-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 40%;
  left: 40%;
}

.event-price {
  position: absolute;
  background-color: white;
  height: 20px;
  width: 100%;
  bottom: 2%;
  right: 0%;
  text-align: end;
  font-weight: bolder;
  border-top: 1px solid rgba(155, 146, 146, 0.344);
  display: flex;
  justify-content: space-between;
  padding: 3px;
}
.event-star {
  font-size: small;
  color: gold;
  line-height: 23px;
}
.fa-star::before {
  margin-right: 3px;
}
.rating-count {
  font-size: x-small;
  color: rgba(164, 160, 160, 0.44);
  line-height: 25px;
}
.rating-wrapper {
  display: inline-flex;
  justify-content: space-between;
  width: 50px;
  line-height: 24px;
}

.rating-fix {
  font-size: small;
  color: gold;
  margin-right: 2px;
}

.host-desc {
  position: absolute;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.host {
  font-size: 0.7em;
}
.desc {
  font-size: 0.8em;
  margin-top: 5px;
  // font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.link {
  color: black;
}

.host-name {
  color: #ad7d52;
}

@media only screen and (max-width: 740px) {
  .desc {
    margin-top: 10px;
  }
  .event-card{
    border:none;
    border-bottom: 1px solid #00000030;
    width: 100%;
  }
}
</style>
