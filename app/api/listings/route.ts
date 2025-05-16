import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        seller: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(listings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const listing = await prisma.listing.create({
      data: {
        title: data.title,
        description: data.description,
        townHallLevel: parseInt(data.townHallLevel),
        price: parseFloat(data.price),
        heroLevels: data.heroLevels,
        status: 'available',
        sellerId: data.sellerId, // This should come from the authenticated user
        images: data.images || [],
      },
    })
    return NextResponse.json(listing)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    )
  }
} 