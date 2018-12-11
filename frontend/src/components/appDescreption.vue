<template>
  <div class="desc-container">
    
    <div class="desc">
      <img src="../images/calendar.png" alt srcset>
      <h4>Book</h4>
        <div class="txt">Book an unforgetable experience at your desired destination.
        Choose your favorite event and get ready to meet new people</div>
    </div>
    <div class="desc">
      <img src="../images/eat.png" alt srcset>
      <h4>Join us</h4>
        <div class="txt">Craete your own events and become a member of our talented team
        Add your best meals and amaze your guests with your cooking talents</div>
    </div>
  </div>
</template>


<script>
export default {
};
</script>


<style scoped lang="scss">
.desc-container {
  background:rgba(17, 107, 17, 0.219);
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 100%;
}

.desc-container>*{
  text-align: center;
  text-align: -webkit-center;
  padding: 10px;
}
h4{
  margin: 10px;
}

img{
  width: 50px;
  height: 50px;
  margin: 0 auto
}
.desc{
  display: flex;
  flex-direction: column;
}
.txt{
   white-space: wrap; 
    width: 50%; 
    line-height: 1.6;
    overflow: hidden;
    text-overflow: clip; 
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif 
}

</style>
