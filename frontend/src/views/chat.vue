<template>
<section>
    this is Chat !!!!!!!!!!!!!!!!!!!!111
    <!-- {{msg}} -->
</section>


</template>

<script>
export default {
    name: "chat",
    data(){
        return {
            msgInput: ''
        }
    },
sockets: {
    // gotBookNoti(msg) {
    //   // if (!this.event.msgs) this.event.msgs = [msg];
    //   // else this.event.msgs.push(msg);
    //   // console.log('fafa');
    //   console.log(msg);
      
    //   this.$notify({
    //     group: "foo",
    //     title: "You've got new message",
    //     text: "Hello user! This is a notification!",
    //   })
    //   return this.msgInput = msg
    // },
  },
computed:{
    msg() {
            return this.msgInput;
        },
}
}
</script>

<style lang="sass" scoped>

</style>
