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
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: FileText,
      title: 'AI Cover Letter Generator',
      description: 'Create professional, ATS-friendly cover letters tailored to any job in multiple tones and languages.'
    },
    {
      icon: Mail,
      title: 'Professional Email Generator',
      description: 'Generate job application emails, follow-ups, and thank-you notes with perfect professional tone.'
    },
    {
      icon: BarChart3,
      title: 'Resume Score & Optimization',
      description: 'Get detailed resume analysis with scores and AI-powered suggestions for improvement.'
    },
    {
      icon: Search,
      title: 'Job Description Analyzer',
      description: 'Compare your resume against job descriptions to identify gaps and missing keywords.'
    },
    {
      icon: Layout,
      title: 'Resume Templates',
      description: 'Access modern, professional resume templates with auto-fill capabilities.'
    },
    {
      icon: Users,
      title: 'Referral System',
      description: 'Share with friends and get bonuses. Everyone wins with our referral program.'
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
      <section className="container py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI-Powered Career Tools for
            <span className="text-primary"> Job Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate professional cover letters, optimize your resume, and create compelling job application emails with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/auth">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            3 free generations • No credit card required
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you create professional job applications that stand out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our AI Career Assistant?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "This tool helped me land my dream job! The AI-generated cover letter was perfectly tailored to the position."
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    - Sarah M., Software Engineer
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you need more
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="text-3xl font-bold">$0</div>
              <CardDescription>Perfect for trying out our tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>3 free cover letters/emails</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>Basic resume scoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>Job description analysis</span>
              </div>
              <Button asChild className="w-full mt-6">
                <Link href="/auth">Get Started Free</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="text-3xl font-bold">$19<span className="text-lg text-muted-foreground">/month</span></div>
              <CardDescription>Everything you need for job hunting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>Unlimited generations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>Premium resume templates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>History tracking</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>PDF exports</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>Priority support</span>
              </div>
              <Button asChild className="w-full mt-6">
                <Link href="/auth">Start Pro Trial</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered tools.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/auth">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AI Career Assistant</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI-powered career companion for professional success.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/features">Cover Letter Generator</Link></li>
                <li><Link href="/features">Resume Optimizer</Link></li>
                <li><Link href="/features">Email Templates</Link></li>
                <li><Link href="/features">Job Analysis</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 AI Career Assistant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
