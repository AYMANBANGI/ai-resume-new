'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Mail, 
  BarChart3, 
  Search, 
  Layout, 
  Users, 
  Clock,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const features = [
    {
      icon: FileText,
      title: 'Cover Letter Generator',
      description: 'Create professional, ATS-friendly cover letters in multiple tones and languages.',
      href: '/dashboard/cover-letter',
      color: 'bg-blue-500',
      popular: true
    },
    {
      icon: Mail,
      title: 'Email Generator',
      description: 'Generate job application emails, follow-ups, and thank-you notes.',
      href: '/dashboard/email',
      color: 'bg-green-500'
    },
    {
      icon: BarChart3,
      title: 'Resume Analyzer',
      description: 'Get detailed resume analysis with scores and improvement suggestions.',
      href: '/dashboard/resume-analyzer',
      color: 'bg-purple-500'
    },
    {
      icon: Search,
      title: 'Job Description Analyzer',
      description: 'Compare your resume against job descriptions to identify gaps.',
      href: '/dashboard/job-analyzer',
      color: 'bg-orange-500'
    },
    {
      icon: Layout,
      title: 'Resume Templates',
      description: 'Access modern, professional resume templates with auto-fill.',
      href: '/dashboard/templates',
      color: 'bg-pink-500',
      isPro: true
    },
    {
      icon: Users,
      title: 'Referral Program',
      description: 'Share with friends and get bonuses for successful referrals.',
      href: '/dashboard/referrals',
      color: 'bg-indigo-500'
    }
  ]

  const remainingFree = Math.max(0, 3 - user.freeUsageCount)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back{user.displayName ? `, ${user.displayName}` : ''}!
          </h1>
          <p className="text-muted-foreground">
            Ready to accelerate your career with AI-powered tools?
          </p>
        </div>

        {/* Usage Status */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${user.isPro ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'}`}>
                  {user.isPro ? (
                    <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                  ) : (
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">
                    {user.isPro ? 'Pro Account' : 'Free Account'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {user.isPro 
                      ? 'Unlimited access to all features'
                      : `${remainingFree} free generations remaining`
                    }
                  </p>
                </div>
              </div>
              {!user.isPro && (
                <Button asChild>
                  <Link href="/pricing">
                    Upgrade to Pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-shadow ${feature.popular ? 'ring-2 ring-primary' : ''}`}>
              {feature.popular && (
                <div className="absolute -top-3 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              {feature.isPro && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Pro Only
                  </span>
                </div>
              )}
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                  disabled={feature.isPro && !user.isPro}
                >
                  <Link href={feature.href}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Jump into the most common tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/dashboard/cover-letter">
                  <FileText className="h-8 w-8" />
                  <span>Generate Cover Letter</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/dashboard/email">
                  <Mail className="h-8 w-8" />
                  <span>Create Email</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/dashboard/resume-analyzer">
                  <BarChart3 className="h-8 w-8" />
                  <span>Analyze Resume</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link href="/dashboard/job-analyzer">
                  <Search className="h-8 w-8" />
                  <span>Analyze Job</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity (Placeholder for Pro users) */}
        {user.isPro && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your recent generations and analyses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No recent activity yet</p>
                <p className="text-sm">Start using our tools to see your history here</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}