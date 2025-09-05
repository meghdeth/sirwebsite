import { Request, Response } from 'express'
import { getDatabase } from '../models/database'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads')
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now()
    const ext = path.extname(file.originalname)
    cb(null, `${timestamp}${ext}`)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error('Invalid file type'))
    }
  }
})

export const uploadMiddleware = upload.single('file')

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body
    const file = req.file

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      })
    }

    const db = getDatabase()
    
    const result = await db.run(
      `INSERT INTO messages (name, email, subject, message, file_name, file_path) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      name, email, subject, message, 
      file ? file.originalname : null,
      file ? file.filename : null
    )

    res.json({ 
      success: true, 
      message: 'Message sent successfully!',
      id: result.lastID
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message' 
    })
  }
}