import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data for home content
    const homeContent = {
      id: 1,
      title: 'Welcome to LDS Lab',
      subtitle: 'Leading Innovation in Research',
      description: 'Our laboratory focuses on cutting-edge research and development, fostering innovation and academic excellence. We are committed to advancing knowledge through collaborative research and meaningful contributions to the scientific community.',
      hero_image: null // You can add an image URL here later
    }

    return NextResponse.json(homeContent)
  } catch (error) {
    console.error('Error in /api/home:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}