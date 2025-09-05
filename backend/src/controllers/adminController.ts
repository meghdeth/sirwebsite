import { Response } from 'express'
import { getDatabase } from '../models/database'
import { AuthRequest } from '../middleware/auth'
import { uploadToCloudinary } from '../config/cloudinary'

// Messages Controllers
export const getMessages = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const messages = await db.all(`
      SELECT id, name, email, subject, message, file_name, read_status, created_at 
      FROM messages 
      ORDER BY created_at DESC
    `)

    res.json({ success: true, messages })
  } catch (error) {
    console.error('Get messages error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch messages' })
  }
}

export const updateMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { messageId, action } = req.body
    const db = getDatabase()

    if (action === 'mark_read') {
      await db.run('UPDATE messages SET read_status = TRUE WHERE id = ?', messageId)
      res.json({ success: true, message: 'Message marked as read' })
    } else {
      res.status(400).json({ success: false, error: 'Invalid action' })
    }
  } catch (error) {
    console.error('Update message error:', error)
    res.status(500).json({ success: false, error: 'Failed to update message' })
  }
}

export const deleteMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { messageId } = req.body
    const db = getDatabase()

    await db.run('DELETE FROM messages WHERE id = ?', messageId)
    res.json({ success: true, message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Delete message error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete message' })
  }
}

// News Controllers
export const getNews = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const news = await db.all(`
      SELECT id, year, title, content, link, order_index, created_at, updated_at 
      FROM news 
      ORDER BY order_index ASC, year DESC, created_at DESC
    `)

    res.json({ success: true, news })
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch news' })
  }
}

export const createNews = async (req: AuthRequest, res: Response) => {
  try {
    const { year, title, content, link, order_index } = req.body

    if (!year || !title || !content) {
      return res.status(400).json({ 
        success: false, 
        error: 'Year, title, and content are required' 
      })
    }

    const db = getDatabase()
    const result = await db.run(
      `INSERT INTO news (year, title, content, link, order_index) VALUES (?, ?, ?, ?, ?)`,
      year, title, content, link || null, order_index || 0
    )

    const newNews = await db.get('SELECT * FROM news WHERE id = ?', result.lastID)

    res.json({ success: true, news: newNews })
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ success: false, error: 'Failed to create news' })
  }
}

export const updateNews = async (req: AuthRequest, res: Response) => {
  try {
    const { id, year, title, content, link, order_index } = req.body

    if (!id || !year || !title || !content) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID, year, title, and content are required' 
      })
    }

    const db = getDatabase()
    await db.run(
      `UPDATE news SET year = ?, title = ?, content = ?, link = ?, order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      year, title, content, link || null, order_index || 0, id
    )

    const updatedNews = await db.get('SELECT * FROM news WHERE id = ?', id)

    res.json({ success: true, news: updatedNews })
  } catch (error) {
    console.error('Update news error:', error)
    res.status(500).json({ success: false, error: 'Failed to update news' })
  }
}

export const deleteNews = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.body
    const db = getDatabase()

    await db.run('DELETE FROM news WHERE id = ?', id)
    res.json({ success: true, message: 'News deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete news' })
  }
}

// Publications Controllers
export const getPublications = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const publications = await db.all(`
      SELECT id, title, authors, journal, volume, pages, year, doi, order_index, created_at, updated_at 
      FROM publications 
      ORDER BY order_index ASC, year DESC, created_at DESC
    `)

    res.json({ success: true, publications })
  } catch (error) {
    console.error('Get publications error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch publications' })
  }
}

export const createPublication = async (req: AuthRequest, res: Response) => {
  try {
    const { title, authors, journal, volume, pages, year, doi } = req.body

    if (!title || !authors || !journal || !year || !doi) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title, authors, journal, year, and DOI are required' 
      })
    }

    const db = getDatabase()
    const result = await db.run(
      `INSERT INTO publications (title, authors, journal, volume, pages, year, doi) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      title, authors, journal, volume || null, pages || null, year, doi
    )

    const newPublication = await db.get('SELECT * FROM publications WHERE id = ?', result.lastID)

    res.json({ success: true, publication: newPublication })
  } catch (error) {
    console.error('Create publication error:', error)
    res.status(500).json({ success: false, error: 'Failed to create publication' })
  }
}

