import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => false
  )
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export function calculateResumeScore(resumeText: string, jobDescription?: string): number {
  // Simple scoring algorithm - in production, this would use AI
  let score = 50; // Base score
  
  // Check for keywords
  const keywords = ['experience', 'skills', 'education', 'work', 'project', 'achievement'];
  keywords.forEach(keyword => {
    if (resumeText.toLowerCase().includes(keyword)) score += 5;
  });
  
  // Check length
  if (resumeText.length > 500) score += 10;
  if (resumeText.length > 1000) score += 10;
  
  // Check for contact information
  if (resumeText.includes('@')) score += 5; // Email
  if (/\d{3}[-.]?\d{3}[-.]?\d{4}/.test(resumeText)) score += 5; // Phone
  
  // If job description provided, check for matching keywords
  if (jobDescription) {
    const jobKeywords = jobDescription.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const resumeKeywords = resumeText.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const matches = jobKeywords.filter(keyword => resumeKeywords.includes(keyword));
    score += Math.min(matches.length * 2, 20);
  }
  
  return Math.min(score, 100);
}