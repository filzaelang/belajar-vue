import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7uL7ItKMigE28JXMMmNlthXixKfidazc",
    authDomain: "vue-belajar-60fa6.firebaseapp.com",
    projectId: "vue-belajar-60fa6",
    storageBucket: "vue-belajar-60fa6.appspot.com",
    messagingSenderId: "5749951662",
    appId: "1:5749951662:web:4b2b3dde4c5161d23bf13f",
    measurementId: "G-TD93CBG94X"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }