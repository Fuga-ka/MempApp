import { initializeApp } from "firebase/app"
// @ts-expect-error: firebase/auth/react-native is not recognized by TS, but it exists at runtime
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGEINGSENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export {app, auth, db}
