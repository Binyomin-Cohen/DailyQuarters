<template>
  <div class="hello">
    <select v-model="kid">
      <option value="Shmuel">Shmuel</option>
      <option value="Leah-Bracha">Leah Bracha</option>
      <option value="Aharon-Noam">Aharon Noam</option>
    </select>
    <button v-on:click="getHistory">Get History</button>
    <table>
      <tr v-for="qEvent in quarterEvents">
        <td>{{qEvent.amount}}</td><td>{{qEvent.reason}}</td><td>{{qEvent.kid}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  var firebase = require('firebase');

  export default {
    name: 'QuarterHistory',
    data () {
      return {
        kid: '',
        quarterEvents:[]
      }
    },
    methods: {
      getHistory: function(){
        var theComponent = this;
        firebase.database().ref('/events/' + theComponent.kid).once('value').then(function(snapshot) {
          var snapVal = snapshot.val();
          console.log(snapVal);
          var snapKeys = Object.keys(snapVal);
          console.log(snapKeys);
          var eventsArray = [];
          for(var i = 0; i < snapKeys.length; i++){
              eventsArray.push(snapVal[snapKeys[i]]);
          }
          console.log(eventsArray);
          theComponent.quarterEvents = eventsArray;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
