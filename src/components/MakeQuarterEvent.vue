<template>
  <div class="hello">
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="kid">Kid:</label>
        <select v-model="kid" id="kid" class="form-control">
          <option value="Shmuel">Shmuel</option>
          <option value="Leah-Bracha">Leah Bracha</option>
          <option value="Aharon-Noam">Aharon Noam</option>
        </select>
      </div>
      <div class="form-group">
        <label for="amount">Quarter Amount</label>
        <input v-model="amount" id="amount" type="number" class="form-control">
      </div>
      <div class="form-group">
        <label for="reason">Reason</label>
        <input type="text" class="form-control" id="reason" v-model="reason">
      </div>
      <button v-on:click="createEvent" class="btn btn-default">Make Event</button>
    </form>

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
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label, select, input{
    width: 300px;
    max-width: 100%;
    margin: auto;
  }
</style>
