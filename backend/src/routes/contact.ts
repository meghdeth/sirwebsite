import express from "express"
import { submitContactForm, uploadMiddleware } from "../controllers/contactController"
import { getDatabase } from "../models/database"

const router = express.Router()

router.post("/submit", uploadMiddleware, submitContactForm)

router.get("/messages", async (req, res) => {
  try {
    const db = getDatabase()
    const messages = await db.all(`
      SELECT id, name, email, subject, message, file_name, file_path, read_status, created_at
      FROM messages 
      ORDER BY created_at DESC
    `)
    res.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.put("/messages/:id/read", async (req, res) => {
  try {
    const { id } = req.params
    const db = getDatabase()
    
    await db.run('UPDATE messages SET read_status = TRUE WHERE id = ?', [id])
    res.json({ message: 'Message marked as read' })
  } catch (error) {
    console.error('Error updating message:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete("/messages/:id", async (req, res) => {
  try {
    const { id } = req.params
    const db = getDatabase()
    
    await db.run('DELETE FROM messages WHERE id = ?', [id])
    res.json({ message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Error deleting message:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get("/messages/:id", async (req, res) => {
  try {
    const { id } = req.params
    const db = getDatabase()
    
    const message = await db.get('SELECT * FROM messages WHERE id = ?', [id])
    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }
    
    res.json(message)
  } catch (error) {
    console.error('Error fetching message:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