export const updatePublication = async (req: AuthRequest, res: Response) => {
  try {
    const { id, title, authors, journal, volume, pages, year, doi, order_index } = req.body

    if (!id || !title || !authors || !journal || !year || !doi) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID, title, authors, journal, year, and DOI are required' 
      })
    }

    const db = getDatabase()
    await db.run(
      `UPDATE publications SET title = ?, authors = ?, journal = ?, volume = ?, pages = ?, year = ?, doi = ?, order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      title, authors, journal, volume || null, pages || null, year, doi, order_index || 0, id
    )

    const updatedPublication = await db.get('SELECT * FROM publications WHERE id = ?', id)

    res.json({ success: true, publication: updatedPublication })
  } catch (error) {
    console.error('Update publication error:', error)
    res.status(500).json({ success: false, error: 'Failed to update publication' })
  }
}

export const deletePublication = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.body
    const db = getDatabase()

    await db.run('DELETE FROM publications WHERE id = ?', id)
    res.json({ success: true, message: 'Publication deleted successfully' })
  } catch (error) {
    console.error('Delete publication error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete publication' })
  }
}

// Gallery Controllers
export const getGallery = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const gallery = await db.all(`
      SELECT id, title, description, images, is_active, created_at, updated_at 
      FROM gallery_posts 
      ORDER BY created_at DESC
    `)

    // Parse images JSON for each post
    const parsedGallery = gallery.map(post => ({
      ...post,
      images: JSON.parse(post.images || '[]')
    }))

    res.json({ success: true, gallery: parsedGallery })
  } catch (error) {
    console.error('Get gallery error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch gallery posts' })
  }
}

export const createGallery = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, images } = req.body

    if (!title || !images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and at least one image are required' 
      })
    }

    const db = getDatabase()
    const result = await db.run(
      `INSERT INTO gallery_posts (title, description, images) VALUES (?, ?, ?)`,
      title, description || null, JSON.stringify(images)
    )

    const newGallery = await db.get('SELECT * FROM gallery_posts WHERE id = ?', result.lastID)
    if (newGallery) {
      newGallery.images = JSON.parse(newGallery.images)
    }

    res.json({ success: true, gallery: newGallery })
  } catch (error) {
    console.error('Create gallery error:', error)
    res.status(500).json({ success: false, error: 'Failed to create gallery post' })
  }
}

export const updateGallery = async (req: AuthRequest, res: Response) => {
  try {
    const { id, title, description, images, is_active } = req.body

    if (!id || !title || !images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID, title, and at least one image are required' 
      })
    }

    const db = getDatabase()
    await db.run(
      `UPDATE gallery_posts SET title = ?, description = ?, images = ?, is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      title, description || null, JSON.stringify(images), is_active !== undefined ? is_active : true, id
    )

    const updatedGallery = await db.get('SELECT * FROM gallery_posts WHERE id = ?', id)
    if (updatedGallery) {
      updatedGallery.images = JSON.parse(updatedGallery.images)
    }

    res.json({ success: true, gallery: updatedGallery })
  } catch (error) {
    console.error('Update gallery error:', error)
    res.status(500).json({ success: false, error: 'Failed to update gallery post' })
  }
}

export const deleteGallery = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.body
    const db = getDatabase()

    await db.run('DELETE FROM gallery_posts WHERE id = ?', id)
    res.json({ success: true, message: 'Gallery post deleted successfully' })
  } catch (error) {
    console.error('Delete gallery error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete gallery post' })
  }
}

// Upload images to Cloudinary
export const uploadGalleryImages = async (req: AuthRequest, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[]
    
    if (!files || files.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No files uploaded' 
      })
    }

    // Check if Cloudinary is properly configured
    const hasValidCloudinaryConfig = 
      process.env.CLOUDINARY_CLOUD_NAME && 
      process.env.CLOUDINARY_CLOUD_NAME !== 'your_cloud_name' &&
      process.env.CLOUDINARY_API_KEY && 
      process.env.CLOUDINARY_API_KEY !== 'your_api_key' &&
      process.env.CLOUDINARY_API_SECRET && 
      process.env.CLOUDINARY_API_SECRET !== 'your_api_secret'

    let imageUrls: string[]

    if (hasValidCloudinaryConfig) {
      // Use real Cloudinary upload
      const uploadPromises = files.map(file => uploadToCloudinary(file.buffer, 'gallery'))
      imageUrls = await Promise.all(uploadPromises)
    } else {
      // Use mock placeholder images for demo
      imageUrls = files.map((file, index) => {
        const imageId = Date.now() + index
        return `https://picsum.photos/800/600?random=${imageId}`
      })
      console.log('Using mock images - Configure Cloudinary credentials for real uploads')
    }

    res.json({ 
      success: true, 
      imageUrls,
      message: `${imageUrls.length} images uploaded successfully`
    })
  } catch (error) {
    console.error('Upload images error:', error)
    res.status(500).json({ success: false, error: 'Failed to upload images' })
  }
}

