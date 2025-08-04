'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChange, getUserProfile } from '@/lib/firebase'
import { User } from '@/types'

interface AuthContextType {
  user: User | null
  loading: boolean
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {}
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshUser = async () => {
    const firebaseUser = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChange((user) => {
        unsubscribe()
        resolve(user)
      })
    })

    if (firebaseUser) {
      const userProfile = await getUserProfile(firebaseUser.uid)
      setUser(userProfile)
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser) => {
      setLoading(true)
      
      if (firebaseUser) {
        const userProfile = await getUserProfile(firebaseUser.uid)
        setUser(userProfile)
      } else {
        setUser(null)
      }
      
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
    loading,
    refreshUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}