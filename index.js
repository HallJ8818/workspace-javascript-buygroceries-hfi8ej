// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyBC8RZY7dcUF2OTpe8TF30QOUBjAVRaWKc",

  authDomain: "grocerylist-8b594.firebaseapp.com",

  projectId: "grocerylist-8b594",

  storageBucket: "grocerylist-8b594.appspot.com",

  messagingSenderId: "871764817573",

  appId: "1:871764817573:web:12fb4afd10b423a69a7f4c",

  measurementId: "G-YS8JY5WKP6"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content
$(this).text("saved");

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value,//?
    });

  });

});