// Teaching Controllers
export const getTeachingCourses = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const courses = await db.all(`
      SELECT id, duration, program_level, year_level, course_type, course_code, course_name, instructor, description, order_index, created_at, updated_at 
      FROM teaching_courses 
      WHERE is_active = 1
      ORDER BY order_index ASC, created_at DESC
    `)

    res.json({ success: true, courses })
  } catch (error) {
    console.error('Get teaching courses error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch teaching courses' })
  }
}

export const createTeachingCourse = async (req: AuthRequest, res: Response) => {
  try {
    const { duration, program_level, year_level, course_type, course_code, course_name, instructor, description } = req.body

    if (!duration || !program_level || !year_level || !course_type || !course_code || !course_name || !instructor) {
      return res.status(400).json({ 
        success: false, 
        error: 'Duration, program level, year level, course type, course code, course name, and instructor are required' 
      })
    }

    const db = getDatabase()
    const result = await db.run(
      `INSERT INTO teaching_courses (duration, program_level, year_level, course_type, course_code, course_name, instructor, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      duration, program_level, year_level, course_type, course_code, course_name, instructor, description || null
    )

    const newCourse = await db.get('SELECT * FROM teaching_courses WHERE id = ?', result.lastID)

    res.json({ success: true, course: newCourse })
  } catch (error) {
    console.error('Create teaching course error:', error)
    res.status(500).json({ success: false, error: 'Failed to create teaching course' })
  }
}

export const updateTeachingCourse = async (req: AuthRequest, res: Response) => {
  try {
    const { id, duration, program_level, year_level, course_type, course_code, course_name, instructor, description } = req.body

    if (!id || !duration || !program_level || !year_level || !course_type || !course_code || !course_name || !instructor) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID, duration, program level, year level, course type, course code, course name, and instructor are required' 
      })
    }

    const db = getDatabase()
    await db.run(
      `UPDATE teaching_courses SET duration = ?, program_level = ?, year_level = ?, course_type = ?, course_code = ?, course_name = ?, instructor = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      duration, program_level, year_level, course_type, course_code, course_name, instructor, description || null, id
    )

    const updatedCourse = await db.get('SELECT * FROM teaching_courses WHERE id = ?', id)

    res.json({ success: true, course: updatedCourse })
  } catch (error) {
    console.error('Update teaching course error:', error)
    res.status(500).json({ success: false, error: 'Failed to update teaching course' })
  }
}

export const deleteTeachingCourse = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.body

    if (!id) {
      return res.status(400).json({ 
        success: false, 
        error: 'Course ID is required' 
      })
    }

    const db = getDatabase()
    await db.run('UPDATE teaching_courses SET is_active = 0 WHERE id = ?', id)

    res.json({ success: true, message: 'Teaching course deleted successfully' })
  } catch (error) {
    console.error('Delete teaching course error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete teaching course' })
  }
}

// Research Controllers
export const getResearchProjects = async (req: AuthRequest, res: Response) => {
  try {
    const db = getDatabase()
    const research = await db.all(`
      SELECT id, title, summary, image, order_index, created_at, updated_at 
      FROM research_content 
      ORDER BY order_index ASC, created_at DESC
    `)

    // Get links for each research project
    for (const project of research) {
      const links = await db.all(
        'SELECT url, name_tag FROM research_links WHERE research_id = ?',
        project.id
      )
      project.links = links
    }

    res.json({ success: true, research })
  } catch (error) {
    console.error('Get research projects error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch research projects' })
  }
}

export const createResearchProject = async (req: AuthRequest, res: Response) => {
  try {
    const { title, summary, image, order_index, links } = req.body

    if (!title || !summary) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and summary are required' 
      })
    }

    const db = getDatabase()
    const result = await db.run(
      `INSERT INTO research_content (title, summary, image, order_index) VALUES (?, ?, ?, ?)`,
      title, summary, image || null, order_index || 0
    )

    const researchId = result.lastID

    // Insert links if provided
    if (links && Array.isArray(links)) {
      for (const link of links) {
        if (link.url && link.name_tag) {
          await db.run(
            'INSERT INTO research_links (research_id, url, name_tag) VALUES (?, ?, ?)',
            researchId, link.url, link.name_tag
          )
        }
      }
    }

    // Get the complete research project with links
    const newResearch = await db.get('SELECT * FROM research_content WHERE id = ?', researchId)
    const researchLinks = await db.all('SELECT url, name_tag FROM research_links WHERE research_id = ?', researchId)
    newResearch.links = researchLinks

    res.json({ success: true, research: newResearch })
  } catch (error) {
    console.error('Create research project error:', error)
    res.status(500).json({ success: false, error: 'Failed to create research project' })
  }
}

