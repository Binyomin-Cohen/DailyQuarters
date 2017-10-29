<template>
  <div class="hello">
    <div id="kidChooser">
      <label for="historyKid">Choose Kid</label>
      <select v-model="kid" id="historyKid">
        <option value="Shmuel">Shmuel</option>
        <option value="Leah-Bracha">Leah Bracha</option>
        <option value="Aharon-Noam">Aharon Noam</option>
      </select>
    </div>
    <h1>{{kid}}</h1>
    <h2>Current Total: {{total}}</h2>
    <table class="table table-striped">
      <tr class="table-warning"><th>difference</th><th>reason</th><th>kid</th></tr>
      <tr v-for="qEvent in quarterEvents">
        <td>{{qEvent.amount}}</td><td>{{qEvent.reason}}</td><td>{{qEvent.kid}}</td><td><button v-on:click="deleteEvent(qEvent.theKey)">delete</button></td>
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
              var singleEvent = snapVal[snapKeys[i]];
              singleEvent.theKey = snapKeys[i];
              eventsArray.push(singleEvent);
          }
          console.log(eventsArray);
          theComponent.quarterEvents = eventsArray;
          var beginDate = new Date("Thu May 25 2017");
          theComponent.total = theComponent.calculateTotal(beginDate, eventsArray);
        });
      },
      calculateTotal: function(dateToBeginWith, eventsArray){
          var beginDate = new Date(dateToBeginWith);
          var daysDifference  = Math.floor((new Date() - beginDate) / 1000 / 60/ 60 / 24) ; // 10000 milliseconds, 60 seconds, 60 minutes, 24 hours
          console.log('days difference:    ' + daysDifference)
          var totalFromEvents = 0;
          for(var i = 0; i < eventsArray.length; i++){
              totalFromEvents += Number(eventsArray[i].amount);
          }
          return daysDifference + totalFromEvents;
      },
      deleteEvent(eventId){
        var theComponent = this;
        firebase.database().ref('/events/' + theComponent.kid + '/' + eventId).set(null);
        theComponent.getHistory();
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
  #kidChooser{
    background-color: #FFE0B2;
    width: 250px;
    padding: 15px;
    margin: auto;
    margin-bottom: 30px;
  }
</style>
