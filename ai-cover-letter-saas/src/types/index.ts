export interface User {
  id: string
  email: string
  displayName?: string
  photoURL?: string
  isPro: boolean
  freeUsageCount: number
  referralCode: string
  referredBy?: string
  createdAt: Date
}

export interface CoverLetter {
  id: string
  userId: string
  jobTitle: string
  companyName: string
  content: string
  tone: 'professional' | 'enthusiastic' | 'concise'
  language: string
  createdAt: Date
}

export interface Email {
  id: string
  userId: string
  type: 'application' | 'follow-up' | 'thank-you'
  subject: string
  content: string
  createdAt: Date
}

export interface ResumeAnalysis {
  id: string
  userId: string
  fileName: string
  score: number
  suggestions: string[]
  keywordMatches: string[]
  missingKeywords: string[]
  createdAt: Date
}

export interface JobDescription {
  id: string
  userId: string
  title: string
  company: string
  content: string
  analyzedAt: Date
  keywordExtracted: string[]
}

export interface ResumeTemplate {
  id: string
  name: string
  preview: string
  category: 'modern' | 'classic' | 'creative'
  isPro: boolean
}

export interface Subscription {
  id: string
  userId: string
  status: 'active' | 'canceled' | 'past_due'
  currentPeriodEnd: Date
  stripeSubscriptionId: string
}

export interface Referral {
  id: string
  referrerId: string
  refereeId: string
  status: 'pending' | 'completed'
  bonus: number
  createdAt: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}