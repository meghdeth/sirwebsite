import { NextResponse } from 'next/server'
import { getNews, addNews } from '../../../../lib/database.js'

// GET - Fetch all news
export async function GET() {
  try {
    const news = await getNews()
    return NextResponse.json({ success: true, news })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST - Add new news
export async function POST(request) {
  try {
    const body = await request.json()
    const { year, title, content, link } = body
    
    // Validate required fields
    if (!year || !title || !content) {
      return NextResponse.json({
        success: false,
        error: 'Year, title, and content are required'
      }, { status: 400 })
    }
    
    const newsData = { year, title, content, link: link || null }
    const newNews = await addNews(newsData)
    
    return NextResponse.json({ success: true, news: newNews })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}