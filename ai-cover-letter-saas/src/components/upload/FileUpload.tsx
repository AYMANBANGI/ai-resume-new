'use client'

import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Upload, FileText, X, AlertCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface FileUploadProps {
  onFileUpload: (file: File, text: string) => void
  acceptedTypes?: string[]
  maxSize?: number // in MB
  loading?: boolean
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  acceptedTypes = ['.pdf', '.doc', '.docx'],
  maxSize = 5,
  loading = false
}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const validateFile = (file: File): boolean => {
    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!acceptedTypes.includes(fileExtension)) {
      toast.error(`File type not supported. Please upload ${acceptedTypes.join(', ')} files.`)
      return false
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024)
    if (fileSizeMB > maxSize) {
      toast.error(`File size too large. Please upload files smaller than ${maxSize}MB.`)
      return false
    }

    return true
  }

  const extractTextFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      
      reader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer
        
        if (file.type === 'application/pdf') {
          // For PDF files, we'll need a proper PDF parser in production
          // For now, we'll use a simple text extraction
          resolve('PDF text extraction would happen here with a proper PDF parser like PDF.js')
        } else if (file.type.includes('word') || file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
          // For Word documents, we'll need a proper parser
          // For now, we'll simulate text extraction
          resolve('Word document text extraction would happen here with a proper parser')
        } else {
          // For other file types, try reading as text
          const text = new TextDecoder().decode(arrayBuffer)
          resolve(text)
        }
      }
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'))
      }
      
      reader.readAsArrayBuffer(file)
    })
  }

  const processFile = async (file: File) => {
    if (!validateFile(file)) return

    setIsProcessing(true)
    setUploadedFile(file)

    try {
      // In a real application, you would send the file to your backend
      // Here we'll simulate text extraction
      const extractedText = await extractTextFromFile(file)
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      onFileUpload(file, extractedText)
      toast.success('File uploaded and processed successfully!')
    } catch (error) {
      toast.error('Failed to process file. Please try again.')
      setUploadedFile(null)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      processFile(files[0])
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      processFile(files[0])
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  if (uploadedFile && !isProcessing) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">{uploadedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-destructive hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? 'border-primary bg-primary/10'
              : 'border-muted-foreground/25'
          } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isProcessing ? (
            <div className="space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-muted-foreground">Processing your resume...</p>
            </div>
          ) : (
            <>
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your resume here, or click to browse
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Supports {acceptedTypes.join(', ')} files up to {maxSize}MB
              </p>
              
              <input
                type="file"
                accept={acceptedTypes.join(',')}
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                disabled={loading || isProcessing}
              />
              
              <Button asChild disabled={loading || isProcessing}>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>

              <div className="mt-4 p-3 bg-muted/50 rounded-md">
                <div className="flex items-center text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>
                    Your resume will be processed securely and used only for generating your cover letter and analysis.
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}