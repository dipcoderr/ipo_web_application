import express from 'express';
import {
  getAllDocuments,
  createDocument,
  updateDocument,
  deleteDocument
} from '../controllers/documentController.js';

const router = express.Router();

router.get('/', getAllDocuments);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

export default router;