export const updateResearchProject = async (req: AuthRequest, res: Response) => {
  try {
    const { id, title, summary, image, order_index, links } = req.body

    if (!id || !title || !summary) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID, title, and summary are required' 
      })
    }

    const db = getDatabase()
    await db.run(
      `UPDATE research_content SET title = ?, summary = ?, image = ?, order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      title, summary, image || null, order_index || 0, id
    )

    // Delete existing links and insert new ones
    await db.run('DELETE FROM research_links WHERE research_id = ?', id)
    
    if (links && Array.isArray(links)) {
      for (const link of links) {
        if (link.url && link.name_tag) {
          await db.run(
            'INSERT INTO research_links (research_id, url, name_tag) VALUES (?, ?, ?)',
            id, link.url, link.name_tag
          )
        }
      }
    }

    // Get the updated research project with links
    const updatedResearch = await db.get('SELECT * FROM research_content WHERE id = ?', id)
    const researchLinks = await db.all('SELECT url, name_tag FROM research_links WHERE research_id = ?', id)
    updatedResearch.links = researchLinks

    res.json({ success: true, research: updatedResearch })
  } catch (error) {
    console.error('Update research project error:', error)
    res.status(500).json({ success: false, error: 'Failed to update research project' })
  }
}

export const deleteResearchProject = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.body

    if (!id) {
      return res.status(400).json({ success: false, error: 'Research project ID is required' })
    }

    const db = getDatabase()
    await db.run('DELETE FROM research_content WHERE id = ?', id)

    res.json({ success: true, message: 'Research project deleted successfully' })
  } catch (error) {
    console.error('Delete research project error:', error)
    res.status(500).json({ success: false, error: 'Failed to delete research project' })
  }
}

// Add research image upload function
export const uploadResearchImage = async (req: AuthRequest, res: Response) => {
  try {
    const file = req.file as Express.Multer.File
    
    if (!file) {
      return res.status(400).json({ 
        success: false, 
        error: 'No file uploaded' 
      })
    }

    // Check if Cloudinary is properly configured
    const hasValidCloudinaryConfig = 
      process.env.CLOUDINARY_CLOUD_NAME && 
      process.env.CLOUDINARY_CLOUD_NAME !== 'your_cloud_name' &&
      process.env.CLOUDINARY_API_KEY && 
      process.env.CLOUDINARY_API_KEY !== 'your_api_key' &&
      process.env.CLOUDINARY_API_SECRET && 
      process.env.CLOUDINARY_API_SECRET !== 'your_api_secret'

    let imageUrl: string

    if (hasValidCloudinaryConfig) {
      // Use real Cloudinary upload
      imageUrl = await uploadToCloudinary(file.buffer, 'research')
    } else {
      // Use mock placeholder image for demo
      const imageId = Date.now()
      imageUrl = `https://picsum.photos/800/600?random=${imageId}`
      console.log('Using mock image - Configure Cloudinary credentials for real uploads')
    }

    res.json({ 
      success: true, 
      imageUrl,
      message: 'Research image uploaded successfully'
    })
  } catch (error) {
    console.error('Upload research image error:', error)
    res.status(500).json({ success: false, error: 'Failed to upload research image' })
  }
}

// Bulk order update function
export const updateBulkOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { tableName, items } = req.body

    if (!tableName || !items || !Array.isArray(items)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Table name and items array are required' 
      })
    }

    // Validate table name for security
    const allowedTables = ['news', 'publications', 'patents', 'conferences', 'teaching_courses', 'gallery_posts', 'research_content', 'recent_updates', 'at_a_glance_photos']
    if (!allowedTables.includes(tableName)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid table name' 
      })
    }

    const db = getDatabase()

    // Update order_index for each item
    for (const item of items) {
      await db.run(
        `UPDATE ${tableName} SET order_index = ? WHERE id = ?`,
        [item.order_index, item.id]
      )
    }

    res.json({ success: true, message: 'Order updated successfully' })
  } catch (error) {
    console.error('Update bulk order error:', error)
    res.status(500).json({ success: false, error: 'Failed to update order' })
  }
}