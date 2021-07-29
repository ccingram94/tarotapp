import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { FirebaseCredentials } from './credentials'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firestore = (
    firebase.apps[0] ?? firebase.initializeApp(FirebaseCredentials)
).firestore()

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ],
  adapter: FirebaseAdapter(firestore)
})