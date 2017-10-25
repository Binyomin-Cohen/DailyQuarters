<template>
  <div class="hello">
    <select v-model="kid">
      <option value="Shmuel">Shmuel</option>
      <option value="Leah-Bracha">Leah Bracha</option>
      <option value="Aharon-Noam">Aharon Noam</option>
    </select>
    <input v-model="amount" type="number">
    <input v-model="reason" type="text">
    <button v-on:click="createEvent">Make Event</button>
  </div>
</template>

<script>
  var firebase = require('firebase');

  export default {
    name: 'MakeQuarterEvent',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        kid: '',
        amount: 0,
        reason: ''
      }
    },
    methods: {
        createEvent: function(){
            this.submitEvent(this.kid, this.amount, this.reason);
        },
        submitEvent: function(kid, amount, reason){
          firebase.database().ref('events/' + kid).push({
            kid: kid,
            amount: amount,
            reason : reason,
            date: new Date()
          });
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
