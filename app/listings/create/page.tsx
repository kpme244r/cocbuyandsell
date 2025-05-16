'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateListingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    townHallLevel: '',
    price: '',
    images: [] as File[],
    heroLevels: {
      barbarianKing: '',
      archerQueen: '',
      grandWarden: '',
      royalChampion: ''
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    // Redirect to listings page after submission
    router.push('/listings')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name.startsWith('hero.')) {
      const heroName = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        heroLevels: {
          ...prev.heroLevels,
          [heroName]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Listing</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field"
              rows={4}
              required
            />
          </div>

          {/* Account Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Town Hall Level
              </label>
              <input
                type="number"
                name="townHallLevel"
                value={formData.townHallLevel}
                onChange={handleChange}
                min="1"
                max="15"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="input-field"
                required
              />
            </div>
          </div>

          {/* Hero Levels */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hero Levels</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Barbarian King
                </label>
                <input
                  type="number"
                  name="hero.barbarianKing"
                  value={formData.heroLevels.barbarianKing}
                  onChange={handleChange}
                  min="0"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Archer Queen
                </label>
                <input
                  type="number"
                  name="hero.archerQueen"
                  value={formData.heroLevels.archerQueen}
                  onChange={handleChange}
                  min="0"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grand Warden
                </label>
                <input
                  type="number"
                  name="hero.grandWarden"
                  value={formData.heroLevels.grandWarden}
                  onChange={handleChange}
                  min="0"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Royal Champion
                </label>
                <input
                  type="number"
                  name="hero.royalChampion"
                  value={formData.heroLevels.royalChampion}
                  onChange={handleChange}
                  min="0"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Screenshots
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files || [])
                setFormData(prev => ({
                  ...prev,
                  images: files
                }))
              }}
              className="input-field"
            />
            <p className="mt-2 text-sm text-gray-500">
              Upload screenshots of your village, troops, and achievements
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Create Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  )
} 