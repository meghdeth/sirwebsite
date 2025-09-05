import { Request, Response } from 'express'
import { getDatabase } from '../models/database'
import cloudinary from '../config/cloudinary'
import { UploadedFile } from 'express-fileupload'

// Type for express-fileupload files
type ExpressFileUploadFiles = {
  [fieldname: string]: UploadedFile | UploadedFile[];
} | UploadedFile[];

// Get all group members by section
export const getGroupMembers = async (req: Request, res: Response) => {
  try {
    const db = getDatabase()
    const { section } = req.query
    
    let query = 'SELECT * FROM group_members WHERE is_active = 1'
    const params: any[] = []
    
    if (section && ['Team', 'Alumni'].includes(section as string)) {
      query += ' AND section = ?'
      params.push(section)
    }
    
    query += ' ORDER BY order_index ASC, created_at DESC'
    
    const members = await db.all(query, params)
    res.json(members)
  } catch (error) {
    console.error('Error fetching group members:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Get single group member
export const getGroupMember = async (req: Request, res: Response) => {
  try {
    const db = getDatabase()
    const { id } = req.params
    
    const member = await db.get('SELECT * FROM group_members WHERE id = ?', [id])
    
    if (!member) {
      return res.status(404).json({ error: 'Group member not found' })
    }
    
    res.json(member)
  } catch (error) {
    console.error('Error fetching group member:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Create new group member
export const createGroupMember = async (req: Request, res: Response) => {
  try {
    const db = getDatabase()
    const { name, position, section, bio, email, linkedin_url, order_index } = req.body
    
    // Validate section
    if (!['Principle', 'Team', 'Alumni'].includes(section)) {
      return res.status(400).json({ error: 'Invalid section. Must be Principle, Team, or Alumni' })
    }
    
    let image_url = null
    
    // Handle image upload if present - use type assertion
    const files = req.files as any
    if (files && !Array.isArray(files) && files.image) {
      const imageFile = files.image as UploadedFile
      
      try {
        const result = await cloudinary.uploader.upload(imageFile.tempFilePath, {
          folder: 'group_members',
          format: 'avif',
          quality: 'auto',
          fetch_format: 'auto'
        })
        image_url = result.secure_url
      } catch (uploadError) {
        console.error('Image upload error:', uploadError)
        return res.status(500).json({ error: 'Failed to upload image' })
      }
    }
    
    const result = await db.run(
      `INSERT INTO group_members (name, position, section, bio, image_url, email, linkedin_url, order_index) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, position, section, bio, image_url, email, linkedin_url, order_index || 0]
    )
    
    const newMember = await db.get('SELECT * FROM group_members WHERE id = ?', [result.lastID])
    res.status(201).json(newMember)
  } catch (error) {
    console.error('Error creating group member:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Update group member
export const updateGroupMember = async (req: Request, res: Response) => {
  try {
    const db = getDatabase()
    const { id } = req.params
    const { name, position, section, bio, email, linkedin_url, order_index, is_active } = req.body
    
    // Check if member exists
    const existingMember = await db.get('SELECT * FROM group_members WHERE id = ?', [id])
    if (!existingMember) {
      return res.status(404).json({ error: 'Group member not found' })
    }
    
    // Validate section if provided
    if (section && !['Principle', 'Team', 'Alumni'].includes(section)) {
      return res.status(400).json({ error: 'Invalid section. Must be Principle, Team, or Alumni' })
    }
    
    let image_url = existingMember.image_url
    
    // Handle image upload if present - use type assertion
    const files = req.files as any
    if (files && !Array.isArray(files) && files.image) {
      const imageFile = files.image as UploadedFile
      
      try {
        // Delete old image if exists
        if (existingMember.image_url) {
          const publicId = existingMember.image_url.split('/').pop()?.split('.')[0]
          if (publicId) {
            await cloudinary.uploader.destroy(`group_members/${publicId}`)
          }
        }
        
        const result = await cloudinary.uploader.upload(imageFile.tempFilePath, {
          folder: 'group_members',
          format: 'avif',
          quality: 'auto',
          fetch_format: 'auto'
        })
        image_url = result.secure_url
      } catch (uploadError) {
        console.error('Image upload error:', uploadError)
        return res.status(500).json({ error: 'Failed to upload image' })
      }
    }
    
    await db.run(
      `UPDATE group_members 
       SET name = ?, position = ?, section = ?, bio = ?, image_url = ?, email = ?, linkedin_url = ?, order_index = ?, is_active = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [
        name || existingMember.name,
        position || existingMember.position,
        section || existingMember.section,
        bio !== undefined ? bio : existingMember.bio,
        image_url,
        email !== undefined ? email : existingMember.email,
        linkedin_url !== undefined ? linkedin_url : existingMember.linkedin_url,
        order_index !== undefined ? order_index : existingMember.order_index,
        is_active !== undefined ? is_active : existingMember.is_active,
        id
      ]
    )
    
    const updatedMember = await db.get('SELECT * FROM group_members WHERE id = ?', [id])
    res.json(updatedMember)
  } catch (error) {
    console.error('Error updating group member:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Delete group member
export const deleteGroupMember = async (req: Request, res: Response) => {
  try {
    const db = getDatabase()
    const { id } = req.params
    
    // Check if member exists
    const existingMember = await db.get('SELECT * FROM group_members WHERE id = ?', [id])
    if (!existingMember) {
      return res.status(404).json({ error: 'Group member not found' })
    }
    
    // Delete image from Cloudinary if exists
    if (existingMember.image_url) {
      try {
        const publicId = existingMember.image_url.split('/').pop()?.split('.')[0]
        if (publicId) {
          await cloudinary.uploader.destroy(`group_members/${publicId}`)
        }
      } catch (deleteError) {
        console.error('Error deleting image from Cloudinary:', deleteError)
      }
    }
    
    await db.run('DELETE FROM group_members WHERE id = ?', [id])
    res.json({ message: 'Group member deleted successfully' })
  } catch (error) {
    console.error('Error deleting group member:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Upload image for group member
export const uploadGroupImage = async (req: Request, res: Response) => {
  try {
    const files = req.files as any
    if (!files || Array.isArray(files) || !files.image) {
      return res.status(400).json({ error: 'No image file provided' })
    }
    
    const imageFile = files.image as UploadedFile
    
    const result = await cloudinary.uploader.upload(imageFile.tempFilePath, {
      folder: 'group_members',
      format: 'avif',
      quality: 'auto',
      fetch_format: 'auto'
    })
    
    res.json({ image_url: result.secure_url })
  } catch (error) {
    console.error('Error uploading image:', error)
    res.status(500).json({ error: 'Failed to upload image' })
  }
}