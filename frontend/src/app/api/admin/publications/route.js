import { NextResponse } from 'next/server'
import { getPublications, addPublication } from '../../../../lib/database.js'

// GET - Fetch all publications
export async function GET() {
  try {
    const publications = await getPublications()
    return NextResponse.json({ success: true, publications })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST - Add new publication
export async function POST(request) {
  try {
    const body = await request.json()
    const { title, authors, journal, year, volume, pages, doi } = body
    
    // Validate required fields
    if (!title || !authors || !journal || !year || !doi) {
      return NextResponse.json({
        success: false,
        error: 'Title, authors, journal, year, and DOI are required'
      }, { status: 400 })
    }
    
    const publicationData = {
      title,
      authors,
      journal,
      year,
      volume: volume || null,
      pages: pages || null,
      doi
    }
    
    const newPublication = await addPublication(publicationData)
    
    return NextResponse.json({ success: true, publication: newPublication })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}