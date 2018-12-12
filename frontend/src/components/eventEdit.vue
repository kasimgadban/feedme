<template>
  <section class="edit-cards">
    <div class="card">
      <div class="card-img">
        <div class="card-img-holder" :style="bgImage"></div>
      </div>
      <div class="desc">Title: {{event.description}}</div>
    </div>
    <router-link class="link" :to="'/'">
      <button>Edit</button>
    </router-link>
  </section>
</template>
<script>
export default {
  name: "eventEdit",
  props: ["event"],
  data() {
    return {
      cook: {}
    };
  },
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
.card-img-holder {
  height: 100%;
}
.edit-cards {
  display: flex;
  flex-direction: column;
  border: 1px solid #80808038;
  margin: 5px;
  width: 200px;
}

.card {
  flex: 1;
}
.card-img {
  height: 100px;
  margin: 5px;
}
.card-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

button {
  border: none;
  background: none;
  color: blue;
  margin-top: 5px;
  cursor: pointer;
  height: 20px;
  font-size: 1em;
}
.desc {
  text-align: center;
  padding: 3px;
  color: black;
}
</style>
