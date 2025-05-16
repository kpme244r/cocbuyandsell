'use client'

import ListingCard from '../components/ListingCard'

// This would normally fetch from your database
const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Max TH14 Account',
    description: 'Fully maxed Town Hall 14 with max heroes and troops. Perfect for competitive play.',
    townHallLevel: 14,
    price: 299.99,
    imageUrl: '/placeholder.png',
    status: 'available'
  },
  {
    id: '2',
    title: 'TH13 Semi-Maxed',
    description: 'Town Hall 13 with most defenses maxed. Great value for progression.',
    townHallLevel: 13,
    price: 199.99,
    imageUrl: '/placeholder.png',
    status: 'available'
  }
]

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Available Accounts</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Find your perfect Clash of Clans account
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_LISTINGS.map((listing) => (
          <ListingCard
            key={listing.id}
            {...listing}
          />
        ))}
      </div>
    </div>
  )
} 