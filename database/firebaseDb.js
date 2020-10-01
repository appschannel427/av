import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
apiKey: 'AIzaSyBVBsZPj8SOc8eX8KGR_b2rhKnMBqghY90',
  authDomain: 'programming-app-9f98b.firebaseapp.com',
  databaseURL: 'https://programming-app-9f98b.firebaseio.com',
  projectId: 'programming-app-9f98b',
  storageBucket: 'programming-app-9f98b.appspot.com',
  messagingSenderId: '1007660483217',
  appId: '1:1007660483217:ios:fe10c74e418102c04a7530',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;






