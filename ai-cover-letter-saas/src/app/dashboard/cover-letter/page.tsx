'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { FileUpload } from '@/components/upload/FileUpload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AIService, GenerateCoverLetterRequest } from '@/lib/ai-service'
import { incrementUsageCount } from '@/lib/firebase'
import { copyToClipboard } from '@/lib/utils'
import { 
  FileText, 
  Copy, 
  Download, 
  ArrowLeft, 
  Sparkles,
  Settings,
  Globe,
  Palette
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function CoverLetterGeneratorPage() {
  const { user, loading, refreshUser } = useAuth()
  const router = useRouter()
  
  const [step, setStep] = useState<'upload' | 'form' | 'result'>('upload')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeText, setResumeText] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [tone, setTone] = useState<'professional' | 'enthusiastic' | 'concise'>('professional')
  const [language, setLanguage] = useState('English')
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  const handleFileUpload = (file: File, text: string) => {
    setResumeFile(file)
    setResumeText(text)
    setStep('form')
  }

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
      const request: GenerateCoverLetterRequest = {
        resumeText,
        jobTitle,
        companyName,
        jobDescription: jobDescription || undefined,
        tone,
        language
      }

      const coverLetter = await AIService.generateCoverLetter(request)
      setGeneratedCoverLetter(coverLetter)
      setStep('result')

      // Increment usage count for non-pro users
      if (!user.isPro) {
        await incrementUsageCount(user.id)
        await refreshUser()
      }

      toast.success('Cover letter generated successfully!')
    } catch (error) {
      toast.error('Failed to generate cover letter. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedCoverLetter)
    if (success) {
      toast.success('Cover letter copied to clipboard!')
    } else {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleStartOver = () => {
    setStep('upload')
    setResumeFile(null)
    setResumeText('')
    setJobTitle('')
    setCompanyName('')
    setJobDescription('')
    setGeneratedCoverLetter('')
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
              <Sparkles className="h-8 w-8 text-primary mr-3" />
              AI Cover Letter Generator
            </h1>
            <p className="text-muted-foreground">
              Create professional, ATS-friendly cover letters in minutes
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

        {/* Step 1: Upload Resume */}
        {step === 'upload' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Upload Your Resume</CardTitle>
                <CardDescription>
                  Upload your resume so we can extract relevant information for your cover letter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload onFileUpload={handleFileUpload} />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Job Details Form */}
        {step === 'form' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Job Details</CardTitle>
                <CardDescription>
                  Provide details about the job you're applying for
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
                  <label className="text-sm font-medium">Job Description (Optional)</label>
                  <textarea
                    className="w-full min-h-[120px] p-3 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Paste the job description here for a more tailored cover letter..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Customization Options
                </CardTitle>
                <CardDescription>
                  Customize the tone and language of your cover letter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Palette className="h-4 w-4 mr-2" />
                      Tone
                    </label>
                    <select
                      className="w-full p-2 border border-input bg-background rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={tone}
                      onChange={(e) => setTone(e.target.value as 'professional' | 'enthusiastic' | 'concise')}
                    >
                      <option value="professional">Professional</option>
                      <option value="enthusiastic">Enthusiastic</option>
                      <option value="concise">Concise</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Language
                    </label>
                    <select
                      className="w-full p-2 border border-input bg-background rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep('upload')}>
                Back
              </Button>
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || (!user.isPro && user.freeUsageCount >= 3)}
                className="flex-1"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Result */}
        {step === 'result' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Your Cover Letter
                    </CardTitle>
                    <CardDescription>
                      Generated for {jobTitle} at {companyName}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    {user.isPro && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {generatedCoverLetter}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={handleStartOver}>
                Generate Another
              </Button>
              <Button asChild>
                <Link href="/dashboard">Back to Dashboard</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}