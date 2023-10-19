
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCGt7HUg2mStUDk25g0ibr7NUgML4CvawA",
    authDomain: "milk-shop-aaede.firebaseapp.com",
    projectId: "milk-shop-aaede",
    storageBucket: "milk-shop-aaede.appspot.com",
    messagingSenderId: "104821357402",
    appId: "1:104821357402:web:6179a7eaaacc90c01f9163",
    measurementId: "G-6MN63JQ3KY"
};

 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);