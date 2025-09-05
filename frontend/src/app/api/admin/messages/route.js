import { NextResponse } from 'next/server'
import { getMessages, markMessageAsRead, deleteMessage, addMessage } from '../../../../lib/database.js'

// GET - Fetch all messages
export async function GET() {
  try {
    const messages = await getMessages()
    return NextResponse.json({ success: true, messages })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST - Add new message (from contact form)
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, title, message, fileName, filePath } = body
    
    const messageData = {
      name,
      email,
      subject: title,
      message,
      file_name: fileName || null,
      file_path: filePath || null
    }
    
    const newMessage = await addMessage(messageData)
    return NextResponse.json({ success: true, message: newMessage })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PATCH - Mark message as read
export async function PATCH(request) {
  try {
    const body = await request.json()
    const { messageId, action } = body
    
    if (action === 'mark_read') {
      const message = await markMessageAsRead(messageId)
      return NextResponse.json({ success: true, message })
    }
    
    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// DELETE - Delete message
export async function DELETE(request) {
  try {
    const body = await request.json()
    const { messageId } = body
    
    const deleted = await deleteMessage(messageId)
    if (deleted) {
      return NextResponse.json({ success: true, message: 'Message deleted successfully' })
    } else {
      return NextResponse.json({ success: false, error: 'Message not found' }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}