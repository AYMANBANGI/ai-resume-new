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
      <section className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/50 to-transparent dark:via-purple-900/20" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative container py-24 md:py-32 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-6 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Career Success Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              AI-Powered Career Tools for
              <span className="gradient-text block mt-2">Job Success</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Generate professional cover letters, optimize your resume, and create compelling job application emails with our 
              <span className="text-primary font-semibold"> cutting-edge AI platform</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 btn-glow bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-modern shadow-xl hover:shadow-2xl transform hover:scale-105">
                <Link href="/auth">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-modern border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 dark:border-purple-800 dark:hover:border-purple-600 dark:hover:bg-purple-950/50">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-background/80 rounded-full text-sm text-muted-foreground backdrop-blur-sm border border-purple-100 dark:border-purple-900">
              <CheckCircle className="w-4 h-4 text-green-500" />
              3 free generations • No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-6">
              ✨ Everything You Need
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Land Your Dream Job
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of AI-powered tools helps you create professional job applications that stand out from the competition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full card-hover rounded-modern border-0 bg-gradient-to-br from-white via-purple-50/50 to-white dark:from-background dark:via-purple-950/20 dark:to-background relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/10 dark:via-background dark:to-pink-950/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-medium text-purple-800 dark:text-purple-200 mb-6">
                🚀 Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Why Choose Our AI Career Assistant?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-modern-lg blur-xl opacity-20 animate-pulse-slow" />
              <Card className="relative p-8 rounded-modern-lg bg-white/80 dark:bg-background/80 backdrop-blur-sm border-2 border-purple-100 dark:border-purple-900">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${star * 100}ms` }} />
                    ))}
                  </div>
                  <blockquote className="text-xl italic mb-6 text-foreground">
                    "This tool helped me land my dream job! The AI-generated cover letter was perfectly tailored to the position and got me noticed immediately."
                  </blockquote>
                  <div className="text-sm text-muted-foreground font-medium">
                    - Sarah M., Software Engineer at Google
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full text-sm font-medium text-green-800 dark:text-green-200 mb-6">
              💰 Simple Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you need more power
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="relative card-hover rounded-modern-lg bg-white dark:bg-background border-2 border-gray-200 dark:border-gray-800">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold">Free</CardTitle>
                <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mt-2">$0</div>
                <CardDescription className="text-lg mt-2">Perfect for trying out our tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">3 free cover letters/emails</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">Basic resume scoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">Job description analysis</span>
                </div>
                <Button asChild className="w-full mt-8 py-6 text-lg rounded-modern">
                  <Link href="/auth">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative card-hover rounded-modern-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 overflow-hidden">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 Most Popular
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-sm" />
              <CardHeader className="text-center pb-8 relative z-10">
                <CardTitle className="text-3xl font-bold text-white">Pro</CardTitle>
                <div className="text-4xl font-bold text-white mt-2">$19<span className="text-xl text-purple-100">/month</span></div>
                <CardDescription className="text-lg mt-2 text-purple-100">Everything you need for job hunting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-lg text-white">Unlimited generations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-lg text-white">Premium resume templates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-lg text-white">History tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-lg text-white">PDF exports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-lg text-white">Priority support</span>
                </div>
                <Button asChild className="w-full mt-8 py-6 text-lg rounded-modern bg-white text-purple-600 hover:bg-gray-100 font-bold">
                  <Link href="/auth">Start Pro Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/90 to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered tools.
            </p>
            <Button asChild size="lg" className="text-lg px-12 py-6 bg-white text-purple-600 hover:bg-gray-100 rounded-modern shadow-2xl hover:shadow-3xl transform hover:scale-105 btn-glow font-bold">
              <Link href="/auth">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
