<template>
  <div id="app">
    <img src="./assets/logo.png">
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
</style>
