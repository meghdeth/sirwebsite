import express from 'express';
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
} from '../controllers/piController';

const router = express.Router();

// Education routes
router.get('/education', getEducation);
router.post('/education', createEducation);
router.put('/education/:id', updateEducation);
router.delete('/education/:id', deleteEducation);

// Experience routes
router.get('/experience', getExperience);
router.post('/experience', createExperience);
router.put('/experience/:id', updateExperience);
router.delete('/experience/:id', deleteExperience);

// Awards routes
router.get('/awards', getAwards);
router.post('/awards', createAward);
router.put('/awards/:id', updateAward);
router.delete('/awards/:id', deleteAward);

export default router;