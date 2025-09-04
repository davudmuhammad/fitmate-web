import Link from 'next/link'

// FitMate Landing Page - Sports Partner App - FINAL DEPLOYMENT
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6"> FitMate LIVE! </h1>
          <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
             DEPLOYMENT SUCCESSFUL - FITMATE IS LIVE!
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Find your perfect training partner and achieve your fitness goals together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
