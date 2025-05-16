import Image from 'next/image'
import Link from 'next/link'

interface ListingCardProps {
  id: string
  title: string
  description: string
  townHallLevel: number
  price: number
  imageUrl: string
  status: string
}

export default function ListingCard({
  id,
  title,
  description,
  townHallLevel,
  price,
  imageUrl,
  status
}: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl || '/placeholder.png'}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`
            px-2 py-1 rounded-full text-sm font-semibold
            ${status === 'available' ? 'bg-green-500 text-white' : 
              status === 'pending' ? 'bg-yellow-500 text-white' : 
              'bg-red-500 text-white'}
          `}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            TH Level: {townHallLevel}
          </div>
          <div className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </div>
        </div>
        
        <Link 
          href={`/listings/${id}`}
          className="block w-full text-center btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  )
} 