import firebase from "firebase";
import "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
if(!firebase.apps.length){
firebase.initializeapp({apikey:process.env})
}