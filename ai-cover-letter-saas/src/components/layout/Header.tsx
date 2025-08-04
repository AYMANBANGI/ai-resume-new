'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, FileText, User, LogOut, Settings, Sparkles } from 'lucide-react'
import { logout } from '@/lib/firebase'
import { toast } from 'react-hot-toast'

export const Header: React.FC = () => {
  const { user, loading } = useAuth()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error('Failed to log out')
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/50 dark:border-purple-900/50 bg-white/80 dark:bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-80">
              <Sparkles className="h-2 w-2 text-white m-0.5" />
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300">
            AI Career Assistant
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/features" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/pricing" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {user && (
            <Link href="/dashboard" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800">
                    <span className="text-xs font-medium text-purple-800 dark:text-purple-200">
                      {user.isPro ? (
                        <div className="flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Pro
                        </div>
                      ) : (
                        `${3 - user.freeUsageCount} free left`
                      )}
                    </span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50">
                    <Link href="/profile">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </Button>
                  <Button onClick={handleLogout} variant="ghost" size="sm" className="rounded-xl hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Button asChild variant="ghost" size="sm" className="rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50">
                    <Link href="/auth">Sign In</Link>
                  </Button>
                  <Button asChild size="sm" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 btn-glow">
                    <Link href="/auth">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-10 w-10 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-100 dark:border-purple-900 bg-white/95 dark:bg-background/95 backdrop-blur-xl">
          <div className="container py-6 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            
            <div className="pt-4 border-t border-purple-100 dark:border-purple-900 space-y-4">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="inline-flex px-3 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800">
                        <span className="text-xs font-medium text-purple-800 dark:text-purple-200">
                          {user.isPro ? (
                            <div className="flex items-center">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Pro Account
                            </div>
                          ) : (
                            `${3 - user.freeUsageCount} free uses left`
                          )}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/profile">
                          <User className="h-4 w-4 mr-2" />
                          Profile
                        </Link>
                      </Button>
                      <Button
                        onClick={() => {
                          handleLogout()
                          setMobileMenuOpen(false)
                        }}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start rounded-xl hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/auth">Sign In</Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/auth">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Get Started
                        </Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}