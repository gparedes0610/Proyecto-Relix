// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBEB7S-QitWdiQTl22lTNyzinThAOW9WMg",
  authDomain: "relix-66c36.firebaseapp.com",
  projectId: "relix-66c36",
  storageBucket: "relix-66c36.appspot.com",
  messagingSenderId: "44727431690",
  appId: "1:44727431690:web:c1381cbe542684591de5f3",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
