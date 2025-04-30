import express from 'express';
import {
  getAllIPOs,
  createIPO,
  updateIPO,
  deleteIPO
} from '../controllers/ipoController.js';

const router = express.Router();

router.get('/', getAllIPOs);
router.post('/', createIPO);
router.put('/:id', updateIPO);
router.delete('/:id', deleteIPO);

export default router;