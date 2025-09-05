import { NextResponse } from 'next/server'
import { addMessage } from '../../../lib/database.js'

// POST - Handle contact form submission
export async function POST(request) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const file = formData.get('file')
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        error: 'All required fields must be filled'
      }, { status: 400 })
    }
    
    let fileName = null
    let filePath = null
    
    // Handle file upload if present
    if (file && file.size > 0) {
      fileName = file.name
      // In production, you would save the file to storage
      filePath = `/uploads/${fileName}`
    }
    
    const messageData = {
      name,
      email,
      subject: subject,
      message,
      file_name: fileName,
      file_path: filePath
    }
    
    const newMessage = await addMessage(messageData)
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data: newMessage
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}