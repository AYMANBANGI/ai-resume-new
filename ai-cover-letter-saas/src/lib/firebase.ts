import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, getDocs, orderBy, limit } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { User } from '@/types'
import { generateReferralCode } from './utils'

const firebaseConfig = {
  // In production, these should be environment variables
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    await createUserProfile(result.user)
    return result.user
  } catch (error) {
    throw error
  }
}

export const signUpWithEmail = async (email: string, password: string, referralCode?: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await createUserProfile(result.user, referralCode)
    return result.user
  } catch (error) {
    throw error
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    throw error
  }
}

export const createUserProfile = async (firebaseUser: any, referralCode?: string) => {
  const userRef = doc(db, 'users', firebaseUser.uid)
  const userDoc = await getDoc(userRef)
  
  if (!userDoc.exists()) {
    const userData: Omit<User, 'id'> = {
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      isPro: false,
      freeUsageCount: 0,
      referralCode: generateReferralCode(),
      referredBy: referralCode,
      createdAt: new Date()
    }
    
    await setDoc(userRef, userData)
    
    // Handle referral bonus
    if (referralCode) {
      await handleReferralBonus(referralCode, firebaseUser.uid)
    }
  }
}

export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)
    
    if (userDoc.exists()) {
      return { id: userId, ...userDoc.data() } as User
    }
    return null
  } catch (error) {
    console.error('Error getting user profile:', error)
    return null
  }
}

export const updateUserProfile = async (userId: string, updates: Partial<User>) => {
  try {
    const userRef = doc(db, 'users', userId)
    await updateDoc(userRef, updates)
  } catch (error) {
    console.error('Error updating user profile:', error)
    throw error
  }
}

export const incrementUsageCount = async (userId: string) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)
    
    if (userDoc.exists()) {
      const currentCount = userDoc.data().freeUsageCount || 0
      await updateDoc(userRef, { freeUsageCount: currentCount + 1 })
    }
  } catch (error) {
    console.error('Error incrementing usage count:', error)
    throw error
  }
}

const handleReferralBonus = async (referralCode: string, newUserId: string) => {
  try {
    // Find the user who owns this referral code
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('referralCode', '==', referralCode))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const referrerDoc = querySnapshot.docs[0]
      const referrerId = referrerDoc.id
      
      // Create referral record
      await addDoc(collection(db, 'referrals'), {
        referrerId,
        refereeId: newUserId,
        status: 'completed',
        bonus: 10, // 10% off or 1 extra scan
        createdAt: new Date()
      })
    }
  } catch (error) {
    console.error('Error handling referral bonus:', error)
  }
}

export const onAuthStateChange = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback)
}