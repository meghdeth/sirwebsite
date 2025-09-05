import express from 'express'
import {
  getGroupMembers,
  getGroupMember,
  createGroupMember,
  updateGroupMember,
  deleteGroupMember,
  uploadGroupImage
} from '../controllers/groupController'
import { authenticateAdmin } from '../middleware/auth'
import multer from 'multer'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

// Public routes
router.get('/', getGroupMembers)
router.get('/:id', getGroupMember)

// Admin routes (protected)
router.post('/', authenticateAdmin, createGroupMember)
router.put('/:id', authenticateAdmin, updateGroupMember)
router.delete('/:id', authenticateAdmin, deleteGroupMember)
router.post('/upload', authenticateAdmin, upload.single('image'), uploadGroupImage)

export default router