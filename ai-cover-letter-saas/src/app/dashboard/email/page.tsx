'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AIService, GenerateEmailRequest } from '@/lib/ai-service'
import { incrementUsageCount } from '@/lib/firebase'
import { copyToClipboard } from '@/lib/utils'
import { 
  Mail, 
  Copy, 
  ArrowLeft, 
  Sparkles,
  Send,
  Clock,
  Heart
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function EmailGeneratorPage() {
  const { user, loading, refreshUser } = useAuth()
  const router = useRouter()
  
  const [emailType, setEmailType] = useState<'application' | 'follow-up' | 'thank-you'>('application')
  const [jobTitle, setJobTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [hiringManagerName, setHiringManagerName] = useState('')
  const [context, setContext] = useState('')
  const [generatedEmail, setGeneratedEmail] = useState<{ subject: string; content: string } | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  const handleGenerate = async () => {
    if (!user) return
    
    // Check usage limits
    if (!user.isPro && user.freeUsageCount >= 3) {
      toast.error('You have reached your free usage limit. Please upgrade to Pro.')
      router.push('/pricing')
      return
    }

    if (!jobTitle || !companyName) {
      toast.error('Please fill in the job title and company name.')
      return
    }

    setIsGenerating(true)

    try {
      const request: GenerateEmailRequest = {
        type: emailType,
        jobTitle,
        companyName,
        hiringManagerName: hiringManagerName || undefined,
        context: context || undefined
      }

      const email = await AIService.generateEmail(request)
      setGeneratedEmail(email)

      // Increment usage count for non-pro users
      if (!user.isPro) {
        await incrementUsageCount(user.id)
        await refreshUser()
      }

      toast.success('Email generated successfully!')
    } catch (error) {
      toast.error('Failed to generate email. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text)
    if (success) {
      toast.success('Copied to clipboard!')
    } else {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleCopyBoth = async () => {
    if (!generatedEmail) return
    const fullEmail = `Subject: ${generatedEmail.subject}\n\n${generatedEmail.content}`
    const success = await copyToClipboard(fullEmail)
    if (success) {
      toast.success('Email copied to clipboard!')
    } else {
      toast.error('Failed to copy to clipboard')
    }
  }

  const resetForm = () => {
    setJobTitle('')
    setCompanyName('')
    setHiringManagerName('')
    setContext('')
    setGeneratedEmail(null)
  }

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

  const remainingFree = Math.max(0, 3 - user.freeUsageCount)

  const emailTypes = [
    {
      value: 'application' as const,
      label: 'Job Application Email',
      description: 'Professional email to accompany your job application',
      icon: Send,
      color: 'bg-blue-500'
    },
    {
      value: 'follow-up' as const,
      label: 'Follow-up Email',
      description: 'Follow up on your job application or interview',
      icon: Clock,
      color: 'bg-orange-500'
    },
    {
      value: 'thank-you' as const,
      label: 'Thank You Email',
      description: 'Thank the interviewer after your interview',
      icon: Heart,
      color: 'bg-green-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Mail className="h-8 w-8 text-primary mr-3" />
              AI Email Generator
            </h1>
            <p className="text-muted-foreground">
              Create professional job-related emails instantly
            </p>
          </div>
        </div>

        {/* Usage Status */}
        {!user.isPro && (
          <Card className="mb-6 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  {remainingFree > 0 
                    ? `${remainingFree} free generations remaining`
                    : 'No free generations remaining'
                  }
                </span>
                <Button asChild size="sm" variant="outline">
                  <Link href="/pricing">Upgrade to Pro</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Email Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Email Type</CardTitle>
                <CardDescription>
                  Choose the type of email you want to generate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {emailTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setEmailType(type.value)}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        emailType === type.value
                          ? 'border-primary bg-primary/10'
                          : 'border-muted hover:border-muted-foreground/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-md ${type.color}`}>
                          <type.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-sm text-muted-foreground">{type.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email Details Form */}
            <Card>
              <CardHeader>
                <CardTitle>Email Details</CardTitle>
                <CardDescription>
                  Provide information about the job and company
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title *</label>
                    <Input
                      placeholder="e.g., Software Engineer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name *</label>
                    <Input
                      placeholder="e.g., Google"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Hiring Manager Name (Optional)
                  </label>
                  <Input
                    placeholder="e.g., John Smith"
                    value={hiringManagerName}
                    onChange={(e) => setHiringManagerName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Additional Context (Optional)
                  </label>
                  <textarea
                    className="w-full min-h-[100px] p-3 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder={
                      emailType === 'follow-up'
                        ? 'When did you apply? Any specific details to mention?'
                        : emailType === 'thank-you'
                        ? 'What did you discuss in the interview?'
                        : 'Any specific details about your application?'
                    }
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating || (!user.isPro && user.freeUsageCount >= 3)}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Email
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Email Section */}
          <div className="space-y-6">
            {generatedEmail ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        Generated Email
                      </CardTitle>
                      <CardDescription>
                        {emailTypes.find(t => t.value === emailType)?.label}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleCopyBoth}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Subject Line */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">Subject Line</label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(generatedEmail.subject)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm font-medium">{generatedEmail.subject}</p>
                    </div>
                  </div>

                  {/* Email Content */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">Email Content</label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(generatedEmail.content)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-md">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {generatedEmail.content}
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" onClick={resetForm} className="flex-1">
                      Generate Another
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/dashboard">Back to Dashboard</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Preview</h3>
                  <p className="text-muted-foreground">
                    Fill out the form and click "Generate Email" to see your personalized email here.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}