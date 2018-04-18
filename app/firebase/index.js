import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig.js';


var fire = firebase.initializeApp(firebaseConfig);

var database = {};

database.menuItems = firebase.database().ref('/Syracuse');
database.users = firebase.database().ref('/Users');
database.pics = firebase.database().ref('/Pics');

module.exports = {
  fire,
  database
}
