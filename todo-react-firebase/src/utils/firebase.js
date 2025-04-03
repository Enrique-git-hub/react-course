import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBLdvakq2s4vyCUy2ct4OhVfQKGRL6UBl4",
    authDomain: "todo-b8c05.firebaseapp.com",
    projectId: "todo-b8c05",
    storageBucket: "todo-b8c05.firebasestorage.app",
    messagingSenderId: "951806768181",
    appId: "1:951806768181:web:3253b3ad0a34af250eed7c"
  };

  const app = initializeApp(firebaseConfig)

export default app