<template>
 <section v-if="loggedUser">
     <div class="chat">
        <pre>{{msgInput}}</pre>
      <form @submit.prevent="sendMsg" ref="chat">
        <input  type="text" v-model="msgInput">
        <button>send</button>
      </form>   
     </div>
    </section>
</template>

<script>

export default {
    name: "chat",
    data(){
        return {
            msgInput: '',
            msg: {
                cookId:'',
                guestId: '',
                from: '',
                txt: '',
                time: new Date().getTime()

            }
        }
    },
    created(){
      
    },
    methods:{
    sendMsg() {
        console.log(this.loggedUser);
        this.msg.cookId= this.loggedUser._id;
        
        this.msg.from = this.loggedUser.fullName;
        this.msg.txt = this.msgInput;
        const msgObj = this.msg
    //   const currCookId = this.event.cookId
      this.$socket.emit("newMsg", msgObj);
    this.msgInput = ''
    }
    },
sockets: {
    gotNewMsg(obj) {
      // if (!this.event.msgs) this.event.msgs = [msg];
      // else this.event.msgs.push(msg);
      console.log('fafa',obj);
      obj.guestId = obj.cookId
      console.log('io return',obj.txt);
      this.msgInput = obj.txt
    //   this.$notify({
    //     group: "foo",
    //     title: "You've got new message",
    //     text: "Hello user! This is a notification!",
    //   })
    //   return this.msgInput = msg
    // },
  },
},
computed:{
    msg() {
            return this.msgInput;
        },
        loggedUser(){
            return this.$store.getters.getLoggedCook;
        }
}
}
</script>

<style lang="scss" scoped>

.chat{
    position: absolute;
    top: 200px;

}
// section{
//     border: 3px solid red;
// }
</style>
