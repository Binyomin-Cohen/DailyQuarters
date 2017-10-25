<template>
  <div class="hello">
    <select v-model="kid">
      <option value="Shmuel">Shmuel</option>
      <option value="Leah-Bracha">Leah Bracha</option>
      <option value="Aharon-Noam">Aharon Noam</option>
    </select>
    <h1>{{kid}}</h1>
    <h2>Current Total: {{total}}</h2>
    <table class="table table-striped">
      <tr class="table-success"><th>difference</th><th>reason</th><th>kid</th></tr>
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
        total: 0,
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
          var beginDate = new Date();
          theComponent.total = theComponent.calculateTotal(beginDate, eventsArray);
        });
      },
      calculateTotal: function(dateToBeginWith, eventsArray){
          var beginDate = new Date(dateToBeginWith);
          var daysDifference  = (new Date() - beginDate) / 1000 / 60/ 60 / 24 /4; // 10000 milliseconds, 60 seconds, 60 minutes, 24 hours
          var totalFromEvents = 0;
          for(var i = 0; i < eventsArray.length; i++){
              totalFromEvents += Number(eventsArray[i].amount);
          }
          return daysDifference + totalFromEvents;
      }
    },
    watch: {
        kid: function(kid){
            this.getHistory();
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    padding: 10px;
  }
</style>
