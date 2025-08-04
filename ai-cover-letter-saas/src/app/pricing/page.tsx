'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Crown,
  ArrowRight,
  FileText,
  Mail,
  BarChart3,
  Layout,
  Download,
  Clock
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const features = {
    free: [
      { name: '3 AI-generated cover letters', included: true },
      { name: '3 AI-generated emails', included: true },
      { name: '3 resume analyses', included: true },
      { name: 'Basic job description analysis', included: true },
      { name: 'Copy to clipboard', included: true },
      { name: 'Multiple tones & languages', included: true },
      { name: 'Unlimited generations', included: false },
      { name: 'Resume templates', included: false },
      { name: 'PDF exports', included: false },
      { name: 'History tracking', included: false },
      { name: 'Priority support', included: false },
      { name: 'Advanced analytics', included: false }
    ],
    pro: [
      { name: '3 AI-generated cover letters', included: true },
      { name: '3 AI-generated emails', included: true },
      { name: '3 resume analyses', included: true },
      { name: 'Basic job description analysis', included: true },
      { name: 'Copy to clipboard', included: true },
      { name: 'Multiple tones & languages', included: true },
      { name: 'Unlimited generations', included: true },
      { name: 'Resume templates', included: true },
      { name: 'PDF exports', included: true },
      { name: 'History tracking', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced analytics', included: true }
    ]
  }

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      content: 'The AI cover letters helped me land my dream job at Google. The quality was incredible!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Manager',
      company: 'Spotify',
      content: 'Resume analyzer gave me insights I never considered. Increased my interview rate by 40%.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Data Scientist',
      company: 'Tesla',
      content: 'Professional email templates saved me hours of writing. Highly recommend the Pro plan!',
      rating: 5
    }
  ]

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your Pro subscription at any time. You\'ll continue to have access to Pro features until the end of your current billing period.'
    },
    {
      question: 'What happens to my free uses when I upgrade?',
      answer: 'When you upgrade to Pro, you get unlimited access to all features. Your previous free uses don\'t affect your Pro account.'
    },
    {
      question: 'Are the AI-generated documents customizable?',
      answer: 'Yes! All generated content can be edited and customized to match your personal style and specific job requirements.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for Pro subscriptions. If you\'re not satisfied, contact us for a full refund.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security and never share your personal information or resume data with third parties.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Start free and upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="text-4xl font-bold mt-4">$0</div>
              <CardDescription className="text-lg">
                Perfect for trying out our AI tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-8" variant="outline" size="lg">
                <Link href="/auth">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-primary shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Crown className="h-4 w-4 mr-1" />
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="text-4xl font-bold mt-4">
                $19
                <span className="text-lg text-muted-foreground font-normal">/month</span>
              </div>
              <CardDescription className="text-lg">
                Everything you need for job hunting success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {features.pro.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-8" size="lg">
                <Link href="/auth">
                  Start Pro Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                7-day free trial, then $19/month
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground">
              Compare features across our plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Content Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Professional cover letters</li>
                  <li>• Job application emails</li>
                  <li>• Follow-up messages</li>
                  <li>• Thank you notes</li>
                  <li>• Multiple tones & languages</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Resume Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• ATS compatibility scoring</li>
                  <li>• Keyword optimization</li>
                  <li>• Improvement suggestions</li>
                  <li>• Job match analysis</li>
                  <li>• Gap identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Layout className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Pro Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Resume templates</li>
                  <li>• PDF downloads</li>
                  <li>• History tracking</li>
                  <li>• Priority support</li>
                  <li>• Advanced analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful job seekers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with our free plan and upgrade when you need more power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}