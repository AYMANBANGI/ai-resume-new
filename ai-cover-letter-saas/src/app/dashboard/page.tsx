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
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30 dark:from-purple-950/10 dark:via-background dark:to-pink-950/10">
      <Header />
      
      <div className="container py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text tracking-tight">
            Welcome back{user.displayName ? `, ${user.displayName}` : ''}!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your career with AI-powered tools?
          </p>
        </div>

        {/* Usage Status */}
        <Card className="mb-12 glass border border-purple-200/30 dark:border-purple-800/30 hover-lift animate-scale-in">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className={`p-4 rounded-2xl ${user.isPro ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-blue-400 to-indigo-500'} shadow-lg`}>
                  {user.isPro ? (
                    <Star className="h-8 w-8 text-white" />
                  ) : (
                    <Zap className="h-8 w-8 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {user.isPro ? 'Pro Account' : 'Free Account'}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {user.isPro 
                      ? 'Unlimited access to all features'
                      : `${remainingFree} free generations remaining`
                    }
                  </p>
                </div>
              </div>
              {!user.isPro && (
                <Button asChild size="lg" className="magnetic-btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-8 py-6 text-lg font-semibold">
                  <Link href="/pricing">
                    Upgrade to Pro
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid - Modern Bento Layout */}
        <div className="dashboard-bento-grid mb-16 animate-reveal">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`dashboard-bento-item hover-lift group glass border border-purple-200/20 dark:border-purple-800/20 rounded-3xl overflow-hidden animate-bounce-fade ${
                feature.popular ? 'dashboard-bento-featured' : 
                index === 0 ? 'dashboard-bento-large' : 'dashboard-bento-regular'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Most Popular
                  </span>
                </div>
              )}
              {feature.isPro && (
                <div className="absolute -top-3 right-6 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ✨ Pro Only
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  feature.color === 'bg-blue-500' ? 'from-blue-500 to-cyan-500' :
                  feature.color === 'bg-green-500' ? 'from-green-500 to-emerald-500' :
                  feature.color === 'bg-purple-500' ? 'from-purple-500 to-violet-500' :
                  feature.color === 'bg-orange-500' ? 'from-orange-500 to-red-500' :
                  feature.color === 'bg-pink-500' ? 'from-pink-500 to-rose-500' :
                  'from-indigo-500 to-blue-500'
                } flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 p-8 pt-0">
                <Button 
                  asChild 
                  className="w-full magnetic-btn rounded-2xl py-6 text-lg font-semibold bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600 hover:to-pink-600 hover:text-white border-purple-200 dark:border-purple-800 transition-all duration-300"
                  variant="outline"
                  disabled={feature.isPro && !user.isPro}
                >
                  <Link href={feature.href}>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="glass border border-purple-200/30 dark:border-purple-800/30 rounded-3xl overflow-hidden animate-slide-up">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold gradient-text">Quick Actions</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Jump into the most common tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Button asChild variant="ghost" className="h-auto p-6 flex flex-col items-center space-y-4 glass rounded-2xl border border-blue-200/30 dark:border-blue-800/30 hover-lift group">
                <Link href="/dashboard/cover-letter">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-semibold text-center group-hover:text-primary transition-colors duration-300">Generate Cover Letter</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-6 flex flex-col items-center space-y-4 glass rounded-2xl border border-green-200/30 dark:border-green-800/30 hover-lift group">
                <Link href="/dashboard/email">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-semibold text-center group-hover:text-primary transition-colors duration-300">Create Email</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-6 flex flex-col items-center space-y-4 glass rounded-2xl border border-purple-200/30 dark:border-purple-800/30 hover-lift group">
                <Link href="/dashboard/resume-analyzer">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-semibold text-center group-hover:text-primary transition-colors duration-300">Analyze Resume</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-6 flex flex-col items-center space-y-4 glass rounded-2xl border border-orange-200/30 dark:border-orange-800/30 hover-lift group">
                <Link href="/dashboard/job-analyzer">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-semibold text-center group-hover:text-primary transition-colors duration-300">Analyze Job</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity (Placeholder for Pro users) */}
        {user.isPro && (
          <Card className="mt-16 glass border border-purple-200/30 dark:border-purple-800/30 rounded-3xl overflow-hidden animate-scale-in">
            <CardHeader className="p-8">
              <CardTitle className="flex items-center text-3xl font-bold gradient-text">
                <Clock className="h-8 w-8 mr-3" />
                Recent Activity
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Your recent generations and analyses
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="text-center py-16 text-muted-foreground">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                  <Clock className="h-20 w-20 mx-auto mb-6 relative z-10 opacity-60" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No recent activity yet</h3>
                <p className="text-lg">Start using our tools to see your history here</p>
                <div className="mt-8">
                  <Button asChild className="magnetic-btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold">
                    <Link href="/dashboard/cover-letter">
                      Start Creating
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}