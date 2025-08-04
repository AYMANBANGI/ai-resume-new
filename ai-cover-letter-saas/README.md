# AI Career Assistant - Cover Letter & Resume SaaS

A comprehensive AI-powered SaaS platform for job seekers to create professional cover letters, analyze resumes, and generate job application emails.

## 🚀 Features

### 🔐 User Authentication
- Firebase-based secure login/signup
- Google OAuth integration
- Guest users can try with 3 free generations
- Referral system with bonus tracking

### 📤 File Upload & Processing
- Support for PDF, DOC, and DOCX resume files
- Drag-and-drop file upload interface
- Secure file processing and text extraction

### 🤖 AI-Powered Tools

#### Cover Letter Generator
- Professional, ATS-friendly cover letters
- Multiple writing tones (professional, enthusiastic, concise)
- Support for multiple languages (English, Spanish, French, German, Italian)
- Job description integration for tailored content

#### Email Generator
- Job application emails
- Follow-up emails
- Thank-you notes after interviews
- Personalized content based on job details

#### Resume Analyzer
- Resume scoring (0-100) with detailed feedback
- ATS compatibility analysis
- Keyword optimization suggestions
- Job description comparison
- Improvement recommendations

### 💰 Subscription System
- **Free Tier**: 3 free generations of each tool
- **Pro Tier ($19/month)**: 
  - Unlimited generations
  - Resume templates
  - PDF exports
  - History tracking
  - Priority support

### 🎨 Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Dark/light mode support
- Smooth animations and transitions
- Clean, minimalistic interface inspired by Notion/Grammarly

### 📊 Additional Features
- One-click copy to clipboard
- History tracking for Pro users
- Referral program with tracking
- Admin dashboard for user management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Storage**: Firebase Storage
- **Payments**: Stripe (configured but needs API keys)
- **UI Components**: Radix UI, Lucide React
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai-cover-letter-saas
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Copy the `.env.local` file and update with your credentials:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# OpenAI API (for production AI functionality)
OPENAI_API_KEY=sk-your_openai_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Create a Firestore database
4. Enable Storage for file uploads
5. Copy your config values to `.env.local`

### Stripe Setup (Optional for payments)
1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable and secret keys
3. Set up webhooks for subscription management
4. Update the `.env.local` file with your keys

### AI Integration
The application currently uses mock AI services. For production:
1. Get an OpenAI API key
2. Implement actual API calls in `src/lib/ai-service.ts`
3. Replace mock functions with real OpenAI integration

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Main application pages
│   ├── pricing/        # Pricing page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── auth/          # Authentication components
│   ├── layout/        # Layout components
│   ├── ui/            # UI components
│   └── upload/        # File upload components
├── contexts/          # React contexts
├── lib/               # Utility libraries
├── types/             # TypeScript type definitions
└── ...
```

## 🎯 Key Features Implementation

### Authentication Flow
- Users can sign up/login with email or Google
- Guest users get 3 free generations
- Pro users get unlimited access
- Referral system tracks bonuses

### AI Content Generation
- Cover letters: Personalized based on resume and job details
- Emails: Different types with appropriate templates
- Resume analysis: Scoring with improvement suggestions

### File Processing
- Drag-and-drop upload interface
- File validation (type, size)
- Text extraction from documents
- Secure storage handling

### Subscription Management
- Free tier with usage limits
- Pro tier with unlimited access
- Usage tracking and enforcement
- Upgrade prompts and flows

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔒 Security

- Firebase provides enterprise-grade security
- Environment variables for sensitive data
- Secure file upload and processing
- Input validation and sanitization
- CSRF protection

## 📊 Analytics & Monitoring

The application includes tracking for:
- User registrations and authentication
- Feature usage and generation counts
- Referral system performance
- Subscription conversions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation
- Create an issue on GitHub
- Contact support (for Pro users)

## 🔮 Future Enhancements

- Advanced resume templates
- Interview preparation tools
- Job matching algorithms
- LinkedIn integration
- Mobile app versions
- API access for developers

---

Built with ❤️ for job seekers worldwide
