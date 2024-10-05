import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzRAGkGRd4_5QtMd2GGqu43gPq-7Hu7I4",
  authDomain: "ai-marketing-d7595.firebaseapp.com",
  projectId: "ai-marketing-d7595",
  storageBucket: "ai-marketing-d7595.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);