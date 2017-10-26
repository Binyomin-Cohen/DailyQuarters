<template>
  <div id="app">
    <h1>Kids Quarters!</h1>
    <img width="150" height="150" src="../static/quarterpic.png"><br>
    <div id="routeLinks">
      <router-link to="getQuarterHistory">Home</router-link>
      <router-link to="makeQuarterEvent">New Quarter Event</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyCGOO_wfJNsf_H-zWDiSD8-ByPIucS7Qpk",
    authDomain: "kidsquarters-f6bbd.firebaseapp.com",
    databaseURL: "https://kidsquarters-f6bbd.firebaseio.com",
    projectId: "kidsquarters-f6bbd",
    storageBucket: "kidsquarters-f6bbd.appspot.com",
    messagingSenderId: "677292795972"
  };
  var fapp = firebase.initializeApp(config);

  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#routeLinks{
  margin: 15px;
  padding: 15px;
  border-bottom: 1px solid #F57C00;
  margin-bottom: 30px;
}
a{
    padding: 7px;
    border-right: 1px solid grey;
}
button{
  background-color: #FFE0B2;
}
 h1{
   color: #F57C00;
 }
</style>
