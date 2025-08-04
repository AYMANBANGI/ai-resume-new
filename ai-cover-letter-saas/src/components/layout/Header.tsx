'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, FileText, User, LogOut, Settings } from 'lucide-react'
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
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">AI Career Assistant</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          {user && (
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {user.isPro ? 'Pro' : `${3 - user.freeUsageCount} free left`}
                  </span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/profile">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </Button>
                  <Button onClick={handleLogout} variant="ghost" size="sm">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/auth">Sign In</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/auth">Get Started</Link>
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
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            
            <div className="pt-3 border-t space-y-3">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="text-xs text-muted-foreground">
                        {user.isPro ? 'Pro Account' : `${3 - user.freeUsageCount} free uses left`}
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
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
                        className="w-full justify-start"
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
                        className="w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/auth">Sign In</Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/auth">Get Started</Link>
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