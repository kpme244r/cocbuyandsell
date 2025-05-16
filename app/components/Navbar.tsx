import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            COC Market
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/listings" className="text-gray-600 hover:text-primary">
              Browse
            </Link>
            <Link href="/listings/create" className="text-gray-600 hover:text-primary">
              Sell
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-600 hover:text-primary">
              Login
            </Link>
            <Link href="/auth/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 