import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Buy & Sell Clash of Clans Accounts
            </h1>
            <p className="text-xl mb-8">
              The most trusted marketplace for COC account trading
            </p>
            <div className="space-x-4">
              <Link href="/listings" className="btn-secondary">
                Browse Accounts
              </Link>
              <Link href="/listings/create" className="btn-primary">
                Sell Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Secure Trading</h3>
              <p className="text-gray-600">
                Our platform ensures safe transactions between buyers and sellers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Verified Accounts</h3>
              <p className="text-gray-600">
                All accounts are verified before listing
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
              <p className="text-gray-600">
                Chat directly with sellers to get all the information you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied users trading COC accounts safely
          </p>
          <Link href="/auth/register" className="btn-primary">
            Create Account
          </Link>
        </div>
      </section>
    </div>
  )
} 