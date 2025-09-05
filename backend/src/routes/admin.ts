import express from "express"
import { authenticateAdmin } from "../middleware/auth"
import {
  getMessages,
  updateMessage,
  deleteMessage,
  getNews,
  createNews,
  updateNews,
  deleteNews,
  getPublications,
  createPublication,
  updatePublication,
  deletePublication,
  getTeachingCourses,
  createTeachingCourse,
  updateTeachingCourse,
  deleteTeachingCourse,
  getResearchProjects,
  createResearchProject,
  updateResearchProject,
  deleteResearchProject,
  getGallery,
  createGallery,
  updateGallery,
  deleteGallery,
  uploadGalleryImages,
  uploadResearchImage,
  updateBulkOrder
} from "../controllers/adminController"
import {
  getGroupMembers,
  createGroupMember,
  updateGroupMember,
  deleteGroupMember,
  uploadGroupImage
} from "../controllers/groupController"
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
  getAwards,
  createAward,
  updateAward,
  deleteAward
} from "../controllers/piController"
import { upload } from "../config/cloudinary"

const router = express.Router()

// Apply authentication middleware to all admin routes
router.use(authenticateAdmin)

// Messages routes
router.get("/messages", getMessages)
router.patch("/messages", updateMessage)
router.delete("/messages", deleteMessage)

// News routes
router.get("/news", getNews)
router.post("/news", createNews)
router.put("/news", updateNews)
router.delete("/news", deleteNews)

// Publications routes
router.get("/publications", getPublications)
router.post("/publications", createPublication)
router.put("/publications", updatePublication)
router.delete("/publications", deletePublication)

// Teaching routes
router.get("/teaching", getTeachingCourses)
router.post("/teaching", createTeachingCourse)
router.put("/teaching", updateTeachingCourse)
router.delete("/teaching", deleteTeachingCourse)

// Research routes
router.get("/research", getResearchProjects)
router.post("/research", createResearchProject)
router.put("/research", updateResearchProject)
router.delete("/research", deleteResearchProject)
router.post("/research/upload", upload.single('image'), uploadResearchImage)

// Gallery routes
router.get("/gallery", getGallery)
router.post("/gallery", createGallery)
router.put("/gallery", updateGallery)
router.delete("/gallery", deleteGallery)
router.post("/gallery/upload", upload.array('images', 10), uploadGalleryImages)

// Group management routes
router.get('/group', getGroupMembers)
router.post('/group', createGroupMember)
router.put('/group/:id', updateGroupMember)
router.delete('/group/:id', deleteGroupMember)
router.post('/group/upload', uploadGroupImage)

// PI management routes
router.get('/pi/education', getEducation)
router.post('/pi/education', createEducation)
router.put('/pi/education/:id', updateEducation)
router.delete('/pi/education/:id', deleteEducation)

router.get('/pi/experience', getExperience)
router.post('/pi/experience', createExperience)
router.put('/pi/experience/:id', updateExperience)
router.delete('/pi/experience/:id', deleteExperience)

router.get('/pi/awards', getAwards)
router.post('/pi/awards', createAward)
router.put('/pi/awards/:id', updateAward)
router.delete('/pi/awards/:id', deleteAward)

// Bulk order update route
router.put("/bulk/order/:table", authenticateAdmin, async (req: any, res: express.Response) => {
  try {
    const { table } = req.params;
    const { items } = req.body; // items: [{ id, order_index }]
    
    // Whitelist allowed tables for security (including patents and conferences)
    const allowedTables = ['news', 'publications', 'patents', 'conferences', 'gallery_posts', 'teaching_courses', 'group_members', 'research_content', 'recent_updates', 'at_a_glance_photos', 'pi_education', 'pi_experience', 'pi_awards'];
    
    if (!allowedTables.includes(table)) {
      return res.status(400).json({ success: false, error: 'Invalid table' });
    }

    const { getDatabase } = await import("../models/database");
    const db = getDatabase();
    
    for (const item of items) {
      await db.run(`UPDATE ${table} SET order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, [item.order_index, item.id]);
    }
    
    res.json({ success: true, message: 'Order updated successfully' });
  } catch (error) {
    console.error('Bulk order update error:', error);
    res.status(500).json({ success: false, error: 'Failed to update order' });
  }
});

export default router
