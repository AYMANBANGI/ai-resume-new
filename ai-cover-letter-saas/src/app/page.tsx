'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/Header'
import { 
  FileText, 
  Mail, 
  BarChart3, 
  Search, 
  Layout, 
  CreditCard, 
  Users, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: FileText,
      title: 'AI Cover Letter Generator',
      description: 'Create professional, ATS-friendly cover letters tailored to any job in multiple tones and languages.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Professional Email Generator',
      description: 'Generate job application emails, follow-ups, and thank-you notes with perfect professional tone.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Resume Score & Optimization',
      description: 'Get detailed resume analysis with scores and AI-powered suggestions for improvement.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Search,
      title: 'Job Description Analyzer',
      description: 'Compare your resume against job descriptions to identify gaps and missing keywords.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Layout,
      title: 'Resume Templates',
      description: 'Access modern, professional resume templates with auto-fill capabilities.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Referral System',
      description: 'Share with friends and get bonuses. Everyone wins with our referral program.',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const benefits = [
    'Upload PDF, DOC, or DOCX files',
    'Multiple writing tones & languages',
    'ATS-friendly content generation',
    'One-click copy to clipboard',
    'History tracking for Pro users',
    'Mobile-responsive design'
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20 animate-morph-bg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-transparent dark:via-purple-900/20" />
        
        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float blur-sm" />
        <div className="absolute top-40 right-16 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-10 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="relative container py-24 md:py-32 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-8 border border-purple-200/30 dark:border-purple-800/30 animate-bounce-fade">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Career Success Platform
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight animate-slide-up">
              <span className="block animate-slide-in-rotate">AI-Powered Career Tools for</span>
              <span className="gradient-text block mt-4 animate-scale-in stagger-2">Job Success</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in stagger-3">
              Generate professional cover letters, optimize your resume, and create compelling job application emails with our 
              <span className="text-primary font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> cutting-edge AI platform</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-bounce-fade stagger-4">
              <Button asChild size="lg" className="text-lg px-10 py-6 btn-glow bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl shadow-xl hover:shadow-2xl magnetic-btn animate-glow">
                <Link href="/auth">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 rounded-2xl glass border-2 border-purple-200/30 hover:border-purple-400/50 hover:bg-purple-50/50 dark:border-purple-800/30 dark:hover:border-purple-600/50 dark:hover:bg-purple-950/50 magnetic-btn">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
            
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full text-sm text-muted-foreground border border-purple-100/30 dark:border-purple-900/30 animate-reveal stagger-5">
              <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
              <span className="font-medium">3 free generations • No credit card required</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Bento Grid */}
      <section id="features" className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-6 border border-purple-200/20 dark:border-purple-800/20">
              ✨ Everything You Need
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight">
              Land Your Dream Job
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of AI-powered tools helps you create professional job applications that stand out from the competition.
            </p>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="bento-grid max-w-7xl mx-auto">
            {/* Main Feature - Cover Letter */}
            <div className="bento-item bento-hero group">
              <div className="glass-dark rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-indigo-600/90">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm items-center justify-center mb-6 shadow-2xl">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">AI Cover Letter Generator</h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">Create professional, ATS-friendly cover letters tailored to any job in multiple tones and languages.</p>
                  <Button asChild className="bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-sm">
                    <Link href="/dashboard/cover-letter">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              </div>
            </div>

            {/* Email Generator */}
            <div className="bento-item bento-medium group">
              <div className="glass rounded-2xl p-6 h-full bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/40 dark:to-cyan-950/40 border border-blue-200/20 dark:border-blue-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 items-center justify-center mb-4 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email Generator</h3>
                  <p className="text-muted-foreground leading-relaxed">Generate professional job application emails and follow-ups.</p>
                </div>
              </div>
            </div>

            {/* Resume Analyzer */}
            <div className="bento-item bento-medium group">
              <div className="glass rounded-2xl p-6 h-full bg-gradient-to-br from-purple-50/80 to-violet-50/80 dark:from-purple-950/40 dark:to-violet-950/40 border border-purple-200/20 dark:border-purple-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-violet-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 items-center justify-center mb-4 shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Resume Analyzer</h3>
                  <p className="text-muted-foreground leading-relaxed">Get detailed resume analysis with AI-powered improvement suggestions.</p>
                </div>
              </div>
            </div>

            {/* Job Analyzer */}
            <div className="bento-item bento-small group">
              <div className="glass rounded-2xl p-6 h-full bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-950/40 dark:to-red-950/40 border border-orange-200/20 dark:border-orange-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-red-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 items-center justify-center mb-3 shadow-lg">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Job Analysis</h3>
                  <p className="text-sm text-muted-foreground">Compare resume against job descriptions.</p>
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="bento-item bento-small group">
              <div className="glass rounded-2xl p-6 h-full bg-gradient-to-br from-pink-50/80 to-rose-50/80 dark:from-pink-950/40 dark:to-rose-950/40 border border-pink-200/20 dark:border-pink-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-rose-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 items-center justify-center mb-3 shadow-lg">
                    <Layout className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Resume Templates</h3>
                  <p className="text-sm text-muted-foreground">Professional templates with auto-fill.</p>
                </div>
              </div>
            </div>

            {/* Referrals */}
            <div className="bento-item bento-small group">
              <div className="glass rounded-2xl p-6 h-full bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-indigo-950/40 dark:to-blue-950/40 border border-indigo-200/20 dark:border-indigo-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 items-center justify-center mb-3 shadow-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Referral Program</h3>
                  <p className="text-sm text-muted-foreground">Share and earn rewards together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/10 dark:via-background dark:to-pink-950/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-8 border border-purple-200/30 dark:border-purple-800/30">
                🚀 Why Choose Us
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text tracking-tight leading-tight">
                Why Choose Our AI Career Assistant?
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`flex items-center group hover-lift animate-bounce-fade stagger-${index + 1}`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 hover-glow">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 animate-morph-bg" />
              
              {/* Modern testimonial cards stack */}
              <div className="relative space-y-6">
                {/* Main testimonial card */}
                <Card className="relative p-8 glass rounded-3xl border border-purple-200/30 dark:border-purple-800/30 hover-lift group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-center">
                    <div className="flex justify-center mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`h-6 w-6 text-yellow-400 fill-current animate-bounce-fade stagger-${star}`} />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-8 text-foreground leading-relaxed font-medium">
                      "This tool helped me land my dream job! The AI-generated cover letter was perfectly tailored to the position and got me noticed immediately."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">Sarah Martinez</div>
                        <div className="text-sm text-muted-foreground">Software Engineer at Google</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Secondary testimonial cards (partial) */}
                <div className="flex gap-4 opacity-60">
                  <Card className="flex-1 p-6 glass rounded-2xl border border-blue-200/30 dark:border-blue-800/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="flex gap-2 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">"Incredible AI technology..."</p>
                    <div className="mt-3 text-xs font-medium">- Marcus Chen</div>
                  </Card>
                  
                  <Card className="flex-1 p-6 glass rounded-2xl border border-green-200/30 dark:border-green-800/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="flex gap-2 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">"Game-changing platform..."</p>
                    <div className="mt-3 text-xs font-medium">- Emma Davis</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium text-green-800 dark:text-green-200 mb-8 border border-green-200/30 dark:border-green-800/30">
              💰 Simple Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more power
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="relative hover-lift rounded-3xl glass border border-gray-200/30 dark:border-gray-800/30 group animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 mb-4 mx-auto">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold">Free</CardTitle>
                <div className="text-5xl font-bold mt-4">
                  <span className="text-gray-600 dark:text-gray-300">$0</span>
                  <span className="text-lg text-muted-foreground font-normal">/forever</span>
                </div>
                <CardDescription className="text-lg mt-4 text-muted-foreground">Perfect for trying out our tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-medium">3 free cover letters/emails</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-medium">Basic resume scoring</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-medium">Job description analysis</span>
                </div>
                <Button asChild className="w-full mt-8 py-6 text-lg rounded-2xl magnetic-btn hover-glow">
                  <Link href="/auth">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative hover-lift rounded-3xl overflow-hidden group animate-scale-in stagger-2">
              {/* Popular badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-bounce-fade">
                  🔥 Most Popular
                </div>
              </div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 animate-morph-bg" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Floating decorative elements */}
              <div className="absolute top-20 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-20 left-8 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
              
              <CardHeader className="text-center pb-8 relative z-10 text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 mx-auto shadow-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-white">Pro</CardTitle>
                <div className="text-5xl font-bold mt-4">
                  <span className="text-white">$19</span>
                  <span className="text-lg text-white/80 font-normal">/month</span>
                </div>
                <CardDescription className="text-lg mt-4 text-white/90">Everything you need for job hunting</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg text-white font-medium">Unlimited generations</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg text-white font-medium">Premium resume templates</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg text-white font-medium">History tracking</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg text-white font-medium">PDF exports</span>
                </div>
                <div className="flex items-center group/item">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-lg text-white font-medium">Priority support</span>
                </div>
                <Button asChild className="w-full mt-8 py-6 text-lg rounded-2xl bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-sm magnetic-btn font-bold">
                  <Link href="/auth">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Pro Trial
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 animate-morph-bg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/90 to-transparent" />
        
        {/* Enhanced floating elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-lg" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-white/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative container text-center">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered tools.
            </p>
            
            {/* Enhanced CTA button */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl animate-pulse-slow" />
              <Button asChild size="lg" className="relative text-xl px-16 py-8 bg-white text-purple-600 hover:bg-gray-50 rounded-3xl shadow-2xl hover:shadow-3xl magnetic-btn font-bold border-4 border-white/20 hover:border-white/40 transition-all duration-300">
                <Link href="/auth">
                  <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                  Start Your Free Trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-lg font-medium">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-lg font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-lg font-medium">No Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-gray-50 to-purple-50/30 dark:from-background dark:to-purple-950/20 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">AI Career Assistant</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your AI-powered career companion for professional success in the modern job market.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="/features" className="hover:text-primary transition-colors">Cover Letter Generator</Link></li>
                <li><Link href="/features" className="hover:text-primary transition-colors">Resume Optimizer</Link></li>
                <li><Link href="/features" className="hover:text-primary transition-colors">Email Templates</Link></li>
                <li><Link href="/features" className="hover:text-primary transition-colors">Job Analysis</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-100 dark:border-purple-900 mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2024 AI Career Assistant. All rights reserved. Made with ❤️ for your career success.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
