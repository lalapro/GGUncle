import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig.js';


var fire = firebase.initializeApp(firebaseConfig);

var database = {};

database.menuItems = firebase.database().ref('/Syracuse');
database.test = firebase.database().ref('/test');

module.exports = {
  fire,
  database
};
