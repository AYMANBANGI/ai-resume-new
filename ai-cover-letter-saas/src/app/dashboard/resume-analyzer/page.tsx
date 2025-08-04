'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { FileUpload } from '@/components/upload/FileUpload'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AIService, AnalyzeResumeRequest } from '@/lib/ai-service'
import { incrementUsageCount } from '@/lib/firebase'
import { ResumeAnalysis } from '@/types'
import { 
  BarChart3, 
  ArrowLeft, 
  Sparkles,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  FileText,
  Target,
  Lightbulb
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function ResumeAnalyzerPage() {
  const { user, loading, refreshUser } = useAuth()
  const router = useRouter()
  
  const [step, setStep] = useState<'upload' | 'result'>('upload')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeText, setResumeText] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  const handleFileUpload = (file: File, text: string) => {
    setResumeFile(file)
    setResumeText(text)
  }

  const handleAnalyze = async () => {
    if (!user || !resumeText) return
    
    // Check usage limits
    if (!user.isPro && user.freeUsageCount >= 3) {
      toast.error('You have reached your free usage limit. Please upgrade to Pro.')
      router.push('/pricing')
      return
    }

    setIsAnalyzing(true)

    try {
      const request: AnalyzeResumeRequest = {
        resumeText,
        jobDescription: jobDescription || undefined
      }

      const result = await AIService.analyzeResume(request)
      setAnalysis(result)
      setStep('result')

      // Increment usage count for non-pro users
      if (!user.isPro) {
        await incrementUsageCount(user.id)
        await refreshUser()
      }

      toast.success('Resume analyzed successfully!')
    } catch (error) {
      toast.error('Failed to analyze resume. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleStartOver = () => {
    setStep('upload')
    setResumeFile(null)
    setResumeText('')
    setJobDescription('')
    setAnalysis(null)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 90) return 'from-green-500 to-green-600'
    if (score >= 70) return 'from-yellow-500 to-yellow-600'
    return 'from-red-500 to-red-600'
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
              <BarChart3 className="h-8 w-8 text-primary mr-3" />
              AI Resume Analyzer
            </h1>
            <p className="text-muted-foreground">
              Get detailed analysis and optimization suggestions for your resume
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
                    ? `${remainingFree} free analyses remaining`
                    : 'No free analyses remaining'
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
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>
                  Upload your resume to get a comprehensive analysis and optimization suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload onFileUpload={handleFileUpload} />
              </CardContent>
            </Card>

            {resumeFile && (
              <Card>
                <CardHeader>
                  <CardTitle>Optional: Job Description</CardTitle>
                  <CardDescription>
                    Paste a job description to get targeted analysis comparing your resume to specific requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <textarea
                    className="w-full min-h-[150px] p-3 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Paste the job description here for targeted analysis..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={isAnalyzing || (!user.isPro && user.freeUsageCount >= 3)}
                    className="w-full"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                        Analyzing Resume...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Step 2: Analysis Results */}
        {step === 'result' && analysis && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Resume Score
                </CardTitle>
                <CardDescription>
                  Overall assessment of your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getScoreGradient(analysis.score)}`} 
                         style={{ 
                           background: `conic-gradient(from 0deg, hsl(var(--primary)) ${analysis.score * 3.6}deg, hsl(var(--muted)) ${analysis.score * 3.6}deg)` 
                         }}>
                    </div>
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <span className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                        {analysis.score}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {analysis.score >= 90 ? 'Excellent' : 
                       analysis.score >= 70 ? 'Good' : 'Needs Improvement'}
                    </h3>
                    <p className="text-muted-foreground">
                      {analysis.score >= 90 
                        ? 'Your resume is in great shape!'
                        : analysis.score >= 70 
                        ? 'Your resume is good but has room for improvement.'
                        : 'Your resume could benefit from significant improvements.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Keyword Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Keyword Matches
                  </CardTitle>
                  <CardDescription>
                    Keywords found in your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {analysis.keywordMatches.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywordMatches.map((keyword, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No keyword matches found.</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Missing Keywords
                  </CardTitle>
                  <CardDescription>
                    Important keywords to consider adding
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {analysis.missingKeywords.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {analysis.missingKeywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">All relevant keywords are present.</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Optimization Suggestions
                </CardTitle>
                <CardDescription>
                  AI-powered recommendations to improve your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={handleStartOver}>
                Analyze Another Resume
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